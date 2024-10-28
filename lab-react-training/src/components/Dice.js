import React from 'react';

const NumbersTable = ({ limit }) => {
  const generateNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      const color = i % 2 === 0 ? 'gray' : 'white';
      numbers.push(
        <div key={i} style={{ backgroundColor: color }}>
          {i}
        </div>
      );
    }
    return numbers;
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= Math.ceil(limit / 2); i++) {
      const rowKey = `row-${i}`;
      const rowNumbers = generateNumbers();
      rows.push(
        <div key={rowKey} style={{ display: 'flex' }}>
          {rowNumbers}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      {generateRows()}
    </div>
  );
};

export default NumbersTable;