import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { StatsCard } from '@shared/components/stats-card/stats-card';

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
);

interface Task {
  id: number;
  title: string;
  status: 'incomplete' | 'in-progress' | 'completed';
  dueDate: Date;
}

interface LegendItem {
  label: string;
  color: string;
  hoverColor: string;
  count: number;
  percentage: string;
  active: boolean;
}

type PeriodType = 'today' | 'weekly' | 'monthly';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatsCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit, OnDestroy {
  // ─── Dummy Task Data ───────────────────────────────
  private allTasks: Task[] = [];

  // ─── Period Filter ─────────────────────────────────
  selectedPeriod: PeriodType = 'weekly';
  periods: { label: string; value: PeriodType }[] = [
    { label: 'Today', value: 'today' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ];

  // ─── Chart Reference ──────────────────────────────
  private pieChart: Chart | null = null;

  // ─── Legend Items ──────────────────────────────────
  legends: LegendItem[] = [
    { label: 'Incomplete', color: '#EF4444', hoverColor: '#DC2626', count: 0, percentage: '0', active: true },
    { label: 'In Progress', color: '#F59E0B', hoverColor: '#D97706', count: 0, percentage: '0', active: true },
    { label: 'Completed', color: '#10B981', hoverColor: '#059669', count: 0, percentage: '0', active: true },
  ];

  // ─── State ─────────────────────────────────────────
  totalVisibleTasks = 0;
  hasData = false;

  constructor() {
    this.allTasks = this.generateDummyTasks();
  }

  ngAfterViewInit(): void {
    this.updatePieChart();
    this.createBarChart();
  }

  ngOnDestroy(): void {
    this.pieChart?.destroy();
  }

  // ─── Event Handlers ────────────────────────────────

  onPeriodChange(period: PeriodType): void {
    if (this.selectedPeriod === period) return;
    this.selectedPeriod = period;
    this.updatePieChart();
  }

  toggleLegend(index: number): void {
    if (!this.pieChart) return;

    this.legends[index].active = !this.legends[index].active;
    this.pieChart.toggleDataVisibility(index);
    this.pieChart.update();

    this.totalVisibleTasks = this.legends
      .filter((l) => l.active)
      .reduce((sum, l) => sum + l.count, 0);
  }

  // ─── Data Processing ───────────────────────────────

  private updatePieChart(): void {
    const filtered = this.filterTasksByPeriod();

    const counts = {
      incomplete: filtered.filter((t) => t.status === 'incomplete').length,
      inProgress: filtered.filter((t) => t.status === 'in-progress').length,
      completed: filtered.filter((t) => t.status === 'completed').length,
    };

    const total = counts.incomplete + counts.inProgress + counts.completed;

    this.legends[0].count = counts.incomplete;
    this.legends[1].count = counts.inProgress;
    this.legends[2].count = counts.completed;

    this.legends.forEach((l) => {
      l.percentage = total > 0 ? ((l.count / total) * 100).toFixed(1) : '0';
      l.active = true;
    });

    this.totalVisibleTasks = total;
    this.hasData = total > 0;

    if (this.pieChart) {
      this.pieChart.destroy();
      this.pieChart = null;
    }

    if (this.hasData) {
      setTimeout(() => this.createDoughnutChart(), 0);
    }
  }

  private filterTasksByPeriod(): Task[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    return this.allTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);

      switch (this.selectedPeriod) {
        case 'today':
          return dueDate >= today && dueDate <= todayEnd;

        case 'weekly': {
          const weekEnd = new Date(today);
          weekEnd.setDate(weekEnd.getDate() + 6);
          weekEnd.setHours(23, 59, 59, 999);
          return dueDate >= today && dueDate <= weekEnd;
        }

        case 'monthly': {
          const monthEnd = new Date(today);
          monthEnd.setDate(monthEnd.getDate() + 29);
          monthEnd.setHours(23, 59, 59, 999);
          return dueDate >= today && dueDate <= monthEnd;
        }
      }
    });
  }

  // ─── Doughnut Chart ────────────────────────────────

  private createDoughnutChart(): void {
    const canvas = document.getElementById('taskPieChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.pieChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.legends.map((l) => l.label),
        datasets: [
          {
            data: this.legends.map((l) => l.count),
            backgroundColor: this.legends.map((l) => l.color),
            hoverBackgroundColor: this.legends.map((l) => l.hoverColor),
            borderWidth: 3,
            borderColor: 'rgba(255, 255, 255, 0.9)',
            hoverBorderWidth: 3,
            hoverBorderColor: '#ffffff',
            hoverOffset: 10,
          },
        ],
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 700,
          easing: 'easeInOutQuart',
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            titleColor: '#ffffff',
            bodyColor: '#e2e8f0',
            titleFont: { size: 14 },
            bodyFont: { size: 13 },
            padding: 14,
            cornerRadius: 10,
            displayColors: true,
            boxWidth: 12,
            boxHeight: 12,
            boxPadding: 6,
            usePointStyle: true,
            callbacks: {
              label: (context) => {
                const value = context.parsed;
                const total = (context.dataset.data as number[]).reduce(
                  (a, b) => a + b,
                  0,
                );
                const pct =
                  total > 0 ? ((value / total) * 100).toFixed(1) : '0';
                return ` ${value} tasks · ${pct}%`;
              },
            },
          },
        },
      },
    });
  }

  // ─── Dummy Data Generator ──────────────────────────

  private generateDummyTasks(): Task[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tasks: Task[] = [];
    let id = 1;

    const d = (offset: number): Date => {
      const date = new Date(today);
      date.setDate(date.getDate() + offset);
      return date;
    };

    // ── Today (day 0) ──
    tasks.push({ id: id++, title: 'Fix login bug', status: 'incomplete', dueDate: d(0) });
    tasks.push({ id: id++, title: 'Update API docs', status: 'incomplete', dueDate: d(0) });
    tasks.push({ id: id++, title: 'Respond to emails', status: 'incomplete', dueDate: d(0) });
    tasks.push({ id: id++, title: 'Review PR #42', status: 'in-progress', dueDate: d(0) });
    tasks.push({ id: id++, title: 'Deploy hotfix', status: 'in-progress', dueDate: d(0) });
    tasks.push({ id: id++, title: 'Morning standup', status: 'completed', dueDate: d(0) });

    // ── This week (days 1–6) ──
    tasks.push({ id: id++, title: 'Design dashboard', status: 'incomplete', dueDate: d(1) });
    tasks.push({ id: id++, title: 'API integration', status: 'incomplete', dueDate: d(2) });
    tasks.push({ id: id++, title: 'Setup CI/CD', status: 'incomplete', dueDate: d(3) });
    tasks.push({ id: id++, title: 'DB migration', status: 'in-progress', dueDate: d(1) });
    tasks.push({ id: id++, title: 'Perf testing', status: 'in-progress', dueDate: d(3) });
    tasks.push({ id: id++, title: 'Code review', status: 'in-progress', dueDate: d(5) });
    tasks.push({ id: id++, title: 'Bug triage', status: 'completed', dueDate: d(2) });
    tasks.push({ id: id++, title: 'Sprint planning', status: 'completed', dueDate: d(4) });
    tasks.push({ id: id++, title: 'Release v2.1', status: 'completed', dueDate: d(6) });

    // ── This month (days 8–28) ──
    tasks.push({ id: id++, title: 'Feature flags', status: 'incomplete', dueDate: d(10) });
    tasks.push({ id: id++, title: 'Security audit', status: 'incomplete', dueDate: d(15) });
    tasks.push({ id: id++, title: 'A11y review', status: 'incomplete', dueDate: d(20) });
    tasks.push({ id: id++, title: 'Mobile responsive', status: 'incomplete', dueDate: d(25) });
    tasks.push({ id: id++, title: 'Monitoring setup', status: 'in-progress', dueDate: d(12) });
    tasks.push({ id: id++, title: 'Load testing', status: 'in-progress', dueDate: d(18) });
    tasks.push({ id: id++, title: 'User docs', status: 'completed', dueDate: d(8) });
    tasks.push({ id: id++, title: 'User research', status: 'completed', dueDate: d(14) });
    tasks.push({ id: id++, title: 'A/B testing', status: 'completed', dueDate: d(22) });
    tasks.push({ id: id++, title: 'Analytics setup', status: 'completed', dueDate: d(28) });

    return tasks;
  }

  // ─── Bar Chart (UNTOUCHED) ─────────────────────────

  createBarChart() {
    new Chart('salaryChart', {
      type: 'bar',
      data: {
        labels: ['Kristin', 'Colleen', 'Cameron', 'Angel', 'Greg', 'Cody'],
        datasets: [
          {
            label: 'Allowance',
            data: [20000, 15000, 18000, 22000, 20000, 25000],
            backgroundColor: '#6366F1',
            borderRadius: 6,
          },
          {
            label: 'Stocks',
            data: [30000, 25000, 20000, 15000, 18000, 30000],
            backgroundColor: '#3B82F6',
            borderRadius: 6,
          },
          {
            label: 'Bonus',
            data: [20000, 15000, 17000, 12000, 14000, 20000],
            backgroundColor: '#22D3EE',
            borderRadius: 6,
          },
          {
            label: 'Tax',
            data: [10000, 8000, 9000, 7000, 6000, 12000],
            backgroundColor: '#A5F3FC',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
          },
          y: {
            stacked: true,
            grid: { color: '#e5e7eb' },
          },
        },
      },
    });
  }
}