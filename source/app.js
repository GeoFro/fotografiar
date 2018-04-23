import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement(
  'h1',
  { className: 'header', key: 'header' },
  'This is React boyo'
);

const p = React.createElement(
  'p',
  { className: 'content', key: 'content' },
  'And this is a paragraph...'
);

const reactFragment = [ h1, p ];
const section = React.createElement(
  'section',
  { className: 'container' },
  reactFragment
);

ReactDOM.render(
  section,
  document.getElementById('react-application')
);
