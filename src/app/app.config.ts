import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '@environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { importProvidersFrom } from "@angular/core";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { authInterceptor } from '@core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimations(),
    provideToastr({
      maxOpened: 3,
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      preventDuplicates: true
    }),
    importProvidersFrom([
      NgxDaterangepickerMd.forRoot({
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
      }),
    ]),
  ]
};