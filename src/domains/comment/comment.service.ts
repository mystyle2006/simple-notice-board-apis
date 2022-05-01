import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from './dto/create-comment.dto';
import { GetPaginatedCommentDto } from './dto/get-paginated-comment.dto';
import { ReturnPaginatedCommentDto } from './dto/return-paginated-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentCreator } from './implementations/comment-creator';
import { CommentFinder } from './implementations/comment-finder';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentFinder: CommentFinder,
    private readonly commentCreator: CommentCreator,
  ) {}

  async create(input: CreateCommentDto): Promise<void> {
    await this.commentCreator.create(input);
  }

  async findAll(
    postId: string,
    input: GetPaginatedCommentDto,
  ): Promise<ReturnPaginatedCommentDto> {
    return this.commentFinder.findAll(postId, input);
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
