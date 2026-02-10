// ======================================================
// 📦 IMPORTS
// ======================================================
import { Component, effect, inject, DestroyRef, OnInit, Signal, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import dayjs from 'dayjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TaskService } from '@core/services/task/task.service';
import { UserService } from '@core/services/user/user.service';
import { Task, TaskView } from '@core/models/Task';
import { UserModel } from '@core/models/UserModel';

import { StatsCard } from '@features/tasks/components/stats-card/stats-card';
import { TaskFilters } from '@features/tasks/components/task-filters/task-filters';
import { TaskTable } from '@features/tasks/components/task-table/task-table';
import { TaskDialog } from '@shared/components/task-dialog/task-dialog';
import { TaskForm } from '@shared/components/task-form/task-form';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
import { KanbanView } from '@shared/components/kanban-view/kanban-view';

export type TaskStatus = 'INCOMPLETE' | 'COMPLETED' | 'IN_PROGRESS';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxDaterangepickerMd,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    StatsCard,
    TaskFilters,
    TaskTable,
    TaskDialog,
    TaskForm,
    LoadingOverlay,
    KanbanView
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {

  // ======================================================
  // 🧠 SERVICES & CORE
  // ======================================================
  fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  /**
   * Constructor for Tasks component
   * @param taskService - Task service to use for getting tasks
   * @param toastr - Toastr service to use for displaying messages
   * @param userService - User service to use for getting users
   */
  constructor(
    public taskService: TaskService,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.tasks = this.taskService.tasksView;

    effect(() => {
      this.searchTerm();
      this.selectedStatus();
      this.dateRange();
      this.selectedAssignedUser();

      this.p = 1; // 💥 ALWAYS reset page when filters change
    });
  }

  // ======================================================
  // 📊 DATA STATE
  // ======================================================
  tasks!: Signal<TaskView[]>;
  users = signal<UserModel[]>([]);
  users$!: Observable<UserModel[] | null>;
  isLoading = computed(() => this.taskService.loading());
  isUISwitched = signal<boolean>(false);

  // ======================================================
  // 🎛 UI STATE
  // ======================================================
  p: number = 1;
  itemsPerPage = computed(() => {
    const size = this.selectedPageSize();
    const total = this.filteredTasks().length;
    return size === 'All' ? total : size;
  });
  pageSizeOptions = [5, 10, 20, 'All'] as const;
  isTasksDropdownOpen = false;
  clearExpandedTrigger = signal(0);

  // ======================================================
  // 🔍 FILTER STATE
  // ======================================================
  searchControl = new FormControl('');
  searchTerm = signal('');
  dateRange = signal<{ startDate: any; endDate: any } | null>(null);
  selectedStatus = signal<string | null>(null);
  selectedAssignedUser = signal<string | null>(null);
  selectedPageSize = signal<number | 'All'>(5);

  statusOptions = [
    { label: 'All', value: null },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Incomplete', value: 'INCOMPLETE' }
  ];

  // ======================================================
  // ↕ SORT STATE
  // ======================================================
  sortField = signal<'title' | 'createdAt'>('createdAt');
  sortDirection = signal<'asc' | 'desc'>('desc');

  // ======================================================
  // 🧮 DERIVED STATE
  // ======================================================
  totalItems = computed(() => this.filteredTasks().length);
  filteredTasksCount = computed(() => this.filteredTasks().length);

  totalTasks = computed(() => this.tasks().length);
  completedTasks = computed(() => this.tasks().filter(t => t.status === 'COMPLETED').length);
  inProgressTasks = computed(() => this.tasks().filter(t => t.status === 'IN_PROGRESS').length);
  incompleteTasks = computed(() => this.tasks().filter(t => t.status === 'INCOMPLETE').length);

  // ======================================================
  // 🧾 FORM STATE
  // ======================================================
  taskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    dueDate: ['', Validators.required],
    status: ['INCOMPLETE' as TaskStatus, Validators.required],
    priority: ['NORMAL', Validators.required],
    assignedTo: [[] as string[]]
  });

  editingTaskId: string | null = null;
  deletingTaskId: string | null = null;

  // ======================================================
  // 🪟 DIALOG STATE
  // ======================================================
  isDialogClosed: boolean = true;
  dialogTitle = signal('Add');
  dialogDescription = signal('Add task details below');
  dialogTitleColor = signal<'text-primary' | 'text-warn' | 'text-danger'>('text-primary');
  dialogSubmitText = signal('Save');
  isEditing = signal(false);
  isDeleting = signal(false);

  // ======================================================
  // 🚀 LIFECYCLE
  // ======================================================

  /**
   * OnInit lifecycle hook.
   * Sets up the search control value changes to update the search term.
   * Also sets up the users observable to fetch users by parent and update the users state.
   * Uses the takeUntilDestroyed operator to ensure that the observable subscriptions are cleaned up when the component is destroyed.
   */
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe(value => this.searchTerm.set(value || ''));

    this.users$ = this.userService.getUsersByParent();

    this.users$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(users => this.users.set(users ?? [])); // 👈 FIX
  }

  /**
   * Removes the 'body-lock' class from the document body when the component is destroyed.
   * This is necessary to prevent the body from being locked when the component is destroyed.
   */
  ngOnDestroy() {
    document.body.classList.remove('body-lock');
  }

  // ======================================================
  // 🎛 UI METHODS
  // ======================================================

  /**
   * Toggles the task dialog on/off.
   * When the dialog is closed, resets the task form to its initial state.
   * Also toggles the 'body-lock' class on the document body to prevent scrolling when the dialog is open.
   */
  toggleDialog() {
    this.isDialogClosed = !this.isDialogClosed;
    document.body.classList.toggle('body-lock', !this.isDialogClosed);
    if (this.isDialogClosed) this.resetForm();
  }

  /**
   * Opens or closes the tasks dropdown menu.
   * Stops the event propagation to prevent the event from bubbling up to its parent elements.
   */
  openTasksDropdown(event: Event) {
    event.stopPropagation();
    this.isTasksDropdownOpen = !this.isTasksDropdownOpen;
  }

  /**
   * Sets the number of tasks per page.
   * If 'All' is passed, shows all tasks on a single page.
   * Resets the page index to 1 and closes the tasks dropdown menu.
   * @param value The number of tasks per page or 'All' to show all tasks on a single page.
   */
  setItemsPerPage(value: number | 'All') {
    this.selectedPageSize.set(value);
    this.p = 1;
    this.isTasksDropdownOpen = false;
  }

  /**
   * Resets all task filters to their initial state.
   * Clears the search box, resets the date range, and clears the selected status and assigned user.
   * Resets the tasks per page to 5 and the page index to 1.
   * Finally, toggles the 'clearExpandedTrigger' to trigger a UI update.
   */
  clearFilters(): void {
    this.searchControl.setValue('');
    this.dateRange.set(null);
    this.selectedStatus.set(null);
    this.selectedAssignedUser.set(null);
    this.selectedPageSize.set(5);
    this.p = 1;
    this.clearExpandedTrigger.update(v => (v % 2) + 1);
  }

  /**
   * Sorts the tasks list based on the provided field.
   * If the field is the same as the current sort field, toggles the sort direction.
   * If the field is different from the current sort field, sets the sort direction to 'asc'.
   * @param field The field to sort the tasks list by. Can be 'title' or 'createdAt'.
   */
  sortBy(field: 'title' | 'createdAt') {
    if (this.sortField() === field) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortField.set(field);
      this.sortDirection.set('asc');
    }
  }

  /**
   * Updates a task's status from a drag event.
   *
   * @param update An object containing the task ID and the new status.
   * @example { id: 'task-1', status: 'completed' }
   */
  updateTasksFromDrag(update: { id: string; status: TaskStatus }) {
    this.taskService.updateTaskStatus(update.id, update.status);
  }

  // ======================================================
  // 🔎 FILTER + SORT LOGIC
  // ======================================================
  filteredTasks = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const status = this.selectedStatus();
    const range = this.dateRange();
    const assignedUser = this.selectedAssignedUser();
    const sortField = this.sortField();
    const sortDirection = this.sortDirection();

    const filtered = this.tasks().filter(task => {
      const matchesSearch = !term || task.title.toLowerCase().includes(term);
      const matchesStatus = !status || task.status === status;
      const matchesAssignedUsers = !assignedUser || task.assignedTo.includes(assignedUser);

      let matchesDate = true;
      if (range?.startDate && range?.endDate) {
        const taskDate = dayjs(task.dueDate).format('YYYY-MM-DD');
        const startDate = dayjs(range.startDate).format('YYYY-MM-DD');
        const endDate = dayjs(range.endDate).format('YYYY-MM-DD');
        matchesDate = taskDate >= startDate && taskDate <= endDate;
      }

      return matchesSearch && matchesStatus && matchesDate && matchesAssignedUsers;
    });

    return filtered.sort((a, b) => {
      const valA = sortField === 'title'
        ? a.title.toLowerCase()
        : new Date(a.createdAt).getTime();

      const valB = sortField === 'title'
        ? b.title.toLowerCase()
        : new Date(b.createdAt).getTime();

      return sortDirection === 'asc'
        ? valA > valB ? 1 : -1
        : valA < valB ? 1 : -1;
    });
  });

  // ======================================================
  // ✏️ CRUD ACTIONS
  // ======================================================

  /**
   * Submits the task form data to the task service.
   * If the form is invalid, does nothing.
   * If the task is being edited, updates the task.
   * If the task is being deleted, deletes the task.
   * If the task is being added, adds the task.
   * Resets the form and toggles the dialog after submitting.
   * Shows a success toast with a message "Task saved successfully".
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
   * If the task is confirmed for deletion, disables the task form and sets the dialog title to 'Delete', the dialog description to 'Do you really want to delete this task?', the dialog title color to 'text-danger', and the dialog submit text to 'Delete'.
   * The dialog will be toggled on after calling this function.
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

  /**
   * Resets the task form to its initial state.
   * Resets the form values, enables the form, resets the editing/deleting task IDs,
   * resets the dialog title, description, title color, and submit text.
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
   * Cancels the task dialog, resetting the task form to its initial state.
   * Toggles the dialog off and resets the form values, enables the form, resets the editing/deleting task IDs,
   * resets the dialog title, description, title color, and submit text.
   */
  cancelDialog() {
    this.resetForm();
    this.toggleDialog();
  }
}