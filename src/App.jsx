import { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    const getData = async function () {
      const data = await fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="cart" className="links">
          Checkout
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
          <div className="img-sec">
            <img src="" alt="" />
          </div>
        </div>
        <div className="product-info">List of all products here</div>
      </div>
    </>
  );
}

export default App;
