import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import Hasher from '../../../utils/wrapper/hasher';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostCreator extends CommonImplementation(Post) {
  async create(input: CreatePostDto): Promise<void> {
    try {
      const hashedPassword = await Hasher.hash(input.password);
      await this.repository.insert({
        ...input,
        password: hashedPassword,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
