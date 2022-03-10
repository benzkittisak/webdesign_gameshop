import React from "react";
import { connect } from "react-redux";

import { currencyFormatter } from "../../utils";

import { clearItemFromCart } from "../../redux/cart/cart.action";


const CartItem = ({ data , clearItem }) => {
  return (
    <div className="cart-item-container">
      <button className="clear-item" onClick={() => clearItem(data)}>
        <i className="fal fa-times"></i>
      </button>
      <div className="cart-item-left">
        <img src={data.banner} alt="" />
        <div className="cart-info-header">
          <h3 className="m-0">{data.name}</h3>
          <p className="m-0">x{data.quantity}</p>
        </div>
      </div>
      <div className="cart-item-right">
        <h5 className="m-0">{currencyFormatter.format(data.price)}</h5>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null , mapDispatchToProps)(CartItem);
