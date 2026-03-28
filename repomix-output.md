This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/app/features/tasks/components/task-table-footer/task-table-footer.html, src/app/features/tasks/components/task-table-footer/task-table-footer.ts, src/app/features/tasks/components/task-table-footer/task-table-footer.css, src/app/features/users/components/user-table/user-table.html, src/app/features/users/components/user-table/user-table.ts, src/app/features/users/components/user-table/user-table.css, src/styles.css
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/app/features/tasks/components/task-table-footer/task-table-footer.css
src/app/features/tasks/components/task-table-footer/task-table-footer.html
src/app/features/tasks/components/task-table-footer/task-table-footer.ts
src/app/features/users/components/user-table/user-table.css
src/app/features/users/components/user-table/user-table.html
src/app/features/users/components/user-table/user-table.ts
src/styles.css
```

# Files

## File: src/styles.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import "tailwindcss";

* {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

body {
    margin: 0;
    overflow-x: hidden;
    overscroll-behavior: none;
}

.body-lock {
    overflow: hidden;
}

.md-drppicker,
.daterangepicker {
    position: absolute !important;
    top: 57px !important;
}

.md-drppicker {
    width: max-content !important;
}

.md-drppicker .buttons {
    clear: both;
    display: flex !important;
    justify-content: center;
    margin-top: 1rem;
}

/* md-drppicker buttons */
.md-drppicker .btn {
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    padding: 2px 10px;

    background: linear-gradient(to right, #7c3aed, #4f46e5);
    color: #ffffff;

    box-shadow: 0 4px 10px rgba(168, 85, 247, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.md-drppicker .btn.btn-default {
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    padding: 2px 10px;

    background: none !important;
    background-color: red !important;
    color: #ffffff;

    box-shadow: 0 4px 10px rgba(168, 85, 247, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.md-drppicker .btn.btn-default svg {
    display: none;
}

.md-drppicker .buttons_input {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.md-drppicker .btn {
    cursor: pointer !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 2px 10px !important;

    background: linear-gradient(to right, #7c3aed, #4f46e5) !important;
    color: #ffffff !important;

    box-shadow: 0 4px 10px rgba(168, 85, 247, 0.3) !important;

    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.md-drppicker .btn:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 6px 14px rgba(168, 85, 247, 0.4) !important;
}

.md-drppicker .btn.btn-default {
    cursor: pointer !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 2px 10px !important;

    background: none !important;
    background-color: red !important;
    color: #ffffff !important;

    box-shadow: 0 4px 10px rgba(168, 85, 247, 0.3) !important;

    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.md-drppicker .btn.btn-default svg {
    display: none;
}

.md-drppicker .buttons_input {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.ngx-pagination .current {
    background: linear-gradient(to right, #411986, #4f46e5) !important;
    color: #fff;
    border-radius: 4px;
}

.ngx-pagination * {
    font-size: 1rem;
}

.ngx-pagination {
    display: flex;
    gap: 0.5rem;
}

.ngx-pagination li::before {
    content: none !important;
}

.ngx-pagination li a::before {
    content: none !important;
}

.ngx-pagination li::after {
    content: none !important;
}

.ngx-pagination li a::after {
    content: none !important;
}

.ngx-pagination .pagination-previous a {
    border-radius: 20px 0 0 20px !important;
    background: linear-gradient(to right, #4f46e5, #411986) !important;
    color: #ffffff !important;
}

.ngx-pagination .disabled {
    background: gray !important;
    color: #ffffff !important;
}

.ngx-pagination .pagination-next a {
    border-radius: 0 20px 20px 0 !important;
    background: linear-gradient(to right, #411986, #4f46e5) !important;
    color: #ffffff !important;
}

.ngx-pagination .pagination-previous.disabled {
    border-radius: 20px 0px 0px 20px !important;
    background: gray !important;
    color: #ffffff !important;
}

.ngx-pagination .pagination-next.disabled {
    border-radius: 0 20px 20px 0 !important;
    background: gray !important;
    color: #ffffff !important;
}

/* ng-select container */
.ng-select {
    @apply text-sm;
}

/* task - form ng select */
.filter-select .ng-select-container {
    background: #ffffff;
    border-radius: 0.5rem;
    min-height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.filter-select .ng-select-container:hover {
    border-color: #9ca3af;
}

/* Selected value text */
.filter-select .ng-value {
    font-weight: 600;
    color: #374151;
}

/* Arrow alignment fix */
.filter-select .ng-arrow-wrapper {
    padding-right: 6px;
}

/* Dropdown panel */
.filter-select {
    background: #ffffff;
    border-radius: 0.5rem;
    /* margin-top: 4px; */
    /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12); */
}

/* Dropdown options */
.filter-select .ng-option {
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.15s ease;
}

/* Hover state */
.filter-select .ng-option:hover {
    background: #eef2ff;
}

/* Selected option */
.filter-select .ng-option-selected {
    font-weight: 600;
    background: #eef2ff;
}

/*** Custom Scrollbar ***/

/* Chrome, Edge, Safari – Premium Glass Scrollbar (Black Background) */
::-webkit-scrollbar {
    width: 10px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgb(0, 0, 0);
    /* border-radius: 999px; */
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,
            rgb(255, 255, 255),
            rgb(255, 255, 255));
    border-radius: 999px;
    border: 2px solid rgb(0, 0, 0);
    box-shadow:
        inset 0 0 1px rgba(0, 0, 0, 0.8),
        0 4px 14px rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    transition: all 0.25s ease;

    /* border: 2px solid red; */
}

::-webkit-scrollbar-thumb:active {
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.719),
            rgba(255, 255, 255, 0.726));
}

/* Drag Drop */

tr[cdkdrag] {
    display: table-row;
}

.cdk-drag-preview {
    display: table;
}

.cdk-drag-placeholder {
    opacity: 0.3;
}

.cdk-drag-handle {
    display: inline-flex !important;
    visibility: visible !important;
}
```

