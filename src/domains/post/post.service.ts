import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { ReturnPostDto } from './dto/return-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostCreator } from './implementations/post-creator';
import { PostFinder } from './implementations/post-finder';

@Injectable()
export class PostService {
  constructor(
    private readonly postFinder: PostFinder,
    private readonly postCreator: PostCreator,
  ) {}

  async create(input: CreatePostDto): Promise<void> {
    await this.postCreator.create(input);
  }

  async findAll(input: GetPaginatedPostDto): Promise<ReturnPostDto> {
    return this.postFinder.findAll(input);
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
