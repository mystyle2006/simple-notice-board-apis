import { PickType } from '@nestjs/mapped-types';

import { Post } from '../entities/post.entity';

export class DeletePostDto extends PickType(Post, ['password'] as const) {}
