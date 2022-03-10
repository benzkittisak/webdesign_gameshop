import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <Link className="navbar-brand" to={process.env.PUBLIC_URL}>
              <h3>โลโก้ร้าน</h3>
            </Link>

            <ul className="footer-navbar">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>หน้าแรก</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop"}>ร้านค้า</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/signin"}>เข้าสู่ระบบ</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/signup"}>สมัครสมาชิก</Link>
              </li>
            </ul>

            <div className="footer-contact">
              <h4>ติดต่อ</h4>

              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
                <p className="footer-copyright">
                    &copy; Copyright 2022 ชื่อร้าน All Right Reserved.
                </p>  
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
