import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { ReturnPaginatedPostDto } from './dto/return-paginated-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiBody({
    schema: {
      example: {
        writer: '',
        content: '',
        title: '',
        password: '',
      },
    },
  })
  async create(@Body() input: CreatePostDto): Promise<boolean> {
    await this.postService.create(input);
    return true;
  }

  @Get()
  @ApiQuery({
    name: 'limit',
    required: true,
  })
  @ApiQuery({
    name: 'page',
    required: true,
  })
  @ApiQuery({
    name: 'keyword',
    required: false,
  })
  async findAll(
    @Query() input: GetPaginatedPostDto,
  ): Promise<ReturnPaginatedPostDto> {
    return this.postService.findAll(input);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({
    schema: {
      example: {
        writer: '',
        content: '',
        title: '',
        password: '',
      },
    },
  })
  async update(
    @Param('id') id: string,
    @Body() input: UpdatePostDto,
  ): Promise<boolean> {
    await this.postService.update(+id, input);
    return true;
  }

  @Put('delete/:id')
  @ApiBody({
    schema: {
      example: {
        password: '',
      },
    },
  })
  async remove(
    @Param('id') id: string,
    @Body() input: DeletePostDto,
  ): Promise<boolean> {
    await this.postService.remove(+id, input);
    return true;
  }
}
