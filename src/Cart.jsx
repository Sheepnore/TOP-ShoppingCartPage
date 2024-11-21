import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router-dom";

export default function Cart() {
  const { productData, cart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  const findMatchingProduct = (data, cartItm) => {
    let match = false;
    data.map((product) => {
      if (product.id === cartItm.id) {
        match = true;
      }
    });
    return match;
  };

  useEffect(() => {
    const result = productData.filter((product) =>
      findMatchingProduct(cart, product)
    );
    setItems(result);
  }, []);

  return (
    <>
      <Link to="/" className="links">
        Home
      </Link>
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
