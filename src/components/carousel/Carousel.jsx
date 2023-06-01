import React, { useEffect, useState } from 'react';
import './Carousel.css';

function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };
    
    const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
    };

    // console.log(images)
    return (
        <div className='carousel-container'>
            <img src={images[currentIndex]} alt="carousel slide" className='carousel-img' />
            <img onClick={goToPrevSlide} src="img/icon-swiper-1.svg" className='left' alt="좌측이동화살표"/>
            <img onClick={goToNextSlide} src="img/icon-swiper-2.svg" className='right' alt="우측이동화살표"/>
        </div>
    );
}

export default Carousel;