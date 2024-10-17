import React from 'react'

const subtitle = ({subtitle}) => {
   return (
       <h3 className='section__subtitle' style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '1.5rem', color: '#6e7074' }}>
         {subtitle}
      </h3>
   )
}

export default subtitle