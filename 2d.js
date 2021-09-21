function checkUniqueness(arr) {
  let n = arr.length;

  let s = new Set();
  for (let i = 0; i < n; i++) {
    s.add(arr[i]);
  }

  return s.size == arr.length;
  if (checkUniqueness(arr)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));
