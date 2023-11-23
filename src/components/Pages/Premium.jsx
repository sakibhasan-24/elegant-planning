import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function Premium() {
  return (
    <section className="max-w-6xl mx-auto  rounded-lg my-12 ">
      <Marquee>
        <div className="bg-purple-200 py-2 px-4 text-xs font-bold flex gap-4">
          <h1 className="text-lg ">
            20% Off on{" "}
            <span className="text-orange-500">Honeymoon tour planning</span>{" "}
          </h1>
          <h1 className="text-lg ">
            20% Off on <span className="text-orange-800"> transportation</span>{" "}
          </h1>
          <h1 className="text-lg ">
            10% Off on <span className="text-blue-900">Photography </span>{" "}
          </h1>
          <button className="bg-blue-400 px-4 py-2 rounded-md text-xs">
            <Link to="/">Explore More</Link>
          </button>
        </div>
      </Marquee>
    </section>
  );
}
