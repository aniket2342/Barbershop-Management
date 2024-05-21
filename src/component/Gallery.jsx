import React from "react";
import trimmer from "../assets/gallery/trimer.png";
import img1 from "../assets/gallery/coloring11.jpg";
import img2 from "../assets/gallery/coloring13.jpg";
import img3 from "../assets/gallery/coloring3.jpg";
import img4 from "../assets/gallery/style1.jpg";
import img5 from "../assets/gallery/style4.jpg";
import img6 from "../assets/gallery/style5.jpg";


const Gallery = () => {
  return (
    <>
    <div id="gallery" className="pt-20 container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex  ">
        <div className="overflow-hidden">
          <p
            id="gallery"
            className="text-center text-3xl font-bold my-4 text-primary"
          >
            Gallery
          </p>
          <p className="p-4 px-6 text-justify text-white w-full  pl-4 mx-auto">
            It is dedicated to the contemporary Indian woman’s exploration of
            the fine art of beauty. Known for our magical concoction of stunning
            make-up, fabulous hair and excellent skin services,Kesh Salon are
            dedicated towards the evolvement of the modern Indian woman and her
            exploration of beauty. Professionally trained hair and makeup
            experts with countless shows under our belt and outstanding skin
            services come together at Kesh Salon and offer an unforgettable
            experience.
          </p>
        </div>
        <img className=" mx-auto w-[20vw] object-scale-down  "  src={trimmer} alt="" />
      </div>

      <div className="flex flex-wrap md:-m-2 -m-1 container">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1}></img>
              </div>
              <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img2}></img>
              </div>
              <div className="md:p-2 p-1 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={img3}></img>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 ">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={img4}></img>
              </div>
              <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img5}></img>
              </div>
              <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img6}></img>
              </div>
            </div>
          </div>
        </div>
        </> 
  );
};

export default Gallery;
