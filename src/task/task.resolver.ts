import { Task } from './models/task.model';
import { TaskService } from './task.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  // @Query()デコレータを使用して、getTasksメソッドをGraphQLのクエリとして公開する。
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.TaskService.getTasks();
  }

  // @Mutation()デコレータを使用して、createTaskメソッドをGraphQLのミューテーションとして公開する。
  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('dueDate') dueDate: string,
    @Args('description', { nullable: true }) description: string,
  ): Task {
    return this.TaskService.createTask(name, dueDate, description);
  }
}
