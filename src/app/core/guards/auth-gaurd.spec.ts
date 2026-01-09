import { TestBed } from '@angular/core/testing';
import {
    Router,
    ActivatedRouteSnapshot,
    GuardResult
} from '@angular/router';
import { BehaviorSubject, firstValueFrom, isObservable } from 'rxjs';

import { authGuard } from './auth-guard';
import { AuthService } from '../services/auth';

/* =======================
   MOCK SERVICES
   ======================= */

class MockAuthService {
    authReady$ = new BehaviorSubject<boolean>(false);
    isAuthenticatedSync = jasmine.createSpy('isAuthenticatedSync');
}

class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

/* =======================
   TEST SUITE
   ======================= */

describe('authGuard', () => {
    let auth: MockAuthService;
    let router: MockRouter;

    const runGuard = async (routeData: any): Promise<GuardResult> => {
        const route = { data: routeData } as ActivatedRouteSnapshot;

        const result = TestBed.runInInjectionContext(() =>
            authGuard(route, null as any)
        );

        if (isObservable(result)) {
            return firstValueFrom(result);
        }

        return result;
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useClass: MockAuthService },
                { provide: Router, useClass: MockRouter },
            ],
        });

        auth = TestBed.inject(AuthService) as unknown as MockAuthService;
        router = TestBed.inject(Router) as unknown as MockRouter;
    });

    it('allows access when authenticated', async () => {
        auth.isAuthenticatedSync.and.returnValue(true);

        const promise = runGuard({ requiresAuth: true });
        auth.authReady$.next(true);

        const result = await promise;

        expect(result).toBeTrue();
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('redirects to login when unauthenticated', async () => {
        auth.isAuthenticatedSync.and.returnValue(false);

        const promise = runGuard({ requiresAuth: true });
        auth.authReady$.next(true);

        const result = await promise;

        expect(result).toBeFalse();
        expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });

    it('redirects logged-in users from guestOnly routes', async () => {
        auth.isAuthenticatedSync.and.returnValue(true);

        const promise = runGuard({ guestOnly: true });
        auth.authReady$.next(true);

        const result = await promise;

        expect(result).toBeFalse();
        expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    });

    it('waits until authReady$ emits true', async () => {
        auth.isAuthenticatedSync.and.returnValue(true);

        let resolved = false;

        const promise = runGuard({ requiresAuth: true }).then(() => {
            resolved = true;
        });

        expect(resolved).toBeFalse();

        auth.authReady$.next(true);
        await promise;

        expect(resolved).toBeTrue();
    });
});