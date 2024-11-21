import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";

export default function Cart() {
  const { productData, cart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    productData.map((product) => {
      cart.map((cartItem) => {
        if (product.id === cartItem.id) {
          setItems([...items, product]);
        }
      });
    });
    console.log(items);
  }, []);

  return (
    <>
      {items.map((itm) => {
        return (
          <div className="cartItem" key={itm.id}>
            <div className="cartItem-title">{itm.title}</div>
            <div className="cartitem-img">
              <img src={itm.image} alt={itm.title} />
            </div>
          </div>
        );
      })}
    </>
  );
}
