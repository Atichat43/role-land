import { ISoftDeletionFields, ITimestampFields } from '../_base.types';

export type OmitBaseFields<T> = Omit<
  T,
  'id' | keyof ITimestampFields | keyof ISoftDeletionFields
>;
