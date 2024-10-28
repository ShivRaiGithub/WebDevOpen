import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return <div>Random number between {min} and {max}: {randomNumber}</div>;
}

export default Random;