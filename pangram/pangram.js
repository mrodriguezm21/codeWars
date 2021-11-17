function isPangram(string) {
  let regExp = /([a-z])(?!.*\1)/ig;

  if (string.match(regExp).length === 26) {
    return true;
  }
  return false;
}
