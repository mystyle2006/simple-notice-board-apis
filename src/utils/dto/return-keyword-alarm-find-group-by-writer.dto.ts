import { PickType } from '@nestjs/mapped-types';

import { KeywordAlarm } from '../entity/keyword-alarm.entity';

export class ReturnKeywordAlarmFindGroupByWriterDto extends PickType(
  KeywordAlarm,
  ['writer', 'keywords'] as const,
) {}
