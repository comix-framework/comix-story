import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StoriesService } from './stories.service';
import { Story } from './entities/story.entity';
import { CreateStoryInput } from './dto/create-story.input';
import { UpdateStoryInput } from './dto/update-story.input';

@Resolver(() => Story)
export class StoriesResolver {
  constructor(private readonly storiesService: StoriesService) {}

  @Mutation(() => Story)
  createStory(@Args('createStoryInput') createStoryInput: CreateStoryInput) {
    return this.storiesService.create(createStoryInput);
  }

  @Query(() => [Story], { name: 'stories' })
  findAll() {
    return this.storiesService.findAll();
  }

  @Query(() => Story, { name: 'story' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storiesService.findOne(id);
  }

  @Mutation(() => Story)
  updateStory(@Args('updateStoryInput') updateStoryInput: UpdateStoryInput) {
    return this.storiesService.update(updateStoryInput.id, updateStoryInput);
  }

  @Mutation(() => Story)
  removeStory(@Args('id', { type: () => Int }) id: number) {
    return this.storiesService.remove(id);
  }
}
