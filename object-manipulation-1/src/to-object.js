/* eslint-disable no-unused-vars */
const toObject = keyValuePair => {
  const newObject = {};
  const firstProp = keyValuePair[0];
  newObject[firstProp] = keyValuePair[1];
  return newObject;
};
