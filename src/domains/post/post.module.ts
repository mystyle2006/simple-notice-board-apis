import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { queueDictioanry } from '../../dictionary/queue.dictioanry';
import { KeywordAlarm } from '../../utils/entity/keyword-alarm.entity';
import { PostKeywordAlarmConsumer } from './consumer/post-keyword-alarm.consumer';
import { Post } from './entities/post.entity';
import { PostCreator } from './implementations/post-creator';
import { PostDeleter } from './implementations/post-deleter';
import { PostFinder } from './implementations/post-finder';
import { PostUpdater } from './implementations/post-updater';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, KeywordAlarm]),
    BullModule.registerQueue({
      name: queueDictioanry.POST_KEYWORD_ALARM,
    }),
  ],
  controllers: [PostController],
  providers: [
    PostService,
    PostFinder,
    PostCreator,
    PostUpdater,
    PostDeleter,
    PostKeywordAlarmConsumer,
  ],
})
export class PostModule {}
