import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  AOS.init({
    duration: 1800,
  });
  return (
    <section className="lg:my-2  bg-gradient-to-r from-blue-800 to-blue-500 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center justify-between">
      <div className=" mx-2 lg:mx-4 my-4 col-span-1 text-center order-last lg:order-first">
        <h1 className="text-2xl ">
          Design{" "}
          <span className="uppercase text-orange-400 font-bold">Elegant</span>{" "}
          Approach
        </h1>
        <div
          data-aos="fade-bottom"
          data-aos-anchor-placement="top-center"
          className=" lg:w-full mx-auto text-xl lg:text-4xl space-y-3 mt-6 font-semibold text-gray-200"
        >
          <h1>Consultation</h1>
          <h1>Planning</h1>
          <h1>Solution</h1>
        </div>
        <button className="bg-orange-700 mt-6 px-4 py-3 rounded-md font-bold">
          Explore More
        </button>
      </div>
      <div
        data-aos="fade-top"
        data-aos-anchor-placement="top-center"
        className="lg:col-span-2 lg:px-6 py-2 rounded-md w-full"
      >
        <img
          className="rounded-md mr-0 w-full lg:w-4/5"
          src="https://i.ibb.co/rpsYxnj/bannerimage.jpg"
          alt="banner"
        />
      </div>
    </section>
  );
}

// https://i.ibb.co/rpsYxnj/bannerimage.jpg
