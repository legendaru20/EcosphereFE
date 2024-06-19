import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperKampanye.css';
import './modalEdukasi/ModalEdu'
import { Collapse } from 'bootstrap';



const SwiperKampanye = ({data, title}) => {

  return (
 
    <div className="swiper">
      <h4 className="title">{title}</h4>
      <Swiper spaceBetween={20} slidesPerView={3}  >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card ">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="content">
                <h4 className='judul'>{item.title}</h4>
             
                <button href={item.button} className="card-link bg-success text-white rounded-4 w-50"onClick={()=> navigate("/ModalEdukasi")}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" class="bi bi-people-fill mb-1 fa-align-left"  viewBox="0 0 16 16">
                 <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>Gabung</button>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>

  )
}

export default SwiperKampanye