import { PickType } from '@nestjs/mapped-types';

import { PageInfo } from '../pagination/page-info';

export class GetPaginatedDto extends PickType(PageInfo, [
  'page',
  'limit',
] as const) {}
