import { Task } from '@prisma/client';
import { CreateTaskInput } from './dto/createTask.input';
import { Task as TaskModel } from './models/task.model';
import { TaskService } from './task.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateTaskInput } from './dto/updateTask.input';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // @Query()デコレータを使用して、getTasksメソッドをGraphQLのクエリとして公開する。
  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  // @Mutation()デコレータを使用して、createTaskメソッドをGraphQLのミューテーションとして公開する。
  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskInput);
  }

  @Mutation(() => TaskModel)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return await this.taskService.deleteTask(id);
  }
}
