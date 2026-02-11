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

  submitted = false;
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
    this.submitted = true;

    // Mark all controls as touched to trigger validation display
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].markAsTouched();
    });

    if (this.form.invalid) {
      // Find the first invalid field and shake only that one
      const firstInvalid = this.fieldOrder.find(
        key => this.form.controls[key]?.invalid
      );
      if (firstInvalid) {
        this.shakeField = firstInvalid;
        setTimeout(() => {
          this.shakeField = null;
        }, 500);
      }
      return;
    }

    // Form is valid — emit to parent
    this.submitForm.emit();
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.controls[field];
    return !!(control && control.invalid && (control.touched || this.submitted));
  }
}