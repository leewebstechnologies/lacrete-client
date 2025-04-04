import Image from "next/image";
import "./tabContent.css";
import banner1 from "../../../images/banner-1.png";
import { portfolioItems } from "@/app/data";

const TabContent = ({ portfolioItems }) => {
  return (
    <>
      <div className="tab-container">
        <div className="tab-content">
          {portfolioItems.map((portfolio) => (
            <div key={portfolio.id}>
              <Image
              className="img"
                src={portfolio.img}
                alt="banner1"
                width={611}
                height={914}
              />
              <h3>{portfolio.desc}</h3>
              <p>{portfolio.work}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TabContent;
