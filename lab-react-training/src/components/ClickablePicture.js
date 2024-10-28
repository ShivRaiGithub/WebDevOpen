import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);
  const divStyle = {
    width: '200px',
    height: '350px',
    border: '1px solid black',
  };
  const toggleImage = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? imgClicked : img}
      alt="Clickable Picture"
      onClick={toggleImage}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;