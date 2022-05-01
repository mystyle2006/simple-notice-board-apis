import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetPaginatedCommentDto } from './dto/get-paginated-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiBody({
    schema: {
      example: {
        writer: '',
        content: '',
        postId: '',
        parentId: '',
      },
    },
  })
  async create(@Body() input: CreateCommentDto): Promise<boolean> {
    await this.commentService.create(input);
    return true;
  }

  @Get(':postId')
  @ApiQuery({
    name: 'limit',
    required: true,
  })
  @ApiQuery({
    name: 'page',
    required: true,
  })
  findAll(
    @Param('postId') postId: string,
    @Query() input: GetPaginatedCommentDto,
  ) {
    return this.commentService.findAll(postId, input);
  }
}
