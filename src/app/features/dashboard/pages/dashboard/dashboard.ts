import { Component, AfterViewInit } from '@angular/core';
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

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createDoughnutChart();
    this.createBarChart();
  }

  createDoughnutChart() {
    new Chart('revenueChart', {
      type: 'doughnut',
      data: {
        labels: ['Impressions', 'CTR', 'Engagement'],
        datasets: [
          {
            data: [20, 30, 50],
            backgroundColor: [
              '#FACC15',
              '#3B82F6',
              '#F97316',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

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