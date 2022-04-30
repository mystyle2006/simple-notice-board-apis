import { Type } from '@nestjs/common';

import { PageInfo } from './page-info';

export interface IPaginatedClass<T> extends PageInfo {
  data: T[];
}

export function PaginatedClass<T>(classRef: Type<T>): Type<IPaginatedClass<T>> {
  abstract class PaginatedType<Type> extends PageInfo {
    data: Type[];
  }

  return PaginatedType as Type<IPaginatedClass<T>>;
}
