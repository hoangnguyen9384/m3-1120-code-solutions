import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button>Click Me!</button>;
};

const container = document.getElementById('root');

ReactDOM.render(
  CustomButton(),
  container
);
