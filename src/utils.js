/**
 * Simple array chunking. Works exactly like lodash/chunk
 * chunk([1, 2, 3, 4, 5], 2) => [[1,2],[3,4],[5]]
 * @param {*} arr
 * @param {*} size
 */
export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );

/**
 * Fun with modulos to traverse arrays in a circular way
 * @param {*} nextIndex
 * @param {*} arraySize
 */
export const getCircularIndex = (nextIndex, arraySize) =>
  ((nextIndex % arraySize) + arraySize) % arraySize;
