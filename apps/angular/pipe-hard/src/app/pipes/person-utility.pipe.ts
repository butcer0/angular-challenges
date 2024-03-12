import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonUtilFns, PersonUtils } from '../person.utils';

@Pipe({
  standalone: true,
  name: 'personUtility',
})
export class PersonUtilityPipe implements PipeTransform {
  transform(
    person: Person,
    fnName: PersonUtilFns,
    index: number,
    isFirst: boolean = false,
    activityAge: number = 0,
  ): string {
    switch (fnName) {
      case PersonUtilFns.ShowName:
        return PersonUtils.showName(person.name, index);
      case PersonUtilFns.IsAllowed:
        return PersonUtils.isAllowed(person.age, isFirst, activityAge);
      default:
        return 'Function not found';
    }
  }
}
