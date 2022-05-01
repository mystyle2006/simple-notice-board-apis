import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { queueDictioanry } from '../../dictionary/queue.dictioanry';
import { KeywordAlarm } from '../../utils/entity/keyword-alarm.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentKeywordAlarmConsumer } from './consumer/comment-keyword-alarm.consumer';
import { Comment } from './entities/comment.entity';
import { CommentCreator } from './implementations/comment-creator';
import { CommentFinder } from './implementations/comment-finder';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, KeywordAlarm]),
    BullModule.registerQueue({
      name: queueDictioanry.COMMENT_KEYWORD_ALARM,
    }),
  ],
  controllers: [CommentController],
  providers: [
    CommentService,
    CommentFinder,
    CommentCreator,
    CommentKeywordAlarmConsumer,
  ],
})
export class CommentModule {}
