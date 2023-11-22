import { FaCarSide } from "react-icons/fa";
import { GiSelfLove, GiPartyPopper } from "react-icons/gi";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto my-8">
      <h1 className="text-center text-4xl font-bold">Our Experience</h1>
      <div>
        {/* card One */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
          <div className="bg-orange-800 px-4 py-3 space-y-6 rounded-md ">
            <h1 className="font-bold text-gray-200 text-lg">
              More Than <span className="text-4xl">300</span>+ transport event
              so far..
            </h1>
            <p className="text-lg font-semibold text-center">
              We Give Our Service All Over The World .We have given service.....{" "}
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-center">
              <span className="bg-purple-700 px-4 whitespace-nowrap ">
                Australia
              </span>
              <span className="bg-lime-700 px-4 whitespace-nowrap">
                Bangladesh
              </span>
              <span className="bg-red-500 px-4 whitespace-nowrap">
                Swizerland
              </span>
            </div>

            <FaCarSide className="text-6xl w-full font-bold text-center" />
          </div>
          <div className="bg-orange-800 px-4 py-3 space-y-6 rounded-md">
            <h1 className="font-bold text-gray-200 text-lg">
              More Than <span className="text-4xl">100</span>+ Honeymoon Plan
              successufully so far..
            </h1>
            <p className="text-lg font-semibold text-center">
              We Give Our Service All Over The World .We have given service.....
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-center">
              <span className="bg-purple-700 px-4 whitespace-nowrap ">
                Cox's Bazar
              </span>
              <span className="bg-lime-700 px-4 whitespace-nowrap ">Bali</span>
              <span className="bg-red-500 px-4 whitespace-nowrap">Maldivs</span>
            </div>

            <GiSelfLove className="text-6xl w-full font-bold text-center" />
          </div>
          <div className="bg-orange-800 px-4 py-3 space-y-6  rounded-md">
            <h1 className="font-bold text-gray-200 text-lg">
              More Than <span className="text-4xl ">700</span>+ Entertainment
              successufully so far..
            </h1>
            <p className="text-lg font-semibold text-center">
              {" "}
              We Give Our Service All Over The World .We have given service.....
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-center">
              <span className="bg-purple-700 px-4 whitespace-nowrap ">
                Live Music
              </span>
              <span className="bg-lime-700 px-4 whitespace-nowrap">
                Live Welcome
              </span>
              <span className="bg-red-500 px-4 whitespace-nowrap">Comedy</span>
            </div>

            <FaCarSide className="text-6xl w-full font-bold text-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
