// TourCard.js
import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './tourCard.css';

const TourCard = ({ tour }) => {
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
        <Button style={{ backgroundColor: '#FAA935', borderColor: '#FAA935' }}>Book Now</Button>
      </CardBody>
    </Card>
  );
};

export default TourCard;
