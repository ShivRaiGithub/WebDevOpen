import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <img src={img} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
      <div style={{ marginLeft: '20px' }}>
        <h2>{name}</h2>
        <p>{rating} stars</p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;