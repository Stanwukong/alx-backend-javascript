/**
 * Checks if all elements of an array exist in a set.
 *
 * @param {Set} set - The set to check for elements.
 * @param {Array} arr - The array containing the values to be checked.
 * @returns {boolean} - Returns true if all elements in the array exist in the set, otherwise false.
 */
export default function hasValuesFromArray(set, arr) {
    return arr.every((value) => set.has(value));
  }
  