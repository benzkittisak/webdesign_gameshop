import React from "react";

import { currencyFormatter } from "../../utils";

import ORDERS_DATA from "../../data/orders.data";

const AccountPage = () => {
  return (
    <div className="account-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="account-header text-center">
              <img
                src="https://cdn.discordapp.com/attachments/950973417216180244/951461051097026642/smudge_lord_59868651_339938853586092_5772003112020613192_n.jpg"
                alt=""
              />
              <h5>แมวซ่า 007</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="text-center py-2">
              จำนวนเกมที่สั่งซื้อ {ORDERS_DATA.length} รายการ
            </p>
          </div>
          {
              ORDERS_DATA.map((data , index) => (
                  <div className="col-lg-12 mb-3" key={index}>
                      <div className="order-list">
                            <div className="order-image">
                                <img src={data.poster} alt="" />    
                            </div>  
                            <div className="order-detail">
                                <h4>{data.product_name}</h4>
                                <p>
                                    <b>ซื้อเมื่อวันท่ี : </b> {data.order_date}
                                </p>    
                                <p>
                                    <b>สถานะการชำระเงิน : </b> {data.status}
                                </p>  
                                <p>
                                    <b>จำนวน : </b> {data.quantity}
                                </p>  
                                <p>
                                    <b>{currencyFormatter.format(data.price)} </b> 
                                </p>  
                            </div>
                        </div>
                    </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
