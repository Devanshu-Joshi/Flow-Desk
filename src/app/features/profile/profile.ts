import { Component, computed, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { UserService } from '@core/services/user/user.service';
import { getPermissionLabel } from '@core/models/PERMISSION_LABELS';
import { PermissionKey } from '@core/models/PermissionKey';
import { ToastrService } from 'ngx-toastr';
import dayjs from 'dayjs';
import { UserModel } from '@core/models/UserModel';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  isEditing = false;
  isSaving = false;
  user!: Signal<UserModel | null>;

  editForm = {
    name: '',
    avatar: '',
  };

  permissionLabels = computed(() => {
    const u = this.user();
    if (!u?.permissions) return [];
    return u.permissions.map(p => ({
      key: p,
      label: getPermissionLabel(p),
    }));
  });

  memberSince = computed(() => {
    const u = this.user();
    if (!u?.createdAt) return '';
    return dayjs(u.createdAt).format('MMMM D, YYYY');
  });

  avatarUrl = computed(() => {
    const u = this.user();
    return u?.avatar || '';
  });

  initials = computed(() => {
    const u = this.user();
    if (!u?.name) return '?';
    const parts = u.name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0][0].toUpperCase();
  });

  permissionIcon: Record<string, string> = {
    [PermissionKey.TASK_VIEW]: 'bx-show',
    [PermissionKey.TASK_CREATE]: 'bx-plus-circle',
    [PermissionKey.TASK_EDIT]: 'bx-edit',
    [PermissionKey.TASK_DELETE]: 'bx-trash',
    [PermissionKey.MANAGE_USER]: 'bx-group',
  };

  constructor(
    public authService: UserAuth,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.user = this.authService.currentUserSignal;
  }

  ngOnInit() { }

  startEditing() {
    const u = this.user();
    this.editForm.name = u?.name ?? '';
    this.editForm.avatar = u?.avatar ?? '';
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  saveProfile() {
    const u = this.user();
    if (!u) return;

    const trimmedName = this.editForm.name.trim();
    if (!trimmedName) {
      this.toastr.error('Name cannot be empty', 'Validation');
      return;
    }

    this.isSaving = true;

    this.userService
      .updateUser({
        id: u.id,
        name: trimmedName,
        avatar: this.editForm.avatar.trim(),
      })
      .subscribe({
        next: () => {
          this.authService.refreshCurrentUser().subscribe();
          this.isEditing = false;
          this.isSaving = false;
          this.toastr.success('Profile updated successfully', 'Success');
        },
        error: () => {
          this.isSaving = false;
          this.toastr.error('Failed to update profile', 'Error');
        },
      });
  }

  getPermissionColor(key: string): string {
    const colors: Record<string, string> = {
      [PermissionKey.TASK_VIEW]: 'bg-blue-100 text-blue-700',
      [PermissionKey.TASK_CREATE]: 'bg-green-100 text-green-700',
      [PermissionKey.TASK_EDIT]: 'bg-amber-100 text-amber-700',
      [PermissionKey.TASK_DELETE]: 'bg-red-100 text-red-700',
      [PermissionKey.MANAGE_USER]: 'bg-purple-100 text-purple-700',
    };
    return colors[key] ?? 'bg-gray-100 text-gray-700';
  }
}
