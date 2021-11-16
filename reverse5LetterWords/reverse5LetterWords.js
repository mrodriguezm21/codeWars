function spinWords(string) {
  let split = string.split(" ");

  console.log(split);
  split.forEach((e, index) => {
    if (e.length >= 5) {
      let reversed = e.split("").reverse().join().replace(/,/g, "");

      split.splice(index, 1, reversed);
      return reversed;
    }
  });
  return split.join().replace(/,/g, " ");
}
