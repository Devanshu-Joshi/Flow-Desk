import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from '@core/services/token-service/token-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    const token = tokenService.getToken();

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

                const message = err.error?.message;

                console.error(message);

                // Only logout if token is actually invalid
                if (err.status === 401 && err.error?.code === 'AUTH_TOKEN_INVALID') {
                    tokenService.unAuthorizedAccess(true);
                }
                else {
                    console.error(err);
                }
            } else if (err.status === 403) {
                const message = err.error?.message;
                console.error(message);
                if (err.status === 403 && err.error?.code === 'ACCESS_DENIED') {
                    tokenService.unAuthorizedAccess();
                } else {
                    console.error(err);
                }
            }

            return throwError(() => err);
        })
    );

};