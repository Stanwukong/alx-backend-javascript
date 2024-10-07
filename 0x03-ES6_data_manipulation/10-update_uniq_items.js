/**
 * Updates a map of items, changing the quantity of items with a quantity of 1 to 100.
 *
 * @param {Map} map - The map containing items and their quantities.
 * @throws Will throw an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
