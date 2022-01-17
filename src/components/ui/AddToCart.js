import React, { useState, useEffect } from "react";

import classes from "./AddToCart.module.css";

export default function AddToCart({
  onAddItemToCart,
  onRemoveItemFromCart,
  showAmount,
  amount,
}) {
  const [isInCart, setIsInCart] = useState(false);

  // useEffect(() => {}, [])

  function showControlHandler() {
    setIsInCart(!isInCart);
  }

  // const amount = showAmount()

  function buttonChangeHandler() {
    if (!isInCart) {
      return (
        <div className={classes.control}>
          <button className={classes.button} onClick={onRemoveItemFromCart}>
            <span className={classes.decrease}>-</span>
          </button>
          <div className={classes.count}>{amount}1 шт</div>
          <button className={classes.button} onClick={onAddItemToCart}>
            <span className={classes.increase}>+</span>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className={classes.button} onClick={onAddItemToCart}>
            Add to Cart
          </button>
        </div>
      );
    }
  }

  const decider = buttonChangeHandler();

  return <div>{decider}</div>;
}
