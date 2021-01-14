/* eslint-disable no-unused-vars */
const take = (array, count) => {
  const newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    for (let i = 0; i <= count - 1; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
};
