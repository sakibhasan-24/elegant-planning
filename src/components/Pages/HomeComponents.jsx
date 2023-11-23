import React from "react";
import Banner from "./Banner";
import Experience from "./Experience";
import Payments from "./Payments";
import Services from "./Services";

export default function HomeComponents() {
  return (
    <div>
      <Banner />
      <Services />
      <Experience />
      <Payments />
    </div>
  );
}
