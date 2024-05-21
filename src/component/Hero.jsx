import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Team from "./Team";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div id="home" className=" hero-img  h-screen w-full">
        <div className="w-full h-full bg-opacity-60 bg-black flex justify-center items-center text-center ">
          <div className="h-fit flex flex-col md:flex-row md:w-3/5 w-4/5 justify-around items-center rounded-lg">
            {/* <div className="flex-1">
            <p className="mb-2">All you need</p>
            <p>Men & Woman</p>
          </div> */}

            <div className="bg-secondary border-[8px] border-primary text-white px-8 py-6 text-2xl shadow-lg border- font-bold">
              <Link to="/bookappointment">Book Appointment</Link>
            </div>
            {/* <div className="flex-1 text-left md:mx-4">
            <p className="mb-2">Contact: 77382-23607</p>
            <p className=" text-xs">
              <span className="font-semibold">Kesh a Family Salon</span>, Shop
              no-1, Sunshine CHS, Lake road, Mumbai ,Maharashtra.
            </p>
          </div> */}
          </div>
        </div>
      </div>
      <About />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
};

export default Hero;
