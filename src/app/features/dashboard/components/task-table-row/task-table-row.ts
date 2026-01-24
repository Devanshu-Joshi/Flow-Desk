import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskView } from '@core/models/Task';
import { UserModel } from '@core/models/UserModel';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tr[app-task-table-row]',
  standalone: true,
  imports: [CommonModule, NgSelectComponent, FormsModule],
  templateUrl: './task-table-row.html',
  styleUrl: './task-table-row.css',
  host: {
    class: 'hover:bg-gray-50 transition'
  }
})
export class TaskTableRow {

  /* -------------------------------------------------------------------------- */
  /*                                   Inputs                                   */
  /* -------------------------------------------------------------------------- */

  @Input({ required: true }) task!: TaskView;

  // ✅ Assigned users for THIS task (read-only display)
  @Input({ required: true }) assignedUsers!: UserModel[];

  // Optional: only keep if you really use it
  @Input() displayIndex?: number;

  /* -------------------------------------------------------------------------- */
  /*                                   Outputs                                  */
  /* -------------------------------------------------------------------------- */

  @Output() edit = new EventEmitter<TaskView>();
  @Output() delete = new EventEmitter<TaskView>();
}