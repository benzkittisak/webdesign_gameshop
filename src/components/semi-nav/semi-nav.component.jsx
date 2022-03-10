import React from "react";
import { Link } from "react-router-dom";

const SemiNav = () => {
  return (
    <div className="semi-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-lg-auto mt-4">
            <div className="semi-nav-container">
              <div className="semi-nav-link">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/"}>สำรวจ</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop"}>หมวดหมู่</Link>
                  </li>
                </ul>
              </div>

              <div className="semi-nav-store-name">
                <p>ชื่อร้าน</p>
              </div>

              <div className="semi-nav-form position-relative">
                <form action="/shop?">
                  <input type="text" name="search" placeholder="ค้นหา"></input>
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiNav;