## File: src/app/features/users/components/user-table/user-table.css
```css
/*** Users per page ***/

:host ::ng-deep .users-per-page-select.ng-select {
    width: 100%;
    min-width: 0;
}

:host ::ng-deep .users-per-page-select .ng-select-container {
    display: flex;
    align-items: center;

    background-color: #ffffff;
    border: 2px solid #d1d5db;
    border-radius: 0.5rem;

    padding: 0 0.75rem;
    height: 2.75rem;
    min-height: 2.75rem;

    font-size: 0.875rem;
    font-weight: 400;
    color: #374151;

    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

:host ::ng-deep .users-per-page-select .ng-placeholder {
    color: #9ca3af;
    font-weight: 400;
    font-size: 0.875rem;
}

:host ::ng-deep .users-per-page-select .ng-select-container:hover {
    border-color: #a5b4fc;
}

:host ::ng-deep .users-per-page-select.ng-select-focused .ng-select-container {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:host ::ng-deep .users-per-page-select .ng-value-container {
    padding: 0;
    align-items: center;
}

:host ::ng-deep .users-per-page-select .ng-input {
    display: none;
}

:host ::ng-deep .users-per-page-select .ng-arrow {
    border: none;
    color: #6b7280;
}

:host ::ng-deep .users-per-page-select .ng-has-value {
    padding: 0 10px;
    gap: 0;
}

:host ::ng-deep .users-per-page-select .ng-select-container * {
    cursor: pointer !important;
}

:host ::ng-deep .users-per-page-select .ng-dropdown-panel {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin-top: 6px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

:host ::ng-deep .users-per-page-select .ng-dropdown-panel-items {
    background-color: #ffffff;
}

:host ::ng-deep .users-per-page-select .ng-option {
    padding: 10px 14px;
    border-radius: 8px;
    margin: 2px 6px;
    font-size: 0.875rem;
    font-weight: 400;
    transition: background 0.15s ease;
    cursor: pointer;
}

:host ::ng-deep .users-per-page-select .ng-option:hover,
:host ::ng-deep .users-per-page-select .ng-option.ng-option-marked {
    background-color: #f1f5f9;
}

:host ::ng-deep .users-per-page-select .ng-option.ng-option-selected {
    background-color: #eef2ff;
    color: #3730a3;
    font-weight: 600;
}

:host ::ng-deep .users-per-page-select.ng-select-opened .ng-select-container {
    z-index: 1;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:host ::ng-deep .users-per-page-select.ng-select-opened .ng-select-bottom {
    z-index: 45;
}

/*** Permissions ***/

.permission-select {
    width: 100%;
    min-width: 0;
}

.permission-select ::ng-deep .ng-select-container {
    display: flex;
    align-items: center;

    background-color: #ffffff;
    border: 2px solid #d1d5db;
    border-radius: 0.5rem;

    padding: 0 0.75rem;
    height: 2.75rem;
    min-height: 2.75rem;

    font-size: 0.875rem;
    font-weight: 400;
    color: #374151;

    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.permission-select ::ng-deep .ng-placeholder {
    color: #9ca3af;
    font-weight: 400;
    font-size: 0.875rem;
}

.permission-select ::ng-deep .ng-select-container:hover {
    border-color: #a5b4fc;
}

:host ::ng-deep .permission-select.ng-select-focused .ng-select-container {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.permission-select ::ng-deep .ng-value-container {
    padding: 0;
    align-items: center;
}

.permission-select ::ng-deep .ng-select-container * {
    cursor: pointer !important;
}

.permission-select ::ng-deep .ng-arrow {
    color: #6b7280;
    /* gray-500 */
}

.permission-select ::ng-deep .ng-dropdown-panel {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin-top: 6px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

.permission-select ::ng-deep .ng-dropdown-panel-items {
    background-color: #ffffff;
}

/* Dropdown options */
.permission-select ::ng-deep .ng-option {
    padding: 10px 14px;
    border-radius: 8px;
    margin: 2px 6px;
    font-size: 0.875rem;
    font-weight: 400;
    transition: background 0.15s ease;
}

/* Option hover */
.permission-select ::ng-deep .ng-option:hover,
.permission-select ::ng-deep .ng-option.ng-option-marked {
    background-color: #f1f5f9;
}

/* Selected option */
.permission-select ::ng-deep .ng-option.ng-option-selected {
    background-color: #eef2ff;
    color: #3730a3;
}

/* Group header */
.permission-select ::ng-deep .ng-optgroup {
    background-color: #ffffff;
    padding: 10px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
    border-bottom: 1px solid #f1f5f9;
}

/* Prevent text wrapping */
.permission-select ::ng-deep .ng-value,
.permission-select ::ng-deep .ng-option,
.permission-select ::ng-deep .ng-placeholder {
    white-space: nowrap;
}

:host ::ng-deep .permission-select.ng-select-opened .ng-select-container {
    z-index: 1;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

:host ::ng-deep .permission-select.ng-select-opened .ng-select-bottom {
    z-index: 45;
}

/* Clear button styling */
.permission-select ::ng-deep .ng-clear-wrapper {
    color: #9ca3af;
    transition: color 150ms ease;
}

.permission-select ::ng-deep .ng-clear-wrapper:hover {
    color: #ef4444;
}

/* Checkbox styling */
.modern-checkbox {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1.5px solid #cbd5e1;
    accent-color: #6366f1;
}

/* Multi-label badges */
.badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
}

/* Badge variants */
.badge-success {
    background-color: #ecfdf5;
    color: #065f46;
}

.badge-warning {
    background-color: #fffbeb;
    color: #92400e;
}

/*** Date Range Picker ***/

:host ::ng-deep .md-drppicker {
    z-index: 75;
}

@media (max-width: 1024px) {

    :host ::ng-deep .md-drppicker,
    .daterangepicker {
        position: absolute !important;
        top: 110px !important;
    }
}

@media (max-width: 640px) {

    :host ::ng-deep .md-drppicker,
    .daterangepicker {
        position: absolute !important;
        top: 166px !important;
    }
}
```

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.ts
```typescript
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
```

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.css
```css
:host {
    display: block;
}

.pagination-sm ::ng-deep .ngx-pagination {
    margin-bottom: 0;
}

@media (max-width: 600px) {
    .pagination-sm {
        display: flex;
        justify-content: center;
    }

    .pagination-sm ::ng-deep .small-screen {
        display: flex;
        align-items: center;
        font-size: larger;
    }

    .clear-filters-button {
        display: flex;
        justify-content: center;
        font-weight: 900;
    }
}

@media (max-width: 400px) {
    .btnContainer {
        flex-direction: column;
        align-items: center;
    }

    .paginationContainer {
        width: 100%;
    }

    .clearBtn {
        width: 100%;
    }
}

/* ============================================================
   🔹 PAGE SIZE DROPDOWN (ng-select)
============================================================ */

/* Dropdown panel border */
:host ::ng-deep .ng-dropdown-panel-items {
    border: 2px solid gray !important;
}


/* Main ng-select wrapper */
:host ::ng-deep .items-per-page-select.ng-select {
    width: 100%;
    min-width: 0;
}


/* Select container styling */
:host ::ng-deep .items-per-page-select .ng-select-container {
    display: flex;
    align-items: center;

    border-width: 2px;
    border-style: solid;
    border-color: #d1d5db;
    /* gray-300 */

    border-radius: 0.5rem;
    /* rounded-lg */

    cursor: pointer;
    transition: border-color 150ms ease-in-out;

    height: 2rem;
    min-height: 2rem;
    padding-right: 0 !important;
}


/* Hover border */
:host ::ng-deep .items-per-page-select .ng-select-container:hover {
    border-color: #6366f1;
    /* indigo-500 */
}


/* Remove default padding */
:host ::ng-deep .items-per-page-select .ng-value-container {
    padding: 0;
    align-items: center;
}


/* Hide search input */
:host ::ng-deep .items-per-page-select .ng-input {
    display: none;
}


/* ============================================================
   🔹 CUSTOM DROPDOWN ARROW
============================================================ */

:host ::ng-deep .ng-select .ng-arrow-wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:host ::ng-deep .ng-select .ng-arrow {
    display: none;
    /* Hide default arrow */
}

:host ::ng-deep .ng-select .ng-arrow-wrapper::after {
    content: "▴";
    font-size: 20px;
    color: #666;
    transition: transform 0.2s ease;
}

/* Rotate arrow when opened */
:host ::ng-deep .ng-select.ng-select-opened .ng-arrow-wrapper::after {
    transform: rotate(180deg);
}


/* Prevent wrapping inside dropdown */
:host ::ng-deep .items-per-page-select .ng-value,
:host ::ng-deep .items-per-page-select .ng-option,
:host ::ng-deep .items-per-page-select .ng-placeholder {
    white-space: nowrap;
}


/* Value padding */
:host ::ng-deep .items-per-page-select .ng-has-value {
    padding: 0 10px;
    gap: 0;
}


/* Fix z-index stacking */
:host ::ng-deep .items-per-page-select.ng-select-opened .ng-select-container {
    z-index: 1;
}

:host ::ng-deep .items-per-page-select.ng-select-opened .ng-select-bottom {
    z-index: 45;
}
```

