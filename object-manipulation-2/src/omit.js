/* eslint-disable no-unused-vars */
const omit = (source, keys) => {
  const newObj = { ...source };

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in newObj) {
      delete newObj[keys[i]];
    }
  } return newObj;
};
