import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import Spinner from '../../Shared/Spinner/Spinner';

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
       
    }, [])
    return (
        <section id="testimonial">
            <h4 className="miniTitle text-center">TESTIMONIALS</h4>
            <div className="text-center mb-4">
                <h3 className="sectionTitle">WHAT OUR CLIENTS SAY’S</h3>
            </div>
            
        </section>
    );
};

export default Reviews;