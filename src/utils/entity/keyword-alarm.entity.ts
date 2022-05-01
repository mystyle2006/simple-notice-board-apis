import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  SelectQueryBuilder,
} from 'typeorm';

import { CommonEntity } from '../common.entity';
import { ReturnKeywordAlarmFindGroupByWriterDto } from '../dto/return-keyword-alarm-find-group-by-writer.dto';

@Entity('keyword_alarm')
export class KeywordAlarm extends CommonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  writer: string;

  @Column()
  keywords: string;

  static findGroupByWriter(
    qb: SelectQueryBuilder<KeywordAlarm>,
    writer: string,
  ): Promise<ReturnKeywordAlarmFindGroupByWriterDto[]> {
    return qb
      .select(['writer', 'group_concat(keywords) as keywords'])
      .where('KeywordAlarm.deleted is false')
      .andWhere(`KeywordAlarm.writer != :writer`, { writer })
      .groupBy('KeywordAlarm.writer')
      .execute();
  }
}
