import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Experience from "./Experience";
import Payments from "./Payments";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full">
      <Navbar />
      <Banner />
      <Experience />
      <Payments />
    </header>
  );
}
