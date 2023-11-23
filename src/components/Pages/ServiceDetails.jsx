import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../Spinner";

export default function ServiceDetails() {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  if (loading) {
    return <Spinner />;
  }
  const services = useLoaderData();
  console.log(services);

  //   const [singleService, setSingleService] = useState(services);
  const newService = services?.find((service) => service.id == id);
  const {
    title,
    interestingFacts,
    image,
    category,
    serviceName,
    additionalService,
    description,
    offer,
    price,
    contactInfo,
  } = newService;
  //   console.log(newService);
  return (
    <section className="my-12 max-w-3xl mx-auto">
      <div className="shadow-2xl py-2 px-4 rounded-md">
        <img className="w-full" src={image} alt="iamges" />
      </div>
      <div className="my-12">
        <div className="bg-gray-100 max-w-2xl mx-auto text-center rounded-lg font-bold space-y-4 py-6">
          <h1 className="bg-green-600 py-4 px-8 rounded-md max-w-xl mx-auto cursor-pointer hover:bg-green-400">
            {title}
          </h1>
          <p className="bg-purple-600 py-4 px-8 rounded-md max-w-xl mx-auto cursor-pointer hover:bg-purple-400">
            {serviceName}
          </p>
        </div>
        <p className="text-center text-gray-500 text-xl my-6">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <p className="bg-red-400 rounded-md text-white font-bold text-xs px-4 py-2">
            category:{category}
          </p>
          <p className="bg-blue-800 rounded-md text-white font-bold text-xs px-4 py-2">
            ${price}
          </p>
        </div>
        {offer && (
          <div className="bg-gray-100 px-4 py-2  rounded-md my-6">
            <p className="font-semibold text-xs my-6">
              Based On Offer you will get{" "}
              <span className="bg-red-800 px-2 py-1 rounded-md text-white">
                {additionalService}
              </span>
            </p>
          </div>
        )}

        <div>
          <p className="text-center text-gray-700 font-bold text-xl my-4">
            speciality
          </p>
          <p className="bg-red-300 px-4 py-3 font-semibold text-lg rounded-lg">
            {interestingFacts}
          </p>
        </div>
        <div className="max-w-xl mx-auto px-4 py-6 bg-gray-900 my-6 rounded-md text-center text-white">
          <p className="font-bold">Contact Us</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
      </div>
    </section>
  );
}
