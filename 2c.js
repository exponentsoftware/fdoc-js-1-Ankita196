function reverseArray(input) {
  var reverseArr = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    reverseArr.push(input[i]);
  }
  return reverseArr;
}

console.log(reverseArray(["A", "B", "C"]));
