import { IsString, IsBoolean, IsOptional, IsNotEmpty, MinLength } from 'class-validator';
import { CreateTodoDto as ICreateTodoDto, UpdateTodoDto as IUpdateTodoDto } from '../interfaces/todo.interface';

export class CreateTodoDto implements ICreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}

export class UpdateTodoDto implements Partial<IUpdateTodoDto> {
  @IsString()
  @IsOptional()
  @MinLength(3)
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}