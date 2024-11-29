import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { singleItemTotal } from "./calculation";

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

  // get product data from home page
  useEffect(() => {
    const result = productData
      .filter((product) => findMatchingProduct(cart, product))
      .map((product) => {
        const cartItem = cart.find((cartItm) => cartItm.id === product.id); // Find the corresponding cart item
        return {
          ...product, // Include all product properties
          quantity: cartItem.quantity, // Add quantity from the cart
        };
      });
    setItems(result);
  }, []);
  console.log(items);

  let IsCartEmpty = false;
  if (items.length === 0) {
    IsCartEmpty = true;
  }

  return (
    <>
      <div className="product-container">
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
                  <div className="cartItem-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              );
            })
          )}
        </div>
        {IsCartEmpty ? null : (
          <div className="checkout-sec">
            <div className="title">{`Checkout (${items.length}):`}</div>
            <div className="checkout-detail">
              <ul>
                {items.map((itm) => {
                  return (
                    <li className="cartItem-detail" key={itm.id}>{`${
                      itm.title
                    } * ${itm.quantity} = $${singleItemTotal(
                      itm.price,
                      itm.quantity
                    )}`}</li>
                  );
                })}
              </ul>
            </div>
            <div className="checkout-total">
              <div className="title">Total:</div>
              <div className="price-total">
                $
                {items
                  .reduce((accu, curr) => {
                    const currentTotal = singleItemTotal(
                      curr.price,
                      curr.quantity
                    );
                    return accu + currentTotal;
                  }, 0)
                  .toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
