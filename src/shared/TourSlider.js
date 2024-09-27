// TourSlider.js
import React from 'react';
import Slider from 'react-slick';
import airport from '../assets/images/airport.jpg';
import baglamukhi from '../assets/images/baglamukhi.jpg';
import jaipur from '../assets/images/JAIPUR.jpg';
import khajrana from '../assets/images/khajrana.jpg';
import mahakal from '../assets/images/MAHAKAL.jpeg';
import mandav from '../assets/images/MANDAV.jpg';
import omkareshwar from '../assets/images/OMKARESHWAR.jpg';
import sawariyaseth from '../assets/images/sanwariyaseth.jpg';
import udaipur from '../assets/images/UDAIPUR.jpg';
import TourCard from './../shared/TourCard';

import './tourSlider.css';

const TourSlider = () => {
  // Define the tours data manually
  const tours = [
    {
      _id: '1',
      name: 'Ujjain Darshan',
      location: 'Mahakal Mandir, Harsiddhi Mandir, Ramghat, Kalbhairav, Garkalika, Bhartahri Gufa, Mangalnath, Sandipani Ashram, Bada Ganesh Mandir etc',
      passengers : '4+1',
      price: 2200,
      image: mahakal, // Replace with the actual path to your image
    },
    {
      _id: '2',
      name: 'Omkareshwar Darshan',
      location: 'Ujjain->Omkareshwar Darshan->Ujjain',
      passengers : '4+1',
      price: 3500,
      image: omkareshwar, // Replace with the actual path to your image
    },
    {
      _id: '3',
      name: 'Mandav + Maheshwar',
      location: 'Ujjain->Mandav Tourist Spot->Maheshwar->Ujjain',
      passengers : '4+1',
      price: 4500,
      image: mandav, // Replace with the actual path to your image
    },
    {
      _id: '4',
      name: 'Baglamukhi Mata Ji Darshan',
      location: 'Ujjain->Baglamukhi->Ujjain',
      passengers : '4+1',
      price: 3200,
      image: baglamukhi, // Replace with the actual path to your image
    },
    {
      _id: '5',
      name: 'Indore Local',
      location: 'Ujjain->Khajrana, 56 Dukan, Pitra Parvat, Rajwada, Zoo->Ujjain',
      passengers : '4+1',
      price: 3200,
      image: khajrana, // Replace with the actual path to your image
    },
      
      {
        _id: '6',
        name: 'Jaipur Tour',
        location: 'Ujjain->Jaipur Tour->Ujjain',
        passengers : '4+1',
        price: 'According to Running Kilometer',
        image: jaipur, // Replace with the actual path to your image
      },
      {
        _id: '7',
        name: 'Udaipur Tour',
        location: 'Ujjain->Udaipur Tour->Ujjain',
        passengers : '4+1',
        price: 'According to Running Kilometer',
        image: udaipur, // Replace with the actual path to your image
      },
      {
        _id: '8',
        name: 'Sanwaliya Seth',
        location: 'Ujjain->Sanwaliya Seth->Ujjain',
        passengers : '4+1',
        price: 'According to Running Kilometer',
        image: sawariyaseth, // Replace with the actual path to your image
      },
      {
        _id: '9',
        name: 'Airport PickUp',
        location: 'Indore Airport->Ujjain(At Your Destination)',
        passengers : '4+1',
        price: 1800,
        image: airport, // Replace with the actual path to your image
      },
      {
        _id: '10',
        name: 'Airport Drop ',
        location: 'Ujjain(From Your Destination)->Indore Airport',
        passengers : '4+1',
        price: 1800,
        image: airport, // Replace with the actual path to your image
      },
    // Add more tours as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1,
    autoplay: true,  // Enables auto-sliding
    autoplaySpeed: 1500, // Time in milliseconds to wait before sliding to the next card (e.g., 3000ms = 3 seconds)
    pauseOnHover: true, // Pauses auto-sliding when hovering over the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <div className="tour-slider">
      <Slider {...sliderSettings}>
        {tours.map((tour) => (
          <div key={tour._id}>
            <TourCard tour={tour} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TourSlider;
