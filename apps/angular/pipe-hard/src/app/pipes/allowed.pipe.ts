import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'allowed',
})
export class AllowedPipe implements PipeTransform {
  transform(age: number, isFirst: boolean): string {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > 25 ? 'allowed' : 'declined';
    }
  }
}
