import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { TodoItem } from '../model/todo-item.model';
import { ListDataService } from '../services/list-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
  imports: [NgIf, MatProgressSpinner],
  standalone: true,
})
export class TodoItemComponent {
  @Input() todo!: TodoItem;
  updating: boolean;

  constructor(public listDataService: ListDataService) {
    this.updating = false;
  }

  update(todo: TodoItem) {
    this.updating = true;

    this.listDataService.update(todo).subscribe((todoUpdated: TodoItem) => {
      this.todo = todoUpdated;
      this.updating = false;
    });
  }
}
