import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity  , 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
  );
  
  export const calTotalPrice = createSelector([selectCartItems], (cart) =>
    cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    )
  );