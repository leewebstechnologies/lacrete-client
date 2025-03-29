import "./slider.css";
import banner1 from "../../../images/banner-1.png";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={banner1}
              className="d-block w-100"
              alt="..."
              style={{ height: "800px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Company</h5>
              <p>We build quality projects for our clients</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src={banner1}
              className="d-block w-100"
              alt="..."
              style={{ height: "800px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Company</h5>
              <p>We build top-notch projects</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src={banner1}
              className="d-block w-100"
              alt="..."
              style={{ height: "800px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Company</h5>
              <p>We satisfy clients</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="wrapper">
        <div className="content">
          <h3>Looking for a quality constructor for your next project?</h3>   
        </div>
        <button className="btn">GET IN TOUCH</button>
      </div>
    </>
  );
}
export default Slider