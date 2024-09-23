import React, { useCallback, useEffect, useRef, useState } from 'react';
import baleno from '../../assets/images/baleno.png';
import carens from '../../assets/images/carens.png';
import dezire from '../../assets/images/dezire.png';
import ertiga from '../../assets/images/ertiga.png';
import innova from '../../assets/images/innova.png';
import innovaNormal from '../../assets/images/innovaNormal.png';
import tavera from '../../assets/images/tavera.png';
import tempo from '../../assets/images/tempo.png';
import Card from '../cars/car.js';
import './cars.css';

function CarDisplay() {
  const sliderRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const carsData = [
    { carImage: innova, carName: 'Innova Crysta', pricePerKM: 20, passengers: 6, luggage: 2, minimum: 100, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: innovaNormal, carName: 'Innova', pricePerKM: 18, passengers: 6, luggage: 2, minimum: 100, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: dezire, carName: 'Swift Dezire', pricePerKM: 11, passengers: 5, luggage: 4, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: ertiga, carName: 'Ertiga', pricePerKM: 13, passengers: 7, luggage: 4, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: tempo, carName: 'Tempo Traveller', pricePerKM: 25, passengers: 14, luggage: 5, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: baleno, carName: 'Baleno', pricePerKM: 20, passengers: 6, luggage: 4, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: tavera, carName: 'Tavera', pricePerKM: 15, passengers: 8, luggage: 2, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
    { carImage: carens, carName: 'Kia Carens', pricePerKM: 15, passengers: 5, luggage: 2, minimum: 150, airConditioner: 'Yes', buttonText: 'Book Now' },
  ];

  const slide = useCallback(() => {
    const slider = sliderRef.current;
    if (!isDragging && slider) {
      const cardWidth = slider.querySelector('.card').offsetWidth + 10;
      slider.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  }, [isDragging]);

  useEffect(() => {
    const id = setInterval(slide, 3000); // Adjust time as needed
    setIntervalId(id);
    return () => clearInterval(id);
  }, [slide]);

  const stopSlider = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const startSlider = () => {
    const id = setInterval(slide, 3000); // Adjust time as needed
    setIntervalId(id);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    stopSlider();
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    startSlider();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startSlider();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    stopSlider();
    setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startSlider();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="cards-slider">
        {carsData.map((car, index) => (
          <Card
            key={`original-${index}`}
            carImage={car.carImage}
            carName={car.carName}
            pricePerKM={car.pricePerKM}
            passengers={car.passengers}
            luggage={car.luggage}
            minimum={car.minimum}
            airConditioner={car.airConditioner}
            buttonText={car.buttonText}
          />
        ))}
        {carsData.map((car, index) => (
          <Card
            key={`duplicate-${index}`}
            carImage={car.carImage}
            carName={car.carName}
            pricePerKM={car.pricePerKM}
            passengers={car.passengers}
            luggage={car.luggage}
            minimum={car.minimum}
            airConditioner={car.airConditioner}
            buttonText={car.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default CarDisplay;
