import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  animations: [
    trigger('slideSidebar', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('350ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
    trigger('fadeBackdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class Sidebar {
  isOpen = false;

  fb = inject(FormBuilder);

  permissionList = [
    { key: 'TASK_VIEW', label: 'Task View' },
    { key: 'TASK_CREATE', label: 'Task Create' },
    { key: 'TASK_EDIT', label: 'Task Edit' },
    { key: 'TASK_DELETE', label: 'Task Delete' },
    { key: 'MANAGE_USER', label: 'Manage Users' },
  ];

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    permissions: this.fb.array(this.permissionList.map(() => false)),
  });

  constructor() { }

  get permissionsArray(): FormArray {
    return this.userForm.get('permissions') as FormArray;
  }

  openSidebar() {
    this.isOpen = true;
  }

  closeSidebar() {
    this.isOpen = false;
    this.userForm.reset();
    this.permissionsArray.controls.forEach(c => c.setValue(false));
  }

  addUser() {
    const selectedPermissions = this.permissionList
      .filter((_, i) => this.permissionsArray.value[i])
      .map(p => p.key);

    const payload = {
      ...this.userForm.value,
      permissions: selectedPermissions,
    };

    console.log('Glass User Payload:', payload);

    this.closeSidebar();
  }

  get allPermissionsEnabled(): boolean {
    return this.permissionsArray.controls.every(ctrl => ctrl.value === true);
  }

  toggleAllPermissions() {
    const shouldEnableAll = !this.allPermissionsEnabled;

    this.permissionsArray.controls.forEach(control => {
      control.setValue(shouldEnableAll);
    });
  }

}
