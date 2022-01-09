/**
 * @param values
 * @returns Random value from @values using Math.random
 */
export const getRandomValue = (values: Array<string>) => {
  return values[Math.floor(Math.random() * values.length)];
};

/**
 * @param max
 * @param min
 * @returns Get value between @max and @min
 */
export const getRandomNumber = (max: number, min: number = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
