export const weakMap = new WeakMap();

/**
 * Function to track API calls for specific endpoints.
 *
 * @param {Object} endpoint - The endpoint object with protocol and name.
 * @throws Will throw an error if the number of queries reaches 5 or more.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high'); // Throw error if count is high
  }
}
