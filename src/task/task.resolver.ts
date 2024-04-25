import { Task } from './models/task.model';
import { TaskService } from './task.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}

  // @Query()デコレータを使用して、getTasksメソッドをGraphQLのクエリとして公開する。
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.TaskService.getTasks();
  }
}
