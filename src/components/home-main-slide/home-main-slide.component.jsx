import React ,  {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Thumbs } from "swiper";

import { currencyFormatter } from "../../utils";

const HomeMainSlide = ({ data }) => {

  const [thumbnail , setThumbnail] = useState(null);

  const swiperParamsLeft = {
    slidesPerView: 1,
    modules: [Autoplay ,Thumbs],
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop:true,
    thumbs:{
      swiper : thumbnail
    }
  };

  const swiperParamRight = {
    slidesPerView: 4,
    watchSlidesProgress: true,
    direction: "vertical",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    // loop:true,
    modules: [Autoplay ,Thumbs],
    onSwiper:setThumbnail
  };

  return (
    <div className="swiper-container mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Swiper {...swiperParamsLeft}>
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
          </div>
          <div className="col-lg-3">
            <Swiper
              {...swiperParamRight}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSlide;
