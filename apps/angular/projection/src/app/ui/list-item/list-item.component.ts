import { Component, Input } from '@angular/core';
import { CardType } from '../../model/card.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  standalone: true,
})
export class ListItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() cardType!: CardType;

  constructor(public dataService: DataService) {}

  delete(cardType: CardType, id: number) {
    this.dataService.delete(cardType, id);
  }
}
