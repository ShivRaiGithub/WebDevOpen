import React from 'react';

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const lastDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardTypeLogo = {
    width: '50px',
    alignSelf: 'flex-end'
  };

  const cardNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const expirationStyle = {
    fontSize: '14px'
  };

  const bankStyle = {
    fontSize: '16px'
  };

  const ownerStyle = {
    fontSize: '18px'
  };

  return (
    <div style={cardStyle}>
      <img
        src={type === 'Visa' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png' : 'https://logos-world.net/wp-content/uploads/2020/04/Mastercard-Logo.png'}
        alt={type}
        style={cardTypeLogo}
      />
      <div style={cardNumberStyle}>•••• •••• •••• {lastDigits}</div>
      <div style={expirationStyle}>
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div style={bankStyle}>{bank}</div>
      <div style={ownerStyle}>{owner}</div>
    </div>
  );
}

export default CreditCard;