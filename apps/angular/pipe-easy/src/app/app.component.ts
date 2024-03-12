import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IndexNamePipe } from './pipes/index-name.pipe';

@Component({
  standalone: true,
  imports: [NgFor, IndexNamePipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | indexName: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];

  heavyComputation(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
