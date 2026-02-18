import { Component, EventEmitter, input, Input, model, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPagination } from '@shared/components/shared-pagination/shared-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-table-footer',
  imports: [CommonModule, SharedPagination, NgSelectModule, FormsModule],
  templateUrl: './task-table-footer.html',
  styleUrl: './task-table-footer.css',
})
export class TaskTableFooter {

  @Input() total!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() pageSizeOptions!: readonly (number | string)[];
  @Input() selectedPageSize: number | 'All' = 5;

  @Output() clearFilters = new EventEmitter<void>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChangeTrigger = new EventEmitter<number | 'All'>();

  /**
   * Handles page size change (5, 10, 20, All)
   */
  onPageSizeChange(value: number | 'All'): void {

    this.selectedPageSize = value;

    // When page size changes, reset to first page
    this.pageSizeChangeTrigger.emit(value);
  }


}
