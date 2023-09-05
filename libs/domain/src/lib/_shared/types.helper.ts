import { ISoftDeletionFields, ITimestampFields } from '../_base.types';

export type OmitBaseFields<T> = Omit<
  T,
  keyof ITimestampFields | keyof ISoftDeletionFields
>;
