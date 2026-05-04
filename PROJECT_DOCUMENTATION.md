# FlowDesk Documentation

## 1. Project Overview
**FlowDesk** is a modern, responsive web application designed for comprehensive task and user management. Built with a focus on empowering teams and organizing work, it provides a centralized platform where managers can assign tasks, control access through granular permissions, and track team progress via rich visual dashboards.

## 2. Project Motivation
The modern workplace requires tools that bridge the gap between simple to-do lists and complex enterprise resource planning systems. FlowDesk was created to offer a streamlined, intuitive interface that handles both task delegation and team management without overwhelming the user with unnecessary complexity.

## 3. Problem Statement
Many task management solutions either lack robust team management features or are too overly complicated for small to medium-sized teams. Teams often struggle to maintain visibility over who is working on what, ensuring the right people have the right access permissions, and getting a quick bird's-eye view of project health through analytics.

## 4. Core Features
- **Task Management:** Create, edit, delete, and track tasks. Supports List and Kanban views.
- **User Management & Role-Based Access Control (RBAC):** Admins can manage team members and assign fine-grained permissions (View, Create, Edit, Delete Tasks, Manage Users).
- **Rich Analytics Dashboard:** Data visualization using Chart.js, including task status doughnuts, priority matrices, and cumulative timelines.
- **Optimistic UI Updates:** Provides a snappy user experience by updating the UI immediately while making backend requests asynchronously.
- **Theme Support:** Built-in Light, Dark, and System preference modes.

## 5. Architecture Overview
FlowDesk is a Single Page Application (SPA) built entirely with **Angular (v20)** using the modern **Standalone Components** architecture. 
- **State Management:** Heavily leverages the new Angular **Signals** (`signal`, `computed`, `effect`) along with RxJS (`BehaviorSubject`, `Observable`) for reactive programming.
- **Security:** Uses JWT (JSON Web Tokens) for authentication, handled via an HTTP Interceptor (`authInterceptor`) that attaches the token to outgoing requests and manages unauthorized access (401/403).
- **Component Design:** Divided into modular feature boundaries (Auth, Tasks, Dashboard, Users, Profile) with shared dumb components for reusability.

## 6. Tech Stack
| Category | Technology |
| :--- | :--- |
| **Framework** | Angular v20.3.0 |
| **Styling** | TailwindCSS v4 |
| **Data Visualization** | Chart.js v4.5.1 |
| **Date Formatting** | Day.js v1.11.19 |
| **UI Components** | ngx-daterangepicker-material, ng-select |
| **Toast Notifications** | ngx-toastr |

*(Note: Although Firebase is present in package dependencies, the core auth and data logic heavily points to a custom REST API running normally on `http://localhost:3080/api`)*.

## 7. Repository Structure
The codebase follows a domain-driven structure located under `src/app/`:

- **`@core/`**: application-wide singletons and fundamental rules.
  - `functions/`: Reusable logic (e.g., custom password strength validators).
  - `guards/`: Route guards (`authGuard`) to protect authenticated routes.
  - `interceptors/`: HTTP Interceptors (`authInterceptor`).
  - `models/`: TypeScript interfaces and types (`Task.ts`, `UserModel.ts`, `PermissionKey.ts`).
  - `services/`: Global state and API interaction (`task.service.ts`, `user.service.ts`, `user-auth.ts`, `token-service.ts`).
- **`@features/`**: The main application screens.
  - `auth/`: Login and Signup pages.
  - `dashboard/`: Analytics and overview page.
  - `home/`: Public landing page.
  - `profile/`: User profile management.
  - `tasks/`: Task listing, filters, kanban, and table components.
  - `users/`: User management table and forms.
- **`@shared/`**: Reusable generic UI components (modals, pagination, loaders, empty states).
- **`@environments/`**: API endpoints configurations.

## 8. Screen / Module Documentation

### 8.1 Home (`/`)
- **Purpose:** Public-facing landing page marketing the application.
- **Functionality:** Explains the core tenets of the platform ("Organize Work. Empower Teams.") and provides clear Call-To-Action (CTA) buttons directing the user to Login or Signup.

### 8.2 Authentication (`/login`, `/signup`)
- **Purpose:** Onboard users and authenticate existing ones.
- **Functionality:** 
  - Validates email and password formats (custom strong password requirement on signup).
  - **Login:** Calls `/auth/login`, saves the returned JWT token to local storage, fetches the current user profile (`/auth/me`), and redirects to `/dashboard`.
  - **Signup:** Registers a new user. Users created here default to standard roles. 

### 8.3 Dashboard (`/dashboard`)
- **Purpose:** Provide an analytical overview of the team's workload and project status.
- **Data Shown:** 
  - Statistics cards (Total, Completed, In Progress, Incomplete tasks).
  - Doughnut chart (Status distribution vs Priority distribution).
  - Polar Area chart representing User permission distribution.
  - Matrix bar chart mapping Priority against Status.
  - Timeline chart showing task creation flow over time (Stacked or Cumulative).
  - Team roster showing team members, their assigned tasks, and completion metrics.
- **Dependencies:** `TaskService`, `UserService`, `Chart.js`.

