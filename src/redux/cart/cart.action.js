import cartActionsType from './cart.type';

export const toggleCartHidden = () => ({
    type:cartActionsType.TOGGLE_CART_HIDDEN
})

export const addItem = (item , quantity) => ({
    type:cartActionsType.ADD_ITEM,
    payload:{item , quantity}
})

export const removeItem = (item) => ({
    type:cartActionsType.REMOVE_ITEM,
    payload:item
})

export const clearItemFromCart = (item) => ({
    type:cartActionsType.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const clearCart = () =>({
    type:cartActionsType.CLEAR_CART
})