import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const incrementLikes = () => {
    setCount(count + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      style={{ backgroundColor: colors[colorIndex], padding: '10px', borderRadius: '5px', color: 'white', border: 'none', cursor: 'pointer' }}
      onClick={incrementLikes}
    >
      {count} Likes
    </button>
  );
};

export default LikeButton;