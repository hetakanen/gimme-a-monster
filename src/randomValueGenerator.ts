/**
 * @param values
 * @returns Random value from @values using Math.random
 */
export const getRandomValue = (values: Array<string>) => {
  return values[Math.floor(Math.random() * (values.length))];
};

/**
 * @param max
 * @returns Get value between @max and 0
 */
export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};
