import React from 'react';

const NumbersTable = ({ limit }) => {
  const generateNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(
        <div key={i} style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white', padding: 10 }}>
          {i}
        </div>
      );
    }
    return numbers;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {generateNumbers()}
    </div>
  );
};

export default NumbersTable;