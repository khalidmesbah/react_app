import "./ProductsList.css";
import Product from "./Product";
import { useEffect, useState } from "react";
function ProductsList() {
  const apiUrl = `https://fakestoreapi.com/products`;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      let res, json;
      res = await fetch(apiUrl);
      json = await res.json();
      setProducts(json);

      res = await fetch(`${apiUrl}/categories`);
      json = await res.json();
      setCategories(json);
    })();
  }, [apiUrl]);
  const getProductsWithCategory = async (category) => {
    let api;
    if (category === "all") api = apiUrl;
    else api = `${apiUrl}/category/${category}`;
    const res = await fetch(api);
    const json = await res.json();
    setProducts(json);
  };
  return (
    <>
      <h2 className="text-center p-4">Our Products</h2>
      {
        <div className="d-flex gap-2 justify-content-center align-items-center pb-3">
          <button
            key="all"
            className="btn btn-info"
            onClick={() => getProductsWithCategory("all")}
          >
            all
          </button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                className="btn btn-info"
                onClick={() => getProductsWithCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      }
      <div className="d-flex justify-content-center align-items-stretch flex-wrap gap-5">
        {products.map((product, index) => {
          return <Product product={product} key={product.id} showBtn={true} />;
        })}
      </div>
    </>
  );
}
export default ProductsList;
