/* eslint-disable no-unused-vars */
const includes = (array, value) => {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
};
