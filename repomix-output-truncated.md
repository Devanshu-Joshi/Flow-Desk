This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**/*, projects/**/*, angular.json, package.json, package-lock.json, pnpm-lock.yaml, yarn.lock, tsconfig*.json, karma.conf.js, jest.config.*, eslint.config.*, .eslintrc*, .prettierrc*, proxy.conf*.json, README.md, src\app\features\tasks\components\task-table-footer\task-table-footer.html, src\app\features\tasks\components\task-table-footer\task-table-footer.ts, src\app\features\tasks\components\task-table-footer\task-table-footer.css, src\app\features\users\components\user-table\user-table.html, src\app\features\users\components\user-table\user-table.ts, src\app\features\users\components\user-table\user-table.css, src\styles.css
- Files matching these patterns are excluded: **/node_modules/**, **/dist/**, **/coverage/**, **/.angular/**, **/.angular/cache/**, **/out-tsc/**, **/.cache/**, **/tmp/**, **/storybook-static/**, **/*.map
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
angular.json
package.json
README.md
src/app/app.config.ts
src/app/app.css
src/app/app.html
src/app/app.routes.ts
src/app/app.spec.ts
src/app/app.ts
src/app/core/functions/confirmPasswordValidator.ts
src/app/core/functions/passwordStrengthValidator.ts
src/app/core/guards/auth-gaurd.spec.ts
src/app/core/guards/auth-guard.ts
src/app/core/interceptors/.gitkeep
src/app/core/interceptors/auth.interceptor.ts
src/app/core/models/PERMISSION_LABELS.ts
src/app/core/models/PermissionItem.ts
src/app/core/models/PermissionKey.ts
src/app/core/models/Task.ts
src/app/core/models/UserData.ts
src/app/core/models/UserModel.ts
src/app/core/services/task/task.service.ts
src/app/core/services/token-service/token-service.spec.ts
src/app/core/services/token-service/token-service.ts
src/app/core/services/user-auth/user-auth.spec.ts
src/app/core/services/user-auth/user-auth.ts
src/app/core/services/user/user.service.ts
src/app/core/services/user/user.spec.ts
src/app/features/auth/pages/login/login.css
src/app/features/auth/pages/login/login.html
src/app/features/auth/pages/login/login.spec.ts
src/app/features/auth/pages/login/login.ts
src/app/features/auth/pages/signup/signup.css
src/app/features/auth/pages/signup/signup.html
src/app/features/auth/pages/signup/signup.spec.ts
src/app/features/auth/pages/signup/signup.ts
src/app/features/dashboard/pages/dashboard/dashboard.css
src/app/features/dashboard/pages/dashboard/dashboard.html
src/app/features/dashboard/pages/dashboard/dashboard.spec.ts
src/app/features/dashboard/pages/dashboard/dashboard.ts
src/app/features/home/pages/home/home.css
src/app/features/home/pages/home/home.html
src/app/features/home/pages/home/home.spec.ts
src/app/features/home/pages/home/home.ts
src/app/features/profile/profile.css
src/app/features/profile/profile.html
src/app/features/profile/profile.spec.ts
src/app/features/profile/profile.ts
src/app/features/tasks/components/task-filters/task-filters.css
src/app/features/tasks/components/task-filters/task-filters.html
src/app/features/tasks/components/task-filters/task-filters.spec.ts
src/app/features/tasks/components/task-filters/task-filters.ts
src/app/features/tasks/components/task-table-footer/task-table-footer.css
src/app/features/tasks/components/task-table-footer/task-table-footer.html
src/app/features/tasks/components/task-table-footer/task-table-footer.spec.ts
src/app/features/tasks/components/task-table-footer/task-table-footer.ts
src/app/features/tasks/components/task-table-row/task-table-row.css
src/app/features/tasks/components/task-table-row/task-table-row.html
src/app/features/tasks/components/task-table-row/task-table-row.spec.ts
src/app/features/tasks/components/task-table-row/task-table-row.ts
src/app/features/tasks/components/task-table/task-table.css
src/app/features/tasks/components/task-table/task-table.html
src/app/features/tasks/components/task-table/task-table.spec.ts
src/app/features/tasks/components/task-table/task-table.ts
src/app/features/tasks/pages/tasks/tasks.css
src/app/features/tasks/pages/tasks/tasks.html
src/app/features/tasks/pages/tasks/tasks.spec.ts
src/app/features/tasks/pages/tasks/tasks.ts
src/app/features/users/components/sidebar/sidebar.css
src/app/features/users/components/sidebar/sidebar.html
src/app/features/users/components/sidebar/sidebar.spec.ts
src/app/features/users/components/sidebar/sidebar.ts
src/app/features/users/components/user-table/user-table.css
src/app/features/users/components/user-table/user-table.html
src/app/features/users/components/user-table/user-table.spec.ts
src/app/features/users/components/user-table/user-table.ts
src/app/features/users/pages/user/user.css
src/app/features/users/pages/user/user.html
src/app/features/users/pages/user/user.spec.ts
src/app/features/users/pages/user/user.ts
src/app/layouts/header/header.css
src/app/layouts/header/header.html
src/app/layouts/header/header.spec.ts
src/app/layouts/header/header.ts
src/app/shared/components/demo-graphs/demo-graphs.css
src/app/shared/components/demo-graphs/demo-graphs.html
src/app/shared/components/demo-graphs/demo-graphs.spec.ts
src/app/shared/components/demo-graphs/demo-graphs.ts
src/app/shared/components/empty-state/empty-state.css
src/app/shared/components/empty-state/empty-state.html
src/app/shared/components/empty-state/empty-state.spec.ts
src/app/shared/components/empty-state/empty-state.ts
src/app/shared/components/kanban-view/kanban-view.css
src/app/shared/components/kanban-view/kanban-view.html
src/app/shared/components/kanban-view/kanban-view.spec.ts
src/app/shared/components/kanban-view/kanban-view.ts
src/app/shared/components/loading-overlay/loading-overlay.css
src/app/shared/components/loading-overlay/loading-overlay.html
src/app/shared/components/loading-overlay/loading-overlay.spec.ts
src/app/shared/components/loading-overlay/loading-overlay.ts
src/app/shared/components/shared-pagination/shared-pagination.css
src/app/shared/components/shared-pagination/shared-pagination.html
src/app/shared/components/shared-pagination/shared-pagination.spec.ts
src/app/shared/components/shared-pagination/shared-pagination.ts
src/app/shared/components/stats-card/stats-card.css
src/app/shared/components/stats-card/stats-card.html
src/app/shared/components/stats-card/stats-card.spec.ts
src/app/shared/components/stats-card/stats-card.ts
src/app/shared/components/task-dialog/task-dialog.css
src/app/shared/components/task-dialog/task-dialog.html
src/app/shared/components/task-dialog/task-dialog.spec.ts
src/app/shared/components/task-dialog/task-dialog.ts
src/app/shared/components/task-form/task-form.css
src/app/shared/components/task-form/task-form.html
src/app/shared/components/task-form/task-form.spec.ts
src/app/shared/components/task-form/task-form.ts
src/app/shared/directives/.gitkeep
src/app/shared/models/.gitkeep
src/app/shared/pipes/truncate-pipe.spec.ts
src/app/shared/pipes/truncate-pipe.ts
src/app/shared/utils/.gitkeep
src/index.html
src/main.ts
src/styles.css
src/testing/with-app-providers.ts
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

# Files

## File: angular.json
````json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "flow-desk": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css",
              "node_modules/ngx-toastr/toastr.css"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "10MB",
                  "maximumError": "10MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "flow-desk:build:production"
            },
            "development": {
              "buildTarget": "flow-desk:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular/build:extract-i18n"
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
````

## File: README.md
````markdown
# FlowDesk

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
````

## File: src/app/app.config.ts
````typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from '@environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { importProvidersFrom } from "@angular/core";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { authInterceptor } from '@core/interceptors/auth.interceptor';
````

## File: src/app/app.css
````css

````

## File: src/app/app.html
````html
<app-header></app-header>
<router-outlet></router-outlet>
````

## File: src/app/app.spec.ts
````typescript
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { appConfig } from '../app/app.config';
````

## File: src/app/app.ts
````typescript
import { Component, ElementRef, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@layouts/header/header';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
⋮----
export class App implements OnInit
⋮----
constructor(private toastr: ToastrService)
ngOnInit()
````

## File: src/app/core/functions/confirmPasswordValidator.ts
````typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const confirmPasswordValidator = (
    passwordKey: string,
    confirmPasswordKey: string
) =>
````

## File: src/app/core/functions/passwordStrengthValidator.ts
````typescript
import { AbstractControl, ValidationErrors } from '@angular/forms';
export function passwordStrengthValidator(
    control: AbstractControl
): ValidationErrors | null
````

## File: src/app/core/guards/auth-gaurd.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import {
    Router,
    ActivatedRouteSnapshot,
    GuardResult
} from '@angular/router';
import { BehaviorSubject, firstValueFrom, isObservable } from 'rxjs';
import { authGuard } from './auth-guard';
import { AuthService } from '../services/auth';
class MockAuthService
class MockRouter
⋮----
const runGuard = async (routeData: any): Promise<GuardResult> =>
````

## File: src/app/core/guards/auth-guard.ts
````typescript
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, filter, take } from 'rxjs/operators';
import { UserAuth } from '@core/services/user-auth/user-auth';
export const authGuard: CanActivateFn = (route) =>
````

## File: src/app/core/interceptors/.gitkeep
````

````

## File: src/app/core/interceptors/auth.interceptor.ts
````typescript
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from '@core/services/token-service/token-service';
export const authInterceptor: HttpInterceptorFn = (req, next) =>
````

## File: src/app/core/models/PERMISSION_LABELS.ts
````typescript
import { PermissionKey } from './PermissionKey';
⋮----
export function getPermissionLabel(key: PermissionKey | string): string
````

## File: src/app/core/models/PermissionItem.ts
````typescript
import { PermissionKey } from "./PermissionKey";
export interface PermissionItem {
    key: PermissionKey;
    label: string;
    group: string;
    description: string;
}
````

## File: src/app/core/models/PermissionKey.ts
````typescript
export enum PermissionKey {
    TASK_VIEW = 'TASK_VIEW',
    TASK_CREATE = 'TASK_CREATE',
    TASK_EDIT = 'TASK_EDIT',
    TASK_DELETE = 'TASK_DELETE',
    MANAGE_USER = 'MANAGE_USER',
}
````

## File: src/app/core/models/Task.ts
````typescript
export type TaskStatus = 'INCOMPLETE' | 'COMPLETED' | 'IN_PROGRESS';
export type TaskPriority = 'HIGH' | 'NORMAL' | 'LOW';
export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
    createdAt: number;
    userId: string;
    assignedTo: string[];
}
export interface TaskView extends Task {
    displayId: number;
}
````

## File: src/app/core/models/UserData.ts
````typescript
interface UserData {
    id: string;
    name: string;
    avatar: string;
}
````

## File: src/app/core/models/UserModel.ts
````typescript
import { PermissionKey } from "./PermissionKey";
export interface UserModel {
    id: string
    createdAt: string;
    name: string;
    avatar: string;
    email: string;
    password: string;
    parentId: string;
    permissions: PermissionKey[];
}
````

## File: src/app/core/services/task/task.service.ts
````typescript
import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, TaskStatus, TaskView } from '@core/models/Task';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { environment } from '@environments/environment';
⋮----
export class TaskService
⋮----
constructor(
    private http: HttpClient,
    private authService: UserAuth
)
private listenToAuth()
updateTaskStatus(taskId: string, status: TaskStatus)
fetchTasks()
addTask(payload: Pick<Task, 'title' | 'dueDate' | 'status' | 'priority' | 'assignedTo'>)
updateTask(taskId: string, payload: Partial<Task>)
deleteTask(taskId: string)
refresh()
````

## File: src/app/core/services/token-service/token-service.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { TokenService } from './token-service';
````

## File: src/app/core/services/token-service/token-service.ts
````typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
⋮----
export class TokenService
⋮----
getToken(): string | null
setToken(token: string): void
clearToken(): void
unAuthorizedAccess(forced = false): void
````

## File: src/app/core/services/user-auth/user-auth.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { UserAuth } from './user-auth';
````

