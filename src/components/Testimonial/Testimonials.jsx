import React from 'react'
import Slider from 'react-slick'
import four from '../../assets/images/four.jpg'
import one from '../../assets/images/one.jpg'
import three from '../../assets/images/three.jpg'
import two from '../../assets/images/two.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>The experience was absolutely smooth and luxurious from start to finish. The vehicle was extremely comfortable, and the driver was highly professional. I’ve used other services, but this one truly stands out. I’ll definitely book with them again!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={one} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ravi Sharma</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>One of the best tours I’ve ever had! Everything was perfectly organized, and the guide made it fun and engaging. The service felt personalized and stress-free, which made the trip even more special. I highly recommend them!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={two} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ritesh Patidar</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>The car rental process was incredibly easy, and the vehicle was spotless and luxurious. The driver was punctual and knew the best routes, making our journey quicker. I’ve never had such a comfortable rental experience. Absolutely worth it!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={three} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ankit Verma</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Their customization made our trip special. They took into account all our preferences and created the perfect tour for us and The attention to detail was impressive, and we felt truly valued. I’ll definitely book with them again!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={four} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Nikhil Agrawal</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials