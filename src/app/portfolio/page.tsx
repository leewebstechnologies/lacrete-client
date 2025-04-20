"use client";
import { useState } from "react";
import "./portfolio.css";
import { projects } from "@/app/data";
import Image from "next/image";

const Portfolio = () => {
  const categories = [
    "All",
    "Completed Projects",
    "Ongoing Projects",
    "Designs",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  return (
    <>
      <div className="portfolio-container">
        <h1 className="portfolio-title">Our Recent Portfolio</h1>
        <div className="portfolio-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`tab-button ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <Image
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h2 className="portfolio-project-title">{project.title}</h2>
                <p className="portfolio-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
