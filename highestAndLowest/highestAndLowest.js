function highAndLow(numbers){
    let arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }

  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"