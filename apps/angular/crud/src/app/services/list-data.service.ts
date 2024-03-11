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

  fetch(): Observable<TodoItem[]> {
    console.info('fetching all');
    return this.http.get<TodoItem[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
  }

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
    const uri: string = `https://jsonplaceholder.typicode.com/todos/${id}`;
    console.info(`calling delete: ${uri}`);
    return this.http.delete<TodoItem[]>(uri);
  }
}
