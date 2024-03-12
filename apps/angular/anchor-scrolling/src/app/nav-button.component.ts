/* eslint-disable @angular-eslint/component-selector */
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'nav-button',
  standalone: true,
  template: `
    <a *ngIf="routerLink; else hrefLink" [routerLink]="routerLink">
      <ng-content></ng-content>
    </a>
    <ng-template #hrefLink>
      <a [href]="href">
        <ng-content></ng-content>
      </a>
    </ng-template>
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
  imports: [RouterLink, NgIf],
})
export class NavButtonComponent {
  @Input() href?: string = '';
  @Input() routerLink?: string = '';
}
