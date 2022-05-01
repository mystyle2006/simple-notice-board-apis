import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';

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

  async findAll({
    keyword,
    limit,
    page,
  }: GetPaginatedPostDto): Promise<ReturnPaginatedPostDto> {
    const commonWhere = {
      deleted: false,
    };

    const keywordWhere = keyword
      ? [
          {
            ...commonWhere,
            writer: Like(`%${keyword}%`),
          },
          {
            ...commonWhere,
            title: Like(`%${keyword}%`),
          },
        ]
      : commonWhere;

    const [data, totalCount] = await this.repository.findAndCount({
      where: keywordWhere,
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
