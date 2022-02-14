function accum(s) {
  let splited = s.split("");
  let toJoin = [];
  for (const [i, v] of splited.entries()) {
    toJoin.push(v.toUpperCase() + v.toLowerCase().repeat(i))
  }
  console.log(toJoin.join("-"));
  return toJoin.join("-")
}
accum("RqaEzty");
