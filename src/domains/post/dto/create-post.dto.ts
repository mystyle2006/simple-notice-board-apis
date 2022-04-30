import { PickType } from '@nestjs/mapped-types';

import { Post } from '../entities/post.entity';

export class CreatePostDto extends PickType(Post, [
  'title',
  'writer',
  'password',
  'content',
] as const) {}
