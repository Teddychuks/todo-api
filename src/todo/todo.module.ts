import { Module } from '@nestjs/common';
import { TodoController } from './todo.contoller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}