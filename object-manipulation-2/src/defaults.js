/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  for (const prop in source) {
    if (!(prop in target)) {
      target[prop] = source[prop];
    }
  }
};

// const defaults = (target, source) => {
//   Object.assign(target, source);
// }
