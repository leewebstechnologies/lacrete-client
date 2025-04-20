import "./about.css";
import { team } from "@/app/data";
import Image from "next/image";
import about from "../../images/about.png";

const About = () => {
  return (
    <>
      <div className="header">
        <Image src={about} width={500} height={500} alt="about" />
      </div>
      <div className="container">
        <div className="section">
          <h2>Who We Are</h2>
          <h3>LA CRETE CONCEPT RC 0978440</h3>
          <p>
            La Crete Concept is a registered company that is involved in
            consultancy, soil investigation and construction engineering works.
            We provide technical support services as well as the supply of
            building and construction materials. In the execution of all works,
            we encourage that every reasonable effort be made to ensure that all
            employees are safe, secured and healthy. Adequate welfare facilities
            are also provided to ensure our employees are happy with a sense of
            safety and protection. The working environment shall always be kept
            clean in line with our waste management and environmental protection
            policy. The prevention of all accidents, particularly those
            involving personal injury or damage to property shall be identified,
            analyzed with adequate precaution adopted, as this is essential to
            efficient operation up to management level. All employees have the
            duty to ensure that all works are carried out in line with our rules
            and regulation. Whit this in mind, employees should report potential
            hazards and observe safety rules, procedures and codes of work
            practices.
          </p>
        </div>
        <div className="section">
          <h2>Our Services</h2>
          <li>
            Building / Civil Designs (Building Plan & Structural Drawings)
          </li>
          <li>Building & Civil Construction Services</li>
          <li>Building Renovation & Maintenance</li>
          <li>Steel Works & Planning</li>
        </div>
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            To provide innovative construction solutions that exceed client
            expectations through excellence in design, engineering, and
            execution—always with integrity and professionalism.
          </p>
        </div>
        <div className="section">
          <h2>Our Vision</h2>
          <p>
            To be the leading construction partner of choice across the country,
            recognized for our commitment to quality, sustainability, and client
            satisfaction.
          </p>
        </div>
        <div className="section">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Integrity:</strong> We build trust by being honest and
              transparent.
            </li>
            <li>
              <strong>Quality:</strong> Our craftsmanship speaks for itself.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace new technologies and
              methods.
            </li>
            <li>
              <strong>Safety:</strong> Protecting lives is our top priority.
            </li>
            <li>
              <strong>Sustainability:</strong> We build with the future in mind.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Our Team</h2>
          <div className="team">
            {team.map((individual) => (
              <div className="team-member" key={individual.id}>
                <Image
                  className="img"
                  src={individual.image}
                  width={40}
                  height={40}
                  alt="John Doe"
                />
                <h4>{individual.name}</h4>
                <p>{individual.position}</p>
              </div>
            ))}
            {/* <div className="team-member">
              <Image
                src={testimonial}
                width={40}
                height={40}
                alt="Biola Ajumobi"
              />
              <h4>Jane Smith</h4>
              <p>Head of Architecture</p>
            </div>
            <div className="team-member">
              <Image src={testimonial} width={40} height={40} alt="Mike Tyson" />
              <h4>Mike Johnson</h4>
              <p>Construction Manager</p>
            </div> */}
          </div>
        </div>
        <div className="section">
          <h2>Our History</h2>
          <p>
            Founded in 2005, Lacrete Concept Constructions began as a small
            contracting firm with a big dream. Over the years, we've grown into
            a nationally recognized brand, known for delivering over 500
            successful projects across diverse sectors. Our story is built on
            hard work, dedication, and a relentless pursuit of excellence.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
