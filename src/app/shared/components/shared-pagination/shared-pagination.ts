import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-shared-pagination',
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './shared-pagination.html',
  styleUrl: './shared-pagination.css',
})
export class SharedPagination implements OnChanges {
  /* ============================================================
     🔹 INPUTS
  ============================================================ */

  @Input() total: number = 0;
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() pageSizeOptions: readonly (number | string)[] = [];
  @Input() selectedPageSize: number | 'All' = 5;


  /* ============================================================
     🔹 OUTPUTS
  ============================================================ */

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number | 'All'>();


  /* ============================================================
     🔹 LIFECYCLE
  ============================================================ */

  ngOnChanges(changes: SimpleChanges): void {
    // Safety: ensure current page is always valid
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
      this.pageChange.emit(this.totalPages);
    }

    if (this.currentPage < 1) {
      this.currentPage = 1;
      this.pageChange.emit(1);
    }
  }


  /* ============================================================
     🔹 METHODS
  ============================================================ */

  /**
   * Handles page change from:
   * - Prev button
   * - Next button
   * - Page number buttons
   */
  onPageChange(page: number): void {

    if (page < 1 || page > this.totalPages) return;
    if (page === this.currentPage) return;

    this.pageChange.emit(page);
  }


  /**
   * Handles page size change (5, 10, 20, All)
   */
  onPageSizeChange(value: number | 'All'): void {

    this.selectedPageSize = value;

    // When page size changes, reset to first page
    this.pageSizeChange.emit(value);
  }
}
