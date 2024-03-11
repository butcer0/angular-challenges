import { Component, OnInit } from '@angular/core';
import { ImagePaths } from '../../constants/image-files.constants';
import { CityStore } from '../../data-access';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { City } from '../../model/city.model';
import { DataService } from '../../services/data.service';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      [list]="cities"
      [cardType]="cardType"
      [cardImage]="imagePath"
      customClass="bg-light-yellow"></app-card>
  `,
  standalone: true,
  styles: [
    `
      ::ng-deep .bg-light-yellow {
        background-color: rgba(1, 0.92, 0.016, 0.1);
      }
    `,
  ],
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];
  cardType = CardType.CITY;
  imagePath = ImagePaths.Cities;

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService.initData(CardType.CITY);
    this.store.cities$.subscribe((t) => (this.cities = t));
  }
}
