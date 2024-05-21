import React from "react";
import logo from "../assets/kesh1.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex md:flex-row flex-col pt-20 bg-black text-white"
    >
      <div className="md:w-[30%] w-full">
        <img src={logo} alt="logo" className="mx-auto max-h-[40vh]" />
      </div>
      <div className="md:w-[70%] w-full flex flex-col justify-center ">
        <p className="text-center text-3xl font-bold mb-4 text-primary">
          About Us
        </p>
        <p className="p-4 px-6 text-justify">
          Kesh Salon, offers expert services in hairstyling, skin and beauty
          care. It is dedicated to the contemporary Indian woman’s exploration
          of the fine art of beauty. Known for our magical concoction of
          stunning make-up, fabulous hair and excellent skin services, Kesh
          Salon are dedicated towards the evolvement of the modern Indian woman
          and her exploration of beauty. Professionally trained hair and makeup
          experts with countless shows under our belt and outstanding skin
          services come together at Kesh Salon and offer an unforgettable
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
