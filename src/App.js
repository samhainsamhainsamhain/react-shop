// TODO:
// Добавить каунтер в AddCart.js между кнопками управления
// Сделать чекаут с заполнением данных о заказе и отправкой на сервер
// Привести в порядок CSS свойства селекторов

import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);

  function addItemToCartHandler(item) {
    itemsInCartCounter("+");
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        return (cartItems[i].amount += 1);
      }
    }
    setCartItems((prevState) => [...prevState, item]);
  }

  function calculateTotalPrice() {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalAmount += cartItems[i].price * cartItems[i].amount;
    }
    return totalAmount;
  }

  function removeItemFromCartHandler(id) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id && cartItems[i].amount > 1) {
        let updatedItems = cartItems;
        updatedItems[i].amount = updatedItems[i].amount - 1;
        setCartItems(updatedItems);
      } else if (cartItems[i].id === id && cartItems[i].amount === 1) {
        let prevState = cartItems;
        let updatedItems = prevState.filter((item) => {
          return item.id !== id;
        });
        setCartItems(updatedItems);
      }
    }
    itemsInCartCounter("-");
  }

  function showCartHandler() {
    setCartIsShown(!cartIsShown);
  }

  function itemsInCartCounter(e) {
    if (e === "+") {
      return setItemsInCart((prevState) => {
        return prevState + 1;
      });
    } else if (e === "-") {
      return setItemsInCart((prevState) => {
        return prevState - 1;
      });
    }
  }

  return (
    <>
      {cartIsShown && (
        <Cart
          hideCart={showCartHandler}
          onRemoveItemFromCart={removeItemFromCartHandler}
          cartItems={cartItems}
          onShowTotalPrice={calculateTotalPrice}
        />
      )}
      <Navbar showCart={showCartHandler} itemsInCart={itemsInCart} />
      <Products
        onAddItemToCart={addItemToCartHandler}
        onRemoveItemFromCart={removeItemFromCartHandler}
        cartItems={cartItems}
      />
    </>
  );
}

export default App;
