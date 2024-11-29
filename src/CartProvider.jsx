import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://fakestoreapi.com/products?limit=30")
        .then((res) => res.json())
        .then((json) => json);
      setProductData(data);
    }
    getData();
  }, []);
  console.log(productData);

  return (
    <CartContext.Provider value={{ productData, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
