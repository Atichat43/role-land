import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';
import { SoftDeletion, Timestamps } from '../core/base.types';

export abstract class TimestampsEntityColumns implements Timestamps {
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedDate: Date;
}

export abstract class SoftDeletionEntityColumns implements SoftDeletion {
  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn()
  deleteDate?: Date;
}

export abstract class TimestampsAndSoftDeletionEntityColumns
  extends TimestampsEntityColumns
  implements SoftDeletionEntityColumns
{
  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn()
  deleteDate?: Date;
}
