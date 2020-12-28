/* eslint-disable no-unused-vars */
const getValues = object => {
  const newObject = [];
  for (const key in object) {
    newObject.push(object[key]);
  }
  return newObject;
};

// const getValues = (object) => {
//   return Object.values(object);
// }
