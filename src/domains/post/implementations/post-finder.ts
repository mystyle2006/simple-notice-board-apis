import { Injectable } from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import { GetPaginatedPostDto } from '../dto/get-paginated-post.dto';
import { ReturnPaginatedPostDto } from '../dto/return-paginated-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostFinder extends CommonImplementation(Post) {
  async findById(id: number): Promise<Post> {
    return this.repository.findOne({
      where: {
        id,
        deleted: false,
      },
    });
  }
  async findAll({ limit, page }: GetPaginatedPostDto): Promise<ReturnPaginatedPostDto> {
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
