import { Component, EventEmitter, input, Input, model, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPagination } from '@shared/components/shared-pagination/shared-pagination';

@Component({
  selector: 'app-task-table-footer',
  imports: [CommonModule, SharedPagination],
  templateUrl: './task-table-footer.html',
  styleUrl: './task-table-footer.css',
})
export class TaskTableFooter {

  @Input() total!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() pageSizeOptions!: readonly (number | string)[];
  @Input() selectedPageSize!: number | 'All';

  @Output() clearFilters = new EventEmitter<void>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChangeTrigger = new EventEmitter<number | 'All'>();


}
