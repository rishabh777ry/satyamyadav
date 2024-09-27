import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import { BASE_URL } from '../utils/config';
import SearchBar from './../shared/SearchBar';
import TourSlider from './../shared/TourSlider'; // Import TourSlider

const Tours = () => {
   const [pageCount, setPageCount] = useState(0);
   const [page, setPage] = useState(0);

   const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
   const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

   useEffect(() => {
      const pages = Math.ceil(tourCount / 8);
      setPageCount(pages);
      window.scrollTo(0, 0);
   }, [page, tourCount, tours]);

   return (
      <>
         <CommonSection title={"All Tours"} />
         
         {/* Include the TourSlider component here */}
         <TourSlider />

         <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         
         </>
   );
};

export default Tours;
