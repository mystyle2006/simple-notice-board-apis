import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetPaginatedCommentDto } from './dto/get-paginated-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() input: CreateCommentDto): Promise<boolean> {
    await this.commentService.create(input);
    return true;
  }

  @Get(':postId')
  findAll(
    @Param('postId') postId: string,
    @Query() input: GetPaginatedCommentDto,
  ) {
    return this.commentService.findAll(postId, input);
  }
}
