import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Story {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
