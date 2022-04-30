import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { ReturnPostDto } from './dto/return-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostCreator } from './implementations/post-creator';
import { PostFinder } from './implementations/post-finder';
import { PostUpdater } from './implementations/post-updater';

@Injectable()
export class PostService {
  constructor(
    private readonly postFinder: PostFinder,
    private readonly postCreator: PostCreator,
    private readonly postUpdater: PostUpdater,
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

  async update(id: number, input: UpdatePostDto): Promise<void> {
    await this.postUpdater.update(id, input);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
