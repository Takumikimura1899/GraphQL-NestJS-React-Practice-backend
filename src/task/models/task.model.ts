import { Field, Int, ObjectType } from '@nestjs/graphql';

// modelからgraphqlSchemaを生成するために、@ObjectType()デコレータを使用する。
@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true })
  description: string;
}
