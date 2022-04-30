import { Injectable } from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import { GetPaginatedPostDto } from '../dto/get-paginated-post.dto';
import { ReturnPostDto } from '../dto/return-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostFinder extends CommonImplementation(Post) {
  async findAll({ limit, page }: GetPaginatedPostDto): Promise<ReturnPostDto> {
    const [data, totalCount] = await this.repository.findAndCount({
      where: {
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
