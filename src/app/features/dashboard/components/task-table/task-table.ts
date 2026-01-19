import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TaskView } from '@core/models/Task';
import { TaskTableRow } from '@features/dashboard/components/task-table-row/task-table-row';
import { EmptyState } from '../empty-state/empty-state';
import { TaskTableFooter } from '../task-table-footer/task-table-footer';

@Component({
  selector: 'app-task-table',
  imports: [
    CommonModule,
    NgxPaginationModule,
    TaskTableRow,
    EmptyState,
    TaskTableFooter
  ],
  templateUrl: './task-table.html',
  styleUrl: './task-table.css',
})
export class TaskTable {

  /* -------------------------------------------------------------------------- */
  /*                                   Inputs                                   */
  /* -------------------------------------------------------------------------- */

  @Input() tasks: TaskView[] = [];
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Input() sortField: 'title' | 'createdAt' = 'createdAt';
  @Input() sortDirection: 'asc' | 'desc' = 'desc';

  /* -------------------------------------------------------------------------- */
  /*                                   Outputs                                  */
  /* -------------------------------------------------------------------------- */

  @Output() editTask = new EventEmitter<TaskView>();
  @Output() deleteTask = new EventEmitter<TaskView>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() clearFilters = new EventEmitter<void>();
  @Output() sortByChange = new EventEmitter<'title' | 'createdAt'>();

  /* -------------------------------------------------------------------------- */
  /*                                Event Handlers                              */
  /* -------------------------------------------------------------------------- */

  onEdit(task: TaskView): void {
    this.editTask.emit(task);
  }

  onDelete(task: TaskView): void {
    this.deleteTask.emit(task);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  onClearFilters(): void {
    this.clearFilters.emit();
  }

  onSortBy(field: 'title' | 'createdAt'): void {
    this.sortByChange.emit(field);
  }

}