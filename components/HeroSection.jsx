// components/HeroSection.js
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Build Your Best Resume Yet
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text sm:max-w-400">
          Effortless Design, <br /> Powerful Results.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your career growth and bring your resume to life with our
        intuitive resume builder tools. Get started today and turn your
        professional profile into an impressive showcase!
      </p>

      <div className="flex justify-center my-10">
        <Link href="/form" legacyBehavior>
          <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-xl">
            Get Started here
          </a>
        </Link>
        <a href="#" className="py-3 px-4 mx-3 rounded-xl border">
          Demo
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center">
        <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">SmartResume</h2>
          <ul className="list-none text-lg">
            <li className="flex items-center mb-4">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              <span>It's free</span>
            </li>
            <li className="flex items-center mb-4">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              <span>Easy to use</span>
            </li>
            <li className="flex items-center mb-4">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              <span>User-friendly interface</span>
            </li>
            <li className="flex items-center mb-4">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              <span>Professional templates</span>
            </li>
            <li className="flex items-center mb-4">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              <span>Instant preview and download</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-6">
          <h2 className="text-2xl font-bold mb-4">Other Resume Builders</h2>
          <ul className="list-none text-lg">
            <li className="flex items-center mb-2">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              Limited templates
            </li>
            <li className="flex items-center mb-2">
              <RiVerifiedBadgeFill className="text-orange-700 w-6 h-6 mr-2" />
              Pay to use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
