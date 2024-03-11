import { Component, OnInit } from '@angular/core';
import { ImagePaths } from '../../constants/image-files.constants';
import { TeacherStore } from '../../data-access';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { Teacher } from '../../model/teacher.model';
import { DataService } from '../../services/data.service';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card
      [list]="teachers"
      [cardType]="cardType"
      [cardImage]="imagePath"
      customClass="bg-light-red"></app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];
  cardType = CardType.TEACHER;
  imagePath = ImagePaths.Teachers;

  constructor(
    private http: FakeHttpService,
    private store: TeacherStore,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService.initData(CardType.TEACHER);
    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }
}
