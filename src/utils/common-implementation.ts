import { Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommonEntity } from './common.entity';

export interface ICommonFinder<T extends CommonEntity> {
  readonly repository: Repository<T>;
}

type Constructor<I> = new (...args: any[]) => I; // Main Point

export function CommonImplementation<T extends CommonEntity>(
  entity: Constructor<T>,
): Type<ICommonFinder<T>> {
  class FinderServiceHost implements ICommonFinder<T> {
    @InjectRepository(entity) public readonly repository: Repository<T>;
  }

  return FinderServiceHost;
}
