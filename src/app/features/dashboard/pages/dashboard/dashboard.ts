import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, Signal } from '@angular/core';
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
import { ChangeDetectorRef } from '@angular/core';
import { TaskService } from '@core/services/task/task.service';
import { TaskView } from '@core/models/Task';

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
  allTasks!: Signal<TaskView[]>;

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

  constructor(private cd: ChangeDetectorRef, public taskService: TaskService) {
    this.allTasks = this.taskService.tasksView;
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
      incomplete: filtered.filter((t) => t.status === 'INCOMPLETE').length,
      inProgress: filtered.filter((t) => t.status === 'IN_PROGRESS').length,
      completed: filtered.filter((t) => t.status === 'COMPLETED').length,
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

    this.cd.detectChanges();

    if (this.pieChart) {
      this.pieChart.destroy();
      this.pieChart = null;
    }

    if (this.hasData) {
      Promise.resolve().then(() => this.createDoughnutChart());
    }
  }

  private filterTasksByPeriod(): TaskView[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    return this.allTasks().filter((task) => {
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

  @ViewChild('taskPieChart') canvas!: ElementRef<HTMLCanvasElement>;

  // ─── Doughnut Chart ────────────────────────────────

  private createDoughnutChart(): void {

    if (!this.canvas) return;

    this.pieChart = new Chart(this.canvas.nativeElement, {
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
            backgroundColor: 'rgba(15, 23, 42, 1)',
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