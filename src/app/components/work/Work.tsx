"use client";
import Image from "next/image";
import "./work.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import expertise from "../../../images/expertise.png";


const Work = () => {
   const [works, setWorks] = useState([]);
   const [filterWork, setFilterWork] = useState([]);
   const [activeFilter, setActiveFilter] = useState("All");
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


   const handleWorkFilter = (item) => {
     setActiveFilter(item);
    

     setTimeout(() => {
     

       if (item === "All") {
         setFilterWork(works);
       } else {
         setFilterWork(works.filter((work) => work.tags.includes(item)));
       }
     }, 500);
   };
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              < Image src={expertise} alt="expertise" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Design</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Nice Work
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">Good work</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
export default Work