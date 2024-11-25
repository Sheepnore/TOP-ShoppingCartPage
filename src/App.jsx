import "./App.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";
import Product from "./Product";
import AddedDialog from "./AddedDialog";

function App() {
  const { cart, setCart, productData } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  // display quantities in cart
  let quantity = 0;
  cart.map((item) => {
    quantity += item.quantity;
  });

  return (
    <>
      <div className="navbar">
        <Link to="/" className="links" id="home-link">
          Home
        </Link>
        <Link to="checkout" className="links" id="checkout-link">
          Checkout {`(${quantity})`}
        </Link>
      </div>
      <div className="home">
        <div className="intro grid-container">
          <div className="text-sec">
            <h1>Welcome, Love. This is Wox.</h1>
            <p>
              Browse through to discover more, maybe you would find something
              you like
            </p>
          </div>
          {/* <div className="img-sec">
            <img src="" alt="" />
          </div> */}
        </div>
        <div className="products-container">
          {productData.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              setOpen={setOpen}
            ></Product>
          ))}
        </div>
      </div>
      <AddedDialog dialogOpen={open} setDialogOpen={setOpen}></AddedDialog>
    </>
  );
}

export default App;
