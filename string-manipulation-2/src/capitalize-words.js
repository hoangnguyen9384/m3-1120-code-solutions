/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  const array = string.split(' ');
  let newStr = '';
  for (let i = 0; i <= array.length - 1; i++) {
    newStr += array[i][0].toUpperCase() + array[i].substring(1).toLowerCase() + ' ';
  }
  return newStr.trim();
}
