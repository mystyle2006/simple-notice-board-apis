import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { CommonImplementation } from '../../../utils/common-implementation';
import Hasher from '../../../utils/wrapper/hasher';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostUpdater extends CommonImplementation(Post) {
  async update(
    id: number,
    { password, ...leftover }: UpdatePostDto,
  ): Promise<void> {
    const post = await this.repository.findOne({
      select: ['password', 'id'],
      where: {
        id,
      },
    });

    const isValid = await Hasher.isMatch(password, post.password);
    if (!isValid) {
      throw new BadRequestException(
        '비밀번호가 일치하지 않아 수정할 수 없습니다.',
      );
    }

    try {
      await this.repository.update(id, leftover);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
