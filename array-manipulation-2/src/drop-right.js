/* eslint-disable no-unused-vars */
const dropRight = (array, count) => {
  const newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    const length = array.length - count;
    for (let i = 0; i < length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
};
