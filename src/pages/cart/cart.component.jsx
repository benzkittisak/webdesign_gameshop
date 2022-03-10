import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "../../components/form-input/form-input.component";

import { currencyFormatter } from "../../utils";

import { clearCart } from "../../redux/cart/cart.action";
import { selectCartItems, calTotalPrice } from "../../redux/cart/cart.selector";

import CartItem from "../../components/cart-item/cart-item.component";

const CartPage = ({ cartItems, totalPrice, clearCart }) => {
  const [slipData, setSlipData] = useState(null);
  return (
    <div className="cart-page">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-block text-center">
              <h2 className="pb-4">ข้อมูลผู้สั่งซื้อ</h2>
              <p className="text-muted">
                กรุณากรอกข้อมูลด้านล่างนี้ให้ครบถ้วน <br />
                เพื่อการจัดส่งสินค้าที่คุณต้องการได้อย่างถูกต้อง
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <FormInput type="text" placeholder="ชื่อจริง" name="" />
          </div>
          <div className="col-lg-6 mb-3">
            <FormInput type="text" placeholder="นามสกุล" name="" />
          </div>
          <div className="col-lg-12 mb-3">
            <FormInput type="text" placeholder="เบอร์โทรศัพท์" name="" />
          </div>
          <div className="col-lg-12 mb-3">
            <FormInput
              type="textarea"
              placeholder="ที่อยู่"
              name=""
            ></FormInput>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-block text-center pt-4">
              <h2 className="pb-4">ตะกร้าสินค้า</h2>
              <p className="text-muted">
                กรุณาตรวจสอบข้อมูลในตะกร้าสินค้าให้ถูกต้องก่อนสั่งซื้อสินค้า
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            {cartItems.length > 0 ? (
              cartItems.map((data, index) => (
                <CartItem data={data} key={index} />
              ))
            ) : (
              <h5 className="text-center py-5 text-warning">
                ไม่มีสินค้าในตะกร้า
              </h5>
            )}
            <div className="cart-total-price">
              <div className="total-price-left">
                <h4>รวมราคา</h4>
              </div>
              <div className="total-price-right">
                <h3 className="m-0">{currencyFormatter.format(totalPrice)}</h3>
              </div>
            </div>
            <div className="cart-checkout">
              <div className="cart-checkout-left">
                <input
                  type="file"
                  name=""
                  onChange={(e) => setSlipData(e.target.value)}
                  id=""
                />
              </div>
              <div className="cart-checkout-right">
                <button onClick={() => clearCart()} className="btn-cancel">
                  CANCEL
                </button>
                <button
                  className="btn-checkout"
                  disabled={slipData ? false : true}
                >
                  BUY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: calTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
