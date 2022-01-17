import React from "react";
import classes from "./Cart.module.css";
import Modal from "../ui/Modal";

export default function Cart({
  hideCart,
  onRemoveItemFromCart,
  cartItems,
  onShowTotalPrice,
}) {
  function removeItem(id) {
    onRemoveItemFromCart(id);
  }

  const totalPrice = onShowTotalPrice();

  const blankCart = (
    <div>
      <p>No Items in Cart...</p>
    </div>
  );

  const showCartItems = (
    <div className={classes.cart_items}>
      {!cartItems.length ? blankCart : <></>}
      {cartItems.map((item) => (
        <div key={item.id} className={classes.cart_item}>
          <p className={classes.cart_item_name}>{item.name}</p>
          <span className={classes.cart_item_quantity}>{item.amount} шт.</span>
          <button
            className={classes.delete}
            onClick={removeItem.bind(null, item.id)}
          >
            <span>X</span>
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <Modal hideCart={hideCart}>
      {showCartItems}
      <div className={classes.checkout}>
        <div className={classes.total}>
          <span>Total Amount: </span>
          <span>${totalPrice}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.button_alt} onClick={hideCart}>
            Close
          </button>
          <button className={classes.button}>Purchase</button>
        </div>
      </div>
    </Modal>
  );
}