## File: src/app/core/services/user-auth/user-auth.ts
````typescript
import { computed, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, finalize, switchMap, shareReplay, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '@core/models/UserModel';
import { TokenService } from '@core/services/token-service/token-service';
import { PermissionKey } from '@core/models/PermissionKey';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@environments/environment';
import { UserService } from '../user/user.service';
interface LoginResponse {
  token: string;
  user?: any;
}
interface RegisterResponse {
  token: string;
  user?: any;
}
⋮----
export class UserAuth
⋮----
constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private tokenService: TokenService, private userService: UserService)
private initAuth()
login(credentials:
register(payload:
getMe(): Observable<UserModel>
refreshCurrentUser()
logout()
private handleForcedLogout()
reloadWithoutCache(): void
private clearAuth()
isAuthenticatedSync(): boolean
private decodeToken(token: string): any | null
private isTokenExpired(token: string): boolean
hasPermission(permission: PermissionKey): boolean
get currentUser(): UserModel | null
setCurrentUser(user: UserModel | null): void
````

## File: src/app/core/services/user/user.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
````

## File: src/app/features/auth/pages/login/login.css
````css
.shake {
⋮----
.login-wrapper {
````

## File: src/app/features/auth/pages/login/login.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { appConfig } from '../../../../app.config';
````

## File: src/app/features/auth/pages/login/login.ts
````typescript
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
⋮----
export class Login
⋮----
constructor(
togglePassword()
submit()
shakeFirstInvalidControl()
get email()
get password()
````

## File: src/app/features/auth/pages/signup/signup.css
````css
.shake {
````

## File: src/app/features/auth/pages/signup/signup.html
````html
<div class="min-h-screen flex items-center justify-center
         bg-linear-to-br from-purple-600 via-indigo-600 to-fuchsia-600 py-10">
    <div class="flex items-start gap-10 w-110">
        <div class="w-full max-w-md p-8 rounded-2xl
           bg-white/20 backdrop-blur-xl
           border border-white/30 shadow-2xl">
            <h2 class="text-3xl font-extrabold text-white tracking-tight text-center mb-2">
                Welcome!
            </h2>
            <p class="text-center text-white tracking-tight mb-8">Sign up for your new Account!</p>
            <form [formGroup]="signupForm" (ngSubmit)="submit()" class="space-y-5">
                <div>
                    <label class="block text-sm font-semibold text-purple-100 mb-1">
                        Username
                    </label>
                    <input type="text" formControlName="username" placeholder="John" class="w-full px-4 py-2 rounded-lg
                 bg-white/30 text-white placeholder-purple-200
                 border border-white/40
                 focus:outline-none focus:ring-2 focus:ring-purple-300" [ngClass]="{
                    'border-2! border-red-500! focus:ring-transparent!': username?.invalid && username?.touched
                 }" />
                    @if(username?.touched && username?.errors?.['required']){
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Kindly enter your username to continue.</li>
                    </ul>
                    }
                </div>
                <div>
                    <label class="block text-sm font-semibold text-purple-100 mb-1">
                        Email Address
                    </label>
                    <input type="email" formControlName="email" placeholder="john@gmail.com" class="w-full px-4 py-2 rounded-lg
                 bg-white/30 text-white placeholder-purple-200
                 border border-white/40
                 focus:outline-none focus:ring-2 focus:ring-purple-300" [ngClass]="{
                    'border-2! border-red-500! focus:ring-transparent!': email?.invalid && email?.touched
                 }" />
                    @if(email?.touched && email?.errors?.['required']){
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Kindly enter your email address to continue.</li>
                    </ul>
                    }
                    @else if(email?.invalid && email?.touched){
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Kindly enter a valid email address to continue.</li>
                    </ul>
                    }
                </div>
                <div>
                    <label class="block text-sm font-semibold text-purple-100 mb-1">
                        Password
                    </label>
                    <div class="relative w-full flex items-center">
                        <input [type]="showPassword ? 'text' : 'password'" formControlName="password"
                            class="w-full px-4 py-2 pr-12 rounded-lg bg-white/30 text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-purple-200"
                            placeholder="John@123"
                            [ngClass]="{ 'border-2! border-red-500! focus:ring-transparent!': password?.invalid && password?.touched }" />
                        <button type="button"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white flex items-center cursor-pointer"
                            (click)="togglePassword()">
                            <i class="bx" [ngClass]="showPassword ? 'bx-eye-closed' : 'bx-eye'"></i>
                        </button>
                    </div>
                    @if(password?.touched && password?.errors?.['required']){
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Kindly enter a password to continue.</li>
                    </ul>
                    }
                    @else if(password?.invalid && password?.touched){
                    <ul class="list-disc pl-5 text-yellow-400 flex flex-col gap-2">
                        <li>Please enter a password which contains :</li>
                        <ul class="space-y-4 text-sm">
                            <li class="flex items-center gap-3"
                                [ngClass]="hasMinLength ? 'text-emerald-300 font-extrabold' : 'text-purple-100 font-semibold'">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full border"
                                    [ngClass]="hasMinLength ? 'border-emerald-300' : 'border-white/40'">
                                    @if (hasMinLength) {
                                    <span>✓</span>
                                    }
                                </span>
                                <span>At least 8 characters</span>
                            </li>
                            <li class="flex items-center gap-3"
                                [ngClass]="hasLowercase ? 'text-emerald-300 font-extrabold' : 'text-purple-100 font-semibold'">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full border"
                                    [ngClass]="hasLowercase ? 'border-emerald-300' : 'border-white/40'">
                                    @if (hasLowercase) {
                                    <span>✓</span>
                                    }
                                </span>
                                <span>At least one lowercase letter</span>
                            </li>
                            <li class="flex items-center gap-3"
                                [ngClass]="hasUppercase ? 'text-emerald-300 font-extrabold' : 'text-purple-100 font-semibold'">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full border"
                                    [ngClass]="hasUppercase ? 'border-emerald-300' : 'border-white/40'">
                                    @if (hasUppercase) {
                                    <span>✓</span>
                                    }
                                </span>
                                <span>At least one uppercase letter</span>
                            </li>
                            <li class="flex items-center gap-3"
                                [ngClass]="hasNumber ? 'text-emerald-300 font-extrabold' : 'text-purple-100 font-semibold'">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full border"
                                    [ngClass]="hasNumber ? 'border-emerald-300' : 'border-white/40'">
                                    @if (hasNumber) {
                                    <span>✓</span>
                                    }
                                </span>
                                <span>At least one numerical digit</span>
                            </li>
                            <li class="flex items-center gap-3"
                                [ngClass]="hasSpecialChar ? 'text-emerald-300 font-extrabold' : 'text-purple-100 font-semibold'">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full border"
                                    [ngClass]="hasSpecialChar ? 'border-emerald-300' : 'border-white/40'">
                                    @if (hasSpecialChar) {
                                    <span>✓</span>
                                    }
                                </span>
                                <span>At least one special character</span>
                            </li>
                        </ul>
                    </ul>
                    }
                </div>
                <div>
                    <label class="block text-sm font-semibold text-purple-100 mb-1">
                        Confirm Password
                    </label>
                    <div class="relative w-full flex items-center">
                        <input [type]="showConfirmPassword ? 'text' : 'password'" formControlName="cpassword"
                            class="w-full px-4 py-2 pr-12 rounded-lg bg-white/30 text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-purple-200"
                            placeholder="John@123"
                            [ngClass]="{ 'border-2! border-red-500! focus:ring-transparent!': cpassword?.invalid && cpassword?.touched }" />
                        <button type="button"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white flex items-center cursor-pointer"
                            (click)="toggleConfirmPassword()">
                            <i class="bx" [ngClass]="showConfirmPassword ? 'bx-eye-closed' : 'bx-eye'"></i>
                        </button>
                    </div>
                    @if (cpassword?.touched && cpassword?.errors?.['required']) {
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Kindly confirm your password to continue.</li>
                    </ul>
                    }
                    @else if (cpassword?.hasError('passwordMismatch') && cpassword?.touched) {
                    <ul class="list-disc pl-5 text-yellow-400">
                        <li>Passwords do not match.</li>
                    </ul>
                    }
                </div>
                <p class="text-white">Already a user? <a class="text-white font-bold cursor-pointer"
                        routerLink="/login">Login</a>
                </p>
                <button type="submit" class="w-full py-2 rounded-lg
               bg-white hover:bg-white/80
               text-black font-bold
               transition-all duration-200 cursor-pointer">
                    Signup
                </button>
            </form>
        </div>
    </div>
</div>
<app-loading-overlay [show]="isLoading()" text="Registering..."></app-loading-overlay>
````

## File: src/app/features/auth/pages/signup/signup.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signup } from './signup';
import { appConfig } from '../../../../app.config';
````

## File: src/app/features/auth/pages/signup/signup.ts
````typescript
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { passwordStrengthValidator } from '@core/functions/passwordStrengthValidator';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from '@core/functions/confirmPasswordValidator';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
⋮----
export class Signup
⋮----
togglePassword()
toggleConfirmPassword()
constructor(private fb: FormBuilder, private authService: UserAuth, private router: Router, private toastr: ToastrService)
⋮----
private listenToPasswordChanges(): void
private updatePasswordChecks(password: string): void
submit()
shakeFirstInvalidControl()
get username()
get email()
get password()
get cpassword()
````

## File: src/app/features/dashboard/pages/dashboard/dashboard.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
````

## File: src/app/features/home/pages/home/home.css
````css

````

## File: src/app/features/home/pages/home/home.html
````html
<section class="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-indigo-50 py-24 px-6">
    <div class="lg:max-w-6xl xl:max-w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
            <h1 class="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Organize Work.
                <span
                    class="bg-linear-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent flex">
                    Empower Teams.
                </span>
            </h1>
            <p class="mt-6 text-lg text-gray-600 leading-relaxed">
                FlowDesk helps you manage tasks, users, and permissions in one powerful platform.
                Assign work, control access, and keep your team aligned.
            </p>
            <div class="mt-8 flex gap-4">
                <a routerLink="/login"
                    class="px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition">
                    Get Started
                </a>
                <a routerLink="/tasks"
                    class="px-6 py-3 rounded-xl bg-white border border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition">
                    View Tasks
                </a>
            </div>
        </div>
        <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(168,85,247,0.25)]
            p-6 border border-purple-100">
            <div class="mb-4">
                <h3 class="font-bold text-lg text-purple-700">
                    Tasks are waiting for you 👋
                </h3>
                <p class="text-sm text-gray-500">
                    Click now and manage your tasks
                </p>
            </div>
            <div class="overflow-hidden rounded-xl border border-gray-100">
                <table class="w-full text-sm text-left">
                    <thead class="bg-purple-50 text-purple-700">
                        <tr>
                            <th class="px-4 py-3 font-semibold">Task</th>
                            <th class="px-4 py-3 font-semibold">Assigned To</th>
                            <th class="px-4 py-3 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr class="hover:bg-purple-50/40 transition">
                            <td class="px-4 py-3 font-medium">Design Dashboard UI</td>
                            <td class="px-4 py-3 text-gray-600">Alice Johnson</td>
                            <td class="px-4 py-3">
                                <span
                                    class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                                    In Progress
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-purple-50/40 transition">
                            <td class="px-4 py-3 font-medium">Setup Role Permissions</td>
                            <td class="px-4 py-3 text-gray-600">Michael Lee</td>
                            <td class="px-4 py-3">
                                <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 font-semibold">
                                    Incomplete
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-purple-50/40 transition">
                            <td class="px-4 py-3 font-medium">Fix Login Bug</td>
                            <td class="px-4 py-3 text-gray-600">Sarah Kim</td>
                            <td class="px-4 py-3">
                                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold">
                                    Completed
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-5">
                <a routerLink="/dashboard"
                    class="w-full text-center py-2 rounded-lg bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold pl-3 pr-3">
                    Go to Dashboard →
                </a>
            </div>
        </div>
    </div>
</section>
<section class="py-24 px-6 bg-white">
    <div class="lg:max-w-6xl xl:max-w-full mx-auto text-center">
        <h2 class="text-4xl font-bold">Everything you need to manage work</h2>
        <p class="mt-4 text-gray-600">Built for teams, managers, and admins.</p>
        <div class="mt-16 grid md:grid-cols-3 gap-8">
            <div class="p-8 rounded-2xl bg-purple-50 border border-purple-100 hover:shadow-lg transition">
                <div class="text-3xl">📋</div>
                <h3 class="mt-4 font-bold text-lg">Task Management</h3>
                <p class="mt-2 text-gray-600 text-sm">
                    Create, assign, track and update tasks with full visibility.
                </p>
            </div>
            <div class="p-8 rounded-2xl bg-indigo-50 border border-indigo-100 hover:shadow-lg transition">
                <div class="text-3xl">👥</div>
                <h3 class="mt-4 font-bold text-lg">User Control</h3>
                <p class="mt-2 text-gray-600 text-sm">
                    Manage team members, roles, and access levels easily.
                </p>
            </div>
            <div class="p-8 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 hover:shadow-lg transition">
                <div class="text-3xl">🔐</div>
                <h3 class="mt-4 font-bold text-lg">Permissions System</h3>
                <p class="mt-2 text-gray-600 text-sm">
                    Fine-grained permissions for secure and structured workflows.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="py-24 px-6 bg-linear-to-br from-purple-50 to-indigo-50">
    <div class="lg:max-w-5xl xl:max-w-full mx-auto text-center">
        <h2 class="text-4xl font-bold">How FlowDesk Works</h2>
        <div class="mt-16 grid md:grid-cols-3 gap-10 text-left">
            <div>
                <div class="text-purple-600 text-xl font-bold">01</div>
                <h4 class="mt-2 font-bold">Create Users</h4>
                <p class="mt-2 text-gray-600 text-sm">Add team members and define their roles.</p>
            </div>
            <div>
                <div class="text-purple-600 text-xl font-bold">02</div>
                <h4 class="mt-2 font-bold">Assign Tasks</h4>
                <p class="mt-2 text-gray-600 text-sm">Distribute work based on responsibility.</p>
            </div>
            <div>
                <div class="text-purple-600 text-xl font-bold">03</div>
                <h4 class="mt-2 font-bold">Control Access</h4>
                <p class="mt-2 text-gray-600 text-sm">Permissions ensure users only see what they should.</p>
            </div>
        </div>
    </div>
</section>
<section class="py-24 px-6 text-center bg-white">
    <h2 class="text-4xl font-extrabold">
        Ready to streamline your workflow?
    </h2>
    <p class="mt-4 text-gray-600">
        Start managing tasks and teams the smart way.
    </p>
    <a routerLink="/login"
        class="mt-8 inline-block px-8 py-4 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-xl shadow-purple-500/30 hover:scale-105 transition">
        Start Using FlowDesk
    </a>
</section>
````

## File: src/app/features/home/pages/home/home.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
````

## File: src/app/features/home/pages/home/home.ts
````typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
⋮----
export class Home
````

## File: src/app/features/tasks/components/task-filters/task-filters.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFilters } from './task-filters';
````

## File: src/app/features/tasks/components/task-filters/task-filters.ts
````typescript
import { Component, EventEmitter, Input, Output, model, input, effect, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { UserModel } from '@core/models/UserModel';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { PermissionKey } from '@core/models/PermissionKey';
⋮----
export class TaskFilters
⋮----
constructor(private authService: UserAuth)
⋮----
toggleDatePicker()
````

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskTableFooter } from './task-table-footer';
````

## File: src/app/features/tasks/components/task-table-row/task-table-row.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskTableRow } from './task-table-row';
````

## File: src/app/features/tasks/components/task-table/task-table.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskTable } from './task-table';
````

## File: src/app/features/tasks/pages/tasks/tasks.css
````css
.page-wrapper.loading {
````

## File: src/app/features/tasks/pages/tasks/tasks.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { appConfig } from '../../../../app.config';
````

## File: src/app/features/users/components/sidebar/sidebar.css
````css

````

## File: src/app/features/users/components/sidebar/sidebar.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sidebar } from './sidebar';
````

## File: src/app/features/users/components/user-table/user-table.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTable } from './user-table';
````

## File: src/app/features/users/pages/user/user.css
````css

````

## File: src/app/features/users/pages/user/user.html
````html
<div class="py-10 min-h-full">
    <div class="px-10">
        <p class="text-3xl text-purple-700 font-bold">User Management</p>
    </div>
    <div>
        <app-user-table [users$]="users$" (viewUser)="onViewUser($event)" (editUser)="onEditUser($event)"
            (addUser)="onAddUser()" (deleteUser)="onDeleteUser($event)"></app-user-table>
    </div>
</div>
<app-sidebar #sidebar></app-sidebar>
````

## File: src/app/features/users/pages/user/user.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from './user';
````

## File: src/app/layouts/header/header.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { appConfig } from '../../../app/app.config';
````

## File: src/app/shared/components/empty-state/empty-state.css
````css

````

## File: src/app/shared/components/empty-state/empty-state.html
````html
<div
    class="flex flex-col items-center justify-center py-10 sm:py-14 px-4 text-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
    <i [class]="iconClass + ' text-4xl sm:text-5xl text-gray-300 mb-2'"></i>
    <h3 class="text-base sm:text-lg font-semibold text-gray-700">
        {{ title }}
    </h3>
    <p class="mt-1 text-xs sm:text-sm text-gray-500 max-w-sm">
        {{ descriptionLine1 }} <br class="hidden sm:block" />
        <span class="sm:inline">{{ descriptionLine2 }}</span>
    </p>
</div>
````

## File: src/app/shared/components/empty-state/empty-state.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyState } from './empty-state';
````

## File: src/app/shared/components/empty-state/empty-state.ts
````typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
⋮----
export class EmptyState
````

## File: src/app/shared/components/kanban-view/kanban-view.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropExample } from './kanban-view';
````

## File: src/app/shared/components/loading-overlay/loading-overlay.css
````css

````

## File: src/app/shared/components/loading-overlay/loading-overlay.html
````html
@if (show) {
<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
    <div class="w-full max-w-xs rounded-2xl bg-white border border-gray-200 shadow-xl p-6 text-center">
        <div class="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600">
        </div>
        <p class="text-sm sm:text-base text-gray-700">{{ text }}</p>
    </div>
</div>
}
````

## File: src/app/shared/components/loading-overlay/loading-overlay.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingOverlay } from './loading-overlay';
````

## File: src/app/shared/components/loading-overlay/loading-overlay.ts
````typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
⋮----
export class LoadingOverlay
````

## File: src/app/shared/components/task-dialog/task-dialog.css
````css

````

## File: src/app/shared/components/task-dialog/task-dialog.html
````html
@if (open) {
<div class="fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity"></div>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-17">
    <div class="relative w-full max-w-md bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-200
             max-h-[90vh] overflow-y-auto">
        <div class="absolute top-3 right-3 sm:top-4 sm:right-4">
            <button type="button" (click)="close.emit()"
                class="rounded-full p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 flex items-center transition cursor-pointer">
                <i class="bx bx-x text-2xl"></i>
            </button>
        </div>
        <ng-content></ng-content>
    </div>
</div>
}
````

## File: src/app/shared/components/task-dialog/task-dialog.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDialog } from './task-dialog';
````

## File: src/app/shared/components/task-dialog/task-dialog.ts
````typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
⋮----
export class TaskDialog
````

## File: src/app/shared/components/task-form/task-form.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskForm } from './task-form';
````

## File: src/app/shared/directives/.gitkeep
````

````

## File: src/app/shared/models/.gitkeep
````

````

## File: src/app/shared/utils/.gitkeep
````

````

## File: src/index.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FlowDesk</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href='https://cdn.boxicons.com/3.0.7/fonts/basic/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <app-root></app-root>
</body>
</html>
````

## File: src/main.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
````

## File: src/styles.css
````css
* {
body {
.body-lock {
.md-drppicker,
.md-drppicker {
.md-drppicker .buttons {
.md-drppicker .btn {
.md-drppicker .btn.btn-default {
.md-drppicker .btn.btn-default svg {
.md-drppicker .buttons_input {
⋮----
.md-drppicker .btn:hover {
⋮----
.ngx-pagination .current {
.ngx-pagination * {
.ngx-pagination {
.ngx-pagination li::before {
.ngx-pagination li a::before {
.ngx-pagination li::after {
.ngx-pagination li a::after {
.ngx-pagination .pagination-previous a {
.ngx-pagination .disabled {
.ngx-pagination .pagination-next a {
.ngx-pagination .pagination-previous.disabled {
.ngx-pagination .pagination-next.disabled {
.ng-select {
⋮----
@apply text-sm;
⋮----
.filter-select .ng-select-container {
.filter-select .ng-select-container:hover {
.filter-select .ng-value {
.filter-select .ng-arrow-wrapper {
.filter-select {
.filter-select .ng-option {
.filter-select .ng-option:hover {
.filter-select .ng-option-selected {
::-webkit-scrollbar {
::-webkit-scrollbar-track {
::-webkit-scrollbar-thumb {
::-webkit-scrollbar-thumb:active {
tr[cdkdrag] {
.cdk-drag-preview {
.cdk-drag-placeholder {
.cdk-drag-handle {
````

## File: src/testing/with-app-providers.ts
````typescript
import { appConfig } from '../app/app.config';
````

## File: tsconfig.app.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [],
    "baseUrl": "./",
    "paths": {
      "@features/*": [
        "src/app/features/*"
      ],
      "@core/*": [
        "src/app/core/*"
      ],
      "@layouts/*": [
        "src/app/layouts/*"
      ],
      "@shared/*": [
        "src/app/shared/*"
      ],
      "@environments/*": [
        "environments/*"
      ]
    }
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
````

## File: tsconfig.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "typeCheckHostBindings": true,
    "strictTemplates": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: tsconfig.spec.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ],
    "baseUrl": "./",
    "paths": {
      "@features/*": [
        "src/app/features/*"
      ]
    }
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
````

## File: package.json
````json
{
  "name": "flow-desk",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "prettier": {
    "printWidth": 100,
    "singleQuote": true,
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^20.3.16",
    "@angular/cdk": "^20.2.14",
    "@angular/common": "^20.3.0",
    "@angular/compiler": "^20.3.0",
    "@angular/core": "^20.3.0",
    "@angular/fire": "^20.0.1",
    "@angular/forms": "^20.3.0",
    "@angular/platform-browser": "^20.3.0",
    "@angular/router": "^20.3.0",
    "@ng-select/ng-select": "^20.0.1",
    "@tailwindcss/postcss": "^4.1.18",
    "chart.js": "^4.5.1",
    "dayjs": "^1.11.19",
    "firebase": "^11.10.0",
    "moment": "^2.30.1",
    "ngx-daterangepicker-material": "^6.0.4",
    "ngx-pagination": "^6.0.3",
    "ngx-toastr": "^19.1.0",
    "postcss": "^8.5.6",
    "rxjs": "~7.8.0",
    "tailwindcss": "^4.1.18",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^20.3.13",
    "@angular/cli": "^20.3.13",
    "@angular/compiler-cli": "^20.3.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.9.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.9.2",
    "zone.js": "^0.15.1"
  }
}
````

## File: src/app/features/profile/profile.css
````css

````

## File: src/app/features/profile/profile.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from './profile';
````

## File: src/app/features/tasks/components/task-table/task-table.css
````css
.cdk-drag-preview {
.cdk-drag-placeholder {
.cdk-drag-animating {
tr[cdkdrag] {
⋮----
.cdk-drag-preview td {
````

## File: src/app/features/tasks/components/task-table/task-table.ts
````typescript
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  signal,
  computed,
  DestroyRef,
  inject,
  input,
  model
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskView } from '@core/models/Task';
import { TaskTableRow } from '@features/tasks/components/task-table-row/task-table-row';
import { EmptyState } from '@shared/components/empty-state/empty-state';
import { TaskTableFooter } from '../task-table-footer/task-table-footer';
import { UserService } from '@core/services/user/user.service';
import { UserModel } from '@core/models/UserModel'
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
⋮----
export class TaskTable implements OnChanges
⋮----
private updatePagedTasks(): void
constructor(private userService: UserService)
ngOnChanges(changes: SimpleChanges): void
onEdit(task: TaskView): void
onDelete(task: TaskView): void
onPageChange(page: number): void
onClearFilters(): void
onSortBy(field: 'title' | 'createdAt'): void
drop(event: CdkDragDrop<TaskView[]>)
````

## File: src/app/features/tasks/pages/tasks/tasks.html
````html
<div class="page-wrapper min-h-full" [class.loading]="isLoading()">
    <div class="min-h-screen w-full bg-purple-200 flex items-center flex-col
           px-4 sm:px-6 lg:px-7
           py-4 sm:py-6 lg:py-7
           gap-6 sm:gap-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            <app-stats-card title="Total Tasks" [value]="totalTasks()" subtitle="Tasks created so far" icon="bx-list-ul"
                theme="purple" />
            <app-stats-card title="Completed Tasks" [value]="completedTasks()" subtitle="Great job!"
                icon="bx-check-circle" theme="green" />
            <app-stats-card title="In Progress Tasks" [value]="inProgressTasks()" subtitle="Keep going!"
                icon="bx-loader-dots" theme="yellow" />
            <app-stats-card title="Incomplete Tasks" [value]="incompleteTasks()" subtitle="Needs attention"
                icon="bx-x-circle" theme="red" />
        </div>
        <div class="w-full bg-white rounded-lg px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-6 sm:pt-7">
            <app-task-filters [statusOptions]="statusOptions" [searchControl]="searchControl" [(dateRange)]="dateRange"
                [(selectedStatus)]="selectedStatus" (addTask)="toggleDialog()" [assignedUserOptions]="users()"
                [(selectedAssignedUser)]="selectedAssignedUser" (UISwitchedTrigger)="isUISwitched.set($event)">
            </app-task-filters>
            @if(isUISwitched() == false) {
            <app-task-table [tasks]="filteredTasks()" [itemsPerPage]="itemsPerPage()" [currentPage]="p"
                [sortField]="sortField()" [sortDirection]="sortDirection()" (editTask)="edit($event)"
                (deleteTask)="delete($event)" (pageChange)="p = $event" (clearFilters)="clearFilters()"
                (sortByChange)="sortBy($event)" [clearExpandedTrigger]="clearExpandedTrigger()" [users]="users()"
                [pageSizeOptions]="pageSizeOptions" [selectedPageSize]="selectedPageSize()"
                (pageSizeChangeTrigger)="setItemsPerPage($event)">
            </app-task-table>
            } @else {
            <kanban-view [users]="users()" [tasks]="tasks()" (onTaskUpdate)="updateTasksFromDrag($event)"></kanban-view>
            }
        </div>
        <app-task-dialog [open]="isDialogClosed == false" (close)="toggleDialog()">
            <app-task-form [form]="taskForm" [dialogTitle]="dialogTitle()" [dialogDescription]="dialogDescription()"
                [dialogTitleColor]="dialogTitleColor()" [dialogSubmitText]="dialogSubmitText()"
                [isDeleting]="isDeleting()" [users]="users()" (submitForm)="submit()" (cancel)="cancelDialog()">
            </app-task-form>
        </app-task-dialog>
    </div>
</div>
<app-loading-overlay [show]="isLoading()" text="Loading tasks…"></app-loading-overlay>
````

## File: src/app/features/users/components/sidebar/sidebar.html
````html
<div class="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/50
         transition-opacity duration-300 ease-out" [class.opacity-100]="isOpen" [class.opacity-0]="!isOpen"
    [class.pointer-events-auto]="isOpen" [class.pointer-events-none]="!isOpen" (click)="closeSidebar()"></div>
<aside class="fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-full max-w-md translate-x-full
         bg-white/20 backdrop-blur-xl border-l border-white/30
         shadow-2xl flex flex-col transform transition-transform duration-300 ease-out" [class.translate-x-0]="isOpen"
    [class.translate-x-full]="!isOpen">
    <div class="px-6 py-4 border-b border-white/20 flex items-center justify-between shrink-0">
        <h2 class="text-xl font-semibold text-white">
            @if (mode === 'add') { Add User }
            @else if (mode === 'edit') { Edit User }
            @else if (mode === 'view') { View User }
            @else { Delete User }
        </h2>
        <button class="text-white/70 hover:text-white text-lg cursor-pointer" (click)="closeSidebar()">
            ✕
        </button>
    </div>
    <form [formGroup]="userForm" class="flex flex-col min-h-0 text-white">
        <div class="flex-1 min-h-0 overflow-y-auto px-6 py-5 space-y-6">
            <div>
                <label class="text-sm font-medium mb-1 block text-white/80">Name</label>
                <input type="text" formControlName="name" class="w-full rounded-xl bg-white/20 border border-white/30
                 px-4 py-2.5 text-white placeholder-white/60
                 focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="John Doe" />
            </div>
            <div>
                <label class="text-sm font-medium mb-1 block text-white/80">Email</label>
                <input type="email" formControlName="email" class="w-full rounded-xl bg-white/20 border border-white/30
                 px-4 py-2.5 text-white placeholder-white/60
                 focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="john@example.com" />
            </div>
            @if (userForm.contains('password')) {
            <div>
                <label class="text-sm font-medium mb-1 block text-white/80">Password</label>
                <input type="password" formControlName="password" class="w-full rounded-xl bg-white/20 border border-white/30
             px-4 py-2.5 text-white placeholder-white/60
             focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="••••••••" />
            </div>
            }
            <div>
                <div class="flex items-center justify-between mb-3">
                    <p class="text-sm font-semibold text-white/90">Permissions</p>
                    @if (mode !== 'view' && mode !== 'delete') {
                    <button type="button" (click)="toggleAllPermissions()"
                        class="text-xs px-3 py-1.5 rounded-lg transition border w-22">
                        {{ allPermissionsEnabled ? 'Disable All' : 'Enable All' }}
                    </button>
                    }
                </div>
                <div formArrayName="permissions" class="space-y-3">
                    @for (perm of permissionList; track $index; let i = $index) {
                    <div class="flex items-center justify-between bg-white/10
                rounded-xl px-4 py-3 border border-white/20">
                        <div class="flex items-center gap-1">
                            <span class="text-sm">{{ perm.label }}</span>
                            @if(perm.key === PermissionKey.TASK_VIEW){
                            <span class="text-xs text-white/50">(Required)
                            </span>
                            }
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" [formControlName]="i" />
                            <div class="w-11 h-6 rounded-full
         bg-white/30
         peer-checked:bg-indigo-500
         peer-disabled:bg-white/10
         peer-disabled:opacity-80
         peer-disabled:cursor-not-allowed
         after:content-['']
         after:absolute after:top-0.5 after:left-0.5
         after:h-5 after:w-5 after:rounded-full
         after:bg-white
         after:transition-all
         peer-checked:after:translate-x-5
         peer-disabled:after:bg-white/60
  ">
                            </div>
                        </label>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div class="border-t border-white/20 px-6 py-4 flex gap-3">
            <button type="button" class="flex-1 rounded-xl bg-white/20 border border-white/30
           px-4 py-2.5 text-white hover:bg-white/30 transition" (click)="closeSidebar()">
                Cancel
            </button>
            @if (mode === 'add') {
            <button type="button" (click)="addUser()" [disabled]="userForm.invalid" class="flex-1 rounded-xl px-4 py-2.5 transition
         text-white" [class.bg-indigo-500]="(canManageUsers())" [class.hover:bg-indigo-600]="(canManageUsers())"
                [class.bg-gray-400]="!(canManageUsers())" [class.cursor-not-allowed]="!(canManageUsers())"
                [class.opacity-60]="!(canManageUsers())">
                Add User
            </button>
            }
            @if (mode === 'edit') {
            <button type="button" (click)="updateUser()" [disabled]="userForm.invalid || userForm.pristine" class="flex-1 rounded-xl px-4 py-2.5 transition
         text-white" [class.bg-indigo-500]="(canManageUsers())" [class.hover:bg-indigo-600]="(canManageUsers())"
                [class.bg-gray-400]="!(canManageUsers())" [class.cursor-not-allowed]="!(canManageUsers())"
                [class.opacity-60]="!(canManageUsers())">
                Save Changes
            </button>
            }
            @if (mode === 'delete') {
            <button type="button" (click)="deleteUser(selectedUser?.id!)" class="flex-1 rounded-xl px-4 py-2.5 transition
         text-white" [class.bg-red-500]="(canManageUsers())" [class.hover:bg-red-600]="(canManageUsers())"
                [class.bg-gray-400]="!(canManageUsers())" [class.cursor-not-allowed]="!(canManageUsers())"
                [class.opacity-60]="!(canManageUsers())">
                Delete User
            </button>
            }
        </div>
    </form>
</aside>
<app-loading-overlay [show]="isLoading()" text="Processing..."></app-loading-overlay>
````

## File: src/app/features/users/components/sidebar/sidebar.ts
````typescript
import { AfterViewInit, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PermissionItem } from '@core/models/PermissionItem';
import { PermissionKey } from '@core/models/PermissionKey';
import { UserService } from '@core/services/user/user.service';
import { UserModel } from '@core/models/UserModel';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
import { UserAuth } from '@core/services/user-auth/user-auth';
export type UserSidebarMode = 'add' | 'edit' | 'view' | 'delete';
⋮----
export class Sidebar implements AfterViewInit
⋮----
constructor(private toastr: ToastrService, private userAuth: UserAuth, private userService: UserService)
⋮----
ngAfterViewInit()
ngOnDestroy()
get permissionsArray(): FormArray
private updatePermissionControls(): void
openSidebar()
openAdd()
openEdit(user: UserModel)
openView(user: UserModel)
openDelete(user: UserModel)
private updateFieldAccessByMode(): void
private disablePassword(): void
private mapUserPermissionsToForm(userPermissions: PermissionKey[]): boolean[]
private patchUserToForm(user: UserModel)
closeSidebar()
private getSelectedPermissions(): PermissionKey[]
addUser()
updateUser()
deleteUser(id: string)
get allPermissionsEnabled(): boolean
toggleAllPermissions(): void
private showNoPermission(): void
````

## File: src/app/features/users/components/user-table/user-table.css
````css
:host ::ng-deep .users-per-page-select.ng-select {
:host ::ng-deep .users-per-page-select .ng-select-container {
:host ::ng-deep .users-per-page-select .ng-placeholder {
:host ::ng-deep .users-per-page-select .ng-select-container:hover {
:host ::ng-deep .users-per-page-select.ng-select-focused .ng-select-container {
:host ::ng-deep .users-per-page-select .ng-value-container {
:host ::ng-deep .users-per-page-select .ng-input {
:host ::ng-deep .users-per-page-select .ng-arrow {
:host ::ng-deep .users-per-page-select .ng-has-value {
:host ::ng-deep .users-per-page-select .ng-select-container * {
:host ::ng-deep .users-per-page-select .ng-dropdown-panel {
:host ::ng-deep .users-per-page-select .ng-dropdown-panel-items {
:host ::ng-deep .users-per-page-select .ng-option {
:host ::ng-deep .users-per-page-select .ng-option:hover,
:host ::ng-deep .users-per-page-select .ng-option.ng-option-selected {
:host ::ng-deep .users-per-page-select.ng-select-opened .ng-select-container {
:host ::ng-deep .users-per-page-select.ng-select-opened .ng-select-bottom {
.permission-select {
.permission-select ::ng-deep .ng-select-container {
.permission-select ::ng-deep .ng-placeholder {
.permission-select ::ng-deep .ng-select-container:hover {
:host ::ng-deep .permission-select.ng-select-focused .ng-select-container {
.permission-select ::ng-deep .ng-value-container {
.permission-select ::ng-deep .ng-select-container * {
.permission-select ::ng-deep .ng-arrow {
.permission-select ::ng-deep .ng-dropdown-panel {
.permission-select ::ng-deep .ng-dropdown-panel-items {
.permission-select ::ng-deep .ng-option {
.permission-select ::ng-deep .ng-option:hover,
.permission-select ::ng-deep .ng-option.ng-option-selected {
.permission-select ::ng-deep .ng-optgroup {
.permission-select ::ng-deep .ng-value,
:host ::ng-deep .permission-select.ng-select-opened .ng-select-container {
:host ::ng-deep .permission-select.ng-select-opened .ng-select-bottom {
.permission-select ::ng-deep .ng-clear-wrapper {
.permission-select ::ng-deep .ng-clear-wrapper:hover {
.modern-checkbox {
.badge {
.badge-success {
.badge-warning {
:host ::ng-deep .md-drppicker {
⋮----
:host ::ng-deep .md-drppicker,
````

## File: src/app/features/users/pages/user/user.ts
````typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { UserTable } from '@features/users/components/user-table/user-table';
import { UserModel } from '@core/models/UserModel';
import { Sidebar } from '@features/users/components/sidebar/sidebar';
import { Observable } from 'rxjs';
⋮----
export class User implements OnInit
⋮----
constructor(private userService: UserService)
ngOnInit(): void
⋮----
onAddUser()
onViewUser(user: UserModel)
onEditUser(user: UserModel)
onDeleteUser(user: UserModel)
````

## File: src/app/layouts/header/header.css
````css

````

## File: src/app/shared/components/demo-graphs/demo-graphs.css
````css

````

## File: src/app/shared/components/demo-graphs/demo-graphs.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoGraphs } from './demo-graphs';
````

## File: src/app/shared/components/shared-pagination/shared-pagination.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedPagination } from './shared-pagination';
````

## File: src/app/shared/components/stats-card/stats-card.css
````css

````

## File: src/app/shared/components/stats-card/stats-card.html
````html
<div class="bg-white rounded-xl p-4 sm:p-5 shadow-sm relative">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5">
        <div class="flex flex-col gap-2 sm:gap-3 min-w-0 pr-14 sm:pr-0">
            <p class="text-xs sm:text-sm font-semibold text-gray-500 truncate">{{ title }}</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-900 wrap-break-word">{{ value }}</p>
            <p class="text-xs sm:text-sm" [ngClass]="subtitleColorClass">{{ subtitle }}</p>
        </div>
        <div class="rounded-lg p-2 sm:p-2.5 flex items-center
             absolute top-4 right-4" [ngClass]="iconBgClass">
            <i class="bx text-2xl sm:text-3xl" [ngClass]="[icon, iconColorClass]"></i>
        </div>
    </div>
</div>
````

## File: src/app/shared/components/stats-card/stats-card.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsCard } from './stats-card';
````

## File: src/app/shared/components/stats-card/stats-card.ts
````typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export type StatsCardTheme = 'purple' | 'green' | 'yellow' | 'red';
⋮----
export class StatsCard
⋮----
get iconBgClass(): string
get iconColorClass(): string
get subtitleColorClass(): string
````

## File: src/app/shared/pipes/truncate-pipe.spec.ts
````typescript
import { TruncatePipe } from './truncate-pipe';
````

## File: src/app/shared/pipes/truncate-pipe.ts
````typescript
import { Pipe, PipeTransform } from '@angular/core';
⋮----
export class TruncatePipe implements PipeTransform
⋮----
transform(value: string, limit: number = 30, completeWords: boolean = false, ellipsis: string = '...'): string
⋮----
// Optional: don't cut in the middle of a word
````

## File: src/app/app.routes.ts
````typescript
import { Routes } from '@angular/router';
import { Login } from '@features/auth/pages/login/login';
import { Signup } from '@features/auth/pages/signup/signup';
import { Tasks } from '@features/tasks/pages/tasks/tasks';
import { authGuard } from '@core/guards/auth-guard';
import { User } from '@features/users/pages/user/user';
import { Home } from '@features/home/pages/home/home';
import { Dashboard } from '@features/dashboard/pages/dashboard/dashboard';
import { DemoGraphs } from '@shared/components/demo-graphs/demo-graphs';
import { Profile } from '@features/profile/profile';
````

## File: src/app/features/auth/pages/login/login.html
````html
<div class="login-wrapper min-h-[calc(100vh-64px)] flex items-center justify-center
         bg-linear-to-br from-purple-600 via-indigo-600 to-fuchsia-600 py-10">
    <div class="w-full max-w-md p-8 rounded-2xl
         bg-white/20 backdrop-blur-xl
         border border-white/30 shadow-2xl">
        <h2 class="text-3xl font-extrabold text-white tracking-tight text-center mb-2">
            Welcome Back
        </h2>
        <p class="text-center text-white tracking-tight mb-8">
            Sign in to continue to your dashboard!
        </p>
        <form [formGroup]="loginForm" (ngSubmit)="submit()" class="space-y-5">
            <div>
                <label class="block text-sm font-semibold text-purple-100 mb-1">
                    Email Address
                </label>
                <input type="email" formControlName="email" placeholder="john@gmail.com" class="w-full px-4 py-2 rounded-lg
                   bg-white/30 text-white placeholder-purple-200
                   border border-white/40
                   focus:outline-none focus:ring-2 focus:ring-purple-300"
                    [ngClass]="{ 'border-2! border-red-500! focus:ring-transparent!': email?.invalid && email?.touched }" />
                @if(email?.touched && email?.errors?.['required']){
                <ul class="list-disc pl-5 text-yellow-400">
                    <li>Kindly enter your email address to continue.</li>
                </ul>
                }
                @else if(email?.invalid && email?.touched){
                <ul class="list-disc pl-5 text-yellow-400">
                    <li>Kindly enter a valid email address to continue.</li>
                </ul>
                }
            </div>
            <div>
                <label class="block text-sm font-semibold text-purple-100 mb-1">
                    Password
                </label>
                <div class="relative w-full flex items-center">
                    <input [type]="showPassword ? 'text' : 'password'" formControlName="password"
                        class="w-full px-4 py-2 pr-12 rounded-lg bg-white/30 text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-purple-200"
                        placeholder="••••••••"
                        [ngClass]="{ 'border-2! border-red-500! focus:ring-transparent!': password?.invalid && password?.touched }" />
                    <button type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white flex items-center cursor-pointer"
                        (click)="togglePassword()">
                        <i class="bx" [ngClass]="showPassword ? 'bx-eye-closed' : 'bx-eye'"></i>
                    </button>
                </div>
                @if(password?.touched && password?.errors?.['required']){
                <ul class="list-disc pl-5 text-yellow-400">
                    <li>Kindly enter a password to continue.</li>
                </ul>
                }
            </div>
            <p class="text-white">
                Don't have any account?
                <a class="text-white font-bold" routerLink="/signup">Create One</a>
            </p>
            <button type="submit" class="w-full py-2 rounded-lg
                 bg-white hover:bg-white/80
                 text-black font-bold
                 transition-all duration-200 cursor-pointer">
                Login
            </button>
        </form>
    </div>
</div>
<app-loading-overlay [show]="isLoading()" text="Logging in..."></app-loading-overlay>
````

## File: src/app/features/tasks/components/task-filters/task-filters.css
````css
.status-select {
.status-select ::ng-deep .ng-select-container {
.status-select ::ng-deep .ng-select-container:hover {
.status-select ::ng-deep .ng-value-container {
.status-select ::ng-deep .ng-arrow {
.status-select ::ng-deep .ng-dropdown-panel {
.status-select ::ng-deep .ng-value,
:host ::ng-deep .status-select.ng-select-opened .ng-select-container {
:host ::ng-deep .status-select.ng-select-opened .ng-select-bottom {
:host ::ng-deep .md-drppicker {
⋮----
:host ::ng-deep .md-drppicker,
⋮----
.filter-select ::ng-deep .ng-select-container {
.filter-select ::ng-deep .ng-select-container:hover {
.filter-select ::ng-deep .ng-value {
.filter-select ::ng-deep .ng-arrow-wrapper {
.filter-select ::ng-deep .ng-dropdown-panel {
.filter-select ::ng-deep .ng-option {
.filter-select ::ng-deep .ng-option:hover {
.filter-select ::ng-deep .ng-option-selected {
.filter-select ::ng-deep .ng-select-container .ng-clear-wrapper {
.user-select ::ng-deep .ng-select-container {
.user-select ::ng-deep .ng-select-container:hover {
.user-select ::ng-deep .ng-value {
.user-select ::ng-deep .ng-arrow-wrapper {
.user-select ::ng-deep .ng-dropdown-panel {
.user-select ::ng-deep .ng-option {
.user-select ::ng-deep .ng-option:hover {
.user-select ::ng-deep .ng-option-selected {
.user-select ::ng-deep .ng-select-container .ng-clear-wrapper {
````

## File: src/app/features/tasks/components/task-filters/task-filters.html
````html
<div class="flex flex-col w-full gap-4 mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full min-w-0 lg:flex lg:flex-row relative">
        <div class="relative w-full min-w-0 sm:col-span-2 lg:flex-1 lg:min-w-36.25">
            <input type="search"
                class="w-full border-2 border-gray-300 pr-10 pl-4 py-2 rounded-lg text-sm sm:text-base focus:outline-none h-11 placeholder:text-gray-400"
                placeholder="Search..." [formControl]="searchControl" />
            <i class="bx bx-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></i>
        </div>
        <div class="min-w-35 sm:col-span-1">
            <ng-select class="user-select w-full" [items]="assignedUserOptions()" [clearable]="false" bindLabel="name"
                bindValue="id" [(ngModel)]="selectedAssignedUser" [searchable]="false" [closeOnSelect]="true"
                [clearable]="true">
                <ng-template ng-placeholder-tmp #placeholder>
                    <span class="text-gray-400 font-semibold whitespace-nowrap">Users</span>
                </ng-template>
            </ng-select>
        </div>
        <div class="sm:col-span-2 grid grid-cols-1 sm:flex gap-3">
            <div class="min-w-60 flex-[1_0_15rem]">
                <input ngxDaterangepickerMd [(ngModel)]="dateRange" [autoApply]="false" [alwaysShowCalendars]="true"
                    [showClearButton]="true" [drops]="'down'" [opens]="'right'" [locale]="{ format: 'DD/MM/YYYY' }"
                    [linkedCalendars]="true" placeholder="Date range"
                    class="border-2 border-gray-300 px-4 py-2 rounded-lg w-full cursor-pointer text-sm sm:text-base h-11 placeholder:text-gray-400"
                    (click)="toggleDatePicker()" [title]="dateRange()?.startDate && dateRange()?.endDate
                ? ( (dateRange()?.startDate | date:'dd/MM/yyyy':'UTC') + ' to ' + (dateRange()?.endDate | date:'dd/MM/yyyy':'UTC') )
                : ''" />
            </div>
            <div class="relative flex-[0_1_10rem] min-w-25">
                <ng-select class="status-select filter-select w-full" [items]="statusOptions()" bindLabel="label"
                    bindValue="value" [(ngModel)]="selectedStatus" [clearable]="false" [searchable]="false"
                    [closeOnSelect]="true">
                    <ng-template ng-placeholder-tmp #statusPlaceholder>
                        <span class="text-gray-400 font-semibold whitespace-nowrap">Status</span>
                    </ng-template>
                    <ng-template ng-label-tmp let-item="item">
                        @if (item?.value !== null) {
                        <span class="whitespace-nowrap" [ngClass]="{
                        'text-green-600': item.value === 'COMPLETED',
                        'text-yellow-600': item.value === 'IN_PROGRESS',
                        'text-red-600': item.value === 'INCOMPLETE'
                    }">
                            {{ item.label }}
                        </span>
                        } @else {
                        <ng-template [ngTemplateOutlet]="statusPlaceholder"></ng-template>
                        }
                    </ng-template>
                    <ng-template ng-option-tmp let-item="item">
                        <span class="whitespace-nowrap" [ngClass]="{
                        'text-gray-700': item.value === null,
                        'text-green-600': item.value === 'COMPLETED',
                        'text-yellow-600': item.value === 'IN_PROGRESS',
                        'text-red-600': item.value === 'INCOMPLETE'
                    }">
                            {{ item.label }}
                        </span>
                    </ng-template>
                </ng-select>
            </div>
        </div>
        <div class="flex items-center gap-3 sm:col-span-1">
            <button [disabled]="!canCreateTaskSig()" [class.opacity-40]="!canCreateTaskSig()"
                [class.cursor-not-allowed]="!canCreateTaskSig()" class="w-full h-11 px-4 rounded-lg
  bg-linear-to-r from-purple-600 to-indigo-600
  text-white text-base
  shadow-md shadow-purple-500/30
  hover:shadow-lg hover:shadow-purple-500/40
  lg:hover:scale-105 transition-all duration-200
  whitespace-nowrap min-w-20 flex items-center justify-center cursor-pointer leading-none"
                (click)="canCreateTaskSig() && addTask.emit()" [title]="'Add Task'">
                <span>Add Task</span>
            </button>
            <label class="relative inline-flex items-center cursor-pointer select-none"
                [title]="isUISwitched() ? 'Switch to Grid View' : 'Switch to Kanban View'">
                <input type="checkbox" class="sr-only peer" [checked]="isUISwitched()"
                    (change)="isUISwitched.set($event.target.checked)" />
                <div class="w-20 h-11 bg-gray-200 rounded-xl peer-checked:bg-indigo-100
                    transition-colors duration-300 shadow-inner flex items-center px-1">
                    <div class="w-full flex justify-between px-2 text-gray-400">
                        <i class="bx bx-table text-lg"></i>
                        <i class="bx bx-columns-3 text-lg"></i>
                    </div>
                </div>
                <div class="absolute left-1 top-1 h-9 w-9 rounded-lg
                    bg-linear-to-r from-purple-600 to-indigo-600
                    shadow-md transition-all duration-300
                    peer-checked:translate-x-9 flex items-center justify-center text-white">
                    <i class="bx text-lg" [ngClass]="isUISwitched() ? 'bx-columns-3' : 'bx-table'"></i>
                </div>
            </label>
        </div>
    </div>
</div>
````

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.ts
````typescript
import { Component, EventEmitter, input, Input, model, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPagination } from '@shared/components/shared-pagination/shared-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
⋮----
export class TaskTableFooter
⋮----
onPageSizeChange(value: number | 'All'): void
````

## File: src/app/layouts/header/header.ts
````typescript
import { Component } from '@angular/core';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
⋮----
export class Header
⋮----
constructor(public authService: UserAuth, public router: Router)
closeUserMenu()
async logout()
````

## File: src/app/shared/components/shared-pagination/shared-pagination.css
````css
button {
button:disabled {
button:not(:disabled):hover {
button.bg-indigo-600 {
````

## File: src/app/shared/components/task-form/task-form.css
````css
.shake {
.submit-btn {
.submit-btn:hover {
.edit-btn {
.edit-btn:hover {
.delete-btn {
.delete-btn:hover {
:host ::ng-deep ng-select {
:host ::ng-deep .ng-select-container {
:host ::ng-deep .ng-value-container {
.assignedTo-select ::ng-deep .ng-value-container {
:host ::ng-deep .ng-placeholder {
:host ::ng-deep .ng-select-multiple .ng-value {
:host ::ng-deep .ng-select-single .ng-value {
:host ::ng-deep .ng-value-icon {
:host ::ng-deep .ng-value-icon:hover {
:host ::ng-deep .ng-dropdown-panel {
:host ::ng-deep .ng-option {
:host ::ng-deep .ng-option:hover {
:host ::ng-deep .ng-option-selected {
:host ::ng-deep .ng-input>input {
:host ::ng-deep .ng-arrow-wrapper {
:host ::ng-deep .ng-input {
:host ::ng-deep .ng-value-container::-webkit-scrollbar {
:host ::ng-deep .ng-value-container::-webkit-scrollbar-thumb {
:host ::ng-deep ng-select.ng-select-focused .ng-select-container {
.filter-select ::ng-deep .ng-select-container,
.filter-select ::ng-deep .ng-select-container .ng-clear-wrapper,
.filter-select ::ng-deep .ng-select-container .ng-clear-wrapper .ng-clear,
.filter-select ::ng-deep .ng-select-container:hover,
.filter-select ::ng-deep .ng-arrow-wrapper,
.filter-select ::ng-deep .ng-dropdown-panel,
.filter-select ::ng-deep .ng-option,
.filter-select ::ng-deep .ng-option:hover,
.filter-select ::ng-deep .ng-option-selected,
:host ::ng-deep .filter-select .ng-dropdown-panel,
:host ::ng-deep .filter-select .ng-dropdown-panel .ng-dropdown-panel-items,
````

## File: src/app/core/services/user/user.service.ts
````typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { environment } from "@environments/environment";
import { UserModel } from '@core/models/UserModel';
⋮----
export class UserService
⋮----
constructor(private http: HttpClient)
⋮----
getUsersByParent(force = false): Observable<UserModel[] | null>
addUser(user: Partial<UserModel>): Observable<UserModel>
updateUser(user: Partial<UserModel>): Observable<UserModel>
deleteUser(id: string): Observable<void>
clearUserOnLogout()
````

## File: src/app/features/tasks/components/task-table-row/task-table-row.ts
````typescript
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  effect,
  TemplateRef,
  HostListener,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskView } from '@core/models/Task';
import { UserModel } from '@core/models/UserModel';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { PermissionKey } from '@core/models/PermissionKey';
import { TruncatePipe } from '@shared/pipes/truncate-pipe';
⋮----
export class TaskTableRow implements AfterViewInit, OnDestroy
⋮----
set assignedUsers(value: UserModel[])
⋮----
@Input() set clearExpandedTrigger(v: number)
⋮----
constructor(
    private authService: UserAuth,
    private ngZone: NgZone
)
ngAfterViewInit(): void
ngOnDestroy(): void
⋮----
onDocumentClick(event: MouseEvent): void
toggleExpanded(event: Event): void
getUsersTooltip(users: UserModel[]): string
/* ══════════════════════════════════════════════════════════════════════════
     MEASUREMENT LOGIC
     Dynamically calculate how many users fit in compact mode
     ══════════════════════════════════════════════════════════════════════════ */
private setupResizeObserver(): void
⋮----
// Content width = total width - padding (6px each side)
⋮----
/**
   * Calculate how many users fit in compact mode:
   * - First user ALWAYS visible (never truncated)
   * - Second user only if it fits FULLY
   * - If total > 2, always show +N more button
   */
private calculateFittingUsers(): void
⋮----
// Calculate available width for chips
// If > 2 users, we ALWAYS need the +N more button
⋮----
// First user chip width
⋮----
// Second user chip width
⋮----
// Total width needed for both chips
⋮----
// Check if both fit
⋮----
// Second doesn't fit - but now we need button space even if total = 2
⋮----
private measureChipWidth(name: string): number
private checkOverflow(): void
````

## File: src/app/shared/components/shared-pagination/shared-pagination.ts
````typescript
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
⋮----
export class SharedPagination implements OnChanges
⋮----
ngOnChanges(): void
onPageChange(page: number): void
⋮----
getVisiblePages(max: number): number[]
````

## File: src/app/shared/components/task-form/task-form.ts
````typescript
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UserModel } from '@core/models/UserModel';
import { NgSelectComponent } from '@ng-select/ng-select';
⋮----
export class TaskForm
⋮----
attemptSubmit(): void
isFieldInvalid(field: string): boolean
````

## File: src/app/features/profile/profile.ts
````typescript
import { Component, computed, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { UserService } from '@core/services/user/user.service';
import { getPermissionLabel } from '@core/models/PERMISSION_LABELS';
import { PermissionKey } from '@core/models/PermissionKey';
import { ToastrService } from 'ngx-toastr';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { UserModel } from '@core/models/UserModel';
⋮----
export class Profile implements OnInit
⋮----
constructor(
    public authService: UserAuth,
    private userService: UserService,
    private toastr: ToastrService
)
ngOnInit()
startEditing()
cancelEditing()
saveProfile()
getPermissionColor(key: string): string
````

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.css
````css
:host {
.pagination-sm ::ng-deep .ngx-pagination {
⋮----
.pagination-sm {
.pagination-sm ::ng-deep .small-screen {
.clear-filters-button {
⋮----
.btnContainer {
.paginationContainer {
.clearBtn {
⋮----
:host ::ng-deep .ng-dropdown-panel-items {
:host ::ng-deep .items-per-page-select.ng-select {
:host ::ng-deep .items-per-page-select .ng-select-container {
:host ::ng-deep .items-per-page-select .ng-select-container:hover {
:host ::ng-deep .items-per-page-select .ng-value-container {
:host ::ng-deep .items-per-page-select .ng-input {
:host ::ng-deep .ng-select .ng-arrow-wrapper {
:host ::ng-deep .ng-select .ng-arrow {
:host ::ng-deep .ng-select .ng-arrow-wrapper::after {
:host ::ng-deep .ng-select.ng-select-opened .ng-arrow-wrapper::after {
:host ::ng-deep .items-per-page-select .ng-value,
:host ::ng-deep .items-per-page-select .ng-has-value {
:host ::ng-deep .items-per-page-select.ng-select-opened .ng-select-container {
:host ::ng-deep .items-per-page-select.ng-select-opened .ng-select-bottom {
````

## File: src/app/features/tasks/components/task-table/task-table.html
````html
<div class="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">
    <div class="overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border-collapse table-auto">
            <thead class="bg-gray-50 text-gray-600 uppercase text-[10px] sm:text-xs sticky top-0 z-10">
                <tr>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 cursor-pointer min-w-15 w-16 select-none whitespace-nowrap"
                        (click)="onSortBy('createdAt')">
                        <span class="inline-flex items-center gap-1">
                            S.No
                            <i class="bx" [ngClass]="{
                                'bx-caret-up': sortField === 'createdAt' && sortDirection === 'asc',
                                'bx-caret-down': sortField === 'createdAt' && sortDirection === 'desc'
                            }"></i>
                        </span>
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 text-center cursor-pointer select-none min-w-55 sm:min-w-70"
                        (click)="onSortBy('title')">
                        <span class="inline-flex items-center justify-center gap-2 w-full">
                            <span>Task</span>
                            <span class="flex flex-col text-xs leading-none">
                                <i class="bx bx-caret-up" [ngClass]="{
                                    'text-gray-400': sortField !== 'title' || sortDirection === 'desc',
                                    'text-gray-800': sortField === 'title' && sortDirection === 'asc'
                                }"></i>
                                <i class="bx bx-caret-down -mt-1" [ngClass]="{
                                    'text-gray-400': sortField !== 'title' || sortDirection === 'asc',
                                    'text-gray-800': sortField === 'title' && sortDirection === 'desc'
                                }"></i>
                            </span>
                        </span>
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 min-w-25 sm:min-w-30 text-center whitespace-nowrap">
                        Status
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 min-w-25 sm:min-w-30 text-center whitespace-nowrap">
                        Due Date
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 min-w-22.5 sm:min-w-27.5 text-center whitespace-nowrap">
                        Priority
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 min-w-50 sm:min-w-65 text-center whitespace-nowrap">
                        Assigned To
                    </th>
                    <th class="px-1.5 sm:px-4 py-2 sm:py-3 min-w-30 sm:min-w-37.5 text-center whitespace-nowrap">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody cdkDropList [cdkDropListData]="pagedTasks" (cdkDropListDropped)="drop($event)"
                class="divide-y divide-gray-200">
                @for (item of pagedTasks; let index = $index; track item.id)
                {
                <ng-template #dragCell let-item>
                    <div cdkDragHandle
                        class="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-700 pr-2 flex items-center gap-0 pl-2">
                        <i class="bx bx-dots-vertical-rounded p-0 w-1"></i>
                        <i class="bx bx-dots-vertical-rounded"></i>
                    </div>
                </ng-template>
                <tr cdkDrag [cdkDragData]="item" app-task-table-row [task]="item"
                    [assignedUsers]="taskAssignedUsersMapSig().get(item.id) || []"
                    [displayIndex]="(currentPage - 1) * itemsPerPage + index + 1" (edit)="onEdit($event)"
                    (delete)="onDelete($event)" [clearExpandedTrigger]="clearExpandedTrigger"
                    [dragCellTemplate]="dragCell">
                </tr>
                }
                @empty { <tr>
                    <td colspan="7" class="p-4 sm:p-6"> <app-empty-state></app-empty-state> </td>
                </tr> }
            </tbody>
        </table>
    </div>
    <app-task-table-footer [total]="tasks.length" [itemsPerPage]="itemsPerPage" [currentPage]="currentPage"
        [totalPages]="totalPages" (clearFilters)="onClearFilters()" (pageChange)="onPageChange($event)"
        [pageSizeOptions]="pageSizeOptions()" [selectedPageSize]="selectedPageSize"
        (pageSizeChangeTrigger)="pageSizeChangeTrigger.emit($event)">
    </app-task-table-footer>
</div>
````

## File: src/app/features/tasks/pages/tasks/tasks.ts
````typescript
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
import { StatsCard } from '@shared/components/stats-card/stats-card';
import { TaskFilters } from '@features/tasks/components/task-filters/task-filters';
import { TaskTable } from '@features/tasks/components/task-table/task-table';
import { TaskDialog } from '@shared/components/task-dialog/task-dialog';
import { TaskForm } from '@shared/components/task-form/task-form';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
import { KanbanView } from '@shared/components/kanban-view/kanban-view';
export type TaskStatus = 'INCOMPLETE' | 'COMPLETED' | 'IN_PROGRESS';
⋮----
export class Tasks implements OnInit
⋮----
constructor(
    public taskService: TaskService,
    private toastr: ToastrService,
    private userService: UserService
)
⋮----
ngOnInit()
⋮----
.subscribe(users => this.users.set(users ?? [])); // 👈 FIX
⋮----
/**
   * Removes the 'body-lock' class from the document body when the component is destroyed.
   * This is necessary to prevent the body from being locked when the component is destroyed.
   */
ngOnDestroy()
toggleDialog()
openTasksDropdown(event: Event)
setItemsPerPage(value: number | 'All')
clearFilters(): void
/**
   * Sorts the tasks list based on the provided field.
   * If the field is the same as the current sort field, toggles the sort direction.
   * If the field is different from the current sort field, sets the sort direction to 'asc'.
   * @param field The field to sort the tasks list by. Can be 'title' or 'createdAt'.
   */
sortBy(field: 'title' | 'createdAt')
updateTasksFromDrag(update:
⋮----
async submit()
edit(task: TaskView)
delete(task: TaskView)
resetForm()
cancelDialog()
````

## File: src/app/features/users/components/user-table/user-table.html
````html
<div class="w-full bg-white rounded-lg px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-6 sm:pt-7">
    <div class="flex flex-col lg:flex-row w-full gap-4 mb-5">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full min-w-0 lg:flex lg:flex-row relative">
            <div class="relative w-full min-w-0 sm:col-span-2 lg:flex-1 lg:min-w-36.25">
                <input type="search"
                    class="w-full border-2 border-gray-300 pr-10 pl-4 py-2 rounded-lg text-sm focus:outline-none h-11 placeholder:text-gray-400"
                    placeholder="Search..." [formControl]="searchControl" />
                <i class="bx bx-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"></i>
            </div>
            <div class="relative w-full min-w-38 sm:col-span-1 lg:w-50">
                <ng-select [items]="permissions" [multiple]="true" bindLabel="label" bindValue="key" groupBy="group"
                    [closeOnSelect]="false" placeholder="Permissions" [ngModel]="selectedPermissions()"
                    (ngModelChange)="selectedPermissions.set($event)"
                    class="permission-select placeholder:text-gray-400 cursor-pointer">
                    <ng-template ng-optgroup-tmp>
                        <label class="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" class="modern-checkbox cursor-pointer" [checked]="isAllSelected()"
                                [indeterminate]="selectedPermissions().length > 0 && !isAllSelected()"
                                (click)="$event.stopPropagation()" (change)="toggleAll($any($event.target).checked)" />
                            <strong class="text-slate-700">All</strong>
                        </label>
                    </ng-template>
                    <ng-template ng-option-tmp let-item="item" let-item$="item$">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="modern-checkbox pointer-events-none"
                                [checked]="item$.selected" tabindex="-1" />
                            <span class="text-slate-700">{{ item.label }}</span>
                        </div>
                    </ng-template>
                    <ng-template ng-multi-label-tmp let-items="items">
                        @if (isAllSelected()) {
                        <span class="badge badge-success">All Permissions</span>
                        }
                        @if (!isAllSelected() && items.length > 0) {
                        <span class="badge badge-warning">
                            {{ items.length }} Selected
                        </span>
                        }
                    </ng-template>
                </ng-select>
            </div>
            <div class="w-full sm:col-span-2 lg:w-[18rem]">
                <input ngxDaterangepickerMd [(ngModel)]="dateRange" [autoApply]="false" [alwaysShowCalendars]="true"
                    [showClearButton]="true" [drops]="'down'" [opens]="'right'" [locale]="{ format: 'DD/MM/YYYY' }"
                    [linkedCalendars]="true" placeholder="Date range"
                    class="border-2 border-gray-300 px-4 py-2 rounded-lg w-full cursor-pointer text-sm h-11 placeholder:text-gray-400"
                    (click)="toggleDatePicker()" [title]="dateRange()?.startDate && dateRange()?.endDate
  ? ( (dateRange()?.startDate | date:'dd/MM/yyyy':'UTC') + ' to ' + (dateRange()?.endDate | date:'dd/MM/yyyy':'UTC') )
  : ''" />
            </div>
            <div class="relative w-full min-w-44 sm:col-span-1 lg:w-52">
                <ng-select class="users-per-page-select filter-select w-full" [items]="pageSizeOptions"
                    [clearable]="false" [searchable]="false" [ngModel]="selectedPageSize()"
                    (ngModelChange)="onPageSizeChange($event)" [closeOnSelect]="true">
                    <ng-template ng-label-tmp let-item="item">
                        <span class="text-sm whitespace-nowrap">
                            Users per page : <strong>{{ item }}</strong>
                        </span>
                    </ng-template>
                    <ng-template ng-option-tmp let-item="item">
                        {{ item }}
                    </ng-template>
                </ng-select>
            </div>
        </div>
        <div class="flex gap-2 w-full sm:col-span-1 lg:w-auto lg:shrink-0">
            <button class="cursor-pointer w-full lg:w-auto py-2 px-4 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600
             text-white shadow-md shadow-purple-500/30
             hover:shadow-lg hover:shadow-purple-500/40
             lg:hover:scale-105 transition-all duration-200" (click)="addUser.emit()">
                Add User
            </button>
        </div>
    </div>
    <div class="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">
        <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full min-w-275 text-xs sm:text-sm text-left border-collapse">
                <thead class="bg-gray-50 text-gray-600 uppercase text-[10px] sm:text-xs sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th class="min-w-20 px-6 py-4 text-center">S.No</th>
                        <th class="min-w-75 px-6 py-4 text-left">User</th>
                        <th class="min-w-40 px-6 py-4 text-center whitespace-nowrap">Created Date</th>
                        <th class="min-w-95 px-6 py-4 text-left">Permissions</th>
                        <th class="min-w-45 px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    @for (
                    user of (filteredTasks() | paginate: { itemsPerPage: itemsPerPage, currentPage: p });
                    let i = $index;
                    track user.id
                    ) {
                    <tr class="hover:bg-gray-50 transition-colors duration-150" (click)="viewUser.emit(user)">
                        <td class="px-6 py-4 text-center font-medium text-gray-500">
                            {{ (p - 1) * itemsPerPage + i + 1 }}
                        </td>
                        <td class="min-w-75 px-6 py-4">
                            <div class="flex items-center gap-3">
                                <img [src]="user.avatar || 'assets/avatar-placeholder.png'"
                                    class="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                    alt="avatar" />
                                <div class="w-55">
                                    <p class="font-semibold text-gray-800 text-sm truncate" [title]="user.name">
                                        {{ user.name | slice:0:25 }}{{ user.name.length > 25 ? '...' : '' }}
                                    </p>
                                    <p class="text-xs text-gray-500 truncate" [title]="user.email">
                                        {{ user.email }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <!-- Created Date -->
                        <td class="px-6 py-4 text-center text-gray-600">
                            {{ user.createdAt | date:'dd MMM yyyy' }}
                        </td>
                        <td class="min-w-95 px-6 py-4">
                            <div class="w-full overflow-hidden">
                                <div class="flex flex-nowrap gap-2 overflow-hidden">
                                    @if (user.permissions.length) {
                                    @for (perm of user.permissions; track perm) {
                                    <span
                                        class="px-2.5 py-1 text-[11px] font-medium rounded-md border shadow-sm ring-1 ring-inset whitespace-nowrap shrink-0"
                                        [ngClass]="getPermissionClass(perm)">
                                        {{ getPermissionLabel(perm) }}
                                    </span>
                                    }
                                    } @else {
                                    <span
                                        class="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-50 text-gray-400 border border-gray-200">
                                        No permissions
                                    </span>
                                    }
                                </div>
                            </div>
                        </td>
                        <td class="min-w-45 px-6 py-4 text-center" (click)="$event.stopPropagation()">
                            <div class="flex justify-center gap-3 whitespace-nowrap">
                                <button
                                    class="text-yellow-700 hover:text-yellow-600 hover:bg-yellow-50 px-2 py-1 rounded transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                                    (click)="editUser.emit(user); $event.stopPropagation()">
                                    <i class="bx bx-edit text-lg"></i>
                                    <span class="text-xs font-medium">Edit</span>
                                </button>
                                <button
                                    class="text-red-700 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                                    (click)="deleteUser.emit(user); $event.stopPropagation()">
                                    <i class="bx bx-trash text-lg"></i>
                                    <span class="text-xs font-medium">Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    }
                    @empty {
                    <tr>
                        <td colspan="5" class="p-8">
                            <app-empty-state></app-empty-state>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
        <div class="w-full border-t border-gray-200 bg-white px-4 py-4">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                <div class="text-sm text-gray-500 whitespace-nowrap">
                    Total Tasks : <span class="ml-1 font-bold text-gray-900">{{ totalItems() }}</span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <button (click)="clearFilters()"
                        class="text-sm font-medium text-gray-500 hover:text-gray-700 hover:underline focus:outline-none cursor-pointer text-left sm:text-center clear-filters-button underline">
                        Clear Filters
                    </button>
                    @if(totalItems() > itemsPerPage && totalItems() > 0) {
                    <div class="w-full sm:w-auto overflow-x-auto pagination-sm">
                        <pagination-controls previousLabel="Prev" nextLabel="Next" [responsive]=true
                            (pageChange)="p = $event">
                        </pagination-controls>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    <app-loading-overlay [show]="isLoading()" text="Loading users..."></app-loading-overlay>
````

## File: src/app/features/users/components/user-table/user-table.ts
````typescript
import {
  Component,
  computed,
  EventEmitter,
  inject,
  DestroyRef,
  Input,
  input,
  model,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TaskStatus } from '@features/tasks/pages/tasks/tasks';
import { PermissionItem } from '@core/models/PermissionItem';
import dayjs from 'dayjs';
import { EmptyState } from '@shared/components/empty-state/empty-state';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserModel } from '@core/models/UserModel';
import { PermissionKey } from '@core/models/PermissionKey';
import { UserService } from '@core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { finalize, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { getPermissionLabel } from '@core/models/PERMISSION_LABELS';
import { LoadingOverlay } from '@shared/components/loading-overlay/loading-overlay';
⋮----
export class UserTable
⋮----
constructor(private userService: UserService, private toastr: ToastrService, private authService: UserAuth)
⋮----
deleteUserMethod(id: string)
editUserMethod(_t93: UserModel)
⋮----
ngOnInit(): void
⋮----
// 🟡 STILL LOADING
⋮----
// 🟢 DATA ARRIVED
⋮----
get allPermissionKeys(): PermissionKey[]
isAllSelected(): boolean
toggleAll(checked: boolean): void
clearFilters(): void
⋮----
// Reset date range (show all dates)
⋮----
// Reset permissions to all selected
⋮----
// Reset tasks per page to default (5)
⋮----
// Reset pagination to first page
⋮----
onSelectionChange(): void
onPermissionsChange(values: PermissionKey[]): void
/* -------------------------------------------------------------------------- */
/*                              Date Picker                                   */
/* -------------------------------------------------------------------------- */
toggleDatePicker(): void
onPageSizeChange(value: number | 'All'): void
setItemsPerPage(value: number | 'All'): void
⋮----
resetForm(): void
getPermissionClass(permission: string): string
````

## File: src/app/shared/components/kanban-view/kanban-view.css
````css
.cdk-drag-preview {
.cdk-drag-preview>div {
.cdk-drag-preview>div::before {
.cdk-drag-placeholder>div {
#incompleteList .cdk-drag-placeholder>div {
#inProgressList .cdk-drag-placeholder>div {
#completedList .cdk-drag-placeholder>div {
.cdk-drag-animating {
.cdk-drop-list-dragging .cdk-drag:not(.cdk-drag-placeholder) {
.cdk-drag {
.cdk-drag-dragging {
.cdk-drop-list-dragging {
⋮----
.cdk-drop-list-dragging .empty-state {
#boardScroller {
````

## File: src/app/features/dashboard/pages/dashboard/dashboard.css
````css
:host {
.skeleton-shimmer {
.skeleton-shimmer-ring {
.skeleton-shimmer-svg {
.skeleton-shimmer-dark {
.skeleton-shimmer-ring-dark {
.skeleton-shimmer-svg-dark {
⋮----
.animate-fade-in {
````

## File: src/app/features/tasks/components/task-table-row/task-table-row.css
````css
.assignees-container {
⋮----
.content-area {
.content-wrapper {
.assignees-container.expanded .content-wrapper {
.assignees-container.expanded .content-wrapper::-webkit-scrollbar {
.chips-row {
.assignee-chip {
.avatar {
.name {
.more-chip {
.more-chip:hover {
.more-chip:focus {
.fade-overlay {
.empty-state {
.assignees-container.expanded {
.assignees-container.expanded .chips-row {
````

## File: src/app/shared/components/task-form/task-form.html
````html
<div class="flex flex-col max-h-[80vh] w-full">
    <div class="px-5 sm:px-8 pt-8 pb-4 text-center shrink-0">
        <p class="text-xl sm:text-2xl font-semibold tracking-tight" [ngClass]="{
              'text-black': dialogTitleColor === 'text-primary',
              'text-yellow-500': dialogTitleColor === 'text-warn',
              'text-red-600': dialogTitleColor === 'text-danger'
            }">
            {{ dialogTitle }} Task
        </p>
        <p class="text-xs sm:text-sm text-gray-500 mt-1">
            {{ dialogDescription }}
        </p>
    </div>
    <div class="flex-1 overflow-y-auto px-5 sm:px-8 main-container">
        <form [formGroup]="form" (ngSubmit)="attemptSubmit()">
            <div class="border rounded-xl px-3 py-3 my-4 transition" [ngClass]="{
                    'border-red-500 ring-2 ring-red-500/20': isFieldInvalid('title'),
                    'border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20': !isFieldInvalid('title')
                }" [class.shake]="shakeField === 'title'">
                <div class="flex items-center gap-2 mb-2">
                    <i class="bx bx-edit text-gray-400"></i>
                    <span class="text-sm text-gray-600">Task Name</span>
                </div>
                <input type="text" formControlName="title" placeholder="Enter task name"
                    class="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white outline-none text-sm
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition placeholder:text-gray-400" />
            </div>
            @if (isFieldInvalid('title')) {
            <p class="text-red-500 text-xs -mt-3 ml-3 mb-1">Task name is required (min 3 chars)</p>
            }
            <div class="border rounded-xl px-3 py-3 my-4 transition" [ngClass]="{
                    'border-red-500 ring-2 ring-red-500/20': isFieldInvalid('dueDate'),
                    'border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20': !isFieldInvalid('dueDate')
                }" [class.shake]="shakeField === 'dueDate'">
                <div class="flex items-center gap-2 mb-2">
                    <i class="bx bx-calendar text-gray-400"></i>
                    <span class="text-sm text-gray-600">Due Date</span>
                </div>
                <input type="date" formControlName="dueDate" placeholder="Select due date" class="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white outline-none text-sm
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition" />
            </div>
            @if (isFieldInvalid('dueDate')) {
            <p class="text-red-500 text-xs -mt-3 ml-3 mb-1">Due date is required</p>
            }
            <div class="border rounded-xl px-3 py-3 my-4 transition sub-container" [ngClass]="{
                    'border-red-500 ring-2 ring-red-500/20': isFieldInvalid('assignedTo'),
                    'border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20': !isFieldInvalid('assignedTo')
                }" [class.shake]="shakeField === 'assignedTo'">
                <div class="flex items-center gap-2 mb-2">
                    <i class="bx bx-user-plus text-gray-400"></i>
                    <span class="text-sm text-gray-600">Assign Users</span>
                </div>
                <ng-select formControlName="assignedTo" [items]="users()" bindLabel="name" bindValue="id"
                    [multiple]="true" [closeOnSelect]="false" placeholder="Select users to assign"
                    class="filter-select assignedTo-select" [dropdownPosition]="'bottom'">
                </ng-select>
            </div>
            @if (isFieldInvalid('assignedTo')) {
            <p class="text-red-500 text-xs -mt-3 ml-3 mb-1">Please assign at least one user</p>
            }
            <div class="border rounded-xl px-3 py-3 my-4 transition" [ngClass]="{
                    'border-red-500 ring-2 ring-red-500/20': isFieldInvalid('status'),
                    'border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20': !isFieldInvalid('status')
                }" [class.shake]="shakeField === 'status'">
                <div class="flex items-center gap-2 mb-2">
                    <i class="bx bx-flag text-gray-400"></i>
                    <span class="text-sm text-gray-600">Status</span>
                </div>
                <ng-select formControlName="status" [items]="statusOptions" bindLabel="label" bindValue="value"
                    [searchable]="false" placeholder="Select task status" class="filter-select"
                    [dropdownPosition]="'bottom'" clearable="false">
                </ng-select>
            </div>
            @if (isFieldInvalid('status')) {
            <p class="text-red-500 text-xs -mt-3 ml-3 mb-1">Status is required</p>
            }
            <div class="relative border rounded-xl px-3 py-3 my-4 transition priorityContainer" [ngClass]="{
                    'border-red-500 ring-2 ring-red-500/20': isFieldInvalid('priority'),
                    'border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20': !isFieldInvalid('priority')
                }" [class.shake]="shakeField === 'priority'">
                <div class="flex items-center gap-2 mb-2">
                    <i class="bx bx-siren text-gray-400"></i>
                    <span class="text-sm text-gray-600">Priority</span>
                </div>
                <ng-select formControlName="priority" [items]="priorityOptions" bindLabel="label" bindValue="value"
                    [searchable]="false" placeholder="Select task priority" class="filter-select"
                    [dropdownPosition]="'top'" appendTo=".priorityContainer" clearable="false">
                </ng-select>
            </div>
            @if (isFieldInvalid('priority')) {
            <p class=" text-red-500 text-xs -mt-3 ml-3 mb-1">Priority is required</p>
            }
        </form>
    </div>
    <div class="px-5 sm:px-8 pb-6 pt-4 bg-white shrink-0">
        <div class="flex flex-col sm:flex-row gap-3">
            <button type="button" (click)="cancel.emit()"
                class="w-full py-3 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition">
                Cancel
            </button>
            <button type="button" (click)="attemptSubmit()" [ngClass]="{
                  'submit-btn text-white': dialogTitleColor === 'text-primary',
                  'edit-btn text-white': dialogTitleColor === 'text-warn',
                  'delete-btn text-white': dialogTitleColor === 'text-danger'
                }" class="w-full py-3 rounded-xl font-medium">
                {{ dialogSubmitText }} Task
            </button>
        </div>
    </div>
</div>
````

## File: src/app/features/profile/profile.html
````html
<div
    class="min-h-[calc(100vh-80px)] overflow-y-auto bg-linear-to-br from-slate-50 via-purple-50/30 to-indigo-50/40 p-4 sm:p-6 lg:p-8">
    <div class="max-w-5xl mx-auto mb-6">
        <h1
            class="text-2xl sm:text-3xl font-extrabold tracking-tight bg-linear-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            My Profile
        </h1>
        <p class="text-sm text-gray-500 mt-1">Manage your account details and preferences</p>
    </div>
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
        <div class="w-full lg:w-80 shrink-0 flex flex-col gap-6">
            <div
                class="bg-white rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100/50 p-6 flex flex-col items-center text-center">
                <div class="relative group mb-4">
                    @if (avatarUrl()) {
                    <img [src]="avatarUrl()" alt="Profile Avatar"
                        class="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-purple-200 shadow-lg shadow-purple-300/30" />
                    } @else {
                    <div
                        class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center ring-4 ring-purple-200 shadow-lg shadow-purple-300/30">
                        <span class="text-3xl sm:text-4xl font-bold text-white">{{ initials() }}</span>
                    </div>
                    }
                    <div class="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-[3px] border-white">
                    </div>
                </div>
                <h2 class="text-xl font-bold text-gray-900 break-all">{{ user()?.name }}</h2>
                <p class="text-sm text-gray-500 mt-1 break-all">{{ user()?.email }}</p>
                <div class="mt-3">
                    @if (user()?.parentId && user()?.parentId !== '-1') {
                    <span
                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        <i class='bx bx-user text-sm'></i> Team Member
                    </span>
                    } @else {
                    <span
                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                        <i class='bx bx-crown text-sm'></i> Admin
                    </span>
                    }
                </div>
                @if (!isEditing) {
                <button (click)="startEditing()"
                    class="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                    <i class='bx bx-edit-alt text-lg'></i>
                    Edit Profile
                </button>
                }
            </div>
            <div class="bg-white rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100/50 p-5">
                <div class="flex items-center gap-3 mb-5">
                    <div
                        class="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <i class='bx bx-clock-5 text-lg text-white'></i>
                    </div>
                    <h3 class="text-sm font-bold text-gray-800">Activity & Membership</h3>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                            <i class='bx bx-calendar text-xl text-emerald-600'></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-gray-400 font-medium">Member Since</p>
                            <p class="text-sm font-semibold text-gray-800 truncate">{{ memberSince() }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                            <i class='bx bx-timer text-xl text-teal-600'></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-gray-400 font-medium">Account Age</p>
                            <p class="text-sm font-semibold text-gray-800">{{ accountAge() }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                            <i class='bx bx-check-circle text-xl text-green-600'></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-gray-400 font-medium">Status</p>
                            <span
                                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Active
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                            <i class='bx bx-bar-chart-square text-xl text-green-600'></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-gray-400 font-medium">Access Level</p>
                            <p class="text-sm font-semibold" [ngClass]="{
                                    'text-green-700': accessLevel() === 'Full Access',
                                    'text-amber-700': accessLevel() === 'Standard Access',
                                    'text-gray-700': accessLevel() === 'Limited Access' || accessLevel() === 'No Access'
                                }">
                                {{ accessLevel() }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-col gap-6 min-w-0">
            @if (isEditing) {
            <div class="bg-white rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100/50 p-6 sm:p-8">
                <div class="flex items-center gap-3 mb-6">
                    <div
                        class="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <i class='bx bx-edit text-xl text-white'></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900">Edit Profile</h3>
                        <p class="text-xs text-gray-400">Update your personal information</p>
                    </div>
                </div>
                <div class="space-y-5">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                            <i class='bx bx-user text-purple-500 mr-1'></i>Full Name
                        </label>
                        <input type="text" [(ngModel)]="editForm.name" placeholder="Enter your name"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                            <i class='bx bx-image text-purple-500 mr-1'></i>Avatar URL
                        </label>
                        <input type="text" [(ngModel)]="editForm.avatar" placeholder="https://example.com/avatar.jpg"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition" />
                        <p class="text-xs text-gray-400 mt-1.5">Paste a direct image URL for your profile picture</p>
                    </div>
                    @if (editForm.avatar.trim()) {
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Preview</label>
                        <img [src]="editForm.avatar" alt="Avatar Preview"
                            class="w-20 h-20 rounded-full object-cover ring-2 ring-purple-200"
                            (error)="editForm.avatar = ''" />
                    </div>
                    }
                    <div class="flex flex-col sm:flex-row gap-3 pt-2">
                        <button (click)="saveProfile()" [disabled]="isSaving"
                            class="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                            @if (isSaving) {
                            <i class='bx bx-loader-alt bx-spin text-lg'></i>
                            Saving...
                            } @else {
                            <i class='bx bx-check text-lg'></i>
                            Save Changes
                            }
                        </button>
                        <button (click)="cancelEditing()" [disabled]="isSaving"
                            class="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class='bx bx-x text-lg'></i>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            }
            <div class="bg-white rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100/50 p-6 sm:p-8">
                <div class="flex items-center gap-3 mb-6">
                    <div
                        class="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <i class='bx bx-user-circle text-xl text-white'></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900">Account Details</h3>
                        <p class="text-xs text-gray-400">Your identity and account configuration</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                        <div class="flex items-center gap-2 mb-1.5">
                            <i class='bx bx-user text-purple-500'></i>
                            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</span>
                        </div>
                        <p class="text-sm font-semibold text-gray-800 break-all">{{ user()?.name }}</p>
                    </div>
                    <div class="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                        <div class="flex items-center gap-2 mb-1.5">
                            <i class='bx bx-envelope text-purple-500'></i>
                            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email
                                Address</span>
                        </div>
                        <p class="text-sm font-semibold text-gray-800 break-all">{{ user()?.email }}</p>
                    </div>
                    <div class="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                        <div class="flex items-center gap-2 mb-1.5">
                            <i class='bx bx-id-card text-purple-500'></i>
                            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account
                                Type</span>
                        </div>
                        @if (user()?.parentId && user()?.parentId !== '-1') {
                        <span
                            class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            <i class='bx bx-user text-xs'></i> Team Member
                        </span>
                        } @else {
                        <span
                            class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            <i class='bx bx-crown text-xs'></i> Admin
                        </span>
                        }
                    </div>
                    <div class="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                        <div class="flex items-center gap-2 mb-1.5">
                            <i class='bx bx-git-branch text-purple-500'></i>
                            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Parent
                                Account</span>
                        </div>
                        @if (user()?.parentId && user()?.parentId !== '-1') {
                        <div class="flex items-center gap-2">
                            <span
                                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                                <i class='bx bx-link text-sm'></i>
                                Managed by {{ parentName() ?? 'Admin' }}
                            </span>
                        </div>
                        } @else {
                        <div class="flex items-center gap-2">
                            <span
                                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                                <i class='bx bx-buildings text-sm'></i>
                                Root Account — No Parent
                            </span>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100/50 p-6 sm:p-8">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-xl bg-linear-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center">
                            <i class='bx bx-lock-open-alt text-xl text-white'></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900">Permissions & Access</h3>
                            <p class="text-xs text-gray-400">Access rights assigned to your account</p>
                        </div>
                    </div>
                    <div
                        class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200">
                        <i class='bx bx-key text-sm text-purple-600'></i>
                        <span class="text-xs font-bold text-purple-700">{{ permissionLabels().length }} / 5</span>
                    </div>
                </div>
                <div class="mb-5 p-4 rounded-xl border border-gray-100" [ngClass]="{
                        'bg-green-50/80': accessLevel() === 'Full Access',
                        'bg-amber-50/80': accessLevel() === 'Standard Access',
                        'bg-gray-50/80': accessLevel() === 'Limited Access' || accessLevel() === 'No Access'
                    }">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Access Level</span>
                        <span class="text-sm font-bold" [ngClass]="{
                                'text-green-700': accessLevel() === 'Full Access',
                                'text-amber-700': accessLevel() === 'Standard Access',
                                'text-gray-700': accessLevel() === 'Limited Access' || accessLevel() === 'No Access'
                            }">
                            {{ accessLevel() }}
                        </span>
                    </div>
                    <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all duration-500" [ngClass]="{
                                'bg-green-500': accessLevel() === 'Full Access',
                                'bg-amber-500': accessLevel() === 'Standard Access',
                                'bg-gray-400': accessLevel() === 'Limited Access' || accessLevel() === 'No Access'
                            }" [style.width.%]="(permissionLabels().length / 5) * 100">
                        </div>
                    </div>
                </div>
                @if (permissionLabels().length > 0) {
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    @for (perm of permissionLabels(); track perm.key) {
                    <div class="flex items-center gap-3 rounded-xl p-3.5 border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all duration-200"
                        [ngClass]="getPermissionColor(perm.key)">
                        <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-white/60">
                            <i class='bx text-lg' [ngClass]="permissionIcon[perm.key] || 'bx-check-shield'"></i>
                        </div>
                        <div class="min-w-0">
                            <span class="text-sm font-semibold block">{{ perm.label }}</span>
                            <span class="text-[10px] font-mono text-gray-400">{{ perm.key }}</span>
                        </div>
                    </div>
                    }
                </div>
                @if (missingPermissions().length > 0) {
                <div class="mt-4 pt-4 border-t border-gray-300">
                    <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Not Granted Permissions
                    </p>
                    <div class="flex flex-wrap gap-2">
                        @for (perm of missingPermissions(); track perm.key) {
                        <span
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 border border-gray-200 line-through">
                            <i class='bx bx-lock-alt text-xs'></i>
                            {{ perm.label }}
                        </span>
                        }
                    </div>
                </div>
                }
                } @else {
                <div class="text-center py-8">
                    <div class="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <i class='bx bx-lock text-2xl text-gray-400'></i>
                    </div>
                    <p class="text-sm text-gray-500 font-medium">No permissions assigned</p>
                    <p class="text-xs text-gray-400 mt-1">Contact your admin for access</p>
                </div>
                }
            </div>
        </div>
    </div>
</div>
````

## File: src/app/shared/components/demo-graphs/demo-graphs.html
````html
<div class="min-h-screen p-4 md:p-6 lg:p-8 transition-colors duration-500" [ngClass]="cBg">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div class="flex items-center gap-3">
            <div
                class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                <i class="bx bxs-dashboard text-white text-xl"></i>
            </div>
            <div>
                <h1 class="text-xl md:text-2xl font-bold tracking-tight">
                    <span
                        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Flowdesk</span>
                    <span class="font-light ml-1.5"
                        [ngClass]="isDark ? 'text-gray-500' : 'text-gray-400'">Analytics</span>
                </h1>
                <p class="text-[11px]" [ngClass]="cSub">Production-ready insights · scales to any team size</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full" [ngClass]="isAdmin ? 'bg-amber-400' : 'bg-emerald-400'"></span>
                <span class="text-[11px]" [ngClass]="cSub">{{ isAdmin ? 'Admin' : 'Member' }}</span>
            </div>
            <div class="relative">
                <select
                    class="rounded-xl pl-3 pr-8 py-2 text-sm focus:outline-none appearance-none cursor-pointer transition-colors border"
                    [ngClass]="isDark
            ? 'bg-slate-800/70 text-gray-300 border-slate-600/40 hover:border-slate-500/60 focus:border-indigo-500/50'
            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 focus:border-indigo-400'"
                    (change)="onUserChange($event)">
                    <option *ngFor="let u of users" [value]="u.id" [selected]="u.id === currentUserId">
                        {{ truncate(u.name, 22) }}
                    </option>
                </select>
                <i
                    class="bx bx-chevron-down absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
            <button (click)="toggleTheme()"
                class="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 active:scale-95"
                [ngClass]="isDark
          ? 'bg-slate-800/70 border-slate-600/40 text-amber-400 hover:border-amber-500/40'
          : 'bg-gray-50 border-gray-200 text-indigo-500 hover:border-indigo-300'">
                <i [ngClass]="isDark ? 'bx bx-sun' : 'bx bx-moon'" class="text-lg"></i>
            </button>
        </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
            [ngClass]="cCard">
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                [ngClass]="isDark ? 'bg-indigo-500/5 group-hover:bg-indigo-500/10' : 'bg-indigo-50 group-hover:bg-indigo-100/80'">
            </div>
            <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                    [ngClass]="isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'">
                    <i class="bx bx-task text-indigo-500 text-base"></i>
                </div>
                <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Total Tasks</span>
            </div>
            <div class="text-3xl font-bold" [ngClass]="cStatVal">{{ tasks.length }}</div>
        </div>
        <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
            [ngClass]="cCard">
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                [ngClass]="isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-emerald-50 group-hover:bg-emerald-100/80'">
            </div>
            <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                    [ngClass]="isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'">
                    <i class="bx bx-check-circle text-emerald-500 text-base"></i>
                </div>
                <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Completed</span>
            </div>
            <div class="text-3xl font-bold text-emerald-500">{{ completedCount }}</div>
            <div class="text-[11px] mt-1" [ngClass]="cStatSub">{{ completionPct }}% rate</div>
        </div>
        <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
            [ngClass]="cCard">
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                [ngClass]="isDark ? 'bg-purple-500/5 group-hover:bg-purple-500/10' : 'bg-purple-50 group-hover:bg-purple-100/80'">
            </div>
            <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                    [ngClass]="isDark ? 'bg-purple-500/10' : 'bg-purple-50'">
                    <i class="bx bx-user-check text-purple-500 text-base"></i>
                </div>
                <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">My Assigned</span>
            </div>
            <div class="text-3xl font-bold text-purple-500">{{ myAssignedCount }}</div>
        </div>
        <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
            [ngClass]="cCard">
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                [ngClass]="isDark ? 'bg-cyan-500/5 group-hover:bg-cyan-500/10' : 'bg-cyan-50 group-hover:bg-cyan-100/80'">
            </div>
            <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                    [ngClass]="isDark ? 'bg-cyan-500/10' : 'bg-cyan-50'">
                    <i class="bx bx-group text-cyan-500 text-base"></i>
                </div>
                <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Team Size</span>
            </div>
            <div class="text-3xl font-bold text-cyan-500">{{ teamSize }}</div>
            <div class="text-[11px] mt-1" [ngClass]="cStatSub">direct reports</div>
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
            <div class="flex items-center justify-between mb-5">
                <div>
                    <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Task Health Overview</h2>
                    <p class="text-[11px] mt-0.5" [ngClass]="cSub">Distribution by {{ doughnutMode }}</p>
                </div>
                <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                    <button (click)="toggleDoughnut('status')"
                        class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200" [ngClass]="doughnutMode === 'status'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Status</button>
                    <button (click)="toggleDoughnut('priority')"
                        class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200" [ngClass]="doughnutMode === 'priority'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Priority</button>
                </div>
            </div>
            <div class="relative max-w-[260px] mx-auto">
                <canvas #doughnutCanvas></canvas>
            </div>
        </div>
        <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Permission Spread</h2>
                    <p class="text-[11px] mt-0.5" [ngClass]="cSub">How permissions are distributed across users</p>
                </div>
                <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                    <button (click)="togglePolar('count')"
                        class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                        [ngClass]="polarMode === 'count'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Count</button>
                    <button (click)="togglePolar('percentage')"
                        class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                        [ngClass]="polarMode === 'percentage'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">%</button>
                </div>
            </div>
            <div class="max-w-[260px] mx-auto">
                <canvas #polarCanvas></canvas>
            </div>
        </div>
        <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
            <div class="mb-3">
                <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Priority × Status Matrix</h2>
                <p class="text-[11px] mt-0.5" [ngClass]="cSub">Spot bottlenecks by cross-referencing priority &amp;
                    status</p>
            </div>
            <div class="flex flex-wrap gap-1.5 mb-4">
                <button (click)="toggleMatrixFilter('COMPLETED')"
                    class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                    [ngClass]="matrixFilters['COMPLETED']
            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Completed
                </button>
                <button (click)="toggleMatrixFilter('IN_PROGRESS')"
                    class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                    [ngClass]="matrixFilters['IN_PROGRESS']
            ? 'bg-amber-500/15 border-amber-500/50 text-amber-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    In Progress
                </button>
                <button (click)="toggleMatrixFilter('INCOMPLETE')"
                    class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                    [ngClass]="matrixFilters['INCOMPLETE']
            ? 'bg-rose-500/15 border-rose-500/50 text-rose-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                    Incomplete
                </button>
            </div>
            <div class="h-[220px] md:h-[280px]">
                <canvas #matrixCanvas></canvas>
            </div>
        </div>
        <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
            <div class="flex items-center justify-between mb-5">
                <div>
                    <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Task Creation Timeline</h2>
                    <p class="text-[11px] mt-0.5" [ngClass]="cSub">Aggregated by week · scales with any volume</p>
                </div>
                <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                    <button (click)="toggleTimeline('stacked')"
                        class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200" [ngClass]="timelineMode === 'stacked'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Stacked</button>
                    <button (click)="toggleTimeline('cumulative')"
                        class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                        [ngClass]="timelineMode === 'cumulative'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Cumulative</button>
                </div>
            </div>
            <div class="h-[220px] md:h-[280px]">
                <canvas #timelineCanvas></canvas>
            </div>
        </div>
    </div>
    <div class="mt-8">
        <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
            <div class="flex items-center justify-between mb-5">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center"
                        [ngClass]="isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'">
                        <i class="bx bx-group text-indigo-500 text-lg"></i>
                    </div>
                    <div>
                        <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Team Roster</h2>
                        <p class="text-[11px] mt-0.5" [ngClass]="cSub">
                            {{ teamMembers.length }} members · sorted by assigned tasks
                        </p>
                    </div>
                </div>
                <div *ngIf="showTeamPagination" class="flex items-center gap-2">
                    <span class="text-[11px]" [ngClass]="cSub">
                        {{ teamPage + 1 }} / {{ totalTeamPages }}
                    </span>
                    <button (click)="prevTeamPage()" [disabled]="teamPage === 0"
                        class="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                        [ngClass]="teamPage === 0
              ? (isDark ? 'border-slate-700/30 text-slate-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed')
              : (isDark ? 'border-slate-600/40 text-gray-400 hover:text-white hover:border-indigo-500/50' : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-indigo-300')">
                        <i class="bx bx-chevron-left text-lg"></i>
                    </button>
                    <button (click)="nextTeamPage()" [disabled]="teamPage >= totalTeamPages - 1"
                        class="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                        [ngClass]="teamPage >= totalTeamPages - 1
              ? (isDark ? 'border-slate-700/30 text-slate-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed')
              : (isDark ? 'border-slate-600/40 text-gray-400 hover:text-white hover:border-indigo-500/50' : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-indigo-300')">
                        <i class="bx bx-chevron-right text-lg"></i>
                    </button>
                </div>
            </div>
            <div class="hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 rounded-xl mb-2 text-[11px] uppercase tracking-wider font-semibold"
                [ngClass]="isDark ? 'bg-slate-700/20 text-gray-500' : 'bg-gray-50 text-gray-400'">
                <div class="col-span-4">Member</div>
                <div class="col-span-2 text-center">Assigned</div>
                <div class="col-span-2 text-center">Completed</div>
                <div class="col-span-2 text-center">In Progress</div>
                <div class="col-span-2 text-center">Incomplete</div>
            </div>
            <div class="space-y-1.5">
                <div *ngFor="let member of pagedTeamMembers; let i = index"
                    class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center px-4 py-3 rounded-xl border transition-all duration-200 group"
                    [ngClass]="isDark
            ? 'border-slate-700/20 hover:border-slate-600/40 hover:bg-slate-800/40'
            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/80'">
                    <div class="col-span-1 md:col-span-4 flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0 relative"
                            [style.background-color]="member.color">
                            {{ member.initials }}
                            <span *ngIf="member.isAdmin" class="absolute -top-1.5 -right-1.5 text-amber-400 text-xs">
                                <i class="bx bxs-crown"></i>
                            </span>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-1.5">
                                <span class="text-sm font-semibold truncate" [ngClass]="cTitle">{{ truncate(member.name,
                                    20) }}</span>
                                <span *ngIf="member.isCurrent"
                                    class="text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-500">You</span>
                            </div>
                            <span class="text-[11px]" [ngClass]="cSub">
                                {{ member.isAdmin ? 'Admin' : 'Member' }}
                            </span>
                        </div>
                    </div>
                    <div class="col-span-1 md:hidden flex flex-wrap gap-2 ml-12">
                        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                            [ngClass]="isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'">
                            <i class="bx bx-task text-xs"></i> {{ member.assigned }}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                            [ngClass]="isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'">
                            <i class="bx bx-check text-xs"></i> {{ member.completed }}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                            [ngClass]="isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'">
                            <i class="bx bx-clock-dashed-half"></i> {{ member.inProgress }}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                            [ngClass]="isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600'">
                            <i class="bx bx-x text-xs"></i> {{ member.incomplete }}
                        </span>
                    </div>
                    <div class="hidden md:flex col-span-2 justify-center">
                        <span
                            class="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-lg text-sm font-bold"
                            [ngClass]="member.assigned > 0
                ? (isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.assigned }}</span>
                    </div>
                    <div class="hidden md:flex col-span-2 justify-center">
                        <span
                            class="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-lg text-sm font-bold"
                            [ngClass]="member.completed > 0
                ? (isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.completed }}</span>
                    </div>
                    <div class="hidden md:flex col-span-2 justify-center">
                        <span
                            class="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-lg text-sm font-bold"
                            [ngClass]="member.inProgress > 0
                ? (isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.inProgress }}</span>
                    </div>
                    <div class="hidden md:flex col-span-2 justify-center">
                        <span
                            class="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-lg text-sm font-bold"
                            [ngClass]="member.incomplete > 0
                ? (isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.incomplete }}</span>
                    </div>
                </div>
            </div>
            <div *ngIf="teamMembers.length === 0" class="text-center py-12">
                <i class="bx bx-group text-4xl" [ngClass]="isDark ? 'text-slate-700' : 'text-gray-300'"></i>
                <p class="text-sm mt-2" [ngClass]="cSub">No team members found</p>
            </div>
        </div>
    </div>
    <div class="mt-8 text-center">
        <p class="text-[11px]" [ngClass]="isDark ? 'text-gray-700' : 'text-gray-300'">
            Flowdesk Analytics · {{ tasks.length }} tasks · {{ users.length }} members ·
            <span [ngClass]="isDark ? 'text-indigo-500/60' : 'text-indigo-400/60'">Powered by Chart.js</span>
        </p>
    </div>
</div>
````

## File: src/app/shared/components/kanban-view/kanban-view.ts
````typescript
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
⋮----
export class KanbanView
⋮----
constructor(private taskService: TaskService, private toastr: ToastrService)
toggleDialog()
resetForm()
drop(event: CdkDragDrop<TaskView[]>)
async submit()
cancelDialog()
edit(task: TaskView)
delete(task: TaskView)
````

## File: src/app/shared/components/shared-pagination/shared-pagination.html
````html
@if (total > itemsPerPage) {
<nav aria-label="Pagination" class="flex items-center justify-center gap-1 text-sm select-none flex-wrap">
    <button (click)="onPageChange(currentPage - 1)" [disabled]="currentPage === 1" aria-label="Previous page" class="inline-flex items-center justify-center
             h-8 px-2.5 rounded
             border border-gray-300 bg-white
             text-gray-600 font-medium
             hover:bg-gray-50 hover:border-gray-400
             disabled:opacity-40 disabled:cursor-not-allowed
             transition-colors duration-100
             whitespace-nowrap">
        ‹ Prev
    </button>
    <div class="flex items-center gap-1 md:hidden">
        @if (getVisiblePages(3)[0] > 1) {
        <button (click)="onPageChange(1)" class="inline-flex items-center justify-center
                 h-8 w-8 rounded
                 border border-gray-300 bg-white text-gray-600
                 hover:bg-gray-50 hover:border-gray-400
                 transition-colors duration-100">
            1
        </button>
        @if (getVisiblePages(3)[0] > 2) {
        <span class="inline-flex items-center justify-center h-8 px-1 text-gray-400">
            …
        </span>
        }
        }
        @for (page of getVisiblePages(3); track page) {
        <button (click)="onPageChange(page)" [attr.aria-current]="currentPage === page ? 'page' : null"
            [class]="currentPage === page
            ? 'inline-flex items-center justify-center h-8 w-8 rounded border border-indigo-600 bg-indigo-600 text-white font-semibold transition-colors duration-100'
            : 'inline-flex items-center justify-center h-8 w-8 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-100'">
            {{ page }}
        </button>
        }
        @if (getVisiblePages(3)[getVisiblePages(3).length - 1] < totalPages) { @if
            (getVisiblePages(3)[getVisiblePages(3).length - 1] < totalPages - 1) { <span
            class="inline-flex items-center justify-center h-8 px-1 text-gray-400">
            …
            </span>
            }
            <button (click)="onPageChange(totalPages)" class="inline-flex items-center justify-center
                 h-8 w-8 rounded
                 border border-gray-300 bg-white text-gray-600
                 hover:bg-gray-50 hover:border-gray-400
                 transition-colors duration-100">
                {{ totalPages }}
            </button>
            }
    </div>
    <div class="hidden md:flex items-center gap-1">
        @if (getVisiblePages(5)[0] > 1) {
        <button (click)="onPageChange(1)" class="inline-flex items-center justify-center
                 h-8 w-8 rounded
                 border border-gray-300 bg-white text-gray-600
                 hover:bg-gray-50 hover:border-gray-400
                 transition-colors duration-100">
            1
        </button>
        @if (getVisiblePages(5)[0] > 2) {
        <span class="inline-flex items-center justify-center h-8 px-1 text-gray-400">
            …
        </span>
        }
        }
        @for (page of getVisiblePages(5); track page) {
        <button (click)="onPageChange(page)" [attr.aria-current]="currentPage === page ? 'page' : null"
            [class]="currentPage === page
            ? 'inline-flex items-center justify-center h-8 w-8 rounded border border-indigo-600 bg-indigo-600 text-white font-semibold transition-colors duration-100'
            : 'inline-flex items-center justify-center h-8 w-8 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-100'">
            {{ page }}
        </button>
        }
        @if (getVisiblePages(5)[getVisiblePages(5).length - 1] < totalPages) { @if
            (getVisiblePages(5)[getVisiblePages(5).length - 1] < totalPages - 1) { <span
            class="inline-flex items-center justify-center h-8 px-1 text-gray-400">
            …
            </span>
            }
            <button (click)="onPageChange(totalPages)" class="inline-flex items-center justify-center
                 h-8 w-8 rounded
                 border border-gray-300 bg-white text-gray-600
                 hover:bg-gray-50 hover:border-gray-400
                 transition-colors duration-100">
                {{ totalPages }}
            </button>
            }
    </div>
    <button (click)="onPageChange(currentPage + 1)" [disabled]="currentPage === totalPages" aria-label="Next page"
        class="inline-flex items-center justify-center
             h-8 px-2.5 rounded
             border border-gray-300 bg-white
             text-gray-600 font-medium
             hover:bg-gray-50 hover:border-gray-400
             disabled:opacity-40 disabled:cursor-not-allowed
             transition-colors duration-100
             whitespace-nowrap">
        Next ›
    </button>
</nav>
}
````

## File: src/app/layouts/header/header.html
````html
<nav class="sticky top-0 z-9999 bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(168,85,247,0.25)] px-6 py-4">
    <div class="w-full flex items-center justify-between">
        <div routerLink="/"
            class="text-2xl font-extrabold tracking-tight bg-linear-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
            FlowDesk
        </div>
        @if (authService.isLoggedIn()) {
        <div class="hidden md:flex items-center text-sm font-semibold gap-6">
            <a routerLink="/dashboard" routerLinkActive="text-purple-700"
                class="hover:text-purple-700 transition-colors cursor-pointer font-bold">
                Dashboard
            </a>
            <a routerLink="/tasks" routerLinkActive="text-purple-700"
                class="hover:text-purple-700 transition-colors cursor-pointer font-bold">
                Tasks
            </a>
            <a routerLink="/users" routerLinkActive="text-purple-700"
                class="hover:text-purple-700 transition-colors cursor-pointer font-bold">
                Users
            </a>
            <div class="relative">
                <button (click)="isUserMenuOpen = !isUserMenuOpen"
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:scale-105 transition cursor-pointer">
                    <i class='bx bx-user text-xl'></i>
                </button>
                <div *ngIf="isUserMenuOpen"
                    class="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
                    <a routerLink="/profile"
                        class="block px-4 py-3 hover:bg-purple-50 text-sm font-semibold text-gray-700"
                        (click)="isUserMenuOpen = false">
                        Profile
                    </a>
                    <button (click)="logout(); isUserMenuOpen = false"
                        class="w-full text-left px-4 py-3 hover:bg-red-50 text-sm font-semibold text-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
        <div class="mobileNavBar md:hidden">
            <button
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md cursor-pointer"
                (click)="isMobileMenuOpen = true">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <div class="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl shadow-[0_20px_40px_rgba(168,85,247,0.25)] transform transition-all duration-300 ease-in-out md:hidden mobileNavBarMenu"
            [ngClass]="{
             'translate-y-0 opacity-100': isMobileMenuOpen,
             '-translate-y-full opacity-0 pointer-events-none': !isMobileMenuOpen
           }">
            <div class="flex items-center justify-between px-6 py-5 border-b border-purple-100">
                <div>
                    <p class="text-lg font-extrabold text-purple-700">
                        {{ authService.currentUserSignal()?.name }}
                    </p>
                    <p class="text-sm text-gray-500">
                        {{ authService.currentUserSignal()?.email }}
                    </p>
                </div>
                <i class='bx bx-x text-3xl cursor-pointer' (click)="isMobileMenuOpen = false"></i>
            </div>
            <div class="flex flex-col px-6 py-4 gap-3 font-semibold">
                @for (link of [
                { route: '/dashboard', label: 'Dashboard' },
                { route: '/tasks', label: 'Tasks' },
                { route: '/users', label: 'Users' },
                { route: '/profile', label: 'Profile' }
                ]; track link.route) {
                <a [routerLink]="link.route" routerLinkActive="bg-purple-100 text-purple-900 font-bold"
                    [routerLinkActiveOptions]="{ exact: true }" (click)="isMobileMenuOpen = false"
                    class="w-full px-4 py-3 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition">
                    {{ link.label }}
                </a>
                }
                <button (click)="logout(); isMobileMenuOpen = false"
                    class="w-full px-4 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-400/40 transition">
                    Logout
                </button>
            </div>
        </div>
        } @else if (!['/login', '/signup'].includes(router.url)) {
        <a routerLink="/login" routerLinkActive="ring-2 ring-purple-300"
            class="px-4 py-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-200">
            Login
        </a>
        }
    </div>
</nav>
@if (isUserMenuOpen) {
<div class="fixed inset-0 z-40" (click)="closeUserMenu()">
</div>
}
````

## File: src/app/shared/components/demo-graphs/demo-graphs.ts
````typescript
import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
⋮----
interface AppUser {
    id: string;
    name: string;
    email: string;
    permissions: string[];
    parentId: string;
    createdAt: string;
}
interface AppTask {
    id: string;
    title: string;
    status: string;
    priority: string;
    dueDate: string;
    assignedTo: string[];
    userId: string;
    parentId: string;
    createdAt: string;
}
interface TeamMember {
    id: string;
    name: string;
    isAdmin: boolean;
    isCurrent: boolean;
    assigned: number;
    completed: number;
    inProgress: number;
    incomplete: number;
    initials: string;
    color: string;
}
⋮----
export class DemoGraphs implements AfterViewInit, OnDestroy
⋮----
get cBg(): string
get cCard(): string
get cTitle(): string
get cSub(): string
get cStatVal(): string
get cStatSub(): string
get cDivider(): string
private get gc(): string
private get tc(): string
private get lc(): string
private get centerNumColor(): string
private get centerLabelColor(): string
get currentUser(): AppUser
get isAdmin(): boolean
get teamSize(): number
get myAssignedCount(): number
get completedCount(): number
get inProgressCount(): number
get incompleteCount(): number
get completionPct(): string
get teamMembers(): TeamMember[]
get totalTeamPages(): number
get pagedTeamMembers(): TeamMember[]
get showTeamPagination(): boolean
nextTeamPage(): void
prevTeamPage(): void
private getInitials(name: string): string
truncate(name: string, max = 18): string
ngAfterViewInit(): void
ngOnDestroy(): void
private initAllCharts(): void
private destroyAllCharts(): void
toggleTheme(): void
onUserChange(e: Event): void
private tip(): any
private initDoughnut(): void
private buildDoughnutData(): any
toggleDoughnut(m: 'status' | 'priority'): void
private initPolar(): void
private buildPolarData(): any
togglePolar(m: 'count' | 'percentage'): void
private initMatrix(): void
private buildMatrixData(): any
⋮----
const cnt = (p: string, s: string)
⋮----
toggleMatrixFilter(s: string): void
private initTimeline(): void
private getWeekKey(dateStr: string): string
private weekLabel(key: string): string
private buildTimelineStacked(): any
private buildTimelineCumulative(ctx?: CanvasRenderingContext2D): any
private timelineOpts(stacked: boolean): any
toggleTimeline(m: 'stacked' | 'cumulative'): void
````

## File: src/app/features/tasks/components/task-table-footer/task-table-footer.html
````html
<div class="w-full border-t border-gray-200 bg-white px-3 sm:px-4 py-3">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div class="flex flex-row justify-center gap-2 lg:gap-3 btnContainer">
            <div class="paginationContainer w-auto relative">
                <ng-select class="items-per-page-select filter-select w-48 absolute" [items]="pageSizeOptions"
                    [clearable]="false" [searchable]="false" [ngModel]="selectedPageSize"
                    (ngModelChange)="onPageSizeChange($event)" [closeOnSelect]="true" [dropdownPosition]="'top'"
                    appendTo=".paginationContainer">
                    <ng-template ng-label-tmp let-item="item">
                        <span class="text-sm whitespace-nowrap">
                            Items per page : <strong>{{ item }}</strong>
                        </span>
                    </ng-template>
                    <ng-template ng-option-tmp let-item="item">
                        {{ item }}
                    </ng-template>
                </ng-select>
            </div>
            <button (click)="clearFilters.emit()"
                class="px-3 text-sm font-semibold text-red-600 border border-red-200 rounded-md bg-red-50 hover:bg-red-100 hover:border-red-300 transition whitespace-nowrap clearBtn h-8">
                Clear Filters
            </button>
        </div>
        <div class="flex justify-center">
            <app-shared-pagination [total]="total" [itemsPerPage]="itemsPerPage" [currentPage]="currentPage"
                [totalPages]="totalPages" (pageChange)="pageChange.emit($event)">
            </app-shared-pagination>
        </div>
        <div class="text-sm text-gray-500 whitespace-nowrap text-center lg:text-right">
            Total Tasks :
            <span class="ml-1 font-bold text-gray-900">{{ total }}</span>
        </div>
    </div>
</div>
````

## File: src/app/shared/components/kanban-view/kanban-view.html
````html
<div class="flex flex-col bg-gray-50 p-6 overflow-hidden" style="max-height: 76vh;">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Task Board</h2>
    <div class="grid grid-flow-col auto-cols-[minmax(320px,1fr)] gap-6 overflow-x-auto items-stretch" cdkDropListGroup
        cdkScrollable>
        <div
            class="flex flex-col min-w-[320px] bg-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                <h3 class="font-bold text-red-700">Incomplete</h3>
                <span class="bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full">
                    {{ incompleteList.length }}
                </span>
            </div>
            <div id="incompleteList" cdkDropList [cdkDropListData]="incompleteList"
                class="relative flex-1 p-4 overflow-y-auto min-h-0" (cdkDropListDropped)="drop($event)">
                <div *ngFor="let item of incompleteList" cdkDrag cdkScrollable class="py-1.5">
                    <div class="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500
                                hover:shadow-md transition-shadow group task-card">
                        <p class="text-gray-800 font-medium wrap-break-word pr-14">
                            {{ item.title }}
                        </p>
                        <div class="flex items-center justify-between mt-2 text-xs">
                            <div class="flex items-center gap-1 text-gray-500">
                                <i class="bx bx-clock-5"></i>
                                <span>Due : {{ item.dueDate | date:'MMM d' }}</span>
                            </div>
                            <span class="px-2 py-0.5 rounded-full font-semibold" [ngClass]="{
                                'bg-red-100 text-red-700':    item.priority === 'HIGH',
                                'bg-yellow-100 text-yellow-700': item.priority === 'NORMAL',
                                'bg-green-100 text-green-700':   item.priority === 'LOW'
                            }">{{ item.priority }}</span>
                        </div>
                        <div class="absolute top-2 right-2 flex gap-2 opacity-100
                                    md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button (click)="edit(item); $event.stopPropagation()"
                                class="rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 shadow-sm cursor-pointer flex items-center">
                                <i class='bx bx-edit text-xl'></i>
                            </button>
                            <button (click)="delete(item); $event.stopPropagation()"
                                class="rounded-md bg-red-50 hover:bg-red-100 text-red-600 shadow-sm cursor-pointer flex items-center">
                                <i class='bx bx-trash text-xl'></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div *ngIf="incompleteList.length === 0" class="empty-state absolute inset-0 flex flex-col items-center justify-center text-center
                            pointer-events-none rounded-xl border-2 border-dashed border-red-200 bg-red-50/40 px-4">
                    <p class="font-semibold text-gray-700 mb-1">No Incomplete Tasks</p>
                    <p class="text-xs text-gray-500 mb-3">Tasks you haven't started will appear here.</p>
                    <button (click)="toggleDialog()" class="pointer-events-auto mt-2 text-sm bg-red-600 hover:bg-red-700 text-white
                                   px-4 py-1.5 rounded-md shadow-sm cursor-pointer">
                        + Add Task
                    </button>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col min-w-[320px] bg-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                <h3 class="font-bold text-yellow-600">In Progress</h3>
                <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                    {{ inProgressList.length }}
                </span>
            </div>
            <div id="inProgressList" cdkDropList [cdkDropListData]="inProgressList"
                class="relative flex-1 p-4 overflow-y-auto min-h-0" (cdkDropListDropped)="drop($event)">
                <div *ngFor="let item of inProgressList" cdkDrag cdkScrollable class="py-1.5">
                    <div class="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500
                                hover:shadow-md transition-shadow group task-card">
                        <p class="text-gray-800 font-medium wrap-break-word pr-14">{{ item.title }}</p>
                        <div class="flex items-center justify-between mt-2 text-xs">
                            <div class="flex items-center gap-1 text-gray-500">
                                <i class="bx bx-clock-5"></i>
                                <span>Due : {{ item.dueDate | date:'MMM d' }}</span>
                            </div>
                            <span class="px-2 py-0.5 rounded-full font-semibold" [ngClass]="{
                                'bg-red-100 text-red-700':    item.priority === 'HIGH',
                                'bg-yellow-100 text-yellow-700': item.priority === 'NORMAL',
                                'bg-green-100 text-green-700':   item.priority === 'LOW'
                            }">{{ item.priority }}</span>
                        </div>
                        <div class="absolute top-2 right-2 flex gap-2 opacity-100
                                    md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button (click)="edit(item); $event.stopPropagation()"
                                class="rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 shadow-sm cursor-pointer flex items-center">
                                <i class='bx bx-edit text-xl'></i>
                            </button>
                            <button (click)="delete(item); $event.stopPropagation()"
                                class="rounded-md bg-red-50 hover:bg-red-100 text-red-600 shadow-sm cursor-pointer flex items-center">
                                <i class='bx bx-trash text-xl'></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div *ngIf="inProgressList.length === 0"
                    class="empty-state absolute inset-0 flex flex-col items-center justify-center text-center
                            pointer-events-none rounded-xl border-2 border-dashed border-yellow-200 bg-yellow-50/40 px-4">
                    <p class="font-semibold text-gray-700 mb-1">No In Progress Tasks</p>
                    <p class="text-xs text-gray-500 mb-3">Tasks will appear here when they move into this stage.</p>
                    <button (click)="toggleDialog()" class="pointer-events-auto mt-2 text-sm bg-yellow-600 hover:bg-yellow-700 text-white
                                   px-4 py-1.5 rounded-md shadow-sm cursor-pointer">
                        + Add Task
                    </button>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col min-w-[320px] bg-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                <h3 class="font-bold text-green-600">Completed</h3>
                <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    {{ completedList.length }}
                </span>
            </div>
            <div id="completedList" cdkDropList [cdkDropListData]="completedList"
                class="relative flex-1 p-4 overflow-y-auto min-h-0" (cdkDropListDropped)="drop($event)">
                <div *ngFor="let item of completedList" cdkDrag cdkScrollable class="py-1.5">
                    <div class="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500
                                hover:shadow-md transition-shadow group task-card">
                        <p class="text-gray-800 font-medium wrap-break-word pr-14">{{ item.title }}</p>
                        <div class="flex items-center justify-between mt-2 text-xs">
                            <div class="flex items-center gap-1 text-gray-500">
                                <i class="bx bx-clock-5"></i>
                                <span>Due : {{ item.dueDate | date:'MMM d' }}</span>
                            </div>
                            <span class="px-2 py-0.5 rounded-full font-semibold" [ngClass]="{
                                'bg-red-100 text-red-700':    item.priority === 'HIGH',
                                'bg-yellow-100 text-yellow-700': item.priority === 'NORMAL',
                                'bg-green-100 text-green-700':   item.priority === 'LOW'
                            }">{{ item.priority }}</span>
                        </div>
                        <div class="absolute top-2 right-2 flex gap-2 opacity-100
                                    md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button (click)="edit(item); $event.stopPropagation()"
                                class="rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 shadow-sm cursor-pointer flex items-center">
                                <i class="bx bx-edit text-xl"></i>
                            </button>
                            <button (click)="delete(item); $event.stopPropagation()"
                                class="rounded-md bg-red-50 hover:bg-red-100 text-red-600 shadow-sm cursor-pointer flex items-center">
                                <i class="bx bx-trash text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div *ngIf="completedList.length === 0"
                    class="empty-state absolute inset-0 flex flex-col items-center justify-center text-center
                            pointer-events-none rounded-xl border-2 border-dashed border-green-200 bg-green-50/40 px-4">
                    <p class="font-semibold text-gray-700 mb-1">No Completed Tasks</p>
                    <p class="text-xs text-gray-500 mb-3">Finished tasks will live here.</p>
                    <button (click)="toggleDialog()" class="pointer-events-auto mt-2 text-sm bg-green-600 hover:bg-green-700 text-white
                                   px-4 py-1.5 rounded-md shadow-sm cursor-pointer">
                        + Add Task
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<app-task-dialog [open]="isDialogClosed == false" (close)="toggleDialog()">
    <app-task-form [form]="taskForm" [dialogTitle]="dialogTitle()" [dialogDescription]="dialogDescription()"
        [dialogTitleColor]="dialogTitleColor()" [dialogSubmitText]="dialogSubmitText()" [isDeleting]="isDeleting()"
        [users]="users()" (submitForm)="submit()" (cancel)="cancelDialog()">
    </app-task-form>
</app-task-dialog>
````

## File: src/app/features/tasks/components/task-table-row/task-table-row.html
````html
<td class="px-1 sm:px-1 py-2 sm:py-3 font-medium align-middle whitespace-nowrap">
    <div class="flex items-center h-full">
        <ng-container *ngTemplateOutlet="dragCellTemplate; context: {$implicit: task}">
        </ng-container>
        <div>
            {{ task.displayId }}
        </div>
    </div>
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 text-center font-medium text-gray-800">
    <span class="block truncate min-w-45 sm:min-w-60 mx-auto" [title]="task.title">
        {{ task.title | truncate:25:true }}
    </span>
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 text-center whitespace-nowrap">
    <span
        class="inline-flex items-center px-2 py-1 sm:px-2.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap"
        [ngClass]="{
          'bg-green-50 text-green-600': task.status === 'COMPLETED',
          'bg-yellow-50 text-yellow-600': task.status === 'IN_PROGRESS',
          'bg-red-50 text-red-600': task.status === 'INCOMPLETE'
        }">
        {{ statusLabels[task.status] || task.status }}
    </span>
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 text-gray-600 text-center whitespace-nowrap">
    {{ task.dueDate | date: 'dd/MM/yyyy' }}
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 text-center whitespace-nowrap">
    <span
        class="inline-flex items-center px-2 py-1 sm:px-2.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap"
        [ngClass]="{
          'bg-green-50 text-green-600': task.priority === 'LOW',
          'bg-yellow-50 text-yellow-600': task.priority === 'NORMAL',
          'bg-red-50 text-red-600': task.priority === 'HIGH'
        }">
        {{ task.priority }}
    </span>
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 text-center w-45">
    <div #assigneesContainer class="assignees-container" [class.expanded]="expandedSig()"
        [attr.title]="!expandedSig() ? getUsersTooltip(assignedUsersSig()) : null">
        @if (assignedUsersSig().length === 0) {
        <div class="empty-state">
            <svg class="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c2-4 14-4 16 0" />
            </svg>
            <span>No users assigned</span>
        </div>
        } @else {
        <div class="content-area">
            <div #contentWrapper class="content-wrapper">
                <div #chipsRow class="chips-row">
                    @for (user of visibleUsersSig(); track user.id) {
                    <span class="assignee-chip">
                        <img [src]="user.avatar" class="avatar" alt="" />
                        <span class="name">{{ user.name }}</span>
                    </span>
                    }
                </div>
            </div>
            @if (expandedSig() && hasOverflowSig()) {
            <div class="fade-overlay"></div>
            }
        </div>
        @if (hiddenCountSig() > 0) {
        <button class="more-chip" (click)="toggleExpanded($event)" type="button">
            +{{ hiddenCountSig() }} more
        </button>
        }
        }
    </div>
</td>
<td class="px-1.5 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
    <div class="flex justify-center">
        <div class="flex items-center justify-center gap-2 w-full sm:w-auto">
            <button [disabled]="!canEditSig()" [class.opacity-40]="!canEditSig()"
                [class.cursor-not-allowed]="!canEditSig()"
                class="flex items-center justify-center gap-1 px-2.5 py-1 sm:py-1.5 rounded-md text-yellow-700 hover:bg-yellow-200 transition cursor-pointer whitespace-nowrap"
                (click)="canEditSig() && edit.emit(task)">
                <i class="bx bx-edit text-base"></i>
                <span class="whitespace-nowrap">Edit</span>
            </button>
            <button [disabled]="!canDeleteSig()" [class.opacity-40]="!canDeleteSig()"
                [class.cursor-not-allowed]="!canDeleteSig()"
                class="flex items-center justify-center gap-1 px-2.5 py-1 sm:py-1.5 rounded-md text-red-700 hover:bg-red-200 transition cursor-pointer whitespace-nowrap"
                (click)="canDeleteSig() && delete.emit(task)">
                <i class="bx bx-trash text-base"></i>
                <span class="whitespace-nowrap">Delete</span>
            </button>
        </div>
    </div>
</td>
````

## File: src/app/features/dashboard/pages/dashboard/dashboard.ts
````typescript
import {
    Component,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Signal,
    DestroyRef,
    inject,
    signal,
    OnInit,
    computed,
    effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { TaskView } from '@core/models/Task';
import { Observable } from 'rxjs';
import { UserModel } from '@core/models/UserModel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from '@core/services/user/user.service';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { PermissionKey } from '@core/models/PermissionKey';
import { TaskService } from '@core/services/task/task.service';
⋮----
interface TeamMember {
    id: string;
    name: string;
    isAdmin: boolean;
    isCurrent: boolean;
    assigned: number;
    completed: number;
    inProgress: number;
    incomplete: number;
    initials: string;
    color: string;
}
⋮----
export class Dashboard implements OnDestroy, OnInit
⋮----
// Loading state
⋮----
constructor(
        private userService: UserService,
        private taskService: TaskService,
        private userAuth: UserAuth
)
ngOnInit(): void
⋮----
toggleThemePanel(): void
closeThemePanel(): void
setTheme(mode: 'light' | 'dark' | 'system'): void
⋮----
get cBg(): string
get cCard(): string
get cTitle(): string
get cSub(): string
get cStatVal(): string
get cStatSub(): string
get cDivider(): string
private get gc(): string
private get tc(): string
private get lc(): string
private get centerNumColor(): string
private get centerLabelColor(): string
get currentUserId(): string
get currentUserName(): string
get currentUserEmail(): string
get currentUserInitials(): string
get isAdmin(): boolean
get currentUserPermissions(): string[]
get teamSize(): number
get myAssignedCount(): number
get myCompletedCount(): number
get myInProgressCount(): number
get myIncompleteCount(): number
get myCompletionPct(): string
get totalTaskCount(): number
get completedCount(): number
get inProgressCount(): number
get incompleteCount(): number
get completionPct(): string
get teamMembers(): TeamMember[]
get totalTeamPages(): number
get pagedTeamMembers(): TeamMember[]
get showTeamPagination(): boolean
nextTeamPage(): void
prevTeamPage(): void
private getInitials(name: string): string
truncate(name: string, max = 18): string
ngAfterViewInit(): void
⋮----
ngOnDestroy(): void
private initAllCharts(): void
private destroyAllCharts(): void
toggleTheme(): void
private tip(): any
private initDoughnut(): void
private buildDoughnutData(): any
toggleDoughnut(m: 'status' | 'priority'): void
private initPolar(): void
private buildPolarData(): any
togglePolar(m: 'count' | 'percentage'): void
private initMatrix(): void
private buildMatrixData(): any
⋮----
const cnt = (p: string, s: string)
⋮----
toggleMatrixFilter(s: string): void
private initTimeline(): void
private getWeekKey(dateInput: string | number): string
private weekLabel(key: string): string
private buildTimelineStacked(): any
private buildTimelineCumulative(ctx?: CanvasRenderingContext2D): any
private timelineOpts(stacked: boolean): any
toggleTimeline(m: 'stacked' | 'cumulative'): void
````

## File: src/app/features/dashboard/pages/dashboard/dashboard.html
````html
<div class="min-h-screen p-4 md:p-6 lg:p-8 transition-colors duration-500" [ngClass]="isDark
      ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
      : 'bg-gradient-to-br from-white via-slate-50 to-white'">
    @if (!dataLoaded()) {
    <div class="animate-fade-in">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            @for (i of [1,2,3,4]; track i) {
            <div class="rounded-2xl p-4 md:p-5 border overflow-hidden relative"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full"
                    [ngClass]="isDark ? 'bg-slate-700/30' : 'bg-gray-50'"></div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="w-8 h-8 rounded-lg" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                    <div class="h-3 w-16 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                </div>
                <div class="h-9 w-14 rounded-lg mb-1" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                </div>
                <div class="h-3 w-20 rounded mt-1.5" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                </div>
            </div>
            }
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-2xl p-5 md:p-6 border"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="flex items-center justify-between mb-5">
                    <div class="space-y-2">
                        <div class="h-4 w-36 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                        <div class="h-3 w-28 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                    <div class="flex gap-1 rounded-xl p-1" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-50'">
                        <div class="h-7 w-16 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        <div class="h-7 w-16 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    </div>
                </div>
                <div class="flex items-center justify-center py-4">
                    <div class="relative">
                        <div class="w-48 h-48 rounded-full"
                            [ngClass]="isDark ? 'skeleton-shimmer-ring-dark' : 'skeleton-shimmer-ring'"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-32 h-32 rounded-full" [ngClass]="isDark ? 'bg-slate-800' : 'bg-white'"></div>
                        </div>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <div class="h-7 w-10 rounded mb-1"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                            <div class="h-3 w-14 rounded"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-6 mt-3">
                    @for (dot of [1,2,3]; track dot) {
                    <div class="flex items-center gap-1.5">
                        <div class="w-3 h-3 rounded-full"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        <div class="h-3 w-16 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="flex items-center justify-between mb-4">
                    <div class="space-y-2">
                        <div class="h-4 w-36 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                        <div class="h-3 w-52 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                    <div class="flex gap-1 rounded-xl p-1" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-50'">
                        <div class="h-7 w-14 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        <div class="h-7 w-8 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    </div>
                </div>
                <div class="flex items-center justify-center py-4">
                    <div class="relative">
                        <svg class="w-48 h-48" viewBox="0 0 200 200">
                            <path d="M100,100 L100,20 A80,80 0 0,1 176.1,56.9 Z"
                                [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'"
                                style="animation-delay: 0s" />
                            <path d="M100,100 L176.1,56.9 A80,80 0 0,1 149.4,168.9 Z"
                                [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'"
                                style="animation-delay: 0.15s" />
                            <path d="M100,100 L149.4,168.9 A80,80 0 0,1 50.6,168.9 Z"
                                [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'"
                                style="animation-delay: 0.3s" />
                            <path d="M100,100 L50.6,168.9 A80,80 0 0,1 23.9,56.9 Z"
                                [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'"
                                style="animation-delay: 0.45s" />
                            <path d="M100,100 L23.9,56.9 A80,80 0 0,1 100,20 Z"
                                [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'"
                                style="animation-delay: 0.6s" />
                        </svg>
                    </div>
                </div>
                <div class="flex justify-center flex-wrap gap-4 mt-3">
                    @for (j of [1,2,3,4,5]; track j) {
                    <div class="flex items-center gap-1.5">
                        <div class="w-3 h-3 rounded-full"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        <div class="h-3 w-14 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="space-y-2 mb-3">
                    <div class="h-4 w-44 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                    <div class="h-3 w-64 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                </div>
                <div class="flex gap-1.5 mb-4">
                    <div class="h-7 w-24 rounded-lg" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                    <div class="h-7 w-24 rounded-lg" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                    <div class="h-7 w-24 rounded-lg" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                </div>
                <div class="h-55 md:h-70 flex items-end justify-around gap-4 px-4 pt-4 pb-8">
                    @for (bar of [75,55,85,45,65,40,70,50,60]; track $index) {
                    <div class="flex-1 flex flex-col items-center gap-1">
                        <div class="w-full rounded-t-md"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'" [style.height.%]="bar"
                            [style.animation-delay]="$index * 0.08 + 's'"></div>
                    </div>
                    }
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="flex items-center justify-between mb-5">
                    <div class="space-y-2">
                        <div class="h-4 w-40 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                        <div class="h-3 w-56 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                    <div class="flex gap-1 rounded-xl p-1" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-50'">
                        <div class="h-7 w-16 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        <div class="h-7 w-20 rounded-lg"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    </div>
                </div>
                <div class="h-55 md:h-70 relative">
                    <div class="absolute inset-0 flex flex-col justify-between py-2">
                        @for (line of [1,2,3,4,5]; track line) {
                        <div class="w-full"
                            [ngClass]="isDark ? 'border-t border-slate-700/30' : 'border-t border-gray-100'"></div>
                        }
                    </div>
                    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                        <defs>
                            <linearGradient id="skelGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" [attr.stop-color]="isDark ? '#4338ca' : '#e0e7ff'"
                                    stop-opacity="0.3" />
                                <stop offset="100%" [attr.stop-color]="isDark ? '#4338ca' : '#e0e7ff'"
                                    stop-opacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,180 Q50,160 100,140 T200,100 T300,70 T400,40 L400,200 L0,200 Z"
                            fill="url(#skelGrad)"
                            [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'" />
                        <path d="M0,180 Q50,160 100,140 T200,100 T300,70 T400,40" fill="none"
                            [attr.stroke]="isDark ? '#4338ca' : '#c7d2fe'" stroke-width="3" stroke-linecap="round"
                            [ngClass]="isDark ? 'skeleton-shimmer-svg-dark' : 'skeleton-shimmer-svg'" />
                    </svg>
                    <div class="absolute inset-0 flex items-end justify-between px-2 pb-6">
                        @for (dot of [80,60,40,30,50,25,20]; track $index) {
                        <div class="w-3 h-3 rounded-full"
                            [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"
                            [style.margin-bottom.%]="dot" [style.animation-delay]="$index * 0.1 + 's'"></div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8">
            <div class="rounded-2xl p-5 md:p-6 border"
                [ngClass]="isDark ? 'bg-slate-800/50 border-slate-700/30' : 'bg-white border-gray-100'">
                <div class="flex items-center gap-3 mb-5">
                    <div class="w-9 h-9 rounded-xl" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                    </div>
                    <div class="space-y-2">
                        <div class="h-4 w-28 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                        <div class="h-3 w-48 rounded" [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'">
                        </div>
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 rounded-xl mb-2">
                    <div class="col-span-4 h-3 w-16 rounded"
                        [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    <div class="col-span-2 h-3 w-16 rounded mx-auto"
                        [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    <div class="col-span-2 h-3 w-16 rounded mx-auto"
                        [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    <div class="col-span-2 h-3 w-16 rounded mx-auto"
                        [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                    <div class="col-span-2 h-3 w-16 rounded mx-auto"
                        [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                </div>
                <div class="space-y-1.5">
                    @for (row of [1,2,3,4,5]; track row) {
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center px-4 py-3 rounded-xl border"
                        [ngClass]="isDark ? 'border-slate-700/20' : 'border-gray-50'"
                        [style.animation-delay]="row * 0.1 + 's'">
                        <div class="col-span-1 md:col-span-4 flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl shrink-0"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                            <div class="space-y-1.5 flex-1">
                                <div class="h-3.5 rounded"
                                    [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"
                                    [style.width]="(60 + row * 8) + '%'"></div>
                                <div class="h-3 w-14 rounded"
                                    [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                            </div>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <div class="h-6 w-9 rounded-lg"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <div class="h-6 w-9 rounded-lg"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <div class="h-6 w-9 rounded-lg"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <div class="h-6 w-9 rounded-lg"
                                [ngClass]="isDark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'"></div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    }
    @if (dataLoaded()) {
    <div class="animate-fade-in">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
                [ngClass]="cCard">
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                    [ngClass]="isDark ? 'bg-indigo-500/5 group-hover:bg-indigo-500/10' : 'bg-indigo-50 group-hover:bg-indigo-100/80'">
                </div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                        [ngClass]="isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'">
                        <i class="bx bx-task text-indigo-500 text-base"></i>
                    </div>
                    <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Total Tasks</span>
                </div>
                <div class="text-3xl font-bold" [ngClass]="cStatVal">{{ tasks().length }}</div>
            </div>
            <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
                [ngClass]="cCard">
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                    [ngClass]="isDark ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-emerald-50 group-hover:bg-emerald-100/80'">
                </div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                        [ngClass]="isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'">
                        <i class="bx bx-check-circle text-emerald-500 text-base"></i>
                    </div>
                    <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Completed</span>
                </div>
                <div class="text-3xl font-bold text-emerald-500">{{ completedCount }}</div>
                <div class="text-[11px] mt-1" [ngClass]="cStatSub">{{ completionPct }}% completion rate</div>
            </div>
            <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
                [ngClass]="cCard">
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                    [ngClass]="isDark ? 'bg-purple-500/5 group-hover:bg-purple-500/10' : 'bg-purple-50 group-hover:bg-purple-100/80'">
                </div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                        [ngClass]="isDark ? 'bg-purple-500/10' : 'bg-purple-50'">
                        <i class="bx bx-user-check text-purple-500 text-base"></i>
                    </div>
                    <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">My Assigned
                        Tasks</span>
                </div>
                <div class="text-3xl font-bold text-purple-500">{{ myAssignedCount }}</div>
            </div>
            <div class="relative overflow-hidden rounded-2xl p-4 md:p-5 border transition-all duration-300 group"
                [ngClass]="cCard">
                <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full transition-colors"
                    [ngClass]="isDark ? 'bg-cyan-500/5 group-hover:bg-cyan-500/10' : 'bg-cyan-50 group-hover:bg-cyan-100/80'">
                </div>
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                        [ngClass]="isDark ? 'bg-cyan-500/10' : 'bg-cyan-50'">
                        <i class="bx bx-group text-cyan-500 text-base"></i>
                    </div>
                    <span class="text-[11px] uppercase tracking-widest font-medium" [ngClass]="cSub">Team Size</span>
                </div>
                <div class="text-3xl font-bold text-cyan-500">{{ teamSize }}</div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Task Health Overview</h2>
                        <p class="text-[11px] mt-0.5" [ngClass]="cSub">Distribution by {{ doughnutMode }}</p>
                    </div>
                    <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                        <button (click)="toggleDoughnut('status')"
                            class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="doughnutMode === 'status'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Status</button>
                        <button (click)="toggleDoughnut('priority')"
                            class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="doughnutMode === 'priority'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Priority</button>
                    </div>
                </div>
                <div class="relative max-w-65 mx-auto">
                    <canvas #doughnutCanvas></canvas>
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Permission Spread</h2>
                        <p class="text-[11px] mt-0.5" [ngClass]="cSub">How permissions are distributed across users</p>
                    </div>
                    <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                        <button (click)="togglePolar('count')"
                            class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="polarMode === 'count'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Count</button>
                        <button (click)="togglePolar('percentage')"
                            class="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="polarMode === 'percentage'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">%</button>
                    </div>
                </div>
                <div class="max-w-65 mx-auto">
                    <canvas #polarCanvas></canvas>
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
                <div class="mb-3">
                    <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Priority × Status Matrix</h2>
                </div>
                <div class="flex flex-wrap gap-1.5 mb-4">
                    <button (click)="toggleMatrixFilter('COMPLETED')"
                        class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                        [ngClass]="matrixFilters['COMPLETED']
            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Completed
                    </button>
                    <button (click)="toggleMatrixFilter('IN_PROGRESS')"
                        class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                        [ngClass]="matrixFilters['IN_PROGRESS']
            ? 'bg-amber-500/15 border-amber-500/50 text-amber-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        In Progress
                    </button>
                    <button (click)="toggleMatrixFilter('INCOMPLETE')"
                        class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all duration-200"
                        [ngClass]="matrixFilters['INCOMPLETE']
            ? 'bg-rose-500/15 border-rose-500/50 text-rose-500'
            : (isDark ? 'bg-slate-700/20 border-slate-600/30 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-400')">
                        <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                        Incomplete
                    </button>
                </div>
                <div class="h-55 md:h-70">
                    <canvas #matrixCanvas></canvas>
                </div>
            </div>
            <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Task Creation Timeline</h2>
                        <p class="text-[11px] mt-0.5" [ngClass]="cSub">Aggregated by week · scales with any volume</p>
                    </div>
                    <div class="flex rounded-xl p-1 gap-0.5" [ngClass]="isDark ? 'bg-slate-700/40' : 'bg-gray-100'">
                        <button (click)="toggleTimeline('stacked')"
                            class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="timelineMode === 'stacked'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Stacked</button>
                        <button (click)="toggleTimeline('cumulative')"
                            class="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                            [ngClass]="timelineMode === 'cumulative'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : (isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')">Cumulative</button>
                    </div>
                </div>
                <div class="h-55 md:h-70">
                    <canvas #timelineCanvas></canvas>
                </div>
            </div>
        </div>
        <div class="mt-8">
            <div class="rounded-2xl p-5 md:p-6 border transition-all duration-300" [ngClass]="cCard">
                <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center"
                            [ngClass]="isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'">
                            <i class="bx bx-group text-indigo-500 text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-[15px] font-semibold" [ngClass]="cTitle">Team Overview</h2>
                            <p class="text-[11px] mt-0.5" [ngClass]="cSub">
                                {{ teamMembers.length }} members · sorted by assigned tasks
                            </p>
                        </div>
                    </div>
                    <div *ngIf="showTeamPagination" class="flex items-center gap-2">
                        <span class="text-[11px]" [ngClass]="cSub">
                            {{ teamPage + 1 }} / {{ totalTeamPages }}
                        </span>
                        <button (click)="prevTeamPage()" [disabled]="teamPage === 0"
                            class="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                            [ngClass]="teamPage === 0
              ? (isDark ? 'border-slate-700/30 text-slate-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed')
              : (isDark ? 'border-slate-600/40 text-gray-400 hover:text-white hover:border-indigo-500/50' : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-indigo-300')">
                            <i class="bx bx-chevron-left text-lg"></i>
                        </button>
                        <button (click)="nextTeamPage()" [disabled]="teamPage >= totalTeamPages - 1"
                            class="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                            [ngClass]="teamPage >= totalTeamPages - 1
              ? (isDark ? 'border-slate-700/30 text-slate-700 cursor-not-allowed' : 'border-gray-100 text-gray-300 cursor-not-allowed')
              : (isDark ? 'border-slate-600/40 text-gray-400 hover:text-white hover:border-indigo-500/50' : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-indigo-300')">
                            <i class="bx bx-chevron-right text-lg"></i>
                        </button>
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 rounded-xl mb-2 text-[11px] uppercase tracking-wider font-semibold"
                    [ngClass]="isDark ? 'bg-slate-700/20 text-gray-500' : 'bg-gray-50 text-gray-400'">
                    <div class="col-span-4">Member</div>
                    <div class="col-span-2 text-center">Assigned</div>
                    <div class="col-span-2 text-center">Completed</div>
                    <div class="col-span-2 text-center">In Progress</div>
                    <div class="col-span-2 text-center">Incomplete</div>
                </div>
                <div class="space-y-1.5">
                    <div *ngFor="let member of pagedTeamMembers; let i = index"
                        class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center px-4 py-3 rounded-xl border transition-all duration-200 group"
                        [ngClass]="isDark
            ? 'border-slate-700/20 hover:border-slate-600/40 hover:bg-slate-800/40'
            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/80'">
                        <div class="col-span-1 md:col-span-4 flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0 relative"
                                [style.background-color]="member.color">
                                {{ member.initials }}
                                <span *ngIf="member.isAdmin"
                                    class="absolute -top-1.5 -right-1.5 text-amber-400 text-xs">
                                    <i class="bx bxs-crown"></i>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <div class="flex items-center gap-1.5">
                                    <span class="text-sm font-semibold truncate" [ngClass]="cTitle">{{
                                        truncate(member.name,
                                        20) }}</span>
                                    <span *ngIf="member.isCurrent"
                                        class="text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-500">You</span>
                                </div>
                                <span class="text-[11px]" [ngClass]="cSub">
                                    {{ member.isAdmin ? 'Admin' : 'Member' }}
                                </span>
                            </div>
                        </div>
                        <div class="col-span-1 md:hidden flex flex-wrap gap-2 ml-12">
                            <span
                                class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                                [ngClass]="isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'">
                                <i class="bx bx-task text-xs"></i> {{ member.assigned }}
                            </span>
                            <span
                                class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                                [ngClass]="isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'">
                                <i class="bx bx-check text-xs"></i> {{ member.completed }}
                            </span>
                            <span
                                class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                                [ngClass]="isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'">
                                <i class="bx bx-clock-dashed-half"></i> {{ member.inProgress }}
                            </span>
                            <span
                                class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-semibold"
                                [ngClass]="isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600'">
                                <i class="bx bx-x text-xs"></i> {{ member.incomplete }}
                            </span>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <span
                                class="inline-flex items-center justify-center min-w-7 px-2 py-0.5 rounded-lg text-sm font-bold"
                                [ngClass]="member.assigned > 0
                ? (isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.assigned }}</span>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <span
                                class="inline-flex items-center justify-center min-w-7 px-2 py-0.5 rounded-lg text-sm font-bold"
                                [ngClass]="member.completed > 0
                ? (isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.completed }}</span>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <span
                                class="inline-flex items-center justify-center min-w-7 px-2 py-0.5 rounded-lg text-sm font-bold"
                                [ngClass]="member.inProgress > 0
                ? (isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.inProgress }}</span>
                        </div>
                        <div class="hidden md:flex col-span-2 justify-center">
                            <span
                                class="inline-flex items-center justify-center min-w-7 px-2 py-0.5 rounded-lg text-sm font-bold"
                                [ngClass]="member.incomplete > 0
                ? (isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600')
                : (isDark ? 'text-slate-600' : 'text-gray-300')">{{ member.incomplete }}</span>
                        </div>
                    </div>
                </div>
                <div *ngIf="teamMembers.length === 0" class="text-center py-12">
                    <i class="bx bx-group text-4xl" [ngClass]="isDark ? 'text-slate-700' : 'text-gray-300'"></i>
                    <p class="text-sm mt-2" [ngClass]="cSub">No team members found</p>
                </div>
            </div>
        </div>
    </div>
    }
    <div class="fixed inset-0 z-[998] transition-opacity duration-300"
        [ngClass]="themeMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        (click)="closeThemePanel()"></div>
    <div class="fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex items-center">
        <div class="absolute right-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" [ngClass]="themeMenuOpen
      ? 'translate-x-0 opacity-100 scale-100'
      : 'translate-x-full opacity-0 scale-95 pointer-events-none'">
            <div class="mr-2 rounded-2xl border shadow-2xl backdrop-blur-xl p-4 w-[220px] transition-colors duration-300"
                [ngClass]="isDark
        ? 'bg-slate-900/95 border-slate-700/50 shadow-black/40'
        : 'bg-white/95 border-gray-200/60 shadow-gray-300/30'">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300"
                            [ngClass]="isDark ? 'bg-indigo-500/15' : 'bg-indigo-50'">
                            <i class="bx bx-palette text-indigo-500 text-sm"></i>
                        </div>
                        <span class="text-xs font-bold uppercase tracking-wider"
                            [ngClass]="isDark ? 'text-gray-300' : 'text-gray-700'">Theme</span>
                    </div>
                    <button (click)="closeThemePanel()"
                        class="w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 hover:rotate-90"
                        [ngClass]="isDark
            ? 'text-gray-500 hover:text-gray-300 hover:bg-slate-700/50'
            : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'">
                        <i class="bx bx-x text-base"></i>
                    </button>
                </div>
                <div class="space-y-1.5">
                    <button (click)="setTheme('light')"
                        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 group relative overflow-hidden"
                        [ngClass]="themeMode === 'light'
            ? (isDark
                ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/10'
                : 'bg-amber-50 border-amber-300/60 shadow-lg shadow-amber-200/30')
            : (isDark
                ? 'border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50')">
                        <div class="absolute -top-4 -left-4 w-16 h-16 rounded-full transition-all duration-700"
                            [ngClass]="themeMode === 'light'
              ? 'bg-amber-400/10 scale-100'
              : 'bg-transparent scale-0'"></div>
                        <div class="relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                            [ngClass]="themeMode === 'light'
              ? 'bg-amber-400 shadow-lg shadow-amber-400/40 scale-110'
              : (isDark ? 'bg-slate-700/40' : 'bg-gray-100')">
                            <i class="bx bx-sun text-base transition-all duration-300" [ngClass]="themeMode === 'light'
                ? 'text-white animate-[spin_8s_linear_infinite]'
                : (isDark ? 'text-gray-500' : 'text-gray-400')"></i>
                        </div>
                        <div class="text-left relative">
                            <div class="text-xs font-semibold" [ngClass]="themeMode === 'light'
                ? (isDark ? 'text-amber-400' : 'text-amber-600')
                : (isDark ? 'text-gray-400' : 'text-gray-600')">Light</div>
                            <div class="text-[10px]" [ngClass]="isDark ? 'text-gray-600' : 'text-gray-400'">Clean &
                                bright</div>
                        </div>
                        <div class="ml-auto transition-all duration-300" [ngClass]="themeMode === 'light'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'">
                            <div class="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
                                <i class="bx bx-check text-white text-xs font-bold"></i>
                            </div>
                        </div>
                    </button>
                    <button (click)="setTheme('dark')"
                        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 group relative overflow-hidden"
                        [ngClass]="themeMode === 'dark'
            ? (isDark
                ? 'bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                : 'bg-indigo-50 border-indigo-300/60 shadow-lg shadow-indigo-200/30')
            : (isDark
                ? 'border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50')">
                        <div class="absolute -top-4 -left-4 w-16 h-16 rounded-full transition-all duration-700"
                            [ngClass]="themeMode === 'dark'
              ? 'bg-indigo-500/10 scale-100'
              : 'bg-transparent scale-0'"></div>
                        <div class="relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                            [ngClass]="themeMode === 'dark'
              ? 'bg-indigo-500 shadow-lg shadow-indigo-500/40 scale-110'
              : (isDark ? 'bg-slate-700/40' : 'bg-gray-100')">
                            <i class="bx bx-moon text-base transition-all duration-500" [ngClass]="themeMode === 'dark'
                ? 'text-white rotate-[-20deg]'
                : (isDark ? 'text-gray-500' : 'text-gray-400')"></i>
                        </div>
                        <div class="text-left relative">
                            <div class="text-xs font-semibold" [ngClass]="themeMode === 'dark'
                ? (isDark ? 'text-indigo-400' : 'text-indigo-600')
                : (isDark ? 'text-gray-400' : 'text-gray-600')">Dark</div>
                            <div class="text-[10px]" [ngClass]="isDark ? 'text-gray-600' : 'text-gray-400'">Easy on the
                                eyes</div>
                        </div>
                        <div class="ml-auto transition-all duration-300" [ngClass]="themeMode === 'dark'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'">
                            <div class="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                                <i class="bx bx-check text-white text-xs font-bold"></i>
                            </div>
                        </div>
                    </button>
                    <button (click)="setTheme('system')"
                        class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-300 group relative overflow-hidden"
                        [ngClass]="themeMode === 'system'
            ? (isDark
                ? 'bg-cyan-500/10 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                : 'bg-cyan-50 border-cyan-300/60 shadow-lg shadow-cyan-200/30')
            : (isDark
                ? 'border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50')">
                        <div class="absolute -top-4 -left-4 w-16 h-16 rounded-full transition-all duration-700"
                            [ngClass]="themeMode === 'system'
              ? 'bg-cyan-500/10 scale-100'
              : 'bg-transparent scale-0'"></div>
                        <div class="relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                            [ngClass]="themeMode === 'system'
              ? 'bg-cyan-500 shadow-lg shadow-cyan-500/40 scale-110'
              : (isDark ? 'bg-slate-700/40' : 'bg-gray-100')">
                            <i class="bx bx-laptop text-base transition-all duration-300" [ngClass]="themeMode === 'system'
                ? 'text-white'
                : (isDark ? 'text-gray-500' : 'text-gray-400')"></i>
                        </div>
                        <div class="text-left relative">
                            <div class="text-xs font-semibold" [ngClass]="themeMode === 'system'
                ? (isDark ? 'text-cyan-400' : 'text-cyan-600')
                : (isDark ? 'text-gray-400' : 'text-gray-600')">System</div>
                            <div class="text-[10px]" [ngClass]="isDark ? 'text-gray-600' : 'text-gray-400'">Follow OS
                                setting</div>
                        </div>
                        <div class="ml-auto transition-all duration-300" [ngClass]="themeMode === 'system'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'">
                            <div class="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                                <i class="bx bx-check text-white text-xs font-bold"></i>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <button (click)="toggleThemePanel()"
            class="relative group transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            [ngClass]="themeMenuOpen ? 'translate-x-full opacity-0 scale-75 pointer-events-none' : 'translate-x-0 opacity-100 scale-100'">
            <div class="flex flex-col items-center gap-2 px-1.5 py-3 rounded-l-2xl border-y border-l shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer"
                [ngClass]="isDark
        ? 'bg-slate-900/90 border-slate-700/50 shadow-black/30 hover:bg-slate-800/90 hover:border-indigo-500/30'
        : 'bg-white/90 border-gray-200/60 shadow-gray-200/40 hover:bg-white hover:border-indigo-300/50'">
                <div class="relative w-8 h-8 flex items-center justify-center">
                    <i class="bx bx-sun absolute text-lg transition-all duration-500" [ngClass]="!isDark
            ? 'opacity-100 rotate-0 scale-100 text-amber-400'
            : 'opacity-0 rotate-180 scale-50 text-amber-400'"></i>
                    <i class="bx bx-moon absolute text-lg transition-all duration-500" [ngClass]="isDark
            ? 'opacity-100 rotate-0 scale-100 text-indigo-400'
            : 'opacity-0 -rotate-180 scale-50 text-indigo-400'"></i>
                </div>
                <div class="flex flex-col items-center">
                    <span
                        class="text-[9px] font-bold uppercase tracking-[0.2em] leading-tight transition-colors duration-300"
                        [ngClass]="isDark ? 'text-gray-500' : 'text-gray-400'"
                        style="writing-mode: vertical-lr; text-orientation: mixed;">THEME</span>
                </div>
                <div class="relative">
                    <div class="w-2 h-2 rounded-full transition-colors duration-300" [ngClass]="{
            'bg-amber-400 shadow-sm shadow-amber-400/50': themeMode === 'light',
            'bg-indigo-500 shadow-sm shadow-indigo-500/50': themeMode === 'dark',
            'bg-cyan-500 shadow-sm shadow-cyan-500/50': themeMode === 'system'
          }"></div>
                    <div class="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-40" [ngClass]="{
            'bg-amber-400': themeMode === 'light',
            'bg-indigo-500': themeMode === 'dark',
            'bg-cyan-500': themeMode === 'system'
          }"></div>
                </div>
            </div>
            <div class="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2.5 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0"
                [ngClass]="isDark
        ? 'bg-slate-800 text-gray-300 shadow-lg shadow-black/30'
        : 'bg-gray-800 text-white shadow-lg shadow-gray-300/30'">
                Toggle theme
                <div class="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent"
                    [ngClass]="isDark ? 'border-l-slate-800' : 'border-l-gray-800'"></div>
            </div>
        </button>
    </div>
</div>
````
