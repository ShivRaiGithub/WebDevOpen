// src/components/Rating.js
import React from 'react';

function Rating(props) {
  const { children } = props;
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const filledStar = '★';
  const emptyStar = '☆';

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(filledStar);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(emptyStar);
  }

  return <div>{stars.join('')}</div>;
}

export default Rating;