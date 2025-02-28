import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { Observable, firstValueFrom } from 'rxjs';
import { 
  Todo, 
  TodoList, 
  TodoService as ITodoService, 
  CreateTodoDto, 
  UpdateTodoDto 
} from './interfaces/todo.interface';

@Injectable()
export class TodoService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;
  
  private todoService: ITodoService;

  onModuleInit() {
    console.log(`Attempting to connect to gRPC service at: ${process.env.GRPC_URL}`);
    this.todoService = this.client.getService<ITodoService>('TodoService');
  }

  async findAll(): Promise<Todo[]> {
    const response = await firstValueFrom(this.todoService.findAll({}) as Observable<TodoList>);
    return response.todos;
  }

  async findOne(id: number): Promise<Todo> {
    return firstValueFrom(this.todoService.findOne({ id }) as Observable<Todo>);
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return firstValueFrom(this.todoService.create(createTodoDto) as Observable<Todo>);
  }

  async update(updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return firstValueFrom(this.todoService.update(updateTodoDto) as Observable<Todo>);
  }

  async remove(id: number): Promise<void> {
    await firstValueFrom(this.todoService.remove({ id }) as Observable<{}>);
  }
}