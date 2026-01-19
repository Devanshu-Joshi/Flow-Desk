import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UserAuth } from '@core/services/user-auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(UserAuth);
    const router = inject(Router);

    const token = authService.getToken();

    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    return next(req).pipe(
        catchError(err => {
            if (err.status === 401) {
                authService.logout();
                return throwError(() => err);
                // OR redirect:
                // router.navigate(['/login']);
            }

            return throwError(() => err);
        })
    );
};