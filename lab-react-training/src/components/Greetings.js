import React from 'react';

function Greetings(props) {
  let greeting = '';

  switch (props.lang) {
    case 'de':
      greeting = `Hallo ${props.children}`;
      break;
    case 'en':
      greeting = `Hello ${props.children}`;
      break;
    case 'es':
      greeting = `Hola ${props.children}`;
      break;
    case 'fr':
      greeting = `Bonjour ${props.children}`;
      break;
    default:
      greeting = `Hello ${props.children}`;
      break;
  }

  return <div>{greeting}</div>;
}

export default Greetings;