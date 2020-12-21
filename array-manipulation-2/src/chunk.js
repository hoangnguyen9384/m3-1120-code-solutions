/* eslint-disable no-unused-vars */
const chunk = (array, size) => {
  const newArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    const lastElement = newArr[newArr.length - 1];
    if (!lastElement || lastElement.length === size) {
      newArr.push([array[i]]);
    } else {
      lastElement.push(array[i]);
    }
  }
  return newArr;
};
