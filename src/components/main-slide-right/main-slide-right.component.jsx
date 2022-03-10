import React from "react";

import { Swiper, SwiperSlide , Thumbs } from "swiper/react";
import { Autoplay } from "swiper";

const MainSlideRight = ({data}) => {
    const swiperParam = {
        slidesPerView: 4,
        watchSlidesProgress:true,
        direction: "vertical",
        autoplay:{
            delay:6000,
            disableOnInteraction:false
        },
      };

  return (
    <Swiper
      {...swiperParam}
      className="position-relative swiper-left-container h-100"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="swiper-left">
          <div className="swiper-slide-container-left">
            <div className="swiper-slide-img-left">
              <img src={item.poster} alt="" />
            </div>
            <div className="swiper-slide-content-left">
                <h5>{item.name}</h5>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlideRight;
