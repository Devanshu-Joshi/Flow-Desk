import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Signal,
    DestroyRef,
    inject,
    signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, layouts, registerables } from 'chart.js';
import { TaskView } from '@core/models/Task';
import { Observable } from 'rxjs';
import { UserModel } from '@core/models/UserModel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserAuth } from '@core/services/user-auth/user-auth';

Chart.register(...registerables);

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    permissions: string[];
    parentId: string;
    createdAt: string;
}

interface Task {
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

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit, OnDestroy {

    tasks!: Signal<TaskView[]>;
    users$!: Observable<UserModel[] | null>;
    private destroyRef = inject(DestroyRef);
    users = signal<UserModel[] | null>(null);

    ngOnInit(): void {
        // this.isLoading.set(true);

        this.users$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(users => {

                // 🟡 STILL LOADING
                if (users === null) {
                    // this.isLoading.set(true);
                    return;
                }

                this.users.set(users);
                // console.log(this.users(), this.isLoading());
                // this.isLoading.set(false);

                // console.log('Loaded users:', filteredUsers);
            });
    }

    // ──────────── STATE ────────────
    statusView: 'status' | 'priority' = 'status';
    selectedUserIds: string[] = ['1', '2', '5'];
    timelineMode: 'daily' | 'cumulative' = 'cumulative';
    showCompletionLine = true;
    workloadFilters: Record<string, boolean> = {
        COMPLETED: true,
        IN_PROGRESS: true,
        INCOMPLETE: true,
    };

    userColors: Record<string, string> = {
        '1': '#6366f1',
        '2': '#06b6d4',
        '3': '#f59e0b',
        '4': '#ef4444',
        '5': '#10b981',
        '6': '#8b5cf6',
        '7': '#ec4899',
        '8': '#14b8a6',
        '9': '#f97316',
    };

    private permissionKeys = [
        'TASK_VIEW',
        'TASK_CREATE',
        'TASK_EDIT',
        'TASK_DELETE',
        'MANAGE_USER',
    ];
    private permissionLabels = ['View', 'Create', 'Edit', 'Delete', 'Manage'];

    // ──────────── CHART INSTANCES ────────────
    private statusChart: Chart | null = null;
    private radarChart: Chart | null = null;
    private timelineChart: Chart | null = null;
    private workloadChart: Chart | null = null;
    private dueDateChart: Chart | null = null;

    // ──────────── VIEW CHILDREN ────────────
    @ViewChild('statusCanvas') statusCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('radarCanvas') radarCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('timelineCanvas') timelineCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('workloadCanvas') workloadCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('dueDateCanvas') dueDateCanvas!: ElementRef<HTMLCanvasElement>;

    // ──────────── COMPUTED ────────────
    get completedCount(): number {
        return this.tasks().filter((t) => t.status === 'COMPLETED').length;
    }
    get inProgressCount(): number {
        return this.tasks().filter((t) => t.status === 'IN_PROGRESS').length;
    }
    get incompleteCount(): number {
        return this.tasks().filter((t) => t.status === 'INCOMPLETE').length;
    }
    get completionRate(): string {
        return ((this.completedCount / this.tasks.length) * 100).toFixed(1);
    }

    // ──────────── LIFECYCLE ────────────
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initStatusChart();
            this.initRadarChart();
            this.initTimelineChart();
            this.initWorkloadChart();
            this.initDueDateChart();
        }, 0);
    }

    ngOnDestroy(): void {
        [
            this.statusChart,
            this.radarChart,
            this.timelineChart,
            this.workloadChart,
            this.dueDateChart,
        ].forEach((c) => c?.destroy());
    }

    // ──────────── HELPERS ────────────
    getShortName(name: string): string {
        const p = name.split(' ');
        return p.length > 2 ? p[0] : name;
    }

    isUserSelected(id: string): boolean {
        return this.selectedUserIds.includes(id);
    }

    private getUserPermissions(id: string): number[] {
        const u = this.users().find((x) => x.id === id);
        return this.permissionKeys.map((k) =>
            u?.permissions.includes(k) ? 1 : 0
        );
    }

    private lightTooltip(): any {
        return {
            backgroundColor: '#ffffff',
            titleColor: '#0f172a',
            bodyColor: '#334155',
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 1,
            cornerRadius: 10,
            padding: 12,
            boxPadding: 4,
            displayColors: true,
            titleFont: { size: 13, weight: 'bold' as const },
            bodyFont: { size: 12 },
        };
    }

    // ═══════════════════════════════════════════
    //  CHART 1 – DOUGHNUT (Status / Priority)
    // ═══════════════════════════════════════════
    private initStatusChart(): void {
        const ctx = this.statusCanvas.nativeElement.getContext('2d')!;

        const centerText = {
            id: 'doughnutCenter',
            beforeDraw: (chart: any) => {
                const { ctx } = chart;
                const { left, right, top, bottom } = chart.chartArea;

                const centerX = (left + right) / 2;
                const centerY = (top + bottom) / 2;

                const total = (chart.data.datasets[0].data as number[])
                    .reduce((a: number, b: number) => a + b, 0);

                ctx.save();

                // Total number
                ctx.font = 'bold 26px Inter, system-ui, sans-serif';
                ctx.fillStyle = '#0f172a';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total.toString(), centerX, centerY - 8);

                // Label
                ctx.font = '12px Inter, system-ui, sans-serif';
                ctx.fillStyle = '#64748b';
                ctx.fillText('Total', centerX, centerY + 14);

                ctx.restore();
            },
        };

        this.statusChart = new Chart(ctx, {
            type: 'doughnut',
            data: this.buildStatusData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '68%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#475569',
                            padding: 18,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 12 },
                        },
                    },
                    tooltip: {
                        ...this.lightTooltip(),
                        callbacks: {
                            label: (ctx: any) => {
                                const total = (ctx.dataset.data as number[]).reduce(
                                    (a, b) => a + b,
                                    0
                                );
                                const pct = (((ctx.raw as number) / total) * 100).toFixed(1);
                                return ` ${ctx.label}: ${ctx.raw} tasks (${pct}%)`;
                            },
                        },
                    },
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 900,
                    easing: 'easeOutQuart',
                },
            },
            plugins: [centerText],
        } as any);
    }

    private buildStatusData(): any {
        if (this.statusView === 'status') {
            return {
                labels: ['Completed', 'In Progress', 'Incomplete'],
                datasets: [
                    {
                        data: [
                            this.completedCount,
                            this.inProgressCount,
                            this.incompleteCount,
                        ],
                        backgroundColor: [
                            'rgba(16,185,129,0.75)',
                            'rgba(245,158,11,0.75)',
                            'rgba(239,68,68,0.75)',
                        ],
                        borderColor: [
                            'rgba(16,185,129,1)',
                            'rgba(245,158,11,1)',
                            'rgba(239,68,68,1)',
                        ],
                        borderWidth: 2,
                        hoverOffset: 12,
                        hoverBorderWidth: 3,
                    },
                ],
            };
        } else {
            const h = this.tasks().filter((t) => t.priority === 'HIGH').length;
            const n = this.tasks().filter((t) => t.priority === 'NORMAL').length;
            const l = this.tasks().filter((t) => t.priority === 'LOW').length;
            return {
                labels: ['High', 'Normal', 'Low'],
                datasets: [
                    {
                        data: [h, n, l],
                        backgroundColor: [
                            'rgba(239,68,68,0.75)',
                            'rgba(99,102,241,0.75)',
                            'rgba(6,182,212,0.75)',
                        ],
                        borderColor: [
                            'rgba(239,68,68,1)',
                            'rgba(99,102,241,1)',
                            'rgba(6,182,212,1)',
                        ],
                        borderWidth: 2,
                        hoverOffset: 15,
                        hoverBorderWidth: 3,
                    },
                ],
            };
        }
    }

    toggleStatusView(v: 'status' | 'priority'): void {
        this.statusView = v;
        if (this.statusChart) {
            this.statusChart.data = this.buildStatusData();
            this.statusChart.update();
        }
    }

    // ═══════════════════════════════════════════
    //  CHART 2 – RADAR (Permissions)
    // ═══════════════════════════════════════════
    private initRadarChart(): void {
        const ctx = this.radarCanvas.nativeElement.getContext('2d')!;
        this.radarChart = new Chart(ctx, {
            type: 'radar',
            data: this.buildRadarData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0,0,0,0.08)' },
                        grid: { color: 'rgba(0,0,0,0.06)' },
                        pointLabels: {
                            color: '#334155',
                            font: { size: 11, weight: 'bold' as any },
                        },
                        ticks: { display: false, stepSize: 1 },
                        suggestedMin: 0,
                        suggestedMax: 1,
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#475569',
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 14,
                            font: { size: 11 },
                        },
                    },
                    tooltip: {
                        ...this.lightTooltip(),
                        callbacks: {
                            label: (ctx: any) => {
                                const perm = this.permissionLabels[ctx.dataIndex];
                                return ` ${ctx.dataset.label}: ${ctx.raw === 1 ? '✓' : '✗'} ${perm}`;
                            },
                        },
                    },
                },
                animation: { duration: 700, easing: 'easeOutQuart' },
            },
        });
    }

    private buildRadarData(): any {
        return {
            labels: this.permissionLabels,
            datasets: this.selectedUserIds.map((uid) => {
                const c = this.userColors[uid];
                const u = this.users().find((x) => x.id === uid);
                return {
                    label: u ? this.getShortName(u.name) : uid,
                    data: this.getUserPermissions(uid),
                    backgroundColor: c + '18',
                    borderColor: c,
                    pointBackgroundColor: c,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    borderWidth: 2.5,
                    fill: true,
                };
            }),
        };
    }

    toggleUserSelection(id: string): void {
        const i = this.selectedUserIds.indexOf(id);
        if (i > -1) {
            if (this.selectedUserIds.length > 1) this.selectedUserIds.splice(i, 1);
        } else {
            this.selectedUserIds.push(id);
        }
        if (this.radarChart) {
            this.radarChart.data = this.buildRadarData();
            this.radarChart.update('active');
        }
    }

    // ═══════════════════════════════════════════
    //  CHART 3 – TIMELINE (Daily / Cumulative)
    // ═══════════════════════════════════════════
    private initTimelineChart(): void {
        const ctx = this.timelineCanvas.nativeElement.getContext('2d')!;
        this.timelineChart = new Chart(ctx, {
            type: this.timelineMode === 'cumulative' ? 'line' : 'bar',
            data: this.buildTimelineData(ctx),
            options: this.timelineOpts(),
        });
    }

    private buildTimelineData(ctx?: CanvasRenderingContext2D): any {
        const map: Record<string, number> = {};
        this.tasks().forEach((t) => {
            const d = t.createdAt.split('T')[0];
            map[d] = (map[d] || 0) + 1;
        });
        const dates = Object.keys(map).sort();
        const daily = dates.map((d) => map[d]);
        const cumulative: number[] = [];
        let sum = 0;
        daily.forEach((c) => {
            sum += c;
            cumulative.push(sum);
        });
        const labels = dates.map((d) => {
            const dt = new Date(d + 'T00:00:00');
            return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });

        if (this.timelineMode === 'cumulative') {
            let bg: any = 'rgba(99,102,241,0.12)';
            if (ctx) {
                const g = ctx.createLinearGradient(0, 0, 0, 280);
                g.addColorStop(0, 'rgba(99,102,241,0.35)');
                g.addColorStop(1, 'rgba(99,102,241,0.01)');
                bg = g;
            }
            return {
                labels,
                datasets: [
                    {
                        label: 'Cumulative Tasks',
                        data: cumulative,
                        fill: true,
                        backgroundColor: bg,
                        borderColor: '#6366f1',
                        tension: 0.45,
                        pointRadius: 6,
                        pointHoverRadius: 10,
                        pointBackgroundColor: '#6366f1',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        borderWidth: 3,
                    },
                ],
            };
        } else {
            return {
                labels,
                datasets: [
                    {
                        label: 'Tasks Created',
                        data: daily,
                        backgroundColor: [
                            'rgba(99,102,241,0.55)',
                            'rgba(139,92,246,0.55)',
                            'rgba(6,182,212,0.55)',
                            'rgba(16,185,129,0.55)',
                            'rgba(245,158,11,0.55)',
                            'rgba(239,68,68,0.55)',
                        ],
                        borderColor: [
                            'rgba(99,102,241,0.9)',
                            'rgba(139,92,246,0.9)',
                            'rgba(6,182,212,0.9)',
                            'rgba(16,185,129,0.9)',
                            'rgba(245,158,11,0.9)',
                            'rgba(239,68,68,0.9)',
                        ],
                        borderWidth: 1.5,
                        borderRadius: 10,
                        hoverBackgroundColor: 'rgba(99,102,241,0.85)',
                        barPercentage: 0.65,
                    },
                ],
            };
        }
    }

    private timelineOpts(): any {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    grid: { color: 'rgba(71,85,105,0.12)' },
                    ticks: { color: '#6b7280', font: { size: 11 } },
                },
                y: {
                    grid: { color: 'rgba(71,85,105,0.12)' },
                    ticks: { color: '#6b7280', font: { size: 11 }, stepSize: 5 },
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    ...this.lightTooltip(),
                    displayColors: false,
                },
            },
            animation: { duration: 900, easing: 'easeOutQuart' },
        };
    }

    toggleTimelineMode(m: 'daily' | 'cumulative'): void {
        this.timelineMode = m;
        this.timelineChart?.destroy();
        const ctx = this.timelineCanvas.nativeElement.getContext('2d')!;
        this.timelineChart = new Chart(ctx, {
            type: m === 'cumulative' ? 'line' : 'bar',
            data: this.buildTimelineData(ctx),
            options: this.timelineOpts(),
        });
    }

    // ═══════════════════════════════════════════
    //  CHART 4 – HORIZONTAL STACKED BAR (Workload)
    // ═══════════════════════════════════════════
    private initWorkloadChart(): void {
        const ctx = this.workloadCanvas.nativeElement.getContext('2d')!;
        this.workloadChart = new Chart(ctx, {
            type: 'bar',
            data: this.buildWorkloadData(),
            options: {
                indexAxis: 'y' as const,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        stacked: true,
                        grid: { color: 'rgba(0,0,0,0.06)' },
                        ticks: { color: '#475569', font: { size: 11 }, stepSize: 1 },
                        beginAtZero: true,
                    },
                    y: {
                        stacked: true,
                        grid: { display: false },
                        ticks: { color: '#475569', font: { size: 12, weight: 'bold' as any } },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        ...this.lightTooltip(),
                        callbacks: {
                            afterBody: (items: any) => {
                                const idx = items[0]?.dataIndex;
                                if (idx === undefined) return '';
                                const uids = ['1', '2', '3', '4', '5', '6', '7'];
                                const total = this.tasks().filter((t) =>
                                    t.assignedTo.includes(uids[idx])
                                ).length;
                                return `Total assigned: ${total}`;
                            },
                        },
                    },
                },
                animation: { duration: 800, easing: 'easeOutQuart' },
            },
        });
    }

    private buildWorkloadData(): any {
        const uids = ['1', '2', '3', '4', '5', '6', '7'];
        const names = uids.map((id) => {
            const u = this.users().find((x) => x.id === id);
            return u ? this.getShortName(u.name) : id;
        });
        const cnt = (uid: string, s: string) =>
            this.tasks().filter((t) => t.assignedTo.includes(uid) && t.status === s)
                .length;
        const ds: any[] = [];
        if (this.workloadFilters['COMPLETED'])
            ds.push({
                label: 'Completed',
                data: uids.map((u) => cnt(u, 'COMPLETED')),
                backgroundColor: 'rgba(16,185,129,0.7)',
                borderColor: 'rgba(16,185,129,1)',
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false,
            });
        if (this.workloadFilters['IN_PROGRESS'])
            ds.push({
                label: 'In Progress',
                data: uids.map((u) => cnt(u, 'IN_PROGRESS')),
                backgroundColor: 'rgba(245,158,11,0.7)',
                borderColor: 'rgba(245,158,11,1)',
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false,
            });
        if (this.workloadFilters['INCOMPLETE'])
            ds.push({
                label: 'Incomplete',
                data: uids.map((u) => cnt(u, 'INCOMPLETE')),
                backgroundColor: 'rgba(239,68,68,0.7)',
                borderColor: 'rgba(239,68,68,1)',
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false,
            });
        return { labels: names, datasets: ds };
    }

    toggleWorkloadFilter(s: string): void {
        const active = Object.values(this.workloadFilters).filter((v) => v).length;
        if (this.workloadFilters[s] && active <= 1) return;
        this.workloadFilters[s] = !this.workloadFilters[s];
        if (this.workloadChart) {
            this.workloadChart.data = this.buildWorkloadData();
            this.workloadChart.update('active');
        }
    }

    // ═══════════════════════════════════════════
    //  CHART 5 – MIXED BAR + LINE (Due Date)
    // ═══════════════════════════════════════════
    private initDueDateChart(): void {
        const ctx = this.dueDateCanvas.nativeElement.getContext('2d')!;
        this.dueDateChart = new Chart(ctx, {
            type: 'bar',
            data: this.buildDueDateData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    x: {
                        grid: { color: 'rgba(71,85,105,0.12)' },
                        ticks: {
                            color: '#6b7280',
                            font: { size: 10 },
                            maxRotation: 45,
                            minRotation: 30,
                        },
                    },
                    y: {
                        position: 'left' as const,
                        grid: { color: 'rgba(71,85,105,0.12)' },
                        ticks: { color: '#6b7280', font: { size: 11 }, stepSize: 2 },
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tasks',
                            color: '#64748b',
                            font: { size: 11 },
                        },
                    },
                    y1: {
                        position: 'right' as const,
                        display: this.showCompletionLine,
                        grid: { drawOnChartArea: false },
                        ticks: {
                            color: '#10b981',
                            font: { size: 11 },
                            callback: (v: any) => v + '%',
                        },
                        min: 0,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Completion %',
                            color: '#10b981',
                            font: { size: 11 },
                        },
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom' as const,
                        labels: {
                            color: '#475569',
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 14,
                            font: { size: 11 },
                        },
                    },
                    tooltip: {
                        ...this.lightTooltip(),
                        callbacks: {
                            label: (ctx: any) => {
                                if (ctx.dataset.yAxisID === 'y1')
                                    return ` Completion: ${(ctx.raw as number).toFixed(1)}%`;
                                return ` ${ctx.dataset.label}: ${ctx.raw} tasks`;
                            },
                        },
                    },
                },
                animation: { duration: 800, easing: 'easeOutQuart' },
            },
        } as any);
    }

    private buildDueDateData(): any {
        const map: Record<string, TaskView[]> = {};
        this.tasks().forEach((t) => {
            if (!map[t.dueDate]) map[t.dueDate] = [];
            map[t.dueDate].push(t);
        });
        const dates = Object.keys(map).sort();
        const labels = dates.map((d) => {
            const dt = new Date(d + 'T00:00:00');
            return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });
        const counts = dates.map((d) => map[d].length);
        const rates = dates.map((d) => {
            const arr = map[d];
            const c = arr.filter((t) => t.status === 'COMPLETED').length;
            return arr.length > 0 ? +((c / arr.length) * 100).toFixed(1) : 0;
        });

        const ds: any[] = [
            {
                type: 'bar' as const,
                label: 'Tasks Due',
                data: counts,
                backgroundColor: 'rgba(99,102,241,0.5)',
                borderColor: 'rgba(99,102,241,0.9)',
                borderWidth: 1.5,
                borderRadius: 8,
                order: 2,
                barPercentage: 0.7,
            },
        ];

        if (this.showCompletionLine) {
            ds.push({
                type: 'line' as const,
                label: 'Completion Rate',
                data: rates,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16,185,129,0.08)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 9,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                borderWidth: 2.5,
                yAxisID: 'y1',
                fill: false,
                order: 1,
            });
        }
        return { labels, datasets: ds };
    }

    toggleCompletionLine(): void {
        this.showCompletionLine = !this.showCompletionLine;
        if (this.dueDateChart) {
            this.dueDateChart.data = this.buildDueDateData();
            const s = (this.dueDateChart.options as any).scales;
            if (s?.y1) s.y1.display = this.showCompletionLine;
            this.dueDateChart.update('active');
        }
    }
}