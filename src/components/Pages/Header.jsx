import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Experience from "./Experience";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full">
      <Navbar />
      <Banner />
      <Experience />
    </header>
  );
}
