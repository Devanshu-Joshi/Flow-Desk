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

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
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