fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log('The datas: ', data))
  .catch(err => console.log(err.message));

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(res => res.json())
  .then(data => console.log('My Pokemon: ', data))
  .catch(err => console.log(err.message));
