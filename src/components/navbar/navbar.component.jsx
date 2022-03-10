import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar main-color main-navbar">
      <div className="container-fluid">
        <Link to={process.env.PUBLIC_URL} className="navbar-brand">
          โลโก้ร้าน
        </Link>
        <ul className="flex-row gap-4 navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-4">
            <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
              ร้านค้า
            </Link>
          </li>
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/contact"} className="nav-link">
              สนับสนุน
            </Link>
          </li>
        </ul>

        <div className="d-flex">
          <ul className="navbar-nav mb-2 mb-lg-0  flex-row">
            <li className="nav-item">
              <CartIcon />
            </li>
            <li className="nav-item me-3">
              <Link to={process.env.PUBLIC_URL + "/signin"}>
                {location.pathname === "/account" ? (
                  <>
                    <i className="fas fa-user"></i> ออกจากระบบ
                  </>
                ) : (
                  <>
                    <i className="fas fa-user"></i> เข้าสู่ระบบ
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
