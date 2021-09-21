const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

function countWords(paragraph, w1, w2) {
  let array = paragraph.replace(/[.]/g, "").split(" ");

  let word1 = array.filter((x) => x == w1).length;

  let word2 = array.filter((x) => x == w2).length;
  if (word1 > word2) {
    console.log("the word ${w1} more frequently occured than ${w2}");
  } else {
    console.log("the word you more frequently occured than love");
  }
}
console.log(countWords(paragraph, "Love", "you"));
