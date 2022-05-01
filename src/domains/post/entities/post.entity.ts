import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('post')
export class Post extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  writer: string;

  @Column()
  content: string;

  @Column({ select: false })
  @IsNotEmpty()
  password: string;
}
