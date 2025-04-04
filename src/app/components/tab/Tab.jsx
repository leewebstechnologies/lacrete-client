"use client";

import TabButtons from "../tabButtons/TabButtons";
import TabContent from "../tabContent/TabContent";
import "./tab.css";
import { portfolioItems } from "../../data";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="main-container">
        <h2>Our Creative Portfolio</h2>
        <TabButtons
          portfolioItems={portfolioItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabContent portfolioItems={portfolioItems} activeTab={activeTab} />
      </div>
    </>
  );
};
export default Tab;
