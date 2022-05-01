import { InjectQueue } from '@nestjs/bull';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Queue } from 'bull';

import { queueDictioanry } from '../../../dictionary/queue.dictioanry';
import { CommonImplementation } from '../../../utils/common-implementation';
import Hasher from '../../../utils/wrapper/hasher';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostCreator extends CommonImplementation(Post) {
  constructor(
    @InjectQueue(queueDictioanry.POST_KEYWORD_ALARM)
    private postKeywordAlarmQueue: Queue,
  ) {
    super();
  }

  async create(input: CreatePostDto): Promise<void> {
    try {
      const hashedPassword = await Hasher.hash(input.password);
      const result = await this.repository.insert({
        ...input,
        password: hashedPassword,
      });

      await this.postKeywordAlarmQueue.add({
        postId: result?.identifiers[0]?.id,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
