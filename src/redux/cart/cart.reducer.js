import cartActionTypes from "./cart.type";
import { addToCart , removeItemFromCart } from "../../utils/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.SET_CART_ITEM:{
      return{
        ...state,
        cartItems:action.payload
      }
    }
    case cartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems:addToCart(state.cartItems , action.payload.item , action.payload.quantity)
      }
    case cartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems:removeItemFromCart(state.cartItems , action.payload)
      }
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return{
        ...state,
        cartItems:state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case cartActionTypes.CLEAR_CART:
      return{
        ...state,
        cartItems:[]
      }
    default:
        return state;
  }
};

export default cartReducer;
