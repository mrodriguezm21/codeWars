const blankToCamelCase = (str) => {
  let arr = str.split(/[-_, ]/);
  let newArr = [];
  for (const i of arr) {
    newArr.push(i.charAt(0).toUpperCase() + i.slice(1));
  }
  let newStr = newArr.join("");
  console.log(newArr.join("").charAt(0).toLowerCase() + newStr.slice(1));
};

blankToCamelCase("Your order, please")