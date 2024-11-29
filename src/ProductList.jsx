import Product from "./Product";

const ProductList = ({ productData, setOpen }) => {
  return (
    <main className="home">
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
    </main>
  );
};

export default ProductList;
