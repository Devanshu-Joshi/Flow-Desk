import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, input, effect, output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Task, TaskStatus, TaskView } from '@core/models/Task';
import { TaskDialog } from '@shared/components/task-dialog/task-dialog';
import { TaskForm } from '@shared/components/task-form/task-form';
import { FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '@core/models/UserModel';
import { TaskService } from '@core/services/task/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'kanban-view',
  imports: [CommonModule, CdkDrag, DragDropModule, TaskDialog, TaskForm],
  templateUrl: './kanban-view.html',
  styleUrl: './kanban-view.css',
})
export class KanbanView {

  fb = inject(FormBuilder);

  users = input.required<UserModel[]>();
  tasks = input.required<TaskView[]>();
  isDialogClosed: boolean = true;

  onTaskUpdate = output<{ id: string; status: TaskStatus }>();
  editingTaskId: string | null = null;
  deletingTaskId: string | null = null;
  isEditing = signal(false);
  isDeleting = signal(false);
  dialogTitle = signal('Add');
  dialogDescription = signal('Add task details below');
  dialogTitleColor = signal<'text-primary' | 'text-warn' | 'text-danger'>('text-primary');
  dialogSubmitText = signal('Save');

  incompleteList: TaskView[] = [];
  inProgressList: TaskView[] = [];
  completedList: TaskView[] = [];

  taskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    dueDate: ['', Validators.required],
    status: ['INCOMPLETE' as TaskStatus, Validators.required],
    priority: ['NORMAL', Validators.required],
    assignedTo: [[] as string[]]
  });

  /**
   * Initializes the KanbanView component.
   * Sets up an effect to filter the tasks by their status and populate the incomplete, in progress, and completed task lists.
   * @param taskService - The task service to use for getting tasks.
   * @param toastr - The toastr service to use for displaying messages.
   */
  constructor(private taskService: TaskService, private toastr: ToastrService) {
    effect(() => {
      const currentTasks = this.tasks();

      this.incompleteList = currentTasks.filter(t => t.status === 'INCOMPLETE');
      this.inProgressList = currentTasks.filter(t => t.status === 'IN_PROGRESS');
      this.completedList = currentTasks.filter(t => t.status === 'COMPLETED');
    });
  }

  /**
   * Toggles the task dialog on/off.
   * When the dialog is closed, resets the task form to its initial state.
   */
  toggleDialog() {
    this.isDialogClosed = !this.isDialogClosed;
    document.body.classList.toggle('body-lock', !this.isDialogClosed);
    if (this.isDialogClosed) this.resetForm();
  }

  /**
   * Resets the task form to its initial state.
   * This function is called when the task dialog is closed.
   * It resets the form values, enables the form, and resets the editing/deleting task IDs.
   * It also resets the dialog title, description, title color, and submit text.
   */
  resetForm() {
    this.taskForm.reset({ title: '', dueDate: '', status: 'INCOMPLETE' });
    this.taskForm.enable();
    this.editingTaskId = null;
    this.deletingTaskId = null;
    this.isEditing.set(false);
    this.isDeleting.set(false);
    this.dialogTitle.set('Add');
    this.dialogDescription.set('Add task details below');
    this.dialogTitleColor.set('text-primary');
    this.dialogSubmitText.set('Save');
  }

  /**
   * Called when a task is dropped into one of the lists.
   * If the task is dropped into the same list, it will be moved to the new position.
   * If the task is dropped into a different list, it will be moved to the new list and its status will be updated accordingly.
   * The task update event will be emitted with the updated task information.
   * @param event - The drag drop event.
   */
  drop(event: CdkDragDrop<TaskView[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const task = event.container.data[event.currentIndex];
      const containerId = event.container.id;

      if (containerId === 'incompleteList') task.status = 'INCOMPLETE';
      if (containerId === 'inProgressList') task.status = 'IN_PROGRESS';
      if (containerId === 'completedList') task.status = 'COMPLETED';
    }

    const task = event.container.data[event.currentIndex];

    this.onTaskUpdate.emit({
      id: task.id!,
      status: task.status
    });
  }

  /**
   * Submits the task form data to the task service.
   * If the form is invalid, does nothing.
   * If the task is being edited, updates the task.
   * If the task is being deleted, deletes the task.
   * If the task is being added, adds the task.
   * Resets the form and toggles the dialog after submitting.
   */
  async submit() {
    if (this.taskForm.invalid) return;
    const value = this.taskForm.value;

    if (this.editingTaskId) {
      await this.taskService.updateTask(this.editingTaskId, value as Task);
    } else if (this.isDeleting()) {
      await this.taskService.deleteTask(this.deletingTaskId!);
    } else {
      await this.taskService.addTask(value as Task);
    }

    this.toastr.success('Task saved successfully', 'Success');
    this.resetForm();
    this.toggleDialog();
  }

  /**
   * Cancels the task dialog, resetting the form and hiding the dialog.
   */
  cancelDialog() {
    this.resetForm();
    this.toggleDialog();
  }

  /**
   * Opens a dialog to edit a task.
   * @param task - The task to edit.
   */
  edit(task: TaskView) {
    this.dialogTitle.set('Edit');
    this.isEditing.set(true);
    this.editingTaskId = task.id!;
    this.taskForm.patchValue(task);
    this.dialogDescription.set('Edit task details below');
    this.dialogTitleColor.set('text-warn');
    this.dialogSubmitText.set('Update');
    this.toggleDialog();
  }

  /**
   * Opens a confirmation dialog to delete a task.
   * @param task - The task to delete.
   */
  delete(task: TaskView) {
    this.dialogTitle.set('Delete');
    this.isDeleting.set(true);
    this.deletingTaskId = task.id!;
    this.taskForm.patchValue(task);
    this.taskForm.disable();
    this.dialogDescription.set('Do you really want to delete this task?');
    this.dialogTitleColor.set('text-danger');
    this.dialogSubmitText.set('Delete');
    this.toggleDialog();
  }
}