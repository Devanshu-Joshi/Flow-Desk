import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface AppUser {
    id: string;
    name: string;
    email: string;
    permissions: string[];
    parentId: string;
    createdAt: string;
}

interface AppTask {
    id: string;
    title: string;
    status: string;
    priority: string;
    dueDate: string;
    assignedTo: string[];
    userId: string;
    parentId: string;
    createdAt: string;
}

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
    selector: 'app-dashboard-charts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './demo-graphs.html',
    styles: [
        `
      :host {
        display: block;
      }
    `,
    ],
})
export class DemoGraphs implements AfterViewInit, OnDestroy {
    /* ──────────────── DATA ──────────────── */

    users: AppUser[] = [
        { id: '1', name: 'John', email: 'john@gmail.com', permissions: ['TASK_VIEW', 'TASK_CREATE', 'TASK_EDIT', 'TASK_DELETE', 'MANAGE_USER'], parentId: '-1', createdAt: '2026-01-20T12:11:40' },
        { id: '2', name: 'Yash', email: 'yash@gmail.com', permissions: ['TASK_CREATE', 'TASK_EDIT', 'MANAGE_USER', 'TASK_VIEW'], parentId: '1', createdAt: '2026-01-22T15:58:13' },
        { id: '3', name: 'Kartik', email: 'kartik@gmail.com', permissions: ['TASK_CREATE', 'TASK_VIEW'], parentId: '1', createdAt: '2026-01-22T16:16:39' },
        { id: '4', name: 'Narendra Modi', email: 'modi@gmail.com', permissions: ['TASK_VIEW', 'TASK_CREATE', 'TASK_DELETE', 'MANAGE_USER', 'TASK_EDIT'], parentId: '1', createdAt: '2026-01-23T19:22:02' },
        { id: '5', name: 'Elon Musk', email: 'musk@gmail.com', permissions: ['TASK_DELETE', 'TASK_VIEW', 'MANAGE_USER'], parentId: '1', createdAt: '2026-01-24T16:21:56' },
        { id: '6', name: 'Bill Gates', email: 'gates@gmail.com', permissions: ['TASK_VIEW', 'TASK_EDIT'], parentId: '1', createdAt: '2026-01-28T12:19:54' },
        { id: '7', name: 'Jef Bezos', email: 'bezos@gmail.com', permissions: ['TASK_VIEW', 'TASK_CREATE', 'TASK_DELETE', 'TASK_EDIT'], parentId: '1', createdAt: '2026-01-28T12:21:05' },
        { id: '8', name: 'Alex', email: 'alex@gmail.com', permissions: ['TASK_VIEW', 'TASK_CREATE', 'TASK_EDIT', 'TASK_DELETE', 'MANAGE_USER'], parentId: '-1', createdAt: '2026-02-02T12:16:13' },
        { id: '9', name: 'Modi2', email: 'modi2@gmail.com', permissions: ['TASK_CREATE', 'TASK_DELETE', 'TASK_VIEW', 'TASK_EDIT', 'MANAGE_USER'], parentId: '1', createdAt: '2026-02-12T12:07:38' },
    ];

