import React, { useState, useEffect } from "react";
import Product from "./product/Product";
import classes from "./Products.module.css";

const API_LINK =
  "https://react-shop-5ed74-default-rtdb.europe-west1.firebasedatabase.app/Items.json";

export default function Products({
  onAddItemToCart,
  onRemoveItemFromCart,
  cartItems,
}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const responce = await fetch(API_LINK);
      const responceData = await responce.json();

      const loadedProducts = [];

      for (const key in responceData) {
        loadedProducts.push({
          id: key,
          name: responceData[key].name,
          price: responceData[key].price,
          img: responceData[key].img,
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const renderProductList = products.map((item) => (
    <Product
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      onAddItemToCart={onAddItemToCart}
      onRemoveItemFromCart={onRemoveItemFromCart}
      cartItems={cartItems}
    />
  ));

  return (
    <>
      <div className={classes.toolbar}></div>
      <main className={classes.content}>
        {/* <button onClick={() => {console.log(products)}}>check</button> */}
        {renderProductList}
      </main>
    </>
  );
}
