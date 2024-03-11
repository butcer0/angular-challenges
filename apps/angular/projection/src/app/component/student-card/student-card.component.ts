import { Component, OnInit } from '@angular/core';
import { ImagePaths } from '../../constants/image-files.constants';
import { StudentStore } from '../../data-access';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { Student } from '../../model/student.model';
import { DataService } from '../../services/data.service';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card
      [list]="students"
      [cardType]="cardType"
      [cardImage]="imagePath"
      customClass="bg-light-green"></app-card>
  `,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-green {
        background-color: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class StudentCardComponent implements OnInit {
  students: Student[] = [];
  cardType = CardType.STUDENT;
  imagePath = ImagePaths.Students;

  constructor(
    private http: FakeHttpService,
    private store: StudentStore,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService.initData(CardType.STUDENT);
    this.store.students$.subscribe((s) => (this.students = s));
  }
}
