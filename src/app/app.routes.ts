import { Routes } from '@angular/router';
import { Login } from '@features/auth/pages/login/login';
import { Signup } from '@features/auth/pages/signup/signup';
import { Tasks } from '@features/tasks/pages/tasks/tasks';
import { authGuard } from '@core/guards/auth-guard';
import { User } from '@features/users/pages/user/user';
import { Home } from '@features/home/pages/home/home';
import { Dashboard } from '@features/dashboard/pages/dashboard/dashboard';
import { DemoGraphs } from '@shared/components/demo-graphs/demo-graphs';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login,
        canActivate: [authGuard],
        data: { guestOnly: true }
    },
    {
        path: 'signup',
        component: Signup,
        canActivate: [authGuard],
        data: { guestOnly: true }
    },
    {
        path: 'tasks',
        component: Tasks,
        canActivate: [authGuard],
        data: { requiresAuth: true }
    },
    {
        path: 'users',
        component: User,
        canActivate: [authGuard],
        data: { requiresAuth: true }
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard],
        data: { requiresAuth: true }
    },
    {
        path: 'demo-graphs',
        component: DemoGraphs,
    },
    { path: '**', redirectTo: '' }
];
