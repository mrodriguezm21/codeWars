function sumTwoSmallestNumbers(numbers) {
  let lowest = Math.min(...numbers);
  numbers.splice(numbers.indexOf(lowest), 1);
  let secondLowest = Math.min(...numbers);
  return lowest + secondLowest;
}
