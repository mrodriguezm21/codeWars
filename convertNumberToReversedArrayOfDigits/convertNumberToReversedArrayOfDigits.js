function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

digitize(35231);
