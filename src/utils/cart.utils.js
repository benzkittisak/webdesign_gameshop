export const addToCart = (cartItems, cartItemToAdd , quantity) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
      return  cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    if(quantity){
      return [...cartItems, { ...cartItemToAdd, quantity: quantity }];
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };
  
  export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === itemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
       return cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
    }
  
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  
  };
  