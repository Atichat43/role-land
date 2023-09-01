/**
 * TimestampFields Domain Interface
 * - createdDate: Date *(default: current date time)*
 * - updatedDate: Date *(default: current date time)*
 */
export interface ITimestampFields {
  createdDate: Date;
  updatedDate: Date;
}

/**
 * SoftDeletionFields Domain Interface
 * - isDeleted: boolean *(default: false)*
 * - deletedDate: Date *(default: deleted date time)*
 */
export interface ISoftDeletionFields {
  isDeleted: boolean;
  deletedDate: Date;
}