## File: src/app/features/users/components/user-table/user-table.html
```html
<div class="w-full bg-white rounded-lg px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-6 sm:pt-7">

    <!-- User Table Filters -->
    <div class="flex flex-col lg:flex-row w-full gap-4 mb-5">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full min-w-0 lg:flex lg:flex-row relative">

            <!-- Search Input -->
            <div class="relative w-full min-w-0 sm:col-span-2 lg:flex-1 lg:min-w-36.25">
                <input type="search"
                    class="w-full border-2 border-gray-300 pr-10 pl-4 py-2 rounded-lg text-sm focus:outline-none h-11 placeholder:text-gray-400"
                    placeholder="Search..." [formControl]="searchControl" />
                <i class="bx bx-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></i>
            </div>

            <!-- Permission Select -->
            <div class="relative w-full min-w-38 sm:col-span-1 lg:w-50">
                <ng-select [items]="permissions" [multiple]="true" bindLabel="label" bindValue="key" groupBy="group"
                    [closeOnSelect]="false" placeholder="Permissions" [ngModel]="selectedPermissions()"
                    (ngModelChange)="selectedPermissions.set($event)"
                    class="permission-select placeholder:text-gray-400 cursor-pointer">

                    <ng-template ng-optgroup-tmp>
                        <label class="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" class="modern-checkbox cursor-pointer" [checked]="isAllSelected()"
                                [indeterminate]="selectedPermissions().length > 0 && !isAllSelected()"
                                (click)="$event.stopPropagation()" (change)="toggleAll($any($event.target).checked)" />
                            <strong class="text-slate-700">All</strong>
                        </label>
                    </ng-template>

                    <ng-template ng-option-tmp let-item="item" let-item$="item$">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="modern-checkbox pointer-events-none"
                                [checked]="item$.selected" tabindex="-1" />
                            <span class="text-slate-700">{{ item.label }}</span>
                        </div>
                    </ng-template>

                    <ng-template ng-multi-label-tmp let-items="items">
                        @if (isAllSelected()) {
                        <span class="badge badge-success">All Permissions</span>
                        }

                        @if (!isAllSelected() && items.length > 0) {
                        <span class="badge badge-warning">
                            {{ items.length }} Selected
                        </span>
                        }
                    </ng-template>

                </ng-select>
            </div>

            <!-- Date Picker -->
            <div class="w-full sm:col-span-2 lg:w-[18rem]">
                <input ngxDaterangepickerMd [(ngModel)]="dateRange" [autoApply]="false" [alwaysShowCalendars]="true"
                    [showClearButton]="true" [drops]="'down'" [opens]="'right'" [locale]="{ format: 'DD/MM/YYYY' }"
                    [linkedCalendars]="true" placeholder="Date range"
                    class="border-2 border-gray-300 px-4 py-2 rounded-lg w-full cursor-pointer text-sm h-11 placeholder:text-gray-400"
                    (click)="toggleDatePicker()" [title]="dateRange()?.startDate && dateRange()?.endDate 
  ? ( (dateRange()?.startDate | date:'dd/MM/yyyy':'UTC') + ' to ' + (dateRange()?.endDate | date:'dd/MM/yyyy':'UTC') )
  : ''" />
            </div>

            <!-- Page Size Select (fixed width; fits label well) -->
            <div class="relative w-full min-w-44 sm:col-span-1 lg:w-52">
                <ng-select class="users-per-page-select filter-select w-full" [items]="pageSizeOptions"
                    [clearable]="false" [searchable]="false" [ngModel]="selectedPageSize()"
                    (ngModelChange)="onPageSizeChange($event)" [closeOnSelect]="true">
                    <ng-template ng-label-tmp let-item="item">
                        <span class="text-sm whitespace-nowrap">
                            Users per page : <strong>{{ item }}</strong>
                        </span>
                    </ng-template>

                    <ng-template ng-option-tmp let-item="item">
                        {{ item }}
                    </ng-template>
                </ng-select>
            </div>

        </div>

        <!-- Add Task Button -->
        <div class="flex gap-2 w-full sm:col-span-1 lg:w-auto lg:shrink-0">
            <button class="cursor-pointer w-full lg:w-auto py-2 px-4 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600
             text-white shadow-md shadow-purple-500/30
             hover:shadow-lg hover:shadow-purple-500/40
             lg:hover:scale-105 transition-all duration-200" (click)="addUser.emit()">
                Add User
            </button>
        </div>

    </div>

    <!-- User Table -->

    <div class="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">

        <!-- 1. Horizontal Scroll Container -->
        <div class="overflow-x-auto custom-scrollbar">

            <!-- 2. Table: Removed 'w-full', added 'min-w-full' to ensure it stretches if content is small, 
             but expands indefinitely if content is wide. Removed 'table-fixed'. -->
            <table class="w-full min-w-275 text-xs sm:text-sm text-left border-collapse">

                <thead class="bg-gray-50 text-gray-600 uppercase text-[10px] sm:text-xs sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th class="min-w-20 px-6 py-4 text-center">S.No</th>
                        <th class="min-w-75 px-6 py-4 text-left">User</th>
                        <th class="min-w-40 px-6 py-4 text-center whitespace-nowrap">Created Date</th>
                        <th class="min-w-95 px-6 py-4 text-left">Permissions</th>
                        <th class="min-w-45 px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    @for (
                    user of (filteredTasks() | paginate: { itemsPerPage: itemsPerPage, currentPage: p });
                    let i = $index;
                    track user.id
                    ) {
                    <!-- Added whitespace-nowrap to the row to ensure nothing wraps -->
                    <tr class="hover:bg-gray-50 transition-colors duration-150" (click)="viewUser.emit(user)">

                        <!-- S.No -->
                        <td class="px-6 py-4 text-center font-medium text-gray-500">
                            {{ (p - 1) * itemsPerPage + i + 1 }}
                        </td>

                        <!-- User Info: Removed 'truncate' so full name/email shows -->
                        <td class="min-w-75 px-6 py-4">
                            <div class="flex items-center gap-3">
                                <img [src]="user.avatar || 'assets/avatar-placeholder.png'"
                                    class="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                    alt="avatar" />

                                <div class="w-55">
                                    <p class="font-semibold text-gray-800 text-sm truncate" [title]="user.name">
                                        {{ user.name | slice:0:25 }}{{ user.name.length > 25 ? '...' : '' }}
                                    </p>

                                    <p class="text-xs text-gray-500 truncate" [title]="user.email">
                                        {{ user.email }}
                                    </p>
                                </div>
                            </div>
                        </td>

                        <!-- Created Date -->
                        <td class="px-6 py-4 text-center text-gray-600">
                            {{ user.createdAt | date:'dd MMM yyyy' }}
                        </td>

                        <!-- Permissions: The star of the show -->
                        <td class="min-w-95 px-6 py-4">
                            <div class="w-full overflow-hidden">
                                <div class="flex flex-nowrap gap-2 overflow-hidden">

                                    @if (user.permissions.length) {
                                    @for (perm of user.permissions; track perm) {
                                    <span
                                        class="px-2.5 py-1 text-[11px] font-medium rounded-md border shadow-sm ring-1 ring-inset whitespace-nowrap shrink-0"
                                        [ngClass]="getPermissionClass(perm)">
                                        {{ getPermissionLabel(perm) }}
                                    </span>
                                    }
                                    } @else {
                                    <span
                                        class="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-50 text-gray-400 border border-gray-200">
                                        No permissions
                                    </span>
                                    }

                                </div>
                            </div>
                        </td>

                        <!-- Actions -->
                        <td class="min-w-45 px-6 py-4 text-center" (click)="$event.stopPropagation()">
                            <div class="flex justify-center gap-3 whitespace-nowrap">
                                <button
                                    class="text-yellow-700 hover:text-yellow-600 hover:bg-yellow-50 px-2 py-1 rounded transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                                    (click)="editUser.emit(user); $event.stopPropagation()">
                                    <i class="bx bx-edit text-lg"></i>
                                    <span class="text-xs font-medium">Edit</span>
                                </button>

                                <button
                                    class="text-red-700 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                                    (click)="deleteUser.emit(user); $event.stopPropagation()">
                                    <i class="bx bx-trash text-lg"></i>
                                    <span class="text-xs font-medium">Delete</span>
                                </button>
                            </div>
                        </td>

                    </tr>
                    }
                    @empty {
                    <tr>
                        <td colspan="5" class="p-8">
                            <app-empty-state></app-empty-state>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>

        <!-- Footer (Kept the same) -->
        <div class="w-full border-t border-gray-200 bg-white px-4 py-4">
            <!-- ... keep your existing footer code ... -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                <div class="text-sm text-gray-500 whitespace-nowrap">
                    Total Tasks : <span class="ml-1 font-bold text-gray-900">{{ totalItems() }}</span>
                </div>
                <!-- Pagination logic here -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <!-- Keep existing pagination code -->
                    <button (click)="clearFilters()"
                        class="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline focus:outline-none cursor-pointer text-left sm:text-center clear-filters-button underline">
                        Clear Filters
                    </button>
                    @if(totalItems() > itemsPerPage && totalItems() > 0) {
                    <div class="w-full sm:w-auto overflow-x-auto pagination-sm">
                        <pagination-controls previousLabel="Prev" nextLabel="Next" [responsive]=true
                            (pageChange)="p = $event">
                        </pagination-controls>
                    </div>
                    }
                </div>
            </div>
        </div>

    </div>

    <app-loading-overlay [show]="isLoading()" text="Loading users..."></app-loading-overlay>
```

