import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon">
      <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
        <i className="fal fa-shopping-bag"></i>
        <div className="item-count">
          <span className="count-style">{cartCount}</span>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
