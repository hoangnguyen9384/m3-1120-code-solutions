/* eslint-disable no-unused-vars */
function reverseWord(word) {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  } return newWord;
}

// this is just my testing with string.split()
// function reverseWord(word) {
//   return word.split("").reverse().join("");
// }
