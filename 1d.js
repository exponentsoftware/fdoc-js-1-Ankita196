const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const varietyOfWords = (sentence) => {
  //replacing . ? / \ with '' and then coverting string into array
  let array = sentence.replace(/[.]/g, "").split(" ");
  //for removing duplicate present in array
  let uniqueChars = [...new Set(array)];
  return uniqueChars.length;
};

console.log(varietyOfWords(sentence));
