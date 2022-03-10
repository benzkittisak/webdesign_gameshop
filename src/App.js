import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import SemiNav from "./components/semi-nav/semi-nav.component";

import HomePage from "./pages/home/home.coponent";

import "./assets/style/style.scss";
import Footer from "./components/footer/footer.component";
import ShopPage from "./pages/shop/shop.component";
import CartPage from "./pages/cart/cart.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import AccountPage from "./pages/account/account.component";
import ContactPage from "./pages/contact/contact.component";


function App() {
 
  return (
    <>
      <Navbar />
      <SemiNav />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
