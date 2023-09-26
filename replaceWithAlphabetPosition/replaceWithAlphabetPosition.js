function alphabetPosition(text) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let lowered = text.toLocaleLowerCase();
  let positionArray = [];

  for (const value of lowered) {
    if (alphabet.indexOf(value) >= 0) {
      positionArray.push(alphabet.indexOf(value) + 1);
    }
  }
  return positionArray.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
