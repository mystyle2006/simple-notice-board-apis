import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CommonEntity } from '../../../utils/common.entity';

@Entity('comment')
export class Comment extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  parentId: number;

  @Column()
  content: string;

  @Column()
  @IsNotEmpty()
  postId: string;

  @Column()
  @IsNotEmpty()
  writer: string;

  @ManyToOne(() => Comment, (parent) => parent.comments)
  @JoinColumn({ name: 'parent_id' })
  parent: Comment;

  @OneToMany(() => Comment, (comments) => comments.parent)
  comments: Comment[];
}
