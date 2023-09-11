import { ISoftDeletionFields, ITimestampFields } from '../core/_base.types';

export type OmitBaseFields<T> = Omit<
  T,
  keyof ITimestampFields | keyof ISoftDeletionFields
>;
