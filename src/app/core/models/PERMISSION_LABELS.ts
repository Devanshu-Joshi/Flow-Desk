import { PermissionKey } from './PermissionKey';

export const PERMISSION_LABELS: Record<PermissionKey, string> = {
    [PermissionKey.TASK_VIEW]: 'View Tasks',
    [PermissionKey.TASK_CREATE]: 'Create Tasks',
    [PermissionKey.TASK_EDIT]: 'Edit Tasks',
    [PermissionKey.TASK_DELETE]: 'Delete Tasks',
    [PermissionKey.MANAGE_USER]: 'Manage Users',
};

export function getPermissionLabel(key: PermissionKey | string): string {
    return PERMISSION_LABELS[key as PermissionKey] ?? key;
}