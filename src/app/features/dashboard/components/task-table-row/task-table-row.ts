import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskView } from '@core/models/Task';

@Component({
  selector: 'tr[app-task-table-row]',
  imports: [CommonModule],
  templateUrl: './task-table-row.html',
  styleUrl: './task-table-row.css',
  host: {
    class: 'hover:bg-gray-50 transition'
  }
})
export class TaskTableRow {
  @Input({ required: true }) task!: TaskView;
  @Input({ required: true }) displayIndex!: number;

  @Output() edit = new EventEmitter<TaskView>();
  @Output() delete = new EventEmitter<TaskView>();
}
