import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'reactstrap';
import './search-bar.css';

const SearchBar = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const mobileRef = useRef('');

  // Your action URL for the Google Form
  const formActionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdS83E26SmCWq17tWhUVP2LTeqKzG0BbT3WtnzsuqG-dSYsLg/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!nameRef.current.value || !emailRef.current.value || !mobileRef.current.value) {
      return alert('All fields are required!');
    }

    // Prepare the data to be sent
    const formData = new URLSearchParams();
    formData.append('entry.725119186', nameRef.current.value); // Name entry ID
    formData.append('entry.1780132787', emailRef.current.value); // Email entry ID
    formData.append('entry.1122056587', mobileRef.current.value); // Mobile entry ID

    try {
      // Submit the form data
      await fetch(formActionUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // This should prevent redirection
      });

      // Since we're in no-cors mode, we won't know if the submission failed,
      // but we can assume it succeeded if we reach this point.
      alert('Your data has been sent successfully! We will contact you soon.');

      // Optionally, clear the input fields
      nameRef.current.value = '';
      emailRef.current.value = '';
      mobileRef.current.value = '';
      
    } catch (error) {
      alert('Failed to submit. Please check your internet connection.');
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <h4>For more details and customization</h4>
        <Form className='d-flex align-items-center gap-4' onSubmit={handleSubmit}>
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

          <button className='search__icon' type='submit'>
            <i className='ri-send-plane-line'></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
