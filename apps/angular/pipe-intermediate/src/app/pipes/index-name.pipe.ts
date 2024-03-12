import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'indexName',
})
export class IndexNamePipe implements PipeTransform {
  transform(name: string, index: number, extraText: string): string {
    const extraTextFormatted = extraText ? ` ${extraText}` : '';
    return `${name} - ${index}${extraTextFormatted}`;
  }
}
