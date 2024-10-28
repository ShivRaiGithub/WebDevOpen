import React, { useState } from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`color-${color}`}>{color.toUpperCase()}: </label>
      <input
        type="number"
        id={`color-${color}`}
        name={`color-${color}`}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        min="0"
        max="255"
      />
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;