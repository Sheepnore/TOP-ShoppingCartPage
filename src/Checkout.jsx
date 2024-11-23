import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router-dom";
import "./Checkout.css";
export default function Checkout() {
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

  let IsCartEmpty = false;
  if (items.length === 0) {
    IsCartEmpty = true;
  }

  return (
    <div className="product-container">
      <Link to="/" className="links">
        Home
      </Link>
      <div className="cartItems">
        {IsCartEmpty ? (
          <div className="emptycart-message">
            Currently no item is in the cart. Click 'Home' to return
          </div>
        ) : (
          items.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="cartItem-title">{item.title}</div>
                <div className="cartitem-img">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="price-details"></div>
    </div>
  );
}