## File: src/app/features/users/components/user-table/user-table.ts
```typescript
import {
  Component,
  computed,
  EventEmitter,
  inject,
  DestroyRef,
  Input,
  input,
  model,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TaskStatus } from '@features/tasks/pages/tasks/tasks';
import { PermissionItem } from '@core/models/PermissionItem';

import dayjs from 'dayjs';

import { EmptyState } from '@shared/components/empty-state/empty-state';

import { NgxPaginationModule } from 'ngx-pagination';
import { UserModel } from '@core/models/UserModel';
import { PermissionKey } from '@core/models/PermissionKey';
import { UserService } from '@core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { finalize, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { getPermissionLabel } from '@core/models/PERMISSION_LABELS';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';

@Component({
  selector: 'app-user-table',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxDaterangepickerMd,
    NgxPaginationModule,
    EmptyState,
    LoadingOverlay
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable {

  constructor(private userService: UserService, private toastr: ToastrService, private authService: UserAuth) { }

  getPermissionLabel = getPermissionLabel;
  isLoading = signal<boolean>(false);

  @Output() addUser = new EventEmitter<void>();
  @Output() viewUser = new EventEmitter<UserModel>();
  @Output() editUser = new EventEmitter<UserModel>();
  @Output() deleteUser = new EventEmitter<UserModel>();


  deleteUserMethod(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.toastr.success("User Deleted Successfully", "Action Confirmed")
      },
      error: (err) => console.error(err)
    })
  }
  editUserMethod(_t93: UserModel) {
    throw new Error('Method not implemented.');
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Injections                                 */
  /* -------------------------------------------------------------------------- */

  fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  @Input() users$!: Observable<UserModel[] | null>;
  users = signal<UserModel[] | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                               Form Controls                                */
  /* -------------------------------------------------------------------------- */

  searchControl: FormControl = new FormControl('');

  taskForm = this.fb.nonNullable.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    dueDate: ['', Validators.required],
    status: ['INCOMPLETE' as TaskStatus, Validators.required]
  });

  /* -------------------------------------------------------------------------- */
  /*                                 Signals                                    */
  /* -------------------------------------------------------------------------- */

  searchTerm = signal('');
  selectedRole = signal<string | null>(null);
  dateRange = signal<{ startDate: any; endDate: any } | null>(null);

  sortDirection = signal<'asc' | 'desc'>('desc');

  selectedPageSize = model<number | 'All'>(5);

  /* -------------------------------------------------------------------------- */
  /*                                Pagination                                  */
  /* -------------------------------------------------------------------------- */

  itemsPerPage = 5;
  p: number = 1;
  isTasksDropdownOpen = false;

  pageSizeOptions = [5, 10, 20, 'All'] as const;

  totalItems = computed(() => this.filteredTasks().length);

  /* -------------------------------------------------------------------------- */
  /*                                   Data                                     */
  /* -------------------------------------------------------------------------- */

  permissions: PermissionItem[] = [
    {
      key: PermissionKey.TASK_VIEW,
      label: 'View Tasks',
      group: 'Management',
      description: 'Allows viewing tasks'
    },
    {
      key: PermissionKey.TASK_CREATE,
      label: 'Create Tasks',
      group: 'Management',
      description: 'Allows creating new tasks'
    },
    {
      key: PermissionKey.TASK_EDIT,
      label: 'Edit Tasks',
      group: 'Management',
      description: 'Allows editing existing tasks'
    },
    {
      key: PermissionKey.TASK_DELETE,
      label: 'Delete Tasks',
      group: 'Management',
      description: 'Allows deleting tasks'
    },
    {
      key: PermissionKey.MANAGE_USER,
      label: 'Manage Users',
      group: 'Management',
      description: 'Allows managing users and their permissions'
    }
  ];

  selectedPermissions = signal<PermissionKey[]>([]);

  /* -------------------------------------------------------------------------- */
  /*                                 Lifecycle                                  */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.isLoading.set(true);
    this.selectedPermissions.set(this.permissions.map(p => p.key));

    this.searchControl.valueChanges.subscribe(value => {
      this.searchTerm.set(value ?? '');
    });

    this.users$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(users => {

        // 🟡 STILL LOADING
        if (users === null) {
          this.isLoading.set(true);
          return;
        }

        // 🟢 DATA ARRIVED
        const currentUser = this.authService.currentUserSignal();

        const filteredUsers = currentUser
          ? users.filter(u =>
            u.id !== currentUser.id &&
            (currentUser.parentId !== '-1' ? u.id !== currentUser.parentId : true)
          )
          : users;

        this.users.set(filteredUsers);
        this.isLoading.set(false);
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                             Permissions Logic                               */
  /* -------------------------------------------------------------------------- */

  get allPermissionKeys(): PermissionKey[] {
    return this.permissions.map(p => p.key);
  }

  isAllSelected(): boolean {
    return (
      this.selectedPermissions().length === this.allPermissionKeys.length &&
      this.allPermissionKeys.every(k =>
        this.selectedPermissions().includes(k)
      )
    );
  }

  toggleAll(checked: boolean): void {
    this.selectedPermissions.set(checked
      ? [...this.allPermissionKeys]
      : []);
  }

  clearFilters(): void {
    // Clear search box
    this.searchControl.setValue('');

    // Reset date range (show all dates)
    this.dateRange.set(null);

    // Reset permissions to all selected
    this.selectedPermissions.set([...this.allPermissionKeys]);

    // Reset tasks per page to default (5)
    this.selectedPageSize.set(5);
    this.itemsPerPage = 5;

    // Reset pagination to first page
    this.p = 1;
  }

  onSelectionChange(): void {
    this.selectedPermissions.set(this.selectedPermissions().filter(k =>
      this.allPermissionKeys.includes(k)
    ));
  }

  onPermissionsChange(values: PermissionKey[]): void {
    this.selectedPermissions.set(values);
  }

  /* -------------------------------------------------------------------------- */
  /*                              Date Picker                                   */
  /* -------------------------------------------------------------------------- */

  toggleDatePicker(): void {
    const picker = document.querySelector(
      '.md-drppicker'
    ) as HTMLElement;

    if (picker.classList.contains('shown')) {
      picker.classList.remove('shown');
      picker.classList.add('hidden');
    } else {
      picker.classList.remove('hidden');
      picker.classList.add('shown');
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              Pagination Logic                               */
  /* -------------------------------------------------------------------------- */

  onPageSizeChange(value: number | 'All'): void {
    this.selectedPageSize.set(value);
    this.setItemsPerPage(value);
  }

  setItemsPerPage(value: number | 'All'): void {
    if (this.totalItems == undefined)
      this.itemsPerPage = 0;
    else {
      this.itemsPerPage =
        value === 'All' ? this.totalItems() : value;
    }

    this.p = 1;
    this.isTasksDropdownOpen = false;
  }

  /* -------------------------------------------------------------------------- */
  /*                              Filtering & Sorting                            */
  /* -------------------------------------------------------------------------- */

  filteredTasks = computed<UserModel[]>(() => {
    const users = this.users();

    if (!users || users.length === 0) {
      return [];
    }

    const term = this.searchTerm().toLowerCase();
    const range = this.dateRange();
    const selectedPermissions = this.selectedPermissions();

    return users.filter(user => {
      const matchesSearch =
        !term || user.name.toLowerCase().includes(term);

      const matchesPermissions =
        !selectedPermissions.length ||
        selectedPermissions.some(permission =>
          user.permissions?.includes(permission)
        );

      let matchesDate = true;

      if (range?.startDate && range?.endDate) {
        const userDate = dayjs(user.createdAt).format('YYYY-MM-DD');
        const startDate = dayjs(range.startDate).format('YYYY-MM-DD');
        const endDate = dayjs(range.endDate).format('YYYY-MM-DD');

        matchesDate = userDate >= startDate && userDate <= endDate;
      }

      return matchesSearch && matchesPermissions && matchesDate;
    });
  });

  /* -------------------------------------------------------------------------- */
  /*                               Dialog Logic                                  */
  /* -------------------------------------------------------------------------- */

  isDialogClosed: boolean = true;

  resetForm(): void {
    this.taskForm.reset({
      title: '',
      dueDate: '',
      status: 'INCOMPLETE'
    });

    this.taskForm.enable();
  }

  getPermissionClass(permission: string): string {
    switch (permission) {
      case 'TASK_VIEW':
        return 'bg-blue-50 text-blue-700 border-blue-200 ring-blue-600/20'; // Neutral/Base
      case 'TASK_CREATE':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-600/20'; // Positive
      case 'TASK_EDIT':
        return 'bg-amber-50 text-amber-700 border-amber-200 ring-amber-600/20'; // Caution
      case 'TASK_DELETE':
        return 'bg-rose-50 text-rose-700 border-rose-200 ring-rose-600/20'; // Danger
      case 'MANAGE_USER':
        return 'bg-purple-50 text-purple-700 border-purple-200 ring-purple-600/20'; // Admin
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  }

}
```

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.html
```html
<div class="w-full border-t border-gray-200 bg-white px-3 sm:px-4 py-3">

    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

        <div class="flex flex-row justify-center gap-2 lg:gap-3 btnContainer">

            <div class="paginationContainer w-auto relative">
                <ng-select class="items-per-page-select filter-select w-48 absolute" [items]="pageSizeOptions"
                    [clearable]="false" [searchable]="false" [ngModel]="selectedPageSize"
                    (ngModelChange)="onPageSizeChange($event)" [closeOnSelect]="true" [dropdownPosition]="'top'"
                    appendTo=".paginationContainer">

                    <ng-template ng-label-tmp let-item="item">
                        <!-- whitespace-nowrap prevents "Items per page" from wrapping -->
                        <span class="text-sm whitespace-nowrap">
                            Items per page : <strong>{{ item }}</strong>
                        </span>
                    </ng-template>

                    <ng-template ng-option-tmp let-item="item">
                        {{ item }}
                    </ng-template>

                </ng-select>
            </div>

            <!-- CLEAR FILTERS BUTTON -->
            <button (click)="clearFilters.emit()"
                class="px-3 text-sm font-semibold text-red-600 border border-red-200 rounded-md bg-red-50 hover:bg-red-100 hover:border-red-300 transition whitespace-nowrap clearBtn h-8">
                Clear Filters
            </button>

        </div>

        <!-- ───────── PAGINATION (centre) ───────── -->
        <div class="flex justify-center">
            <app-shared-pagination [total]="total" [itemsPerPage]="itemsPerPage" [currentPage]="currentPage"
                [totalPages]="totalPages" (pageChange)="pageChange.emit($event)">
            </app-shared-pagination>
        </div>

        <!-- ───────── TOTAL (right) ───────── -->
        <div class="text-sm text-gray-500 whitespace-nowrap text-center lg:text-right">
            Total Tasks :
            <span class="ml-1 font-bold text-gray-900">{{ total }}</span>
        </div>

    </div>

</div>
```
