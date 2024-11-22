import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Checkout from "./Checkout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./CartProvider.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "checkout", element: <Checkout /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>
);
