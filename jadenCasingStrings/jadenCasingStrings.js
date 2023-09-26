String.prototype.toJadenCase = function () {
  let splited = this.split(" ");
  let toJoin = splited.map((x) => {
    return x.charAt(0).toUpperCase() + x.slice(1);
  });
  toJoin = toJoin.join(" ");
  console.log(toJoin);
  return toJoin;
};

"How can mirrors be real if our eyes aren't real".toJadenCase();
