import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics =
  [
    {
      title: 'Hypertext Markup Language',
      content: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
    },
    {
      title: 'Cascading Style Sheets',
      content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
      title: 'JavaScript',
      content: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
    }
  ];

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.getElementById('root')
);
