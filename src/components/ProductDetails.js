import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
function ProductDetails() {
  const params = useParams();
  const apiUrl = `https://fakestoreapi.com/products/${params.productId}`;
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl);
      const json = await res.json();
      setProduct(json);
    })();
  }, []);

  return <Product product={product} showBtn={false} />;
}
export default ProductDetails;
