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
    avatar: string;
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
      .toggle-track {
        transition: background-color 0.3s;
      }
      .toggle-thumb {
        transition: left 0.3s, background-color 0.3s;
      }
    `,
    ],
})
export class DemoGraphs implements AfterViewInit, OnDestroy {
    /* ═══════════════════════════════════════════════════
         RAW DATA
       ═══════════════════════════════════════════════════ */

    users: AppUser[] = [
        {
            id: '1',
            name: 'John',
            email: 'john@gmail.com',
            avatar: '',
            permissions: [
                'TASK_VIEW',
                'TASK_CREATE',
                'TASK_EDIT',
                'TASK_DELETE',
                'MANAGE_USER',
            ],
            parentId: '-1',
            createdAt: '2026-01-20T12:11:40',
        },
        {
            id: '2',
            name: 'Yash',
            email: 'yash@gmail.com',
            avatar: '',
            permissions: ['TASK_CREATE', 'TASK_EDIT', 'MANAGE_USER', 'TASK_VIEW'],
            parentId: '1',
            createdAt: '2026-01-22T15:58:13',
        },
        {
            id: '3',
            name: 'Kartik',
            email: 'kartik@gmail.com',
            avatar: '',
            permissions: ['TASK_CREATE', 'TASK_VIEW'],
            parentId: '1',
            createdAt: '2026-01-22T16:16:39',
        },
        {
            id: '4',
            name: 'Narendra Modi',
            email: 'modi@gmail.com',
            avatar: '',
            permissions: [
                'TASK_VIEW',
                'TASK_CREATE',
                'TASK_DELETE',
                'MANAGE_USER',
                'TASK_EDIT',
            ],
            parentId: '1',
            createdAt: '2026-01-23T19:22:02',
        },
        {
            id: '5',
            name: 'Elon Musk',
            email: 'musk@gmail.com',
            avatar: '',
            permissions: ['TASK_DELETE', 'TASK_VIEW', 'MANAGE_USER'],
            parentId: '1',
            createdAt: '2026-01-24T16:21:56',
        },
        {
            id: '6',
            name: 'Bill Gates',
            email: 'gates@gmail.com',
            avatar: '',
            permissions: ['TASK_VIEW', 'TASK_EDIT'],
            parentId: '1',
            createdAt: '2026-01-28T12:19:54',
        },
        {
            id: '7',
            name: 'Jef Bezos',
            email: 'bezos@gmail.com',
            avatar: '',
            permissions: ['TASK_VIEW', 'TASK_CREATE', 'TASK_DELETE', 'TASK_EDIT'],
            parentId: '1',
            createdAt: '2026-01-28T12:21:05',
        },
        {
            id: '8',
            name: 'Alex',
            email: 'alex@gmail.com',
            avatar: '',
            permissions: [
                'TASK_VIEW',
                'TASK_CREATE',
                'TASK_EDIT',
                'TASK_DELETE',
                'MANAGE_USER',
            ],
            parentId: '-1',
            createdAt: '2026-02-02T12:16:13',
        },
        {
            id: '9',
            name: 'Modi2',
            email: 'modi2@gmail.com',
            avatar: '',
            permissions: [
                'TASK_CREATE',
                'TASK_DELETE',
                'TASK_VIEW',
                'TASK_EDIT',
                'MANAGE_USER',
            ],
            parentId: '1',
            createdAt: '2026-02-12T12:07:38',
        },
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

    /* ═══════════════════════════════════════════════════
         STATE
       ═══════════════════════════════════════════════════ */

    currentUserId = '1';
    doughnutMode: 'status' | 'priority' = 'status';
    timelineMode: 'stacked' | 'cumulative' = 'stacked';
    polarMode: 'count' | 'percentage' = 'count';
    matrixFilters: Record<string, boolean> = {
        COMPLETED: true,
        IN_PROGRESS: true,
        INCOMPLETE: true,
    };
    bubbleFilter: 'all' | 'team' | 'others' = 'all';

    /* ═══════════════════════════════════════════════════
         INTERNAL STORAGE (for bubble tooltips)
       ═══════════════════════════════════════════════════ */

    bubbleTeamUsers: AppUser[] = [];
    bubbleOtherUsers: AppUser[] = [];

    /* ═══════════════════════════════════════════════════
         PERMISSION MAP
       ═══════════════════════════════════════════════════ */

    permissionKeys = [
        'TASK_VIEW',
        'TASK_CREATE',
        'TASK_EDIT',
        'TASK_DELETE',
        'MANAGE_USER',
    ];
    permissionLabels = [
        'View Tasks',
        'Create Tasks',
        'Edit Tasks',
        'Delete Tasks',
        'Manage Users',
    ];

    /* ═══════════════════════════════════════════════════
         CANVAS REFS
       ═══════════════════════════════════════════════════ */

    @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('bubbleCanvas') bubbleCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('timelineCanvas') timelineCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('polarCanvas') polarCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('matrixCanvas') matrixCanvas!: ElementRef<HTMLCanvasElement>;

    /* ═══════════════════════════════════════════════════
         CHART INSTANCES
       ═══════════════════════════════════════════════════ */

    private doughnutChart: Chart | null = null;
    private bubbleChart: Chart | null = null;
    private timelineChart: Chart | null = null;
    private polarChart: Chart | null = null;
    private matrixChart: Chart | null = null;

    /* ═══════════════════════════════════════════════════
         GETTERS (reactive stat cards)
       ═══════════════════════════════════════════════════ */

    get currentUser(): AppUser {
        return (
            this.users.find((u) => u.id === this.currentUserId) || this.users[0]
        );
    }

    get teamSize(): number {
        return this.users.filter((u) => u.parentId === this.currentUserId).length;
    }

    get myAssignedCount(): number {
        return this.tasks.filter((t) =>
            t.assignedTo.includes(this.currentUserId)
        ).length;
    }

    get completedCount(): number {
        return this.tasks.filter((t) => t.status === 'COMPLETED').length;
    }

    get inProgressCount(): number {
        return this.tasks.filter((t) => t.status === 'IN_PROGRESS').length;
    }

    get incompleteCount(): number {
        return this.tasks.filter((t) => t.status === 'INCOMPLETE').length;
    }

    get completionPct(): string {
        return ((this.completedCount / this.tasks.length) * 100).toFixed(1);
    }

    get isAdmin(): boolean {
        return this.currentUser.parentId === '-1';
    }

    /* ═══════════════════════════════════════════════════
         LIFECYCLE
       ═══════════════════════════════════════════════════ */

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initDoughnut();
            this.initBubble();
            this.initTimeline();
            this.initPolar();
            this.initMatrix();
        });
    }

    ngOnDestroy(): void {
        [
            this.doughnutChart,
            this.bubbleChart,
            this.timelineChart,
            this.polarChart,
            this.matrixChart,
        ].forEach((c) => c?.destroy());
    }

    /* ═══════════════════════════════════════════════════
         SHARED TOOLTIP STYLE
       ═══════════════════════════════════════════════════ */

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

    /* ═══════════════════════════════════════════════════
         CHART 1 — DOUGHNUT (Task Health)
       ═══════════════════════════════════════════════════ */

    private initDoughnut(): void {
        const ctx = this.doughnutCanvas.nativeElement.getContext('2d')!;

        const centerPlugin = {
            id: 'doughnutCenter',
            beforeDraw: (chart: any) => {
                const {
                    ctx: c,
                    width: w,
                    height: h,
                } = chart;
                c.save();
                const total = (chart.data.datasets[0].data as number[]).reduce(
                    (a: number, b: number) => a + b,
                    0
                );
                c.font = 'bold 26px Inter, system-ui, sans-serif';
                c.fillStyle = '#e2e8f0';
                c.textAlign = 'center';
                c.textBaseline = 'middle';
                c.fillText(total.toString(), w / 2, h / 2 - 10);
                c.font = '11px Inter, system-ui, sans-serif';
                c.fillStyle = '#64748b';
                c.fillText(
                    this.doughnutMode === 'status' ? 'Total Tasks' : 'By Priority',
                    w / 2,
                    h / 2 + 14
                );
                c.restore();
            },
        };

        this.doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: this.buildDoughnutData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '68%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 11 },
                        },
                    },
                    tooltip: {
                        ...this.tip(),
                        callbacks: {
                            label: (ctx: any) => {
                                const total = (ctx.dataset.data as number[]).reduce(
                                    (a, b) => a + b,
                                    0
                                );
                                const pct = (((ctx.raw as number) / total) * 100).toFixed(1);
                                return ` ${ctx.label}: ${ctx.raw} (${pct}%)`;
                            },
                        },
                    },
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 800,
                    easing: 'easeOutQuart',
                },
            },
            plugins: [centerPlugin],
        } as any);
    }

    private buildDoughnutData(): any {
        if (this.doughnutMode === 'status') {
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
                            'rgba(16,185,129,0.72)',
                            'rgba(245,158,11,0.72)',
                            'rgba(239,68,68,0.72)',
                        ],
                        borderColor: [
                            '#10b981',
                            '#f59e0b',
                            '#ef4444',
                        ],
                        borderWidth: 2,
                        hoverOffset: 14,
                        hoverBorderWidth: 3,
                    },
                ],
            };
        } else {
            const h = this.tasks.filter((t) => t.priority === 'HIGH').length;
            const n = this.tasks.filter((t) => t.priority === 'NORMAL').length;
            const l = this.tasks.filter((t) => t.priority === 'LOW').length;
            return {
                labels: ['High', 'Normal', 'Low'],
                datasets: [
                    {
                        data: [h, n, l],
                        backgroundColor: [
                            'rgba(239,68,68,0.72)',
                            'rgba(99,102,241,0.72)',
                            'rgba(6,182,212,0.72)',
                        ],
                        borderColor: ['#ef4444', '#6366f1', '#06b6d4'],
                        borderWidth: 2,
                        hoverOffset: 14,
                        hoverBorderWidth: 3,
                    },
                ],
            };
        }
    }

    toggleDoughnut(m: 'status' | 'priority'): void {
        this.doughnutMode = m;
        if (this.doughnutChart) {
            this.doughnutChart.data = this.buildDoughnutData();
            this.doughnutChart.update('active');
        }
    }

    /* ═══════════════════════════════════════════════════
         CHART 2 — BUBBLE (Team Galaxy / Hierarchy)
       ═══════════════════════════════════════════════════ */

    private initBubble(): void {
        const ctx = this.bubbleCanvas.nativeElement.getContext('2d')!;
        this.bubbleChart = new Chart(ctx, {
            type: 'bubble',
            data: this.buildBubbleData(),
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Tasks Assigned →',
                            color: '#64748b',
                            font: { size: 11, weight: 'bold' as any },
                        },
                        grid: { color: 'rgba(71,85,105,0.15)' },
                        ticks: { color: '#64748b', stepSize: 1, font: { size: 10 } },
                        beginAtZero: true,
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Direct Reports →',
                            color: '#64748b',
                            font: { size: 11, weight: 'bold' as any },
                        },
                        grid: { color: 'rgba(71,85,105,0.15)' },
                        ticks: { color: '#64748b', stepSize: 1, font: { size: 10 } },
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 14,
                            font: { size: 11 },
                        },
                    },
                    tooltip: {
                        ...this.tip(),
                        callbacks: {
                            title: (items: any) => {
                                const ds = items[0]?.datasetIndex;
                                return ds === 0 ? '🔵  Your Team' : '⚪  Others';
                            },
                            label: (ctx: any) => {
                                const arr =
                                    ctx.datasetIndex === 0
                                        ? this.bubbleTeamUsers
                                        : this.bubbleOtherUsers;
                                const u = arr[ctx.dataIndex];
                                if (!u) return '';
                                const raw = ctx.raw as any;
                                return [
                                    ` ${u.name}`,
                                    ` Assigned: ${raw.x} tasks`,
                                    ` Reports: ${raw.y} members`,
                                    ` Permissions: ${u.permissions.length}/5`,
                                    ` ${u.parentId === '-1' ? '👑 Admin' : '👤 Member'}`,
                                ];
                            },
                        },
                    },
                },
                animation: { duration: 700, easing: 'easeOutQuart' },
            },
        });
    }

    private buildBubbleData(): any {
        const teamIds = new Set([
            this.currentUserId,
            ...this.users
                .filter((u) => u.parentId === this.currentUserId)
                .map((u) => u.id),
        ]);

        this.bubbleTeamUsers = this.users.filter((u) => teamIds.has(u.id));
        this.bubbleOtherUsers = this.users.filter((u) => !teamIds.has(u.id));

        // Dynamic sizing based on user count
        const n = this.users.length;
        const baseR = n > 50 ? 3 : n > 20 ? 5 : 7;
        const scale = n > 50 ? 1.5 : n > 20 ? 2.5 : 3;

        const bubble = (u: AppUser) => ({
            x: this.tasks.filter((t) => t.assignedTo.includes(u.id)).length,
            y: this.users.filter((o) => o.parentId === u.id).length,
            r: u.permissions.length * scale + baseR,
        });

        return {
            datasets: [
                {
                    label: 'Your Team',
                    data: this.bubbleTeamUsers.map(bubble),
                    backgroundColor: 'rgba(99,102,241,0.45)',
                    borderColor: 'rgba(99,102,241,0.9)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(99,102,241,0.7)',
                    hoverBorderWidth: 3,
                },
                {
                    label: 'Others',
                    data: this.bubbleOtherUsers.map(bubble),
                    backgroundColor: 'rgba(100,116,139,0.18)',
                    borderColor: 'rgba(100,116,139,0.4)',
                    borderWidth: 1.5,
                    hoverBackgroundColor: 'rgba(100,116,139,0.35)',
                    hoverBorderWidth: 2,
                },
            ],
        };
    }

    onUserChange(e: Event): void {
        this.currentUserId = (e.target as HTMLSelectElement).value;
        this.bubbleFilter = 'all';
        if (this.bubbleChart) {
            this.bubbleChart.setDatasetVisibility(0, true);
            this.bubbleChart.setDatasetVisibility(1, true);
            this.bubbleChart.data = this.buildBubbleData();
            this.bubbleChart.update('active');
        }
    }

    toggleBubbleFilter(f: 'all' | 'team' | 'others'): void {
        this.bubbleFilter = f;
        if (!this.bubbleChart) return;
        this.bubbleChart.setDatasetVisibility(0, f !== 'others');
        this.bubbleChart.setDatasetVisibility(1, f !== 'team');
        this.bubbleChart.update('active');
    }

    /* ═══════════════════════════════════════════════════
         CHART 3 — TIMELINE (Weekly Stacked / Cumulative)
       ═══════════════════════════════════════════════════ */

    private initTimeline(): void {
        const ctx = this.timelineCanvas.nativeElement.getContext('2d')!;
        if (this.timelineMode === 'stacked') {
            this.timelineChart = new Chart(ctx, {
                type: 'bar',
                data: this.buildTimelineStacked(),
                options: this.timelineOpts(true),
            });
        } else {
            this.timelineChart = new Chart(ctx, {
                type: 'line',
                data: this.buildTimelineCumulative(ctx),
                options: this.timelineOpts(false),
            });
        }
    }

    private getWeekKey(dateStr: string): string {
        const d = new Date(dateStr);
        const day = d.getUTCDay();
        const offset = day === 0 ? -6 : 1 - day;
        const mon = new Date(d.getTime());
        mon.setUTCDate(d.getUTCDate() + offset);
        const y = mon.getUTCFullYear();
        const m = String(mon.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(mon.getUTCDate()).padStart(2, '0');
        return `${y}-${m}-${dd}`;
    }

    private weekLabel(key: string): string {
        const [y, m, d] = key.split('-').map(Number);
        const dt = new Date(y, m - 1, d);
        return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    private buildTimelineStacked(): any {
        const map: Record<
            string,
            { COMPLETED: number; IN_PROGRESS: number; INCOMPLETE: number }
        > = {};
        this.tasks.forEach((t) => {
            const wk = this.getWeekKey(t.createdAt);
            if (!map[wk])
                map[wk] = { COMPLETED: 0, IN_PROGRESS: 0, INCOMPLETE: 0 };
            if (t.status in map[wk])
                (map[wk] as any)[t.status]++;
        });
        const weeks = Object.keys(map).sort();
        return {
            labels: weeks.map((w) => 'Week ' + this.weekLabel(w)),
            datasets: [
                {
                    label: 'Completed',
                    data: weeks.map((w) => map[w].COMPLETED),
                    backgroundColor: 'rgba(16,185,129,0.7)',
                    borderColor: '#10b981',
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false,
                },
                {
                    label: 'In Progress',
                    data: weeks.map((w) => map[w].IN_PROGRESS),
                    backgroundColor: 'rgba(245,158,11,0.7)',
                    borderColor: '#f59e0b',
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false,
                },
                {
                    label: 'Incomplete',
                    data: weeks.map((w) => map[w].INCOMPLETE),
                    backgroundColor: 'rgba(239,68,68,0.7)',
                    borderColor: '#ef4444',
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false,
                },
            ],
        };
    }

    private buildTimelineCumulative(ctx?: CanvasRenderingContext2D): any {
        const map: Record<string, number> = {};
        this.tasks.forEach((t) => {
            const wk = this.getWeekKey(t.createdAt);
            map[wk] = (map[wk] || 0) + 1;
        });
        const weeks = Object.keys(map).sort();
        const cum: number[] = [];
        let s = 0;
        weeks.forEach((w) => {
            s += map[w];
            cum.push(s);
        });

        let bg: any = 'rgba(99,102,241,0.1)';
        if (ctx) {
            const g = ctx.createLinearGradient(0, 0, 0, 280);
            g.addColorStop(0, 'rgba(99,102,241,0.32)');
            g.addColorStop(1, 'rgba(99,102,241,0.01)');
            bg = g;
        }

        return {
            labels: weeks.map((w) => 'Week ' + this.weekLabel(w)),
            datasets: [
                {
                    label: 'Total Tasks',
                    data: cum,
                    fill: true,
                    backgroundColor: bg,
                    borderColor: '#6366f1',
                    tension: 0.42,
                    pointRadius: 6,
                    pointHoverRadius: 11,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#0f172a',
                    pointBorderWidth: 3,
                    borderWidth: 3,
                },
            ],
        };
    }

    private timelineOpts(stacked: boolean): any {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    stacked,
                    grid: { color: 'rgba(71,85,105,0.12)' },
                    ticks: { color: '#64748b', font: { size: 11 } },
                },
                y: {
                    stacked,
                    grid: { color: 'rgba(71,85,105,0.12)' },
                    ticks: { color: '#64748b', font: { size: 11 }, stepSize: 5 },
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    position: 'bottom' as const,
                    labels: {
                        color: '#94a3b8',
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 14,
                        font: { size: 11 },
                    },
                },
                tooltip: { ...this.tip() },
            },
            animation: { duration: 800, easing: 'easeOutQuart' },
        };
    }

    toggleTimeline(m: 'stacked' | 'cumulative'): void {
        this.timelineMode = m;
        this.timelineChart?.destroy();
        this.initTimeline();
    }

    /* ═══════════════════════════════════════════════════
         CHART 4 — POLAR AREA (Permissions)
       ═══════════════════════════════════════════════════ */

    private initPolar(): void {
        const ctx = this.polarCanvas.nativeElement.getContext('2d')!;
        this.polarChart = new Chart(ctx, {
            type: 'polarArea',
            data: this.buildPolarData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        grid: { color: 'rgba(71,85,105,0.2)' },
                        ticks: {
                            display: false,
                        },
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94a3b8',
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 12,
                            font: { size: 10 },
                        },
                    },
                    tooltip: {
                        ...this.tip(),
                        callbacks: {
                            label: (ctx: any) => {
                                if (this.polarMode === 'count') {
                                    return ` ${ctx.label}: ${ctx.raw} users`;
                                } else {
                                    return ` ${ctx.label}: ${(ctx.raw as number).toFixed(1)}%`;
                                }
                            },
                        },
                    },
                },
                animation: { duration: 800, easing: 'easeOutQuart', animateRotate: true, animateScale: true },
            },
        } as any);
    }

    private buildPolarData(): any {
        const counts = this.permissionKeys.map(
            (k) => this.users.filter((u) => u.permissions.includes(k)).length
        );
        const data =
            this.polarMode === 'count'
                ? counts
                : counts.map((c) => +((c / this.users.length) * 100).toFixed(1));

        return {
            labels: this.permissionLabels,
            datasets: [
                {
                    data,
                    backgroundColor: [
                        'rgba(59,130,246,0.55)',
                        'rgba(16,185,129,0.55)',
                        'rgba(245,158,11,0.55)',
                        'rgba(239,68,68,0.55)',
                        'rgba(139,92,246,0.55)',
                    ],
                    borderColor: [
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6',
                    ],
                    borderWidth: 2,
                    hoverBorderWidth: 3,
                },
            ],
        };
    }

    togglePolar(m: 'count' | 'percentage'): void {
        this.polarMode = m;
        if (this.polarChart) {
            this.polarChart.data = this.buildPolarData();
            this.polarChart.update('active');
        }
    }

    /* ═══════════════════════════════════════════════════
         CHART 5 — MATRIX (Priority × Status)
       ═══════════════════════════════════════════════════ */

    private initMatrix(): void {
        const ctx = this.matrixCanvas.nativeElement.getContext('2d')!;
        this.matrixChart = new Chart(ctx, {
            type: 'bar',
            data: this.buildMatrixData(),
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: '#cbd5e1',
                            font: { size: 12, weight: 'bold' as any },
                        },
                    },
                    y: {
                        grid: { color: 'rgba(71,85,105,0.12)' },
                        ticks: { color: '#64748b', font: { size: 11 }, stepSize: 2 },
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        ...this.tip(),
                        callbacks: {
                            afterBody: (items: any) => {
                                const pri = ['HIGH', 'NORMAL', 'LOW'][items[0]?.dataIndex];
                                if (!pri) return '';
                                const total = this.tasks.filter(
                                    (t) => t.priority === pri
                                ).length;
                                return `Total ${pri.toLowerCase()} priority: ${total}`;
                            },
                        },
                    },
                },
                animation: { duration: 800, easing: 'easeOutQuart' },
            },
        });
    }

    private buildMatrixData(): any {
        const priorities = ['HIGH', 'NORMAL', 'LOW'];
        const statuses = ['COMPLETED', 'IN_PROGRESS', 'INCOMPLETE'];
        const cnt = (p: string, s: string) =>
            this.tasks.filter((t) => t.priority === p && t.status === s).length;

        const colors: Record<string, { bg: string; border: string }> = {
            COMPLETED: {
                bg: 'rgba(16,185,129,0.65)',
                border: '#10b981',
            },
            IN_PROGRESS: {
                bg: 'rgba(245,158,11,0.65)',
                border: '#f59e0b',
            },
            INCOMPLETE: {
                bg: 'rgba(239,68,68,0.65)',
                border: '#ef4444',
            },
        };

        const labelMap: Record<string, string> = {
            COMPLETED: 'Completed',
            IN_PROGRESS: 'In Progress',
            INCOMPLETE: 'Incomplete',
        };

        const ds = statuses
            .filter((s) => this.matrixFilters[s])
            .map((s) => ({
                label: labelMap[s],
                data: priorities.map((p) => cnt(p, s)),
                backgroundColor: colors[s].bg,
                borderColor: colors[s].border,
                borderWidth: 1.5,
                borderRadius: 6,
                hoverBackgroundColor: colors[s].border,
                barPercentage: 0.7,
                categoryPercentage: 0.7,
            }));

        return { labels: ['🔴 High', '🟡 Normal', '🔵 Low'], datasets: ds };
    }

    toggleMatrixFilter(s: string): void {
        const active = Object.values(this.matrixFilters).filter((v) => v).length;
        if (this.matrixFilters[s] && active <= 1) return;
        this.matrixFilters[s] = !this.matrixFilters[s];
        if (this.matrixChart) {
            this.matrixChart.data = this.buildMatrixData();
            this.matrixChart.update('active');
        }
    }

    /* ═══════════════════════════════════════════════════
         UTILITIES
       ═══════════════════════════════════════════════════ */

    truncate(name: string, max = 18): string {
        return name.length > max ? name.substring(0, max - 1) + '…' : name;
    }
}