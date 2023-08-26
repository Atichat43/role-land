export interface TimestampFields {
  createdDate: Date;
  updatedDate: Date;
}

export interface SoftDeletionFields {
  isDeleted: boolean;
  deletedDate: Date;
}
