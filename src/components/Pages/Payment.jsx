import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Payment({ payment }) {
  AOS.refresh();
  const { bankingMethodName, logo, facilities, countrywiseaccess } = payment;
  console.log(countrywiseaccess);
  return (
    <section
      data-aos="fade-top"
      className="shadow-2xl px-4 py-3 border-4 bg-lime-800 font-semibold"
    >
      <div className="w-full">
        <img className="w-full rounded-md" src={logo} alt="img" />
      </div>
      <div className=" my-8">
        <div>
          <h1 className=" text-center textl-xl">
            {" "}
            you can pay through {bankingMethodName}
          </h1>
          <h1 className="bg-green-950 text-white px-4 py-2 rounded-lg text-center w-1/2 mx-auto my-4">
            Benfits
          </h1>
          <div
            data-aos="fade-down"
            className="flex flex-nowrap gap-1 md:gap-4 lg:gap-4"
          >
            {facilities.map((facility, idx) => (
              <p className="bg-orange-800 px-1 rounded-md" key={idx}>
                {facility}
              </p>
            ))}
          </div>

          <p className="text-center my-4">You can access From</p>
          <div className="flex flex-nowrap gap-1 lg:gap-2 md:gap-2">
            {countrywiseaccess.map((access, idx) => (
              <p
                className="rounded-md bg-blue-700 text-white px-0 font-bold md:px-2 lg:px-2 whitespace-nowrap"
                key={idx}
              >
                {access}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
