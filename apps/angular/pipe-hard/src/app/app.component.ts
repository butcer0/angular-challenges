import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Person } from './model/person.model';
import { PersonUtilFns, PersonUtils } from './person.utils';
import { PersonUtilityPipe } from './pipes/person-utility.pipe';

@Component({
  standalone: true,
  imports: [NgFor, PersonUtilityPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let activity of activities">
      {{ activity.name }} :
      <div
        *ngFor="let person of persons; let index = index; let isFirst = first">
        {{ person | personUtility: PersonUtilFns.ShowName : index }}
        {{
          person
            | personUtility
              : PersonUtilFns.IsAllowed
              : 0
              : isFirst
              : activity.minimumAge
        }}
      </div>
    </div>
  `,
})
export class AppComponent {
  PersonUtilFns = PersonUtilFns;

  persons: Person[] = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  activities = [
    { name: 'biking', minimumAge: 12 },
    { name: 'hiking', minimumAge: 25 },
    { name: 'dancing', minimumAge: 1 },
  ];

  showName = PersonUtils.showName;

  isAllowed = PersonUtils.isAllowed;
}
