import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { ReturnPostDto } from './dto/return-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() input: CreatePostDto): Promise<boolean> {
    await this.postService.create(input);
    return true;
  }

  @Get()
  async findAll(@Query() input: GetPaginatedPostDto): Promise<ReturnPostDto> {
    return this.postService.findAll(input);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() input: UpdatePostDto,
  ): Promise<boolean> {
    await this.postService.update(+id, input);
    return true;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
