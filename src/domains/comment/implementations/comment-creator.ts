import { InjectQueue } from '@nestjs/bull';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Queue } from 'bull';

import { queueDictioanry } from '../../../dictionary/queue.dictioanry';
import { CommonImplementation } from '../../../utils/common-implementation';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentCreator extends CommonImplementation(Comment) {
  constructor(
    @InjectQueue(queueDictioanry.COMMENT_KEYWORD_ALARM)
    private commentKeywordAlarmQueue: Queue,
  ) {
    super();
  }
  async create(input: CreateCommentDto): Promise<void> {
    try {
      const result = await this.repository.insert(input);

      await this.commentKeywordAlarmQueue.add({
        commentId: result?.identifiers[0]?.id,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
