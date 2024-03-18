import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DEFAULT_TIMER, TWO_TIMER } from './data';
import { TIMER_INTERVAL } from './injection-tokens/timer-interval';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'video' },
      {
        path: 'video',
        loadComponent: () => import('./video.component'),
        providers: [{ provide: TIMER_INTERVAL, useValue: DEFAULT_TIMER }],
      },
      {
        path: 'phone',
        loadComponent: () => import('./phone.component'),
        providers: [{ provide: TIMER_INTERVAL, useValue: TWO_TIMER }],
      },
    ]),
  ],
};
