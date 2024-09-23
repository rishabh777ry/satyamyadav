import React from 'react'
import { Col } from 'reactstrap'
import customizationImg from '../assets/images/customization.png'
import guideImg from '../assets/images/guide.png'
import weatherImg from '../assets/images/vectorCarbg.png'
import ServiceCard from './ServiceCard'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Car Rental Service`,
      desc: `Where every journey is a luxury experience.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `See the best places with our expert tour guides.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Design your own tour that suits you`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList