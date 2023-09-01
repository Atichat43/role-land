// --- TimestampFields Interface ---
/**
 * @desc Holds the timestamp fields for other domain models.
 * @attributes
 * - createdDate: Date, default current date time
 * - updatedDate: Date, default current date time
 */
export interface ITimestampFields {
  createdDate: Date;
  updatedDate: Date;
}

// --- Soft Deletion Fields Interface ---
/**
 * @desc Holds the common soft deletion-related domain information.
 * @attributes
 * - isDeleted: Boolean, default false
 * - deletedDate: Date, default deleted date time
 */
export interface ISoftDeletionFields {
  isDeleted: boolean;
  deletedDate: Date;
}
