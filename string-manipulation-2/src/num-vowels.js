/* eslint-disable no-unused-vars */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newString = string.toLowerCase();
  let count = '';
  for (let i = 0; i <= newString.length - 1; i++) {
    if (vowels.includes(newString[i])) {
      count += newString[i];
    }
  }
  return count.length;
}
