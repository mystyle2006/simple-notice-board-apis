import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '../common.entity';

@Entity('keyword_alarm')
export class KeywordAlarm extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  writer: string;

  @Column()
  keywords: string;
}
