/* eslint-disable no-unused-vars */
const invert = source => {
  const obj = {};
  Object.keys(source).forEach(x => { obj[source[x]] = x; });
  return obj;
};

// const invert = (source) =>{
//   const obj = {};
//   for(let prop in source) {
//     obj[source[prop]] = prop;
//   }
//   return obj
// }
