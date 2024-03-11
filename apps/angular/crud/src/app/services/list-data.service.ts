import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Observable } from 'rxjs';
import { TodoItem } from '../model/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class ListDataService {
  constructor(private http: HttpClient) {}

  update(todo: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify({
        todo: todo.id,
        title: randText(),
        body: todo.body,
        userId: todo.userId,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }

  delete(id: string) {
    return this.http;
  }
}
