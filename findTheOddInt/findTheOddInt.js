function findOdd(A) {
  let count = 0;
  let odds = [];
  for (const i of A) {
    count = 0;
    for (const j of A) {
      if (i === j) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds[0];
}

