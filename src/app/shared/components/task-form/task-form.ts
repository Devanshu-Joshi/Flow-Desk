import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UserModel } from '@core/models/UserModel';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule, NgSelectComponent],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Input({ required: true }) form!: FormGroup;

  @Input() dialogTitle: string = 'Add';
  @Input() dialogDescription: string = 'Add task details below';
  @Input() dialogTitleColor: 'text-primary' | 'text-warn' | 'text-danger' = 'text-primary';
  @Input() dialogSubmitText: string = 'Save';
  @Input() isDeleting: boolean = false;
  users = input.required<UserModel[]>();

  @Output() submitForm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  shakeField: string | null = null;

  statusOptions = [
    { label: 'Incomplete', value: 'INCOMPLETE' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Completed', value: 'COMPLETED' },
  ];

  priorityOptions = [
    { label: 'High', value: 'HIGH' },
    { label: 'Normal', value: 'NORMAL' },
    { label: 'Low', value: 'LOW' },
  ];

  private fieldOrder = ['title', 'dueDate', 'assignedTo', 'status', 'priority'];

  attemptSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      const firstInvalid = this.fieldOrder.find(
        key => this.form.controls[key]?.invalid
      );

      if (firstInvalid) {
        this.shakeField = firstInvalid;
        setTimeout(() => this.shakeField = null, 500);
      }
      return;
    }

    this.submitForm.emit();
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.controls[field];
    return !!(control && control.invalid && control.touched);
  }
}