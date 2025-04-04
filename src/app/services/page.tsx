"use client";
import { useState } from "react";
import "./services.css";
import Tabs from "../components/tabs/Tabs";
import { tabData } from "../data";



const Services = () => {
  return (
    <>
      <Tabs tabs={tabData} />
    </>
  )
}
export default Services