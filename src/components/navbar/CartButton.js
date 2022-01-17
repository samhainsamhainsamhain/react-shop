import React from "react";
import cartIcon from "../../assets/cart.svg";
import classes from "./CartButton.module.css";

export default function CartButton({ showCart, itemsInCart }) {

  return (
    <>
      <div className={classes.button}>
        <div className={classes.button_cart} onClick={showCart}>
          <img className={classes.cart} src={cartIcon} alt='Show items added to cart'/>
          <span className={classes.badge}>{itemsInCart}</span>
        </div>
      </div>
    </>
  );
}
