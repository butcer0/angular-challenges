import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './component/todo-item.component';
import { TodoItem } from './model/todo-item.model';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos: TodoItem[]) => {
        this.todos = todos;
      });
  }

  delete(id: string) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // .subscribe((todosUpdated: TodoItem[]) => {
    //   this.todos = [...todosUpdated];
    // });
  }
}
