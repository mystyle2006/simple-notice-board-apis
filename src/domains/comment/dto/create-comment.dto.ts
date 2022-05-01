import { PickType } from '@nestjs/mapped-types';

import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends PickType(Comment, [
  'postId',
  'writer',
  'content',
]) {}
