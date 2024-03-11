import { Injectable } from '@angular/core';
import { CityStore, StudentStore, TeacherStore } from '../data-access';
import {
  FakeHttpService,
  randStudent,
  randTeacher,
  randomCity,
} from '../data-access/fake-http.service';
import { CardType } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private teacherStore: TeacherStore,
    private studentStore: StudentStore,
    private cityStore: CityStore,
    private http: FakeHttpService,
  ) {}

  initData(cardType: CardType) {
    switch (cardType) {
      case CardType.CITY:
        this.http.fetchCities$.subscribe((t) => this.cityStore.addAll(t));
        break;
      case CardType.STUDENT:
        this.http.fetchStudents$.subscribe((t) => this.studentStore.addAll(t));
        break;
      case CardType.TEACHER:
        this.http.fetchTeachers$.subscribe((t) => this.teacherStore.addAll(t));
        break;
    }
  }

  addNewItem(cardType: CardType) {
    switch (cardType) {
      case CardType.CITY:
        this.cityStore.addOne(randomCity());
        break;
      case CardType.STUDENT:
        this.studentStore.addOne(randStudent());
        break;
      case CardType.TEACHER:
        this.teacherStore.addOne(randTeacher());
        break;
    }
  }

  delete(cardType: CardType, id: number) {
    switch (cardType) {
      case CardType.CITY:
        this.cityStore.deleteOne(id);
        break;
      case CardType.STUDENT:
        this.studentStore.deleteOne(id);
        break;
      case CardType.TEACHER:
        this.teacherStore.deleteOne(id);
        break;
    }
  }
}
