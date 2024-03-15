let name = "geeksforgeeks";
String.prototype.subString1 = function () {
  let subset = [];
  for (let i = 0; i < this.length; i++) {
    for (let k = i + 1; k < this.length; k++) {
      subset.push(name.slice(i, k));
    }
  }
  return subset;
};

console.log(name.subString1())
