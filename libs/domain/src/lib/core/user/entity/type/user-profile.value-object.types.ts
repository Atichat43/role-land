// NOTE:
// Value objects are immutable and are identified by their properties.
// They are not identified by an id field.

// --- Profile (Value Object) Interface ---
/**
 * @desc Holds the profile-related domain information.
 * @attributes
 * - bio: String, max 1000 characters, can be empty
 * - interests: Array of strings
 */
export interface IUserProfile {
  bio: string;
  interests: string[];
}
