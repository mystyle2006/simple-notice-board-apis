import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

const CURRENT_TIMESTAMP = 'CURRENT_TIMESTAMP(6)';

export abstract class CommonEntity {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => CURRENT_TIMESTAMP,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => CURRENT_TIMESTAMP,
    onUpdate: CURRENT_TIMESTAMP,
  })
  updatedAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({ type: 'tinyint', default: 0 })
  deleted: boolean;
}
