/**
 * TimestampFields Domain Interface
 * - createdDate: Date *(default: current date time)*
 * - updatedDate: Date *(default: current date time)*
 */
export interface TimestampFields {
  createdDate: Date;
  updatedDate: Date;
}

/**
 * SoftDeletionFields Domain Interface
 * - isDeleted: boolean *(default: false)*
 * - deletedDate: Date *(default: deleted date time)*
 */
export interface SoftDeletionFields {
  isDeleted: boolean;
  deletedDate: Date;
}
