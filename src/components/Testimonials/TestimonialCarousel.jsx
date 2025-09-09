import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import TestimonialSlide from '@components/Testimonials/TestimonialSlide';
import { selfStudyCourseTestimonials } from '@data/selfStudyCourseData.js';
import styles from '@styles/TestimonialsModules/TestimonialCarousel.module.scss';

function TestimonialCarousel() {
    const { title, list: testimonials } = selfStudyCourseTestimonials;

    return (
        <div className={styles.testimonialsSection}>
            <h2>{title}</h2>
            <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            loop={true}
            keyboard={{
                enabled: true,
            }}
            a11y={{
                preSlideMessage: '上一則客戶見證',
                netxtSlideMessage: '下一則客戶見證',
                paginationBulletMessage: '跳轉到第{{index}}則客戶見證',
            }}
            navigation={true}
            pagination={{ 
                clickable: true
             }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={2}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
            }}
            className={styles.swiperContainer}
            >
                {testimonials.map(item => (
                    <SwiperSlide key={item.id}>
                        <TestimonialSlide {...item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TestimonialCarousel;