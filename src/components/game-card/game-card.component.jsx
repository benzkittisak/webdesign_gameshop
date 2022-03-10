import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import { getPrice, currencyFormatter } from "../../utils";

const GameCard = ({ data, addItem }) => {
  const { poster, type, name, desc, discount, price } = data;
  return (
    <div className={`col-lg-2 mb-3 filter-item ${type.join(" ")}`}>
      <div className="product-image">
        <img
          src={poster}
          className={`${type.filter(
            (name) => name === "Accessories"
          )} img-fluid`}
        />
        <div className="product-hover">
          <button type="button" onClick={() => addItem(data)}>
            <i className="fal fa-plus"></i> เพิ่มลงตะกร้า
          </button>
        </div>
      </div>

      <div className="features-content">
        <h4 className="features-content-name">{name}</h4>
        <p className="features-content-desc">{desc}</p>
        <div className="features-content-discount">
          <div
            className="features-content-discount-right"
            style={{ padding: 0 }}
          >
            {discount > 0 ? (
              <p className="discount-top" style={{ textAlign: "left" }}>
                {currencyFormatter.format(price)}
              </p>
            ) : null}
            <p className="discount-bottom">
              {currencyFormatter.format(getPrice(price, discount))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null,mapDispatchToProps)(GameCard);
