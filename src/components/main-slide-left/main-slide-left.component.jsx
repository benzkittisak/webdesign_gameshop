import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { currencyFormatter } from "../../utils";

const MainSlideLeft = ({data}) => {
    const swiperMainParams = {
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        loop: true,
        modules: [Autoplay],
      };

  return (
    <Swiper {...swiperMainParams}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-main-slide">
            <div className="swiper-main-slide-img">
              <img src={item.wallpaper} alt="" />
              <div className="swiper-bg-dark" />
            </div>
            <div className="swiper-main-content">
              <div className="swiper-main-content-header">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <h3 className="swiper-pricec">
                  {currencyFormatter.format(item.price)}
                </h3>
              </div>
              <div className="swiper-main-content-buy">
                <button className="btn-buynow">BUY</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlideLeft;
