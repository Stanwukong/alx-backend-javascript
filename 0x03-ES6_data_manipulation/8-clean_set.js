/**
 * Returns a string of all the set values that start with a specific string (startString).
 * Only appends the part of the value that comes after the startString, with values separat
 * ed by '-'.
 *
 * @param {Set} set - The set of values to filter.
 * @param {String} startString - The string to match the beginning of the set values.
 * @returns {String} - A hyphen-separated string of filtered values.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
