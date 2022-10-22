import { Link } from "react-router-dom";
function Product({
  product: { id, image, title, description, price },
  showBtn,
}) {
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ maxWidth: "100%", aspectRatio: "1", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <small>Price: {price}</small>
        <br />
        {showBtn && (
          <Link className="btn btn-primary" to={`/product/${id}`}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}
export default Product;
