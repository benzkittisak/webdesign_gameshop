import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect} from 'react-redux'

import { addItem } from '../../redux/cart/cart.action';

import {
  getFeaturesGame,
  getDiscountPercent,
  getPrice,
  currencyFormatter,
} from "../../utils";

const Features = ({addItem}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tempData = getFeaturesGame();
    setData(tempData);
  }, []);

  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    slidesPerGroup: 1,
  };

  return (
    <div className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-header">
              <h5>ข้อเสนอพิเศษ</h5>
            </div>
          </div>
          <div className="col-lg-12 position-relative">
            <div className="right-g"></div>
            <Swiper {...swiperOptions}>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="features-container">
                    <div className="features-image position-relative">
                      <img src={item.poster} alt="" />

                      <div className="product-hover">
                          <button type="button" onClick={() => addItem(item)}>
                            <i className="fal fa-plus"></i> เพิ่มลงตะกร้า
                          </button>  
                      </div>
                    </div>
                    <div className="features-content">
                      <h4 className="features-content-name">{item.name}</h4>
                      <p className="features-content-desc">{item.desc}</p>
                      <div className="features-content-discount">
                        <div className="features-content-discount-left">
                          {getDiscountPercent(item.discount)}
                        </div>
                        <div className="features-content-discount-right">
                          <p className="discount-top">
                            {currencyFormatter.format(item.price)}
                          </p>
                          <p className="discount-bottom">
                            {currencyFormatter.format(
                              getPrice(item.price, item.discount)
                            )}
                          </p>
                        </div>
                      </div>
                      
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(Features);
