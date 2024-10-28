import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={prevSlide}>Left</button>
      <img src={images[currentIndex]} alt="carousel" style={{ maxWidth: '100%' }} />
      <button onClick={nextSlide}>Right</button>
    </div>
  );
};

export default Carousel;