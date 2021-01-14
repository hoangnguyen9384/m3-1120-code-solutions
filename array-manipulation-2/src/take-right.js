/* eslint-disable no-unused-vars */
const takeRight = (array, count) => {
  const newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    const length = array.length - count;
    for (let i = length; i <= array.length - 1; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
};
