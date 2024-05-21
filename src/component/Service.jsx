import React from "react";

function Service() {
  return (
    <div className="container px-5 py-32 ">
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-primary mb-10">
            Barber Pricing
          </h2>
          <div class="flex flex-wrap -mx-4">
            {/* Haircut For Men */}

            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2 text-primary">
                  Standard Haircut
                </h3>
                <p class="text-gray-700 mb-4">Includes wash, cut, and style.</p>
                <p class="text-gray-600 font-bold">₹150</p>
              </div>
            </div>

            {/* Bread trim */}

            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2 text-primary">Beard Trim</h3>
                <p class="text-gray-700 mb-4">
                  Precision beard shaping and trimming.
                </p>
                <p class="text-gray-600 font-bold">₹70</p>
              </div>
            </div>

            {/* Men Shave */}
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2 text-primary">
                  Hot Towel Shave
                </h3>
                <p class="text-gray-700 mb-4">
                  Classic straight razor shave with hot towel treatment.
                </p>
                <p class="text-gray-600 font-bold">₹200</p>
              </div>
            </div>

            {/* Women Section */}
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2 text-primary">
                  Hair coloring{" "}
                </h3>
                <p class="text-gray-700 mb-4">
                  Balayage - <span className="font-bold">₹4000</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Highlight - <span className="font-bold">₹2500</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Pre highlight - <span className="font-bold">₹3200</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Streak - <span className="font-bold">₹3500</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Colour Gloss - <span className="font-bold">₹3300</span>
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2 text-primary">Styling</h3>
                <p class="text-gray-700 mb-4">
                  Wolf Haircut - <span className="font-bold">₹1000</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Layered Haircut - <span className="font-bold">₹1500</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Wavy Cut - <span className="font-bold">₹2000</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Two-Tier Inverted Bob -{" "}
                  <span className="font-bold">₹2000</span>
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-gray-200 p-6 rounded-lg text-center">
                <h3 class="text-xl font-bold mb-2  text-primary">
                  Nail Service
                </h3>
                <p class="text-gray-700 mb-4">
                  Manicure - <span className="font-bold">₹300</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Pedicure - <span className="font-bold">₹350</span>
                </p>
                <p class="text-gray-700 mb-4">
                  Gel Nails - <span className="font-bold">₹400</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
