import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  Signal,
} from '@angular/core';

type Category = 'Youth' | 'Junior' | 'Open' | 'Senior';
const ageToCategory = (age: number): Category => {
  if (age < 10) return 'Youth';
  else if (age < 18) return 'Junior';
  else if (age < 35) return 'Open';
  return 'Senior';
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe],
  template: `
    {{ fullName() | titlecase }} plays tennis in the {{ category() }} category!!
  `,
  host: {
    class: 'text-xl text-green-800',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  name = input.required<string>();
  lastName = input<string>();
  age = input(15, {
    transform: (value: string) => +value,
  });
  // @Input({ required: true }) name!: string;
  // @Input() lastName?: string;
  // @Input() age?: string;

  // fullName = '';
  fullName = computed(() => `${this.name()} ${this.lastName() ?? ''}`);
  // category: Category = 'Junior';
  category: Signal<Category> = computed(() =>
    ageToCategory(Number(this.age()) ?? 0),
  );

  constructor() {
    effect(() => {
      console.info(`new value: ${this.name()}`);
    });
  }

  // ngOnChanges(): void {
  //   // this.fullName = `${this.name} ${this.lastName ?? ''}`;
  //   this.category = ageToCategory(Number(this.age) ?? 0);
  // }
}
