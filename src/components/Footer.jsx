import React from "react";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full mx-auto px-4 py-6 bg-gray-900 my-6 rounded-md  text-white">
      <div className="text-center">
        <p className="font-bold">Contact Us</p>
        <div className="flex items-center justify-center gap-6 font-bold text-3xl my-4">
          <FaFacebookF className=" cursor-pointer text-blue-400" />
          <FaInstagramSquare className=" cursor-pointer text-red-800" />
          <FaTwitter className=" cursor-pointer text-blue-600" />
        </div>
        <p>elegantPlanning@gmail.com</p>
        <p>+8888 999 88</p>
      </div>
      <div className="text-xs flex flex-nowrap md:flex-row  lg:flex-row justify-between lg:justify-evenly my-6 items-center">
        <ul className="flex flex-col font-bold space-y-4">
          <li>Elegant Design</li>
          <li>Cost Friendly</li>
          <li>Best Team</li>
          <li>24/7 services</li>
        </ul>
        <ul className="flex flex-col font-bold space-y-4">
          <li>Australia</li>
          <li>Banglades</li>
          <li>Africa</li>
          <li>Europe</li>
        </ul>
        <ul className="flex flex-col font-bold space-y-4">
          <li>Consultation</li>
          <li>Thinking</li>
          <li>Explore</li>
          <li>Work Hard</li>
        </ul>
      </div>
    </footer>
  );
}
