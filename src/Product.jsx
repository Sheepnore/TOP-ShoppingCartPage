import { useEffect, useState, useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "./CartProvider";

export default function Product({ id, image, title, price, setOpen }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const saveItem = { quantity, id };

  // convert select value into number and update quantity
  const getQuantity = (input) => {
    input = Number(input);
    setQuantity(input);
  };

  const addToCart = (item) => {
    let isInCart = false;
    cart.map((obj) => {
      if (obj.id === item.id) {
        isInCart = true;
      }
    });
    if (isInCart === false) {
      setCart([...cart, item]);
    } else {
      const modified = cart.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, quantity: obj.quantity + item.quantity };
        } else {
          return obj;
        }
      });
      setCart(modified);
    }
  };

  return (
    <div className="product-card" key={id}>
      <div className="productImage">
        <img src={image} className="img" />
      </div>
      <div className="title">{title}</div>
      <form action="#">
        <span className="priceTag">${price}</span>
        <select
          className="quantity-dropdown"
          onChange={(e) => {
            getQuantity(e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={() => {
            addToCart(saveItem);
            setOpen(true);
          }}
        >
          Buy
        </Button>
      </form>
    </div>
  );
}
