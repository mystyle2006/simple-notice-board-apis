import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { queueDictioanry } from '../../../dictionary/queue.dictioanry';
import { CommonImplementation } from '../../../utils/common-implementation';
import { KeywordAlarm } from '../../../utils/entity/keyword-alarm.entity';
import { sendAlarmLogic } from '../../../utils/logic/send-alarm.logic';
import { PostFinder } from '../implementations/post-finder';

@Processor(queueDictioanry.POST_KEYWORD_ALARM)
export class PostKeywordAlarmConsumer extends CommonImplementation(
  KeywordAlarm,
) {
  constructor(private readonly postFinder: PostFinder) {
    super();
  }

  @Process()
  async transcode(job: Job<unknown>) {
    const { postId } = job.data as { postId: number };
    const post = await this.postFinder.findById(postId);
    const targets = await KeywordAlarm.findGroupByWriter(
      this.repository.createQueryBuilder(),
      post.writer,
    );

    targets.forEach(({ writer, keywords }) =>
      sendAlarmLogic({
        writer,
        keywords,
        compareString: `${post.title}${post.content}`,
        message: `${writer}님에게 ${post.id}번 게시물에 대한 알림을 전송합니다.`,
      }),
    );
  }
}
