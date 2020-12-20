/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  const first = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = first;
  return array.join('');
}
