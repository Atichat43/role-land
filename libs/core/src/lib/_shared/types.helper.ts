import { ISoftDeletionFields, ITimestampFields } from '../domain/_base.types';

export type OmitBaseFields<T> = Omit<
  T,
  keyof ITimestampFields | keyof ISoftDeletionFields
>;
