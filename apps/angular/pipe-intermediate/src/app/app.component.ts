import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AllowedPipe } from './pipes/allowed.pipe';
import { IndexNamePipe } from './pipes/index-name.pipe';

@Component({
  standalone: true,
  imports: [NgFor, IndexNamePipe, AllowedPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index; let isFirst = first">
      {{ person.name | indexName: index : (person.age | allowed: isFirst) }}
    </div>
  `,
})
export class AppComponent {
  persons = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];
}