    tasks: AppTask[] = [
        { id: '1', title: 'Angular Project', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-01-01', assignedTo: ['5', '6'], userId: '1', parentId: '1', createdAt: '2026-01-21T02:24:42Z' },
        { id: '3', title: 'Musk Task', status: 'COMPLETED', priority: 'LOW', dueDate: '2026-01-01', assignedTo: ['4'], userId: '1', parentId: '1', createdAt: '2026-01-27T10:10:46Z' },
        { id: '9', title: 'Example1', status: 'IN_PROGRESS', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: ['1', '2'], userId: '1', parentId: '1', createdAt: '2026-02-06T13:54:09Z' },
        { id: '10', title: 'Another Task', status: 'COMPLETED', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-09T06:05:21Z' },
        { id: '11', title: "Yash's task", status: 'IN_PROGRESS', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: ['3', '1', '2'], userId: '1', parentId: '1', createdAt: '2026-02-09T09:54:24Z' },
        { id: '12', title: 'Extra Task', status: 'COMPLETED', priority: 'LOW', dueDate: '2026-02-18', assignedTo: ['1', '2', '7', '6', '5', '3', '4'], userId: '1', parentId: '1', createdAt: '2026-02-09T09:57:55Z' },
        { id: '13', title: 'Hello', status: 'IN_PROGRESS', priority: 'LOW', dueDate: '2026-02-01', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-11T07:07:02Z' },
        { id: '14', title: 'Form Changed', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-11', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-11T07:16:24Z' },
        { id: '15', title: 'UnTouched', status: 'COMPLETED', priority: 'HIGH', dueDate: '2026-02-12', assignedTo: ['2', '1'], userId: '1', parentId: '1', createdAt: '2026-02-11T07:22:24Z' },
        { id: '16', title: 'Not working', status: 'INCOMPLETE', priority: 'LOW', dueDate: '2026-02-12', assignedTo: ['2', '7'], userId: '1', parentId: '1', createdAt: '2026-02-11T09:35:00Z' },
        { id: '17', title: 'Now working!', status: 'COMPLETED', priority: 'HIGH', dueDate: '2026-02-20', assignedTo: ['2', '1', '3', '4', '5', '6', '7'], userId: '1', parentId: '1', createdAt: '2026-02-11T09:42:30Z' },
        { id: '18', title: 'qwe', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-01-30', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-11T12:50:27Z' },
        { id: '19', title: 'Fix Login Bug', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:04:17Z' },
        { id: '20', title: 'Update API docs', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:04:36Z' },
        { id: '21', title: 'Respond to emails', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:05:05Z' },
        { id: '22', title: 'Review PR #42', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:05:22Z' },
        { id: '23', title: 'Deploy Hotfix', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:05:39Z' },
        { id: '24', title: 'Morning Standup', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-13', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:07:21Z' },
        { id: '25', title: 'Design Dashboard', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:08:11Z' },
        { id: '26', title: 'API integration', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:08:30Z' },
        { id: '27', title: 'Setup CI/CD', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:08:42Z' },
        { id: '28', title: 'DB Migration', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:08:56Z' },
        { id: '29', title: 'Perf Testing', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:09:10Z' },
        { id: '30', title: 'Code Review', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:09:22Z' },
        { id: '31', title: 'Bug triage', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:09:36Z' },
        { id: '32', title: 'Sprint planning', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:10:09Z' },
        { id: '33', title: 'Release v2.1', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-14', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:10:25Z' },
        { id: '34', title: 'Feature flags', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:10:55Z' },
        { id: '35', title: 'Security audit', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:11:06Z' },
        { id: '36', title: 'A11y review', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:11:18Z' },
        { id: '37', title: 'Mobile responsive', status: 'INCOMPLETE', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:11:31Z' },
        { id: '38', title: 'Monitoring setup', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:11:44Z' },
        { id: '39', title: 'Load testing', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:11:56Z' },
        { id: '40', title: 'User docs', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:12:08Z' },
        { id: '41', title: 'User research', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:12:20Z' },
        { id: '42', title: 'A/B testing', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:12:32Z' },
        { id: '43', title: 'Analytics setup', status: 'COMPLETED', priority: 'NORMAL', dueDate: '2026-02-25', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-13T07:13:08Z' },
    ];

    /* ──────────────── STATE ──────────────── */

    isDark = false;
    currentUserId = '1';
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

    permissionKeys = ['TASK_VIEW', 'TASK_CREATE', 'TASK_EDIT', 'TASK_DELETE', 'MANAGE_USER'];
    permissionLabels = ['View Tasks', 'Create Tasks', 'Edit Tasks', 'Delete Tasks', 'Manage Users'];

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

    /* ──────────────── STAT GETTERS ──────────────── */

    get currentUser(): AppUser { return this.users.find(u => u.id === this.currentUserId) || this.users[0]; }
    get isAdmin(): boolean { return this.currentUser.parentId === '-1'; }
    get teamSize(): number { return this.users.filter(u => u.parentId === this.currentUserId).length; }
    get myAssignedCount(): number { return this.tasks.filter(t => t.assignedTo.includes(this.currentUserId)).length; }
    get completedCount(): number { return this.tasks.filter(t => t.status === 'COMPLETED').length; }
    get inProgressCount(): number { return this.tasks.filter(t => t.status === 'IN_PROGRESS').length; }
    get incompleteCount(): number { return this.tasks.filter(t => t.status === 'INCOMPLETE').length; }
    get completionPct(): string { return ((this.completedCount / this.tasks.length) * 100).toFixed(1); }

    /* ──────────────── TEAM ROSTER ──────────────── */

    get teamMembers(): TeamMember[] {
        const members = this.users.map((u, i) => {
            const ut = this.tasks.filter(t => t.assignedTo.includes(u.id));
            return {
                id: u.id,
                name: u.name,
                isAdmin: u.parentId === '-1',
                isCurrent: u.id === this.currentUserId,
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
        setTimeout(() => this.initAllCharts());
    }

    ngOnDestroy(): void {
        this.destroyAllCharts();
    }

    private initAllCharts(): void {
        this.initDoughnut();
        this.initPolar();
        this.initMatrix();
        this.initTimeline();
    }

    private destroyAllCharts(): void {
        [this.doughnutChart, this.polarChart, this.matrixChart, this.timelineChart].forEach(c => c?.destroy());
    }

    /* ──────────────── THEME TOGGLE ──────────────── */

    toggleTheme(): void {
        this.isDark = !this.isDark;
        this.destroyAllCharts();
        setTimeout(() => this.initAllCharts());
    }

    onUserChange(e: Event): void {
        this.currentUserId = (e.target as HTMLSelectElement).value;
        this.teamPage = 0;
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
        const ctx = this.doughnutCanvas.nativeElement.getContext('2d')!;
        const centerPlugin = {
            id: 'doughnutCenter',
            beforeDraw: (chart: any) => {
                const { ctx, chartArea } = chart;
                if (!chartArea) return;

                const centerX = (chartArea.left + chartArea.right) / 2;
                const centerY = (chartArea.top + chartArea.bottom) / 2;

                ctx.save();

                const total = (chart.data.datasets[0].data as number[])
                    .reduce((a: number, b: number) => a + b, 0);

                // number
                ctx.font = 'bold 28px Inter, system-ui, sans-serif';
                ctx.fillStyle = this.centerNumColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total.toString(), centerX, centerY - 8);

                // label
                ctx.font = '11px Inter, system-ui, sans-serif';
                ctx.fillStyle = this.centerLabelColor;
                ctx.fillText(
                    this.doughnutMode === 'status' ? 'Total Tasks' : 'By Priority',
                    centerX,
                    centerY + 14
                );

                ctx.restore();
            },
        };
        this.doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: this.buildDoughnutData(),
            options: {
                responsive: true, maintainAspectRatio: true, cutout: '68%',
                plugins: {
                    legend: { position: 'bottom', labels: { color: this.lc, padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } },
                    tooltip: { ...this.tip(), callbacks: { label: (ctx: any) => { const total = (ctx.dataset.data as number[]).reduce((a, b) => a + b, 0); const pct = (((ctx.raw as number) / total) * 100).toFixed(1); return ` ${ctx.label}: ${ctx.raw} (${pct}%)`; } } },
                },
                animation: { animateRotate: true, animateScale: true, duration: 800, easing: 'easeOutQuart' },
            },
            plugins: [centerPlugin],
        } as any);
    }

    private buildDoughnutData(): any {
        if (this.doughnutMode === 'status') {
            return {
                labels: ['Completed', 'In Progress', 'Incomplete'],
                datasets: [{ data: [this.completedCount, this.inProgressCount, this.incompleteCount], backgroundColor: ['rgba(16,185,129,0.72)', 'rgba(245,158,11,0.72)', 'rgba(239,68,68,0.72)'], borderColor: ['#10b981', '#f59e0b', '#ef4444'], borderWidth: 2, hoverOffset: 14, hoverBorderWidth: 3 }],
            };
        }
        const h = this.tasks.filter(t => t.priority === 'HIGH').length;
        const n = this.tasks.filter(t => t.priority === 'NORMAL').length;
        const l = this.tasks.filter(t => t.priority === 'LOW').length;
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
        const ctx = this.polarCanvas.nativeElement.getContext('2d')!;
        this.polarChart = new Chart(ctx, {
            type: 'polarArea',
            data: this.buildPolarData(),
            options: {
                responsive: true, maintainAspectRatio: true,
                scales: { r: { grid: { color: this.gc }, ticks: { display: false }, beginAtZero: true } },
                plugins: {
                    legend: { position: 'bottom', labels: { color: this.lc, usePointStyle: true, pointStyle: 'circle', padding: 12, font: { size: 10 } } },
                    tooltip: { ...this.tip(), callbacks: { label: (ctx: any) => this.polarMode === 'count' ? ` ${ctx.label}: ${ctx.raw} users` : ` ${ctx.label}: ${(ctx.raw as number).toFixed(1)}%` } },
                },
                animation: { duration: 800, easing: 'easeOutQuart', animateRotate: true, animateScale: true },
            } as any,
        });
    }

    private buildPolarData(): any {
        const counts = this.permissionKeys.map(k => this.users.filter(u => u.permissions.includes(k)).length);
        const data = this.polarMode === 'count' ? counts : counts.map(c => +((c / this.users.length) * 100).toFixed(1));
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
        const ctx = this.matrixCanvas.nativeElement.getContext('2d')!;
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
                    tooltip: { ...this.tip(), callbacks: { afterBody: (items: any) => { const pri = ['HIGH', 'NORMAL', 'LOW'][items[0]?.dataIndex]; if (!pri) return ''; const total = this.tasks.filter(t => t.priority === pri).length; return `Total ${pri.toLowerCase()} priority: ${total}`; } } },
                },
                animation: { duration: 800, easing: 'easeOutQuart' },
            },
        });
    }

    private buildMatrixData(): any {
        const priorities = ['HIGH', 'NORMAL', 'LOW'];
        const statuses = ['COMPLETED', 'IN_PROGRESS', 'INCOMPLETE'];
        const cnt = (p: string, s: string) => this.tasks.filter(t => t.priority === p && t.status === s).length;
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
        const ctx = this.timelineCanvas.nativeElement.getContext('2d')!;
        this.timelineChart?.destroy();
        if (this.timelineMode === 'stacked') {
            this.timelineChart = new Chart(ctx, { type: 'bar', data: this.buildTimelineStacked(), options: this.timelineOpts(true) });
        } else {
            this.timelineChart = new Chart(ctx, { type: 'line', data: this.buildTimelineCumulative(ctx), options: this.timelineOpts(false) });
        }
    }

    private getWeekKey(dateStr: string): string {
        const d = new Date(dateStr);
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
        const map: Record<string, { COMPLETED: number; IN_PROGRESS: number; INCOMPLETE: number }> = {};
        this.tasks.forEach(t => {
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
        const map: Record<string, number> = {};
        this.tasks.forEach(t => { const wk = this.getWeekKey(t.createdAt); map[wk] = (map[wk] || 0) + 1; });
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