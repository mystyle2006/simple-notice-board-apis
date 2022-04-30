import { Injectable } from '@nestjs/common';

import { CommonFinder } from '../../../utils/common-finder';
import { GetPaginatedPostDto } from '../dto/get-paginated-post.dto';
import { ReturnPostDto } from '../dto/return-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostFinder extends CommonFinder(Post) {
  async findAll({ limit, page }: GetPaginatedPostDto): Promise<ReturnPostDto> {
    const [data, totalCount] = await this.repository.findAndCount({
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
