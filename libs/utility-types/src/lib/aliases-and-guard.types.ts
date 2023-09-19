// https://github.com/piotrwitek/utility-types
/**
 * Falsy
 * @desc Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined | false;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Falsy>;
 */
export type Falsy = false | '' | 0 | null | undefined;

/**
 * Tests for Falsy by simply applying negation `!` to the tested `val`.
 *
 * The value is mostly in added type-information and explicity,
 * but in case of this simple type much the same can often be archived by just using negation `!`:
 * @example
 *   const consumer = (value: boolean | Falsy) => {
 *     if (!value) {
 *         return ;
 *     }
 *     type newType = typeof value; // === true
 *     // do stuff
 *   };
 */
export const isFalsy = (val: unknown): val is Falsy => !val;

/**
 * Nullish
 * @desc Type representing [nullish values][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing] in TypeScript: `null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Nullish>;
 */
export type Nullish = null | undefined;

/**
 * Tests for Nullish by simply comparing `val` for equality with `null`.
 * @example
 *   const consumer = (param: Nullish | string): string => {
 *     if (isNullish(param)) {
 *       // typeof param === Nullish
 *       return String(param) + ' was Nullish';
 *     }
 *     // typeof param === string
 *     return param.toString();
 *   };
 */
export const isNullish = (val: unknown): val is Nullish => val == null;
