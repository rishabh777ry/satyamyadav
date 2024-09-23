import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Form, FormGroup } from 'reactstrap'
import './search-bar.css'

const SearchBar = () => {
   const nameRef = useRef('')
   const emailRef = useRef('')
   const mobileRef = useRef('')
   const navigate = useNavigate()

   const searchHandler = async () => {
      const name = nameRef.current.value
      const email = emailRef.current.value
      const mobile = mobileRef.current.value

      if (name === '' || email === '' || mobile === '') {
         return alert('All fields are required!')
      }

      // For demonstration, we're navigating to the tours page
      const result = { name, email, mobile } // This simulates a backend response

      navigate(`/tours/search?name=${name}&email=${email}&mobile=${mobile}`, { state: result })
   }

   return (
      <Col lg="12">
         <div className="search__bar">
            <h4>For more details and customization</h4>
            <Form className='d-flex align-items-center gap-4'>
               <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span><i className='ri-user-line'></i></span>
                  <div>
                     <h6>Name</h6>
                     <input type="text" placeholder='Enter your name' ref={nameRef} />
                  </div>
               </FormGroup>
               <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span><i className='ri-mail-line'></i></span>
                  <div>
                     <h6>Email</h6>
                     <input type="email" placeholder='Enter your email' ref={emailRef} />
                  </div>
               </FormGroup>
               <FormGroup className='d-flex gap-3 form__group form__group-last'>
                  <span><i className='ri-phone-line'></i></span>
                  <div>
                     <h6>Mobile Number</h6>
                     <input type="text" placeholder='Enter your mobile number' ref={mobileRef} />
                  </div>
               </FormGroup>

               <span className='search__icon' type='submit' onClick={searchHandler}>
                  <i className='ri-search-line'></i>
               </span>
            </Form>
         </div>
      </Col>
   )
}

export default SearchBar
