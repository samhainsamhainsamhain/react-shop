import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/shoppingBag.svg";
import CartButton from "./CartButton";

export default function Navbar({ showCart, itemsInCart }) {
  return (
    <div className={classes.appbar}>
      <div className={classes.navbar}>
        <div className={classes.title}>
          <img className={classes.logo} src={logo} alt="React.Shop logo" />
          <h2>React.Shop</h2>
        </div>
        <div className={classes.grow}></div>
        <CartButton showCart={showCart} itemsInCart={itemsInCart}/>
      </div>
    </div>
  );
}
