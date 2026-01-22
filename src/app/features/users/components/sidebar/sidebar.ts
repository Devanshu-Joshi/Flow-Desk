import { AfterViewInit, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PermissionItem } from '@core/models/PermissionItem';
import { PermissionKey } from '@core/models/PermissionKey';
import { UserService } from '@core/services/user';
import { UserModel } from '@core/models/User';
import { ToastrService } from 'ngx-toastr';

export type UserSidebarMode = 'add' | 'edit' | 'view' | 'delete';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements AfterViewInit {
  isOpen = false;
  mode: UserSidebarMode = 'add';
  selectedUser?: UserModel;

  fb = inject(FormBuilder);
  PermissionKey = PermissionKey;

  @Output() userActionPerformed = new EventEmitter<void>();

  permissionList: PermissionItem[] = [
    {
      key: PermissionKey.TASK_VIEW,
      label: 'Task View',
      group: 'Task',
      description: 'Allows viewing tasks',
    },
    {
      key: PermissionKey.TASK_CREATE,
      label: 'Task Create',
      group: 'Task',
      description: 'Allows creating tasks',
    },
    {
      key: PermissionKey.TASK_EDIT,
      label: 'Task Edit',
      group: 'Task',
      description: 'Allows editing tasks',
    },
    {
      key: PermissionKey.TASK_DELETE,
      label: 'Task Delete',
      group: 'Task',
      description: 'Allows deleting tasks',
    },
    {
      key: PermissionKey.MANAGE_USER,
      label: 'Manage Users',
      group: 'User',
      description: 'Allows managing users',
    },
  ];

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

    // 👇 declare once, optional by default
    password: [{ value: '', disabled: true }],

    permissions: this.fb.array(
      this.permissionList.map(perm =>
        this.fb.control({
          value: perm.key === PermissionKey.TASK_VIEW,
          disabled: false,
        })
      )
    ),
  });

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngAfterViewInit() {
    const permissionsArray = this.userForm.get('permissions') as FormArray;

    permissionsArray.valueChanges.subscribe(() => {
      const taskViewIndex = this.permissionList.findIndex(
        p => p.key === PermissionKey.TASK_VIEW
      );

      if (taskViewIndex !== -1) {
        permissionsArray.at(taskViewIndex).setValue(true, { emitEvent: false });
      }
    });
  }

  get permissionsArray(): FormArray {
    return this.userForm.get('permissions') as FormArray;
  }

  private updatePermissionControls(): void {
    const permissionsArray = this.permissionsArray;

    permissionsArray.controls.forEach((control, index) => {
      const perm = this.permissionList[index];

      // TASK_VIEW is always enabled + locked ON
      if (perm.key === PermissionKey.TASK_VIEW) {
        control.setValue(true, { emitEvent: false });
        control.disable({ emitEvent: false });
        return;
      }

      // View & Delete → read-only
      if (this.mode === 'view' || this.mode === 'delete') {
        control.disable({ emitEvent: false });
      } else {
        control.enable({ emitEvent: false });
      }
    });
  }

  openSidebar() {
    this.isOpen = true;
  }

  openAdd() {
    this.mode = 'add';
    this.userForm.reset();
    this.userForm.enable();

    const password = this.userForm.get('password');
    password?.setValidators([
      Validators.required,
      Validators.minLength(6),
    ]);
    password?.enable();
    password?.updateValueAndValidity();

    this.updatePermissionControls();
    this.isOpen = true;
  }

  openEdit(user: UserModel) {
    this.mode = 'edit';
    this.userForm.enable();

    this.disablePassword();
    this.patchUserToForm(user);
    this.updatePermissionControls();

    this.selectedUser = user;
    this.isOpen = true;
  }

  openView(user: UserModel) {
    this.mode = 'view';

    this.disablePassword();
    this.patchUserToForm(user);

    this.userForm.disable({ emitEvent: false });
    this.updatePermissionControls();

    this.isOpen = true;
  }

  openDelete(user: UserModel) {
    this.mode = 'delete';

    this.disablePassword();
    this.patchUserToForm(user);

    this.userForm.disable({ emitEvent: false });
    this.updatePermissionControls();

    this.selectedUser = user;
    this.isOpen = true;
  }

  private disablePassword(): void {
    const password = this.userForm.get('password');
    password?.clearValidators();
    password?.setValue('');
    password?.disable();
    password?.updateValueAndValidity();
  }

  private mapUserPermissionsToForm(userPermissions: PermissionKey[]): boolean[] {
    return this.permissionList.map(p =>
      userPermissions.includes(p.key)
    );
  }

  private patchUserToForm(user: UserModel) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      permissions: this.mapUserPermissionsToForm(user.permissions),
    });

    // 🔒 enforce required permission
    const taskViewIndex = this.permissionList.findIndex(
      p => p.key === PermissionKey.TASK_VIEW
    );

    if (taskViewIndex !== -1) {
      this.permissionsArray.at(taskViewIndex).setValue(true, { emitEvent: false });
    }
  }

  closeSidebar() {
    this.isOpen = false;
    this.userForm.reset();
    this.permissionsArray.controls.forEach(c => c.setValue(false));
    this.selectedUser = undefined;
  }

  private getSelectedPermissions(): PermissionKey[] {
    const values = this.permissionsArray.getRawValue();

    return this.permissionList
      .filter((_, i) => values[i])
      .map(p => p.key);
  }

  addUser() {
    const selectedPermissions = this.getSelectedPermissions();

    const formValue = this.userForm.value;

    const payload: Partial<UserModel> = {
      name: formValue.name ?? undefined,
      email: formValue.email ?? undefined,
      password: formValue.password ?? undefined,
      permissions: selectedPermissions,
    };

    this.userService.addUser(payload).subscribe({
      next: () => {
        this.userActionPerformed.emit();
        this.toastr.success('User added successfully', 'Action Completed');
      },
    });

    this.closeSidebar();
  }

  updateUser() {
    if (!this.selectedUser?.id) return;

    const selectedPermissions = this.getSelectedPermissions();

    const formValue = this.userForm.value;

    const payload: Partial<UserModel> & { id: string } = {
      id: this.selectedUser.id,
      name: formValue.name ?? undefined,
      email: formValue.email ?? undefined,
      permissions: selectedPermissions,
    };

    // include password ONLY if enabled
    if (this.userForm.get('password')?.enabled) {
      payload.password = formValue.password ?? undefined;
    }

    this.userService.updateUser(payload).subscribe({
      next: () => {
        this.userActionPerformed.emit();
        this.toastr.success('User Updated Successfully', 'Action Performed');
      },
    });

    this.closeSidebar();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.userActionPerformed.emit();
        this.toastr.success("User Deleted Successfully", "Action Confirmed")
      },
      error: (err) => {
        console.error(err)
        this.toastr.error("User Not Deleted Successfully", "Action Can't be Confirmed")
      }
    })

    this.closeSidebar()
  }

  get allPermissionsEnabled(): boolean {
    const permissionsArray = this.userForm.get('permissions') as FormArray;

    return permissionsArray.controls.every((control, index) => {
      const perm = this.permissionList[index];
      return perm.key === PermissionKey.TASK_VIEW || control.value === true;
    });
  }

  toggleAllPermissions(): void {
    const permissionsArray = this.userForm.get('permissions') as FormArray;

    const enable = !this.allPermissionsEnabled;

    permissionsArray.controls.forEach((control, index) => {
      const perm = this.permissionList[index];

      if (perm.key === PermissionKey.TASK_VIEW) {
        control.setValue(true); // 🔒 force ON
        return;
      }

      control.setValue(enable);
    });
  }

}
