"use client";

import React, { useState } from "react";
import "./tabs.css"; // import the CSS file

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <h2>Our Creative Portfolio</h2>
      <div className="tabs-container">
        <div className="tab-headers">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabs[activeTab]?.content}</div>
      </div>
    </>
  );
};

export default Tabs;
