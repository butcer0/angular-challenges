import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'indexName',
})
export class IndexNamePipe implements PipeTransform {
  transform(name: string, index: number): string {
    return `${name} - ${index}`;
  }
}
