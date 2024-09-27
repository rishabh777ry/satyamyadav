import React, { useEffect, useRef, useState } from 'react';
import '../cars/cars.css';

function Card({ carImage, carName, pricePerKM, passengers, luggage, minimum, airConditioner, buttonText }) {
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const cardIndex = Array.from(cardRef.current.parentNode.children).indexOf(cardRef.current);

      if (isMobile) {
        setIsVisible(cardIndex === 0);
      } else {
        setIsVisible(cardIndex < 3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`card ${isVisible ? '' : 'hidden'}`} ref={cardRef}>
      <img src={carImage} alt={carName} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{carName}</h2>
        <p className="card-price">₹{pricePerKM}/KM</p>
        <ul className="card-details">
          <li>Passengers: {passengers}</li>
          <li>Luggage's: {luggage}</li>
          <li>Minimum: {minimum} KM</li>
          <li>Air Conditioner: {airConditioner}</li>
        </ul>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;