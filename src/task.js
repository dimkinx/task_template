const findAverage = (array) => {
  if (!array.length) {
    return 0;
  }

  return array
    .reduce((acc, item) => {
      let result = acc;

      result += item;

      return result;
    }, 0) / array.length;
};

// eslint-disable-next-line no-console
console.log(findAverage([1, 1, 1]));

export default findAverage;
