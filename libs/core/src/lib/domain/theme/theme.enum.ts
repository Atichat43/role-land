// --- Theme Key Structuring Convention ---
/**
 * @desc Theme keys adhere to a structured convention: "team_key:theme_key".
 * This convention ensures:
 * - Unique identification of themes within the platform.
 * - Consistent key structure, facilitating easier categorization and lookup.
 * - Simplified integration with other components, such as roles, that rely on theme keys.
 *
 * @example
 * For the Software Development theme, the key is:
 * "role_land:sd"
 */

// --- Theme Key Enum ---
/**
 * @desc Enum representing the distinct themes.
 * @values
 * - SoftwareDevelopment: Theme key for the software development theme.
 * - Education: Theme key for the education theme.
 * - Werewolf: Theme key for the werewolf theme.
 */
export enum EThemeKey {
  SoftwareDevelopment = 'role_land:sd',
  Education = 'role_land:edu',
  Werewolf = 'role_land:werewolf',
}
