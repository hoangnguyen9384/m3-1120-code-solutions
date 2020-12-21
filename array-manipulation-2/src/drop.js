/* eslint-disable no-unused-vars */
const drop = (array, count) => {
  const newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    return array.slice(count);
  }
};
