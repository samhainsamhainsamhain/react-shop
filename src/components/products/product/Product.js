import React from "react";
import classes from "./Product.module.css";
import Card from "../../ui/Card";
import AddToCart from "../../ui/AddToCart";

export default function Product({
  id,
  name,
  price,
  img,
  onAddItemToCart,
  onRemoveItemFromCart,
  cartItems,
}) {
  function addItemToCartHandler() {
    onAddItemToCart({
      id: id,
      name: name,
      price: price,
      amount: 1,
    });
  }

  let amount;

  function showAmountInCart(id) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        console.log(cartItems[i].amount);
        return (amount = cartItems[i].amount);
      }
    }
  }

  return (
    <Card className={classes.product}>
      <div className={classes.container}>
        <img className={classes.img} src={img} alt={name} />
      </div>
      <div className={classes.info}>
        <p className={classes.name}>{name}</p>
        <span className={classes.price}>${price}</span>
      </div>
      <div className={classes.ui}>
        <AddToCart
          onAddItemToCart={addItemToCartHandler}
          onRemoveItemFromCart={onRemoveItemFromCart}
          showAmount={showAmountInCart}
          amount={amount}
        />
      </div>
    </Card>
  );
}
