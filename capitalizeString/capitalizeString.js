function toCamelCase(str) {
  let split = str.split(/[-_]/);
  let newString = "";
  newString += split[0].charAt(0) + split[0].slice(1).toLowerCase();

  for (let i = 1; i < split.length; i++) {
    let splited =
      split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase();
    newString += splited;
  }
  console.log(newString);
  return newString;
}
