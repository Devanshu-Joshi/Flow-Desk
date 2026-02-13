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
  selector: 'app-dashboard-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-graphs.html',
  styleUrl: './demo-graphs.css',
})
export class DemoGraphs implements AfterViewInit, OnDestroy {
  // ──────────── RAW DATA ────────────
  users: User[] = [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
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

  tasks: Task[] = [
    { id: '1', title: 'Angular Project', status: 'IN_PROGRESS', priority: 'NORMAL', dueDate: '2026-01-01', assignedTo: ['5', '6'], userId: '1', parentId: '1', createdAt: '2026-01-21T02:24:42Z' },
    { id: '3', title: 'Musk Task', status: 'COMPLETED', priority: 'LOW', dueDate: '2026-01-01', assignedTo: ['4'], userId: '1', parentId: '1', createdAt: '2026-01-27T10:10:46Z' },
    { id: '9', title: 'Example1', status: 'IN_PROGRESS', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: ['1', '2'], userId: '1', parentId: '1', createdAt: '2026-02-06T13:54:09Z' },
    { id: '10', title: 'Another Task', status: 'COMPLETED', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: [], userId: '1', parentId: '1', createdAt: '2026-02-09T06:05:21Z' },
    { id: '11', title: "Yash's task", status: 'IN_PROGRESS', priority: 'HIGH', dueDate: '2026-02-01', assignedTo: ['3', '1', '2'], userId: '1', parentId: '1', createdAt: '2026-02-09T09:54:24Z' },
    { id: '12', title: 'Extra Task with all users', status: 'COMPLETED', priority: 'LOW', dueDate: '2026-02-18', assignedTo: ['1', '2', '7', '6', '5', '3', '4'], userId: '1', parentId: '1', createdAt: '2026-02-09T09:57:55Z' },
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
    return this.tasks.filter((t) => t.status === 'COMPLETED').length;
  }
  get inProgressCount(): number {
    return this.tasks.filter((t) => t.status === 'IN_PROGRESS').length;
  }
  get incompleteCount(): number {
    return this.tasks.filter((t) => t.status === 'INCOMPLETE').length;
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
    const u = this.users.find((x) => x.id === id);
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
        const { ctx: c, width: w, height: h } = chart;
        c.save();
        const total = (chart.data.datasets[0].data as number[]).reduce(
          (a: number, b: number) => a + b,
          0
        );
        c.font = 'bold 26px Inter, system-ui, sans-serif';
        c.fillStyle = '#0f172a';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(total.toString(), w / 2, h / 2 - 10);
        c.font = '12px Inter, system-ui, sans-serif';
        c.fillStyle = '#64748b';
        c.fillText('Total', w / 2, h / 2 + 12);
        c.restore();
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
      const h = this.tasks.filter((t) => t.priority === 'HIGH').length;
      const n = this.tasks.filter((t) => t.priority === 'NORMAL').length;
      const l = this.tasks.filter((t) => t.priority === 'LOW').length;
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
            hoverOffset: 12,
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
      this.statusChart.update('active');
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
        const u = this.users.find((x) => x.id === uid);
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
    this.tasks.forEach((t) => {
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
                const total = this.tasks.filter((t) =>
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
      const u = this.users.find((x) => x.id === id);
      return u ? this.getShortName(u.name) : id;
    });
    const cnt = (uid: string, s: string) =>
      this.tasks.filter((t) => t.assignedTo.includes(uid) && t.status === s)
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
    const map: Record<string, Task[]> = {};
    this.tasks.forEach((t) => {
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