function sevenRandomNumbers() {
  const nums = new Set();

  while (nums.size !== 7) {
    nums.add(Math.floor(Math.random() * 9) + 1);
  }
  return [...nums];
}

console.log(sevenRandomNumbers());
