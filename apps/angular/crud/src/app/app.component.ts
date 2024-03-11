import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { TodoItemComponent } from './component/todo-item.component';
import { TodoItem } from './model/todo-item.model';
import { ListDataService } from './services/list-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos">
      <app-todo-item [todo]="todo"></app-todo-item>
      <button (click)="delete(todo.id)">Delete</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos!: TodoItem[];

  constructor(
    private listDataService: ListDataService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.listDataService.fetch().subscribe((todos: TodoItem[]) => {
      this.todos = todos;
    });
  }

  delete(id: string) {
    this.listDataService
      .delete(id)
      .pipe(
        tap((result: any) =>
          console.info(`returned from delete ${JSON.stringify(result)}`),
        ),
        switchMap(() => this.listDataService.fetch()),
        tap((todosUpdated: TodoItem[]) =>
          console.info(`fetched: ${JSON.stringify(todosUpdated)}`),
        ),
      )
      .subscribe(
        (todosUpdated: TodoItem[]) => (this.todos = [...todosUpdated]),
      );
  }
}
