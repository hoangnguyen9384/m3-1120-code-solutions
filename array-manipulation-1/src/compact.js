/* eslint-disable no-unused-vars */
const compact = array => {
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] &&
      array[i] !== undefined && array[i] !== '') {
      newArray.push(array[i]);
    }
  } return newArray;
};
