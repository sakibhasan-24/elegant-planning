import React, { useEffect, useState } from "react";
import Service from "./Service";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-center font-semibold text-2xl">
        Our <span className="text-orange-500">Service</span>
      </h1>
      <section className="grid lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </section>
    </div>
  );
}
