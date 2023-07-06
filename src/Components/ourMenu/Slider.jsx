// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card/Card.jsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import foodItems from './foodItems.js';

export default ({ onTopPage }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
        >
            {foodItems.map(card => (
                <SwiperSlide key={card.id}>
                    <Card
                        goTopPage={onTopPage}
                        name={card.name}
                        price={card.price}
                        description={card.description}
                        img={card.img}
                    />
                </SwiperSlide>
            ))}

        </Swiper>
    );
};