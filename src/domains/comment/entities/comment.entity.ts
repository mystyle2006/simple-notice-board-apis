import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('comment')
export class Comment extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  content: string;

  @Column()
  postId: string;

  @Column()
  writer: string;
}
