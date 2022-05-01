import {BadRequestException, Injectable, InternalServerErrorException} from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import Hasher from '../../../utils/wrapper/hasher';
import { DeletePostDto } from '../dto/delete-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostDeleter extends CommonImplementation(Post) {
  async remove(id: number, { password }: DeletePostDto): Promise<void> {
    const post = await this.repository.findOne({
      select: ['password', 'id'],
      where: {
        id,
      },
    });

    const isValid = await Hasher.isMatch(password, post.password);
    if (!isValid) {
      throw new BadRequestException(
        '비밀번호가 일치하지 않아 삭제할 수 없습니다.',
      );
    }

    try {
      await this.repository.update(id, {
        deleted: true,
        deletedAt: new Date(),
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
