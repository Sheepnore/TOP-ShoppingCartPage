import "./index.css";
import App from "./App.jsx";
import ProductList from "./ProductList.jsx";
import Checkout from "./Checkout.jsx";
import CartProvider from "./CartProvider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes}></RouterProvider>
    </CartProvider>
  </StrictMode>
);
