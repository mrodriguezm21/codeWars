function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug);
    n++;
  }
  return n;
}

nbYear(1500, 5, 100, 5000); // 15
