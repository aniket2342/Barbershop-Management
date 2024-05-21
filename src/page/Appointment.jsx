import React, { useState } from "react";

const Appointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [slots, setSlots] = useState([
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: false },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
    // Add more slots as needed
  ]);

  const handleBarberSelect = (barber) => {
    setSelectedBarber(barber);
  };

  const handleServiceSelect = (service) => {
    const index = selectedServices.indexOf(service);
    if (index === -1) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    }
  };

  const handleSlotClick = (index) => {
    console.log(index);
    setSelectedSlot(index);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black py-[10em]">
      <h2 className="mt-6 text-xl font-semibold text-primary">Book Appointment</h2>
      <div className="mt-4">
        <p className="mt-6 text-xl font-semibold text-white flex justify-center mb-10">Please select barber</p>
        <div className="flex gap-10">
          <img
            src="https://heygoldie.com/blog/wp-content/uploads/2021/12/barbershop-terminology-1.jpg"
            alt="barber1"
            className={`h-[12em] aspect-square rounded-md ${selectedBarber === "barber1" ? "border-2 border-green-500" : ""
              }`}
            onClick={() => handleBarberSelect("barber1")}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqh4TF8IOH-lWajeU3ik76gYyESj0Wavw3yw&usqp=CAU"
            alt="barber2"
            className={`h-[12em] aspect-square rounded-md ${selectedBarber === "barber2" ? "border-2 border-green-500" : ""
              }`}
            onClick={() => handleBarberSelect("barber2")}
          />
        </div>
      </div>
      {selectedBarber && (
        <div className="px-5 py-5">
          <p className="mt-6 text-xl font-semibold text-primary mb-10">Select Services</p>
          <div className="flex flex-col gap-4 bg-white px-5 py-5">

            <div className="grid grid-cols-2 border border-black rounded-lg ">
              <div className="service-header px-5 py-5">
                <h2 className="border-none  ">Standard Haircut</h2>
                <p className="border-none  rounded-md ">(wash, cut, and style)</p>
              </div>
              <div className="service-details flex justify-end ">
                <button
                  onClick={() => handleServiceSelect("standard-haircut")}
                  className={`bg-${selectedServices.includes("standard-haircut") ? "white" : "primary"} py-2 px-4 rounded-lg`}
                >
                  ₹150
                </button>
              </div>
            </div>



            <div className="grid grid-cols-2 border border-black rounded-lg">
              <div className="service-header px-5 py-5">
                <h2 className="border-none">Beard Trim</h2>
                <p className="border-none rounded-md">(Precision beard shaping and trimming.)</p>
              </div>
              <div className="service-details flex justify-end">
                <button
                  onClick={() => handleServiceSelect("beard-trim")}
                  className={`bg-${selectedServices.includes("beard-trim") ? "white " : "primary"} py-2 px-4 rounded-lg`}
                >
                  ₹70
                </button>
              </div>
            </div>


            <div className="grid grid-cols-2 border border-black rounded-lg">
  <div className="service-header px-5 py-5">
    <h2 className="border-none">Hot Towel Shave</h2>
    <p className="border-none rounded-md">(Classic straight razor shave with hot towel treatment.)</p>
  </div>
  <div className="service-details flex justify-end">
    <button
      onClick={() => handleServiceSelect("hot-towel-shave")}
      className={`bg-${selectedServices.includes("hot-towel-shave") ? "white" : "primary"} py-2 px-4 rounded-lg`}
    >
      ₹200
    </button>
  </div>
</div>

<div className="container mx-2 my-2 flex justify-center ">
        <h1 className="mt-6 text-xl font-semibold text-black mb-10">Hair Coloring</h1>
  </div>

<div className="grid grid-cols-2 gap-4">
  
  <div className="border bg-primary p-4 rounded-lg">
    <h3 className="border-none">Balayage</h3>
    <button
      onClick={() => handleServiceSelect("balayage")}
      className={`bg-${selectedServices.includes("balayage") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹4000
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Highlight</h3>
    <button
      onClick={() => handleServiceSelect("highlight")}
      className={`bg-${selectedServices.includes("highlight") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹2500
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Pre highlight</h3>
    <button
      onClick={() => handleServiceSelect("pre-highlight")}
      className={`bg-${selectedServices.includes("pre-highlight") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹3200
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Streak</h3>
    <button
      onClick={() => handleServiceSelect("streak")}
      className={`bg-${selectedServices.includes("streak") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹3500
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Colour Gloss</h3>
    <button
      onClick={() => handleServiceSelect("colour-gloss")}
      className={`bg-${selectedServices.includes("colour-gloss") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹3300
    </button>
  </div>
</div>

<div className="container mx-2 my-2 flex justify-center ">
        <h1 className="mt-6 text-xl font-semibold text-black mb-10">Styling</h1>
  </div>

<div className="grid grid-cols-2 gap-4">
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Wolf Haircut</h3>
    <button
      onClick={() => handleServiceSelect("wolf-haircut")}
      className={`bg-${selectedServices.includes("wolf-haircut") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹1000
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Layered Haircut</h3>
    <button
      onClick={() => handleServiceSelect("layered-haircut")}
      className={`bg-${selectedServices.includes("layered-haircut") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹1500
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Wavy Cut</h3>
    <button
      onClick={() => handleServiceSelect("wavy-cut")}
      className={`bg-${selectedServices.includes("wavy-cut") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹2000
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Two-Tier Inverted Bob</h3>
    <button
      onClick={() => handleServiceSelect("two-tier-inverted-bob")}
      className={`bg-${selectedServices.includes("two-tier-inverted-bob") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹2000
    </button>
  </div>
</div>

<div className="container mx-2 my-2 flex justify-center ">
        <h1 className="mt-6 text-xl font-semibold text-black mb-10">Nail Service</h1>
  </div>

  <div className="grid grid-cols-2 gap-4">
  {/* Table 1 */}
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("manicure")}
      className={`bg-${selectedServices.includes("manicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹300
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("pedicure")}
      className={`bg-${selectedServices.includes("pedicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹350
    </button>
  </div>
  {/* Table 2 */}
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("gel-nails")}
      className={`bg-${selectedServices.includes("gel-nails") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹400
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("manicure")}
      className={`bg-${selectedServices.includes("manicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹300
    </button>
  </div>
  {/* Table 3 */}
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("pedicure")}
      className={`bg-${selectedServices.includes("pedicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹350
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("gel-nails")}
      className={`bg-${selectedServices.includes("gel-nails") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹400
    </button>
  </div>
  {/* Table 4 */}
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("manicure")}
      className={`bg-${selectedServices.includes("manicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹300
    </button>
  </div>
  <div className="border-none bg-primary p-4 rounded-lg">
    <h3 className="border-none">Nail Service</h3>
    <button
      onClick={() => handleServiceSelect("pedicure")}
      className={`bg-${selectedServices.includes("pedicure") ? "green" : "white"} py-2 px-4 rounded-lg`}
    >
      ₹350
    </button>
  </div>
</div>

            {/* </div> */}
          </div>
        </div>
      )}
      {selectedServices.length > 0 && (
        <div className="flex flex-col gap-6 mt-6 bg-white">
          <p >Select time slot</p>
          {/* Time Slot Scheduler */}
          {slots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleSlotClick(index)}
              disabled={!slot.available}
              className={`${selectedSlot === index ? "bg-green-400" : ""
                } ${slot.available ? "" : "bg-gray-400"}`}
            >
              {slot.time} {slot.available ? "(Available)" : "(Booked)"}
            </button>
          ))}
        </div>
      )}
      <button
        className={`bg-green-500 mt-6 ${selectedServices.length === 0 ? "hidden" : ""
          }`}
        onClick={() => alert("BOOKING CONFIRMED")}
      >
        Confirm booking
      </button>
    </div>
  );
};

export default Appointment;
