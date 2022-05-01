import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentCreator extends CommonImplementation(Comment) {
  async create(input: CreateCommentDto): Promise<void> {
    try {
      await this.repository.insert(input);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
