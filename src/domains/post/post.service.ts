import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { ReturnPostDto } from './dto/return-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostCreator } from './implementations/post-creator';
import { PostDeleter } from './implementations/post-deleter';
import { PostFinder } from './implementations/post-finder';
import { PostUpdater } from './implementations/post-updater';

@Injectable()
export class PostService {
  constructor(
    private readonly postFinder: PostFinder,
    private readonly postCreator: PostCreator,
    private readonly postUpdater: PostUpdater,
    private readonly postDeleter: PostDeleter,
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

  async remove(id: number, input: DeletePostDto): Promise<void> {
    await this.postDeleter.remove(id, input);
  }
}
