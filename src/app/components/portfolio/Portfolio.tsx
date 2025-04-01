import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Our Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Completed Projects</li>
        <li>Ongoing Projects</li>
        <li>Designs</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
            alt=""
          />
          <h3>Title</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
            alt=""
          />
          <h3>Title</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
            alt=""
          />
          <h3>Title</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
            alt=""
          />
          <h3>Title</h3>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
