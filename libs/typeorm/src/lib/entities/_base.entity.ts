import { ISoftDeletionFields, ITimestampFields } from '@role-land/core';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// TimestampsEntityColumns: Contains createdDate and updatedDate for tracking entity lifecycle.
export abstract class TimestampsEntityColumns implements ITimestampFields {
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedDate: Date;
}

// SoftDeletionEntityColumns: Includes isDeleted and deletedDate for soft deletion logic.
export abstract class SoftDeletionEntityColumns implements ISoftDeletionFields {
  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn()
  deletedDate: Date;
}

export abstract class TimestampsAndSoftDeletionEntityColumns
  extends TimestampsEntityColumns
  implements SoftDeletionEntityColumns
{
  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn()
  deletedDate: Date;
}
