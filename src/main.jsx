import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Cart from "./Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./CartProvider.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>
);
