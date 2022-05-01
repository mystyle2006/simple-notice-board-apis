import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { queueDictioanry } from '../../../dictionary/queue.dictioanry';
import { CommonImplementation } from '../../../utils/common-implementation';
import { KeywordAlarm } from '../../../utils/entity/keyword-alarm.entity';
import { sendAlarmLogic } from '../../../utils/logic/send-alarm.logic';
import { CommentFinder } from '../implementations/comment-finder';

@Processor(queueDictioanry.COMMENT_KEYWORD_ALARM)
export class CommentKeywordAlarmConsumer extends CommonImplementation(
  KeywordAlarm,
) {
  constructor(private readonly commentFinder: CommentFinder) {
    super();
  }

  @Process()
  async transcode(job: Job<unknown>) {
    const { commentId } = job.data as { commentId: number };
    const comment = await this.commentFinder.findById(commentId);
    const targets = await KeywordAlarm.findGroupByWriter(
      this.repository.createQueryBuilder(),
      comment.writer,
    );

    targets.forEach(({ writer, keywords }) =>
      sendAlarmLogic({
        writer,
        keywords,
        compareString: `${comment.content}`,
        message: `${writer}님에게 ${comment.postId}번 게시물에 새로운 댓글에 대한 알림을 전송합니다.`,
      }),
    );
  }
}
