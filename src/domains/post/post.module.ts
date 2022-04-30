import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './entities/post.entity';
import { PostCreator } from './implementations/post-creator';
import { PostFinder } from './implementations/post-finder';
import { PostUpdater } from './implementations/post-updater';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService, PostFinder, PostCreator, PostUpdater],
})
export class PostModule {}
