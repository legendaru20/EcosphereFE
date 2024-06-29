import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CardSwiper.css';

const CardSwiper = ({ data, title }) => {
  const navigate = useNavigate();

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
                <button 
                  onClick={() => navigate(item.button)} 
                  className="card-link bg-success text-white rounded-4 w-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection-fill mb-1" viewBox="0 0 16 16">
                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a.5.5 0 0 0-1.5-1.5h-13A1.5.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
                  </svg>
                   Jelajah
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
