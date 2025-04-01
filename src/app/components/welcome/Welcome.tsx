import Image from "next/image";
import "./welcome.css";
import banner3 from "../../../images/banner-3.png";
import recommendations from "../../../images/recommendation.png";
import experts from "../../../images/experts.png";
import expertise from "../../../images/expertise.png"

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <Image className="banner3" src={banner3} alt="banner3" />
        <div className="years">
          <h3>Many years of experience</h3>
          <h2>Welcome to Lacrete Concept Construction Company</h2>
          <hr className="hr" />
          <h3>Our Mission</h3>
          <p>
            LA CRETE CONCEPT Mission and Policy statement is to render the best
            quality services available anywhere with a view of providing optimum
            customer / client satisfaction through better and consistently
            improving operational procedures.
          </p>
          <h4>What we do:</h4>
          <div className="icons">
            <div className="icon">
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              />
              <span>
                Building / Civil Designs (Building Plan & Structural Drawings)
              </span>
            </div>
            <div className="icon">
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span>Building & Civil Construction Services</span>
            </div>
            <div className="icon">
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span>Building Renovation & Maintenance</span>
            </div>
            <div className="icon">
              <i
                className="circle-arrow fa-solid fa-circle-arrow-right"
                style={{ color: "#25b60f" }}
              ></i>
              <span>Steel Works & Planning</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="backgroundItems">
          <div className="item">
            <Image
              className="itemIcon"
              src={recommendations}
              alt="experience"
            />
            <span>Many years of experience</span>
          </div>
          <div className="item">
            <Image
              className="itemIcon"
              src={experts}
              alt="experience"
            />
            <span>Team of experts</span>
          </div>
          <div className="item">
            <Image
              className="itemIcon"
              src={expertise}
              alt="experience"
            />
            <span>Countless number happy clients</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome