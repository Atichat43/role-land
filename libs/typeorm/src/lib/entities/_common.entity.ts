import { SoftDeletion, Timestamps } from '@role-land/domain';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
