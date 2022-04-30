import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('post')
export class Post extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  writer: string;

  @Column()
  content: string;

  @Column({ select: false })
  password: string;
}
