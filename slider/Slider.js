import React, { useEffect, useState } from 'react';
import './Slider.css';


const images = [
  '../images/banner1.jpg',
  '../images/banner2.webp',
  '../images/banner3.jpg'
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImage ? 'active' : ''}
        />
      ))}
      <div className="navigation-button">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
