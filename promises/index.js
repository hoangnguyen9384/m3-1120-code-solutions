/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const myName = takeAChance('Jay');

myName.then(success => {
  console.log(success);
}).catch(err => {
  console.log(err.message);
});
