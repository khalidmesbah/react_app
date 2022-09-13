import '../App.css'
import image1 from "./images/image-1.avif";
import image2 from "./images/image-2.avif";
import image3 from "./images/image-3.avif";
import './Slider.css'
function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide col-12 col-md-6 h-50 ms-auto me-auto"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="cat" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="cat" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="cat" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
