import React from "react";
import map from '../assets/map2.jpg';

const Contact = () => {
  return (
    <>

      {/*Map Section*/}
      <div id="contact" className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Column - Time Schedule */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-primary">Time Schedule</h2>
          <ul>
            <li className="text-white">Sunday To Saturday : 10:30 AM - 11:00PM</li>
            <li className="text-white">Monday : Holiday</li>
            <li className="text-white">Contact : 77382-23607</li>
            <li className="text-white">Address : Kesh a Family Salon, shopno-1, Sunshine CHS, LAke Rd,Mumbai,Maharashtra</li>
          </ul>
        </div>

        {/* Second Column - Responsive Image and Button */}
        <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
          <img
            src={map}
            alt="Responsive Image"
            className="max-w-full h-auto mb-4"
          />
          <button className="">
            <a href="https://maps.app.goo.gl/3MiqrybqLeKxyQGcA"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
              open With Google Map
            </a>
          </button>
        </div>
      </div>

      {/* Contact */}

      <div id="contact" className="py-20  w-4/5 md:w-3/5 max-w-[800px] mx-auto">
        <p className="text-center text-3xl font-bold my-4 text-primary">
          Contact
        </p>
        <div className="flex flex-col gap-4 text-white">
          <div>
            <p className="mb-2">Name</p>
            <input
              className="p-2  w-full bg-primary bg-opacity-70 text-white focus:outline-none focus:border-b-2 border-white"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <p className="mb-2">Email</p>
            <input
              className="p-2  w-full bg-primary bg-opacity-70 text-white focus:outline-none focus:border-b-2 border-white"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <p className="mb-2">Message</p>
            <textarea
              className="p-2  w-full bg-primary bg-opacity-70 text-white focus:outline-none focus:border-b-2 border-white"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>

      {/*Testimonials*/}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg text-white">A real gentleman,
              keep quiet and enjoy.</p> 
            <span class="inline-block h-1 w-10 rounded bg-primary mt-8 mb-6"></span>
            <h2 class="text-primary font-medium title-font tracking-wider text-sm">Dilip</h2>
            <p class="text-primary">Manager</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