### 8.4 Tasks (`/tasks`)
- **Purpose:** The core operational screen for managing tasks.
- **Data Shown:** List of tasks assigned to or visible to the currently authenticated user.
- **Functionality:**
  - **Filters:** Search by keyword, date ranges, status, and assigned user.
  - **Views:** Toggle between a traditional Data Table and a drag-and-drop Kanban View.
  - **Actions:** View, Create, Edit, or Delete Tasks inside dynamic dialog forms. Updates are made optimistically for perceived speed.

### 8.5 Users (`/users`)
- **Purpose:** Admin portal to manage team members.
- **Functionality:** Lists all team members under the current manager. Provides a sidebar form interface to add new members, edit details, adjust permissions, or delete the user.

### 8.6 Profile (`/profile`)
- **Purpose:** Individual user settings.
- **Functionality:** Displays the user's current permissions, account age, and avatar. Allows the user to update their display name and profile picture.

## 9. Data Flow
1. **State Initialization:** Upon app start, if a JWT token is present, `UserAuth` calls `/auth/me` to fetch `UserModel`.
2. **Reactive Effects:** The Angular `effect` in `TaskService` listens to the `currentUserSignal`. Once the user is loaded, it automatically triggers `fetchTasks()`.
3. **Optimistic Updates:** When a user alters a task status (e.g., drags a card in Kanban), `TaskService` immediately updates the local `Signal` representing the task array. It then sends an HTTP PATCH request to the backend. If the request fails, it rolls back the local state to the previous snapshot.

## 10. API Reference Summary
| Module | Endpoint | Method | Note |
| :--- | :--- | :--- | :--- |
| **Auth** | `/auth/login` | POST | Authenticates and returns JWT |
| **Auth** | `/auth/signup` | POST | Registers new user |
| **Auth** | `/auth/me` | GET | Validates token and returns current user |
| **Tasks** | `/tasks/getTasksByParent`| GET | Fetches tasks visible to user |
| **Tasks** | `/tasks` | POST | Creates new Task |
| **Tasks** | `/tasks/:id` | PUT/DELETE| Edits or deletes a task |
| **Tasks** | `/tasks/:id/status`| PATCH | Updates just the status |
| **Users** | `/users/by-parent` | GET | Gets team roster |
| **Users** | `/users` | POST | Adds user to team |
| **Users** | `/users/:id` | PUT/DELETE| Manages existing user |

## 11. Auth & Authorization Flow
- **Authentication:** Token-based. Saved via `TokenService` into `localStorage`. Handled on requests via `authInterceptor`. If a 401 is encountered, the app logs the user out and redirects to the login screen.
- **Authorization:** Handled strictly through an Array of Enums representing capabilities: `TASK_VIEW`, `TASK_CREATE`, `TASK_EDIT`, `TASK_DELETE`, `MANAGE_USER`.
- **Guards:** `authGuard` checks `UserAuth.isAuthenticatedSync()` and route `data` (`guestOnly` vs `requiresAuth`) to protect routes.

## 12. Setup Guide

### Prerequisites
- Node.js (v18 or higher recommended to run Angular 20)
- npm package manager

### Installation
1. Clone the repository.
2. Navigate to the project directory: `cd flow-desk`
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Edit the API endpoints in `src/environments/`:
- `environment.ts` (Development)
- `environment.prod.ts` (Production)
Currently defaults to: `API_URL: 'http://localhost:3080/api'`

### Local Development
To start the local development server:
```bash
npm run start
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Production Build
Run the following to compile the application into the `dist/` directory:
```bash
npm run build
```

## 13. Usage Guide
### For Normal Users
1. **Signup/Login**: Create an account or log in with provided credentials.
2. **Dashboard**: Check your current completion rate and active priorities for the week.
3. **Tasks**: Navigate to the "Tasks" tab. Use the Kanban board to drag items from "Incomplete" to "In Progress" to "Completed" as you work.
4. **Profile**: Update your avatar or display name. Check what permissions you currently hold.

### For Admin/Manager Users
1. **Manage Team**: Navigate to the "Users" tab. Click the Add button to invite new team members, assigning them their required permissions.
2. **Assign Work**: In the "Tasks" module, click "+ Add Task" and select an assigned user from the dropdown roster.
3. **Analytics**: Go to the Dashboard to see an overview of the entire team's performance, represented by the matrix filters and team member rosters.

## 14. Differences from Similar Platforms
Unlike bloated platforms (e.g., Jira, Asana) that require extensive configuration, or overly simple apps (e.g., standard Todoist) that lack serious team oversight capabilities:
- **FlowDesk is lightweight:** It relies on modern Angular Signals for blazing-fast local state adjustments.
- **Focused RBAC:** The permission model is flat and literal (Can Edit, Can Manage Users), eliminating complicated hierarchical rule-sets.
- **Optimized UI:** Drag-and-drop Kanban functionality paired side-by-side with heavy analytical Data visualization means users get actionable insights instantly.

## 15. Limitations and Future Scope
- **Realtime Sync:** Currently relies on optimistic UI updates rather than WebSockets (Socket.io/SignalR) for true real-time cross-client syncing.
- **Notifications:** Push notifications or email alerts for task assignments are not yet integrated into the frontend.
- **Dynamic Workflows:** Task statuses are hardcoded (`INCOMPLETE`, `IN_PROGRESS`, `COMPLETED`). Future iterations could allow for custom task columns.

## 16. Conclusion
FlowDesk stands as a cleanly architected, highly responsive Angular application reflecting modern frontend design patterns. Its extensive use of Signals, reactive programming, and modular feature design make it an excellent platform for scalable task management logic.
