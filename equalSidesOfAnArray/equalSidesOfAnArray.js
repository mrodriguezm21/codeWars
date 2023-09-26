function findEvenIndex(arr) {
  let leftSide = [];
  let rightSide = [];
  let leftSum = 0;
  let rightSum = 0;
  for (const [i] of arr.entries()) {
    leftSum = 0;
    rightSum = 0;
    if (i === 0) {
      leftSide = [];
      rightSide = arr.slice(i + 1);
    } else {
      leftSide = arr.slice(0, i);
      rightSide = arr.slice(i + 1);
    }
    leftSide.reduce((p, v) => (leftSum = p + v), 0);
    rightSide.reduce((p, v) => (rightSum = p + v), 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

findEvenIndex([10, -80, 10, 10, 15, 35, 20]);
