import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    border: '1px solid black',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;