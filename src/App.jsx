import "./App.css";
import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CartContext } from "./CartProvider";
import Product from "./Product";
import Checkout from "./Checkout";
import ProductList from "./ProductList";
import AddedDialog from "./AddedDialog";

function App() {
  const { cart, productData } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // display quantities in cart
  let quantity = 0;
  cart.forEach((item) => {
    quantity += item.quantity;
  });

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="trademark links" id="trademark-link">
          Wox
        </Link>
        <div className="navbar-right">
          <Link to="/checkout" className="links hover-links" id="checkout-link">
            <div className="cart-svg"></div>
          </Link>
          <Link to="/signup" className="links call-to-action-btn">
            Sign Up
          </Link>
        </div>
      </nav>

      <Outlet />
      {location.pathname === "/" && (
        <>
          <header className="header">
            <div className="text-section">
              <h1>Welcome, love. This is Wox.</h1>
              <p>
                Browse through to discover more, maybe you would find something
                you like.
              </p>
              <button className="shop-now call-to-action-btn">Shop Now</button>
            </div>
          </header>
          <ProductList
            productData={productData}
            setOpen={setOpen}
          ></ProductList>
        </>
      )}
      <footer className="copyright-footer">
        Copyright © 2024 WoxCommerce. All rights reserved.
      </footer>
      <AddedDialog dialogOpen={open} setDialogOpen={setOpen}></AddedDialog>
    </>
  );
}

export default App;
