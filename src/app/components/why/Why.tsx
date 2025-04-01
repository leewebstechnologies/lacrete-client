import Image from "next/image";
import "./why.css";

const Why = () => {
  return (
    <div className="why">
      <div className="whyContent">
        <h2>Our Special Support</h2>
        <h1>Why choose us?</h1>
        <br />
        <p>
          LA CRETE CONCEPT encourages employees to participate in safety
          courses, and other CASHES training programs. We are committed to
          ensuring a clean and healthy environment especially in the course of
          work. Every effort will be concentrated towards minimization of noise,
          and other pollution agents released during our jobs. It is expected of
          every employee to provide healthy, safe and environmentally accepted
          conditions both at work and at home. All jobs executed by this company
          shall comply with accepted codes of standard practices. All
          specifications stipulated in the drawings and contract documents must
          be strictly complied with. Necessary precautions must be taken and
          safe work practices and methods employed throughout the execution of
          the job.
        </p>
        <div className="whyItems">
          <div className="why-a">
            <div className="icons">
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>Expert & Professional</span>
              </div>
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>High Quality Work</span>
              </div>
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>Quick In Response</span>
              </div>
            </div>
          </div>
          <div className="why-b">
            <div className="icons">
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>Professional Approach</span>
              </div>
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>Satisfaction Guarantee</span>
              </div>
              <div className="icon">
                <i
                  className="circle-arrow fa-solid fa-circle-arrow-right"
                  style={{ color: "#25b60f" }}
                ></i>
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-container">
        <div className="video-border">
          <video controls>
            <source src="your-video.mp4" type="video/mp4" />
            <source src="your-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
export default Why;
