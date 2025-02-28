// todo-api/src/todo/interfaces/todo.interface.ts
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoList {
  todos: Todo[];
}

export interface TodoById {
  id: number;
}

export interface CreateTodoDto {
  title: string;
  description: string;
  completed?: boolean;
}

export interface UpdateTodoDto {
  id: number;
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface TodoService {
  findAll(data: {}): Observable<TodoList>;
  findOne(data: TodoById): Observable<Todo>;
  create(data: CreateTodoDto): Observable<Todo>;
  update(data: UpdateTodoDto): Observable<Todo>;
  remove(data: TodoById): Observable<{}>;
}