const getPoints = (score) => {
  const [x, y] = score.split(':');

  if (x > y) {
    return 3;
  }

  if (x < y) {
    return 0;
  }

  return 1;
};

const task = (array) => array.reduce((acc, score) => acc + getPoints(score), 0);

// eslint-disable-next-line no-console
console.log(task(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:5']));

export default task;
