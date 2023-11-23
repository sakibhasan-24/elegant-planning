import React from "react";
import { Link } from "react-router-dom";

export default function Service({ service }) {
  //   console.log(service);
  const {
    title,
    interestingFacts,
    image,
    category,
    serviceName,
    id,
    description,
    offer,
    price,
    contactInfo,
  } = service;

  return (
    <div className="w-4/5 mx-auto lg:w-full shadow-xl bg-gray-200 py-1 px-2 relative rounded-lg">
      <div className="w-full mx-auto">
        <img
          className="w-full  rounded-xl px-2 py-1"
          src={image}
          alt="service-image"
        />
      </div>
      <div className="flex  flex-col">
        <div className="">
          <h1 className="text-md text-center  text-gray-600 font-bold">
            {serviceName}
          </h1>
        </div>
        <div className="w-4/5 flex-grow  mx-auto ">
          <h1 className="font-bold h-[50px] text-center text-blue-600 ">
            {title}
          </h1>
          <p className="my-4 text-center bg-green-800 px-2 py-1 rounded-md text-white font-bold w-3/4 mx-auto">
            {category}
          </p>
          <p className="text-gray-500 h-[150px] flex-grow font-semibold text-lg text-center">
            {description.slice(0, 70)}....
          </p>
          {offer && (
            <p className="bg-green-700  w-1/2 whitespace-nowrap text-xs absolute  top-2 -left-3 lg:top-2 lg:left-1 text-white px-4 py-2 rounded-md">
              Offer Avaiable
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg ">Price:${price}</p>
        <button className="bg-blue-600 text-gray-200 px-2 py-1 text-xs md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-md lg:font-bold">
          <Link to={`/services/${category}/${id}`}>Explore More</Link>
        </button>
      </div>
    </div>
  );
}
