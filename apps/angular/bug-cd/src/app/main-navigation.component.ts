import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FakeServiceService } from './fake.service';

interface MenuItem {
  path: string;
  name: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  template: `
    <ng-container *ngFor="let menu of menus">
      <a
        class="rounded-md border px-4 py-2"
        [routerLink]="menu.path"
        routerLinkActive="isSelected">
        {{ menu.name }}
      </a>
    </ng-container>
  `,
  styles: [
    `
      .isSelected {
        @apply bg-gray-600 text-white;
      }
    `,
  ],
  host: {
    class: 'flex flex-col p-2 gap-2',
  },
})
export class NavigationComponent {
  @Input() menus!: MenuItem[];
}

@Component({
  standalone: true,
  imports: [NavigationComponent, NgIf, AsyncPipe, MatProgressSpinner],
  template: `
    <ng-container *ngIf="menus$ | async as menus">
      <ng-container *ngIf="menus; else noInfo">
        <app-nav [menus]="menus" />
      </ng-container>
    </ng-container>

    <ng-template #noInfo>
      <h3>No Info</h3>
      <mat-spinner></mat-spinner>
    </ng-template>
  `,
  host: {},
})
export class MainNavigationComponent {
  private fakeBackend = inject(FakeServiceService);

  public menus$: Observable<MenuItem[]> = this.fakeBackend
    .getInfoFromBackend()
    .pipe(map((info: string) => this.getMenu(info)));

  getMenu(prop: string): MenuItem[] {
    return [
      { path: '/foo', name: `Foo ${prop}` },
      { path: '/bar', name: `Bar ${prop}` },
    ];
  }
}
