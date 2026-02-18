import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-pagination',
  imports: [
    CommonModule
  ],
  templateUrl: './shared-pagination.html',
  styleUrl: './shared-pagination.css',
})
export class SharedPagination implements OnChanges {

  /* INPUTS */
  @Input() total: number = 0;
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  /* OUTPUTS */
  @Output() pageChange = new EventEmitter<number>();

  /* LIFECYCLE */
  ngOnChanges(): void {
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
      this.pageChange.emit(this.totalPages);
    }

    if (this.currentPage < 1) {
      this.currentPage = 1;
      this.pageChange.emit(1);
    }
  }

  /* METHODS */
  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    if (page === this.currentPage) return;

    this.pageChange.emit(page);
  }

  readonly MAX_VISIBLE_PAGES = 5;
  readonly MAX_VISIBLE_PAGES_SM = 3;

  getVisiblePages(max: number): number[] {
    if (this.totalPages <= max) {
      return Array.from({ length: this.totalPages },
        (_, i) => i + 1);

    }
    const half = Math.floor(max / 2);
    let start = this.currentPage - half;
    let end = this.currentPage + half;
    if (start < 1) { start = 1; end = max; }
    if (end > this.totalPages) {
      end = this.totalPages;
      start = end - max + 1;
    }
    return Array.from({ length: end - start + 1 },
      (_, i) => start + i);

  }
}