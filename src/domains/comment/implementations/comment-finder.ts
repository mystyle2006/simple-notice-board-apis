import { Injectable } from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import { GetPaginatedCommentDto } from '../dto/get-paginated-comment.dto';
import { ReturnPaginatedCommentDto } from '../dto/return-paginated-comment.dto';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentFinder extends CommonImplementation(Comment) {
  async findAll(
    postId: string,
    { limit, page }: GetPaginatedCommentDto,
  ): Promise<ReturnPaginatedCommentDto> {
    const [data, totalCount] = await this.repository.findAndCount({
      where: {
        postId,
        deleted: false,
      },
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    return {
      totalCount,
      limit,
      page,
      data,
    };
  }
}
