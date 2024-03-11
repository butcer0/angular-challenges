import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardType } from '../../model/card.model';
import { DataService } from '../../services/data.service';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: `./card.component.html`,
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() cardType!: CardType;
  @Input() customClass = '';
  @Input() cardImage!: string;

  CardType = CardType;

  constructor(public dataService: DataService) {}
}
