import { Injectable, Query } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { GetPaginatedPostDto } from './dto/get-paginated-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostFinder } from './implementations/post-finder';

@Injectable()
export class PostService {
  constructor(private readonly postFinder: PostFinder) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll(input: GetPaginatedPostDto) {
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
