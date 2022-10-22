import "./ProductsList.css";
import Product from "./Product";
import { useEffect, useState } from "react";
function ProductsList() {
  const apiUrl = `https://fakestoreapi.com/products`;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    (async () => {
      let res, json;
      res = await fetch(apiUrl);
      json = await res.json();
      setProducts(json);
      if (categories.length <= 1) {
        res = await fetch(`${apiUrl}/categories`);
        json = await res.json();
        setCategories([...categories, ...json]);
      }
    })();
    return () => {
      // makeMasonryLayout();
      console.log(`hi`);
    };
  }, []);

  const getProductsWithCategory = async (e, category) => {
    [...document.querySelectorAll("button")].forEach((btn) => {
      btn.classList.remove("btn-info");
    });
    e.currentTarget.classList.add("btn-info");
    let api;
    if (category === "all") api = apiUrl;
    else api = `${apiUrl}/category/${category}`;
    const res = await fetch(api);
    const json = await res.json();
    setProducts(json);
  };

  const makeMasonryLayout = () => {
    [...document.querySelectorAll(`.card`)].forEach((currentCard) => {
      currentCard.style.top = `0px`;
      const cards = [...document.querySelectorAll(`.card`)];
      const { right: currentRight, top: currentTop } =
        currentCard.getBoundingClientRect();
      const theAboveCard = cards.reverse().find((c) => {
        const { right, top } = c.getBoundingClientRect();
        if (right === currentRight && top < currentTop) return c;
      });
      if (!theAboveCard) return;
      const { bottom } = theAboveCard.getBoundingClientRect();
      currentCard.style.top = `-${currentTop - bottom - 48}px`;
    });
  };

  useEffect(() => {
    makeMasonryLayout();
    window.addEventListener("resize", makeMasonryLayout);
  }, [products]);

  return (
    <>
      <h2 className="text-center p-4">Our Products</h2>
      <div className="d-flex gap-2 justify-content-center align-items-center pb-3">
        {categories.length > 1 ? (
          categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-success text-capitalize ${
                cat === "all" && "btn-info"
              }`}
              onClick={(e) => getProductsWithCategory(e, cat)}
            >
              {cat}
            </button>
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
      <div className="cards">
        {products.length >= 1 ? (
          products.map((product) => {
            return (
              <Product product={product} key={product.id} showBtn={true} />
            );
          })
        ) : (
          <h2>Fetching the API</h2>
        )}
      </div>
    </>
  );
}
export default ProductsList;
