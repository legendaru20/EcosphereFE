import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CardSwiper.css';

const CardSwiper = ({ data, title }) => {
  return (
    <div className="card-swiper">
      <h2 className="section-title">{title}</h2>
      <Swiper spaceBetween={20} slidesPerView={3}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="card-link">Baca selengkapnya</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
