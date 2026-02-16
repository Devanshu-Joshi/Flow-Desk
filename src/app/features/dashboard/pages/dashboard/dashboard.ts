import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Signal,
    DestroyRef,
    inject,
    signal,
    OnInit,
    computed,
    effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { TaskView } from '@core/models/Task';
import { Observable } from 'rxjs';
import { UserModel } from '@core/models/UserModel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from '@core/services/user/user.service';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { PermissionKey } from '@core/models/PermissionKey';
import { TaskService } from '@core/services/task/task.service';

Chart.register(...registerables);

interface TeamMember {
    id: string;
    name: string;
    isAdmin: boolean;
    isCurrent: boolean;
    assigned: number;
    completed: number;
    inProgress: number;
    incomplete: number;
    initials: string;
    color: string;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard implements OnDestroy, OnInit {

    tasks!: Signal<TaskView[]>;
    users$!: Observable<UserModel[] | null>;
    private destroyRef = inject(DestroyRef);
    users = signal<UserModel[]>([]);
    currentUser!: Signal<UserModel | null>;
    private viewReady = false;
    private lastRenderKey = '';
    private destroyEffect!: any;

    constructor(
        private userService: UserService,
        private taskService: TaskService,
        private userAuth: UserAuth
    ) {
        this.tasks = this.taskService.tasksView;
        this.currentUser = this.userAuth.currentUserSignal;
        this.destroyEffect = this.initEffect;
    }


    ngOnInit(): void {
        this.users$ = this.userService.getUsersByParent();

        this.users$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(users => {
                if (users === null) {
                    return;
                }
                this.users.set(users);
            });
    }

    // ──────────── STATE ────────────
    private permissionKeys: PermissionKey[] = [
        PermissionKey.TASK_VIEW,
        PermissionKey.TASK_CREATE,
        PermissionKey.TASK_EDIT,
        PermissionKey.TASK_DELETE,
        PermissionKey.MANAGE_USER,
    ];
    private permissionLabels = ['View Tasks', 'Create Tasks', 'Edit Tasks', 'Delete Tasks', 'Manage Users'];

    isDark = false;
    doughnutMode: 'status' | 'priority' = 'status';
    polarMode: 'count' | 'percentage' = 'count';
    timelineMode: 'stacked' | 'cumulative' = 'stacked';
    matrixFilters: Record<string, boolean> = { COMPLETED: true, IN_PROGRESS: true, INCOMPLETE: true };
    teamPage = 0;
    teamPageSize = 10;

    private memberColors = [
        '#6366f1', '#06b6d4', '#f59e0b', '#ef4444', '#10b981',
        '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#3b82f6',
        '#84cc16', '#a855f7', '#e11d48', '#0891b2', '#d97706',
    ];

    /* ──────────────── CANVAS REFS ──────────────── */

    @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('polarCanvas') polarCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('matrixCanvas') matrixCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('timelineCanvas') timelineCanvas!: ElementRef<HTMLCanvasElement>;

    private doughnutChart: Chart | null = null;
    private polarChart: Chart | null = null;
    private matrixChart: Chart | null = null;
    private timelineChart: Chart | null = null;

    /* ──────────────── THEME HELPERS ──────────────── */

    get cBg(): string {
        return this.isDark
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100';
    }

    get cCard(): string {
        return this.isDark
            ? 'bg-gradient-to-br from-slate-800/80 to-slate-800/30 backdrop-blur border-slate-700/40 hover:border-slate-600/50'
            : 'bg-white border-gray-200/70 shadow-sm hover:shadow-md hover:border-gray-300/80';
    }

    get cTitle(): string { return this.isDark ? 'text-white' : 'text-gray-900'; }
    get cSub(): string { return this.isDark ? 'text-gray-500' : 'text-gray-500'; }
    get cStatVal(): string { return this.isDark ? 'text-white' : 'text-gray-900'; }
    get cStatSub(): string { return this.isDark ? 'text-gray-600' : 'text-gray-400'; }
    get cDivider(): string { return this.isDark ? 'border-slate-700/40' : 'border-gray-100'; }

    private get gc(): string { return this.isDark ? 'rgba(71,85,105,0.12)' : 'rgba(0,0,0,0.06)'; }
    private get tc(): string { return this.isDark ? '#64748b' : '#9ca3af'; }
    private get lc(): string { return this.isDark ? '#94a3b8' : '#6b7280'; }
    private get centerNumColor(): string { return this.isDark ? '#e2e8f0' : '#1e293b'; }
    private get centerLabelColor(): string { return this.isDark ? '#64748b' : '#9ca3af'; }

    /* ──────────────── CURRENT USER HELPERS ──────────────── */

    get currentUserId(): string {
        return this.currentUser()?.id?.toString() ?? '';
    }

    get currentUserName(): string {
        return this.currentUser()?.name ?? 'User';
    }

    get currentUserEmail(): string {
        return this.currentUser()?.email ?? '';
    }

    get currentUserInitials(): string {
        const name = this.currentUserName;
        return this.getInitials(name);
    }

    get isAdmin(): boolean {
        const user = this.currentUser();
        return user ? user.parentId?.toString() === '-1' : false;
    }

    get currentUserPermissions(): string[] {
        return this.currentUser()?.permissions ?? [];
    }

    /* ──────────────── STAT GETTERS ──────────────── */

    get teamSize(): number {
        const users = this.users();
        const currentUser = users.find(u => u.id?.toString() === this.currentUserId);

        if (!currentUser) return 0;

        // find team root (manager)
        const rootId =
            currentUser.parentId === "-1"
                ? currentUser.id
                : currentUser.parentId;

        const childrenCount = users.filter(u => u.parentId === rootId).length;

        // parent + children
        return childrenCount + 1;
    }

    get myAssignedCount(): number {
        return this.tasks().filter(t => t.assignedTo.includes(this.currentUserId)).length;
    }

    get myCompletedCount(): number {
        return this.tasks().filter(t => t.assignedTo.includes(this.currentUserId) && t.status === 'COMPLETED').length;
    }

    get myInProgressCount(): number {
        return this.tasks().filter(t => t.assignedTo.includes(this.currentUserId) && t.status === 'IN_PROGRESS').length;
    }

    get myIncompleteCount(): number {
        return this.tasks().filter(t => t.assignedTo.includes(this.currentUserId) && t.status === 'INCOMPLETE').length;
    }

    get myCompletionPct(): string {
        if (this.myAssignedCount === 0) return '0.0';
        return ((this.myCompletedCount / this.myAssignedCount) * 100).toFixed(1);
    }

    // Overall stats (all tasks)
    get totalTaskCount(): number { return this.tasks().length; }
    get completedCount(): number { return this.tasks().filter(t => t.status === 'COMPLETED').length; }
    get inProgressCount(): number { return this.tasks().filter(t => t.status === 'IN_PROGRESS').length; }
    get incompleteCount(): number { return this.tasks().filter(t => t.status === 'INCOMPLETE').length; }
    get completionPct(): string {
        const tasksArr = this.tasks();
        if (tasksArr.length === 0) return '0.0';
        return ((this.completedCount / tasksArr.length) * 100).toFixed(1);
    }

    /* ──────────────── TEAM ROSTER ──────────────── */

    get teamMembers(): TeamMember[] {
        const usersArr = this.users();
        const tasksArr = this.tasks();

        const members = usersArr.map((u, i) => {
            const ut = tasksArr.filter(t => t.assignedTo.map(String).includes(u.id?.toString()));
            return {
                id: u.id?.toString(),
                name: u.name,
                isAdmin: u.parentId?.toString() === '-1',
                isCurrent: u.id?.toString() === this.currentUserId,
                assigned: ut.length,
                completed: ut.filter(t => t.status === 'COMPLETED').length,
                inProgress: ut.filter(t => t.status === 'IN_PROGRESS').length,
                incomplete: ut.filter(t => t.status === 'INCOMPLETE').length,
                initials: this.getInitials(u.name),
                color: this.memberColors[i % this.memberColors.length],
            };
        });
        const admins = members.filter(m => m.isAdmin).sort((a, b) => b.assigned - a.assigned);
        const others = members.filter(m => !m.isAdmin).sort((a, b) => b.assigned - a.assigned);
        return [...admins, ...others];
    }

    get totalTeamPages(): number { return Math.ceil(this.teamMembers.length / this.teamPageSize); }
    get pagedTeamMembers(): TeamMember[] {
        const s = this.teamPage * this.teamPageSize;
        return this.teamMembers.slice(s, s + this.teamPageSize);
    }
    get showTeamPagination(): boolean { return this.teamMembers.length > this.teamPageSize; }

    nextTeamPage(): void { if (this.teamPage < this.totalTeamPages - 1) this.teamPage++; }
    prevTeamPage(): void { if (this.teamPage > 0) this.teamPage--; }

    private getInitials(name: string): string {
        const parts = name.trim().split(/\s+/).filter(p => p.length > 0);
        if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        return name.substring(0, 2).toUpperCase();
    }

    truncate(name: string, max = 18): string {
        return name.length > max ? name.substring(0, max - 1) + '…' : name;
    }

    /* ──────────────── LIFECYCLE ──────────────── */

    ngAfterViewInit(): void {
        this.viewReady = true;
    }

    initEffect = effect(() => {
        const tasks = this.tasks();
        const users = this.users();
        const user = this.currentUser();

        if (!this.viewReady) return;
        if (!tasks || !users.length || !user) return;

        const renderKey =
            tasks.length +
            '-' +
            this.completedCount +
            '-' +
            this.inProgressCount +
            '-' +
            this.incompleteCount +
            '-' +
            users.length +
            '-' +
            user.id;

        if (renderKey === this.lastRenderKey) return;
        this.lastRenderKey = renderKey;

        queueMicrotask(() => {
            this.destroyAllCharts();
            this.initAllCharts();
        });
    });

    ngOnDestroy(): void {
        this.destroyAllCharts();
        this.destroyEffect.destroy();
    }

    private initAllCharts(): void {
        if (!this.doughnutCanvas || !this.polarCanvas || !this.matrixCanvas || !this.timelineCanvas) return;

        this.initDoughnut();
        this.initPolar();
        this.initMatrix();
        this.initTimeline();
    }

    private destroyAllCharts(): void {
        this.doughnutChart?.destroy();
        this.polarChart?.destroy();
        this.matrixChart?.destroy();
        this.timelineChart?.destroy();

        this.doughnutChart = null;
        this.polarChart = null;
        this.matrixChart = null;
        this.timelineChart = null;
    }

    /* ──────────────── THEME TOGGLE ──────────────── */

    toggleTheme(): void {
        this.isDark = !this.isDark;
        this.destroyAllCharts();
        requestAnimationFrame(() => this.initAllCharts());
    }

    /* ──────────────── TOOLTIP ──────────────── */

    private tip(): any {
        return {
            backgroundColor: 'rgba(15,23,42,0.95)',
            titleColor: '#f1f5f9',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(71,85,105,0.5)',
            borderWidth: 1,
            cornerRadius: 10,
            padding: 12,
            boxPadding: 4,
            titleFont: { size: 13, weight: 'bold' as const },
            bodyFont: { size: 12 },
        };
    }

    /* ═══════════════════════════════════════════
       CHART 1 — DOUGHNUT
       ═══════════════════════════════════════════ */

    private initDoughnut(): void {
        const ctx = this.doughnutCanvas?.nativeElement?.getContext('2d');
        if (!ctx) return;

        const centerPlugin = {
            id: 'doughnutCenter',
            beforeDraw: (chart: any) => {
                const { ctx: chartCtx, chartArea } = chart;
                if (!chartArea) return;

                const centerX = (chartArea.left + chartArea.right) / 2;
                const centerY = (chartArea.top + chartArea.bottom) / 2;

                chartCtx.save();

                const data = chart.data.datasets?.[0]?.data as number[] || [];
                const total = data.reduce((a, b) => a + b, 0);

                chartCtx.font = 'bold 28px Inter, system-ui, sans-serif';
                chartCtx.fillStyle = this.centerNumColor;
                chartCtx.textAlign = 'center';
                chartCtx.textBaseline = 'middle';
                chartCtx.fillText(total.toString(), centerX, centerY - 8);

                chartCtx.font = '11px Inter, system-ui, sans-serif';
                chartCtx.fillStyle = this.centerLabelColor;
                const label =
                    total === 0
                        ? 'No Tasks'
                        : this.doughnutMode === 'status'
                            ? 'My Tasks'
                            : 'By Priority';

                chartCtx.fillText(label, centerX, centerY + 14);

                chartCtx.restore();
            },
        };
        this.doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: this.buildDoughnutData(),
            options: {
                responsive: true, maintainAspectRatio: true, cutout: '68%',
                plugins: {
                    legend: {
                        display: this.tasks().some(t =>
                            t.assignedTo.map(String).includes(this.currentUserId)
                        ), position: 'bottom', labels: { color: this.lc, padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } }
                    },
                    tooltip: { ...this.tip(), callbacks: { label: (context: any) => { const total = (context.dataset.data as number[]).reduce((a: number, b: number) => a + b, 0); const pct = (((context.raw as number) / total) * 100).toFixed(1); return ` ${context.label}: ${context.raw} (${pct}%)`; } } },
                },
                animation: { animateRotate: true, animateScale: true, duration: 800, easing: 'easeOutQuart' },
            },
            plugins: [centerPlugin],
        } as any);
    }

    private buildDoughnutData(): any {
        const myTasks = this.tasks().filter(t => t.assignedTo.includes(this.currentUserId));
        if (this.doughnutMode === 'status') {
            const completed = myTasks.filter(t => t.status === 'COMPLETED').length;
            const inProgress = myTasks.filter(t => t.status === 'IN_PROGRESS').length;
            const incomplete = myTasks.filter(t => t.status === 'INCOMPLETE').length;
            return {
                labels: ['Completed', 'In Progress', 'Incomplete'],
                datasets: [{ data: [completed, inProgress, incomplete], backgroundColor: ['rgba(16,185,129,0.72)', 'rgba(245,158,11,0.72)', 'rgba(239,68,68,0.72)'], borderColor: ['#10b981', '#f59e0b', '#ef4444'], borderWidth: 2, hoverOffset: 14, hoverBorderWidth: 3 }],
            };
        }
        const h = myTasks.filter(t => t.priority === 'HIGH').length;
        const n = myTasks.filter(t => t.priority === 'NORMAL').length;
        const l = myTasks.filter(t => t.priority === 'LOW').length;
        return {
            labels: ['High', 'Normal', 'Low'],
            datasets: [{ data: [h, n, l], backgroundColor: ['rgba(239,68,68,0.72)', 'rgba(99,102,241,0.72)', 'rgba(6,182,212,0.72)'], borderColor: ['#ef4444', '#6366f1', '#06b6d4'], borderWidth: 2, hoverOffset: 14, hoverBorderWidth: 3 }],
        };
    }

    toggleDoughnut(m: 'status' | 'priority'): void {
        this.doughnutMode = m;
        if (this.doughnutChart) { this.doughnutChart.data = this.buildDoughnutData(); this.doughnutChart.update(); }
    }

    /* ═══════════════════════════════════════════
       CHART 2 — POLAR AREA
       ═══════════════════════════════════════════ */

    private initPolar(): void {
        const ctx = this.polarCanvas?.nativeElement?.getContext('2d');
        if (!ctx) return;

        this.polarChart = new Chart(ctx, {
            type: 'polarArea',
            data: this.buildPolarData(),
            options: {
                responsive: true, maintainAspectRatio: true,
                scales: { r: { grid: { color: this.gc }, ticks: { display: false }, beginAtZero: true } },
                plugins: {
                    legend: { position: 'bottom', labels: { color: this.lc, usePointStyle: true, pointStyle: 'circle', padding: 12, font: { size: 10 } } },
                    tooltip: { ...this.tip(), callbacks: { label: (context: any) => this.polarMode === 'count' ? ` ${context.label}: ${context.raw} users` : ` ${context.label}: ${(context.raw as number).toFixed(1)}%` } },
                },
                animation: { duration: 800, easing: 'easeOutQuart', animateRotate: true, animateScale: true },
            } as any,
        });
    }

    private buildPolarData(): any {
        const usersArr = this.users();
        const counts = this.permissionKeys.map(k => usersArr.filter(u => (u.permissions ?? []).includes(k)
        ).length);
        const data = this.polarMode === 'count'
            ? counts
            : counts.map(c => usersArr.length > 0 ? +((c / usersArr.length) * 100).toFixed(1) : 0);
        return {
            labels: this.permissionLabels,
            datasets: [{ data, backgroundColor: ['rgba(59,130,246,0.55)', 'rgba(16,185,129,0.55)', 'rgba(245,158,11,0.55)', 'rgba(239,68,68,0.55)', 'rgba(139,92,246,0.55)'], borderColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'], borderWidth: 2, hoverBorderWidth: 3 }],
        };
    }

    togglePolar(m: 'count' | 'percentage'): void {
        this.polarMode = m;
        if (this.polarChart) { this.polarChart.data = this.buildPolarData(); this.polarChart.update(); }
    }

    /* ═══════════════════════════════════════════
       CHART 3 — PRIORITY × STATUS MATRIX
       ═══════════════════════════════════════════ */

    private initMatrix(): void {
        const ctx = this.matrixCanvas?.nativeElement?.getContext('2d');
        if (!ctx) return;

        this.matrixChart = new Chart(ctx, {
            type: 'bar',
            data: this.buildMatrixData(),
            options: {
                responsive: true, maintainAspectRatio: true,
                scales: {
                    x: { grid: { display: false }, ticks: { color: this.isDark ? '#cbd5e1' : '#374151', font: { size: 12, weight: 'bold' as any } } },
                    y: { grid: { color: this.gc }, ticks: { color: this.tc, font: { size: 11 }, stepSize: 2 }, beginAtZero: true },
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        ...this.tip(),
                        callbacks: {
                            afterBody: (items: any) => {
                                const tasksArr = this.tasks();
                                const pri = ['HIGH', 'NORMAL', 'LOW'][items[0]?.dataIndex];
                                if (!pri) return '';
                                const total = tasksArr.filter(t => t.priority === pri).length;
                                return `Total ${pri.toLowerCase()} priority: ${total}`;
                            }
                        }
                    },
                },
                animation: { duration: 800, easing: 'easeOutQuart' },
            },
        });
    }

    private buildMatrixData(): any {
        const tasksArr = this.tasks();
        if (!tasksArr.length) return { labels: [], datasets: [] };
        const priorities = ['HIGH', 'NORMAL', 'LOW'];
        const statuses = ['COMPLETED', 'IN_PROGRESS', 'INCOMPLETE'];
        const cnt = (p: string, s: string) => tasksArr.filter(t => t.priority === p && t.status === s).length;
        const colors: Record<string, { bg: string; border: string }> = {
            COMPLETED: { bg: 'rgba(16,185,129,0.65)', border: '#10b981' },
            IN_PROGRESS: { bg: 'rgba(245,158,11,0.65)', border: '#f59e0b' },
            INCOMPLETE: { bg: 'rgba(239,68,68,0.65)', border: '#ef4444' },
        };
        const labelMap: Record<string, string> = { COMPLETED: 'Completed', IN_PROGRESS: 'In Progress', INCOMPLETE: 'Incomplete' };
        const ds = statuses.filter(s => this.matrixFilters[s]).map(s => ({
            label: labelMap[s], data: priorities.map(p => cnt(p, s)),
            backgroundColor: colors[s].bg, borderColor: colors[s].border,
            borderWidth: 1.5, borderRadius: 6, hoverBackgroundColor: colors[s].border,
            barPercentage: 0.7, categoryPercentage: 0.7,
        }));
        return { labels: ['🔴 High', '🟡 Normal', '🔵 Low'], datasets: ds };
    }

    toggleMatrixFilter(s: string): void {
        const active = Object.values(this.matrixFilters).filter(v => v).length;
        if (this.matrixFilters[s] && active <= 1) return;
        this.matrixFilters[s] = !this.matrixFilters[s];
        if (this.matrixChart) { this.matrixChart.data = this.buildMatrixData(); this.matrixChart.update(); }
    }

    /* ═══════════════════════════════════════════
       CHART 4 — TIMELINE
       ═══════════════════════════════════════════ */

    private initTimeline(): void {
        const ctx = this.timelineCanvas?.nativeElement?.getContext('2d');
        if (!ctx) return;

        this.timelineChart?.destroy();
        if (this.timelineMode === 'stacked') {
            this.timelineChart = new Chart(ctx, { type: 'bar', data: this.buildTimelineStacked(), options: this.timelineOpts(true) });
        } else {
            this.timelineChart = new Chart(ctx, { type: 'line', data: this.buildTimelineCumulative(ctx), options: this.timelineOpts(false) });
        }
    }

    private getWeekKey(dateInput: string | number): string {
        const d = new Date(dateInput);
        const day = d.getUTCDay();
        const offset = day === 0 ? -6 : 1 - day;
        const mon = new Date(d.getTime());
        mon.setUTCDate(d.getUTCDate() + offset);
        return `${mon.getUTCFullYear()}-${String(mon.getUTCMonth() + 1).padStart(2, '0')}-${String(mon.getUTCDate()).padStart(2, '0')}`;
    }

    private weekLabel(key: string): string {
        const [y, m, d] = key.split('-').map(Number);
        return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    private buildTimelineStacked(): any {
        const tasksArr = this.tasks();
        const map: Record<string, { COMPLETED: number; IN_PROGRESS: number; INCOMPLETE: number }> = {};
        tasksArr.forEach(t => {
            const wk = this.getWeekKey(t.createdAt);
            if (!map[wk]) map[wk] = { COMPLETED: 0, IN_PROGRESS: 0, INCOMPLETE: 0 };
            if (t.status in map[wk]) (map[wk] as any)[t.status]++;
        });
        const weeks = Object.keys(map).sort();
        return {
            labels: weeks.map(w => 'Week ' + this.weekLabel(w)),
            datasets: [
                { label: 'Completed', data: weeks.map(w => map[w].COMPLETED), backgroundColor: 'rgba(16,185,129,0.7)', borderColor: '#10b981', borderWidth: 1, borderRadius: 4, borderSkipped: false },
                { label: 'In Progress', data: weeks.map(w => map[w].IN_PROGRESS), backgroundColor: 'rgba(245,158,11,0.7)', borderColor: '#f59e0b', borderWidth: 1, borderRadius: 4, borderSkipped: false },
                { label: 'Incomplete', data: weeks.map(w => map[w].INCOMPLETE), backgroundColor: 'rgba(239,68,68,0.7)', borderColor: '#ef4444', borderWidth: 1, borderRadius: 4, borderSkipped: false },
            ],
        };
    }

    private buildTimelineCumulative(ctx?: CanvasRenderingContext2D): any {
        const tasksArr = this.tasks();
        const map: Record<string, number> = {};
        tasksArr.forEach(t => { const wk = this.getWeekKey(t.createdAt); map[wk] = (map[wk] || 0) + 1; });
        const weeks = Object.keys(map).sort();
        const cum: number[] = []; let s = 0;
        weeks.forEach(w => { s += map[w]; cum.push(s); });
        let bg: any = 'rgba(99,102,241,0.1)';
        if (ctx) {
            const g = ctx.createLinearGradient(0, 0, 0, 280);
            g.addColorStop(0, 'rgba(99,102,241,0.32)');
            g.addColorStop(1, 'rgba(99,102,241,0.01)');
            bg = g;
        }
        return {
            labels: weeks.map(w => 'Week ' + this.weekLabel(w)),
            datasets: [{
                label: 'Total Tasks', data: cum, fill: true, backgroundColor: bg,
                borderColor: '#6366f1', tension: 0.42, pointRadius: 6, pointHoverRadius: 11,
                pointBackgroundColor: '#6366f1', pointBorderColor: this.isDark ? '#0f172a' : '#ffffff',
                pointBorderWidth: 3, borderWidth: 3,
            }],
        };
    }

    private timelineOpts(stacked: boolean): any {
        return {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { stacked, grid: { color: this.gc }, ticks: { color: this.tc, font: { size: 11 } } },
                y: { stacked, grid: { color: this.gc }, ticks: { color: this.tc, font: { size: 11 }, stepSize: 5 }, beginAtZero: true },
            },
            plugins: {
                legend: { position: 'bottom' as const, labels: { color: this.lc, usePointStyle: true, pointStyle: 'circle', padding: 14, font: { size: 11 } } },
                tooltip: {
                    ...this.tip(),
                    ...(stacked ? {
                        callbacks: {
                            footer: (items: any[]) => {
                                let total = 0;
                                items.forEach(item => total += ((item.raw as number) || 0));
                                return `Total: ${total} tasks`;
                            },
                        },
                        footerFont: { weight: 'bold' as const, size: 12 },
                        footerColor: '#e2e8f0',
                        footerMarginTop: 6,
                    } : {}),
                },
            },
            animation: { duration: 800, easing: 'easeOutQuart' },
        };
    }

    toggleTimeline(m: 'stacked' | 'cumulative'): void {
        this.timelineMode = m;
        this.timelineChart?.destroy();
        this.initTimeline();
    }
}