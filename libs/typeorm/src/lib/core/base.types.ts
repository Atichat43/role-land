export interface Timestamps {
  createdDate: Date;
  updatedDate: Date;
}

export interface SoftDeletion {
  isDeleted: boolean;
  deletedDate?: Date;
}
