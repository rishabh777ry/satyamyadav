import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './tourCard.css';

const TourCard = ({ tour }) => {
  const handleCall = () => {
    const phoneNumber = '+916266717993';
    const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Check if it's a mobile device

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(`Please call this number for booking: ${phoneNumber}`);
    }
  };

  return (
    <Card className="tour-card">
      <CardImg top width="100%" src={tour.image} alt={tour.name} />
      <CardBody>
        <CardTitle tag="h5">{tour.name}</CardTitle>
        <CardText>
          <strong>Location:</strong> {tour.location}
        </CardText>
        <CardText>
          <strong>Price:</strong> {tour.price}
        </CardText>
        <CardText>
          <strong>Passengers:</strong> {tour.passengers}
        </CardText>
        <Button
          style={{ backgroundColor: '#FAA935', borderColor: '#FAA935' }}
          onClick={handleCall}
        >
          Book Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default TourCard;
