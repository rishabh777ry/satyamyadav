import React from 'react';
import Slider from 'react-slick';
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

// Car data
const carsData = [
  { carImage: innova, carName: 'Innova Crysta', pricePerKM: 20, passengers: 6, luggage: 2, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: innovaNormal, carName: 'Innova', pricePerKM: 18, passengers: 6, luggage: 2, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: dezire, carName: 'Swift Dezire', pricePerKM: 11, passengers: 5, luggage: 2, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: ertiga, carName: 'Ertiga', pricePerKM: 13, passengers: 6, luggage: 4, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: tempo, carName: 'Tempo Traveller', pricePerKM: 25, passengers: 14, luggage: 8, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: baleno, carName: 'Baleno', pricePerKM: 11, passengers: 4, luggage: 2, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: tavera, carName: 'Tavera', pricePerKM: 15, passengers: 9, luggage: 4, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
  { carImage: carens, carName: 'Kia Carens', pricePerKM: 15, passengers: 6, luggage: 2, minimum: 300, airConditioner: 'Yes', buttonText: 'Book Now' },
];

const CarDisplay = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on how many cards you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Change this value for the speed of the auto slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carsData.map((car, index) => (
          <div key={index}>
            <Card
              carImage={car.carImage}
              carName={car.carName}
              pricePerKM={car.pricePerKM}
              passengers={car.passengers}
              luggage={car.luggage}
              minimum={car.minimum}
              airConditioner={car.airConditioner}
              buttonText={car.buttonText}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarDisplay;
