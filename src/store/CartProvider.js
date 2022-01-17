import React, { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
      }
  } else if (action.type === 'REMOVE') {
    // const updatedItems = state.items.filter((id) => {});
    // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    // return {
    //     items: updatedItems,
    //     totalAmount: updatedTotalAmount
    // }
  }
  return defaultCartState;
}

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({
      type: "REMOVE",
      item: id,
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
