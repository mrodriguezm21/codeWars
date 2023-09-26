function validParentheses(parens) {
  let counter = 0;

  for (const value of parens) {
    if (value === "(") {
      counter++;
    } else {
      counter--;
    }
    if (counter < 0) return false;
  }

  return counter === 0;
}
