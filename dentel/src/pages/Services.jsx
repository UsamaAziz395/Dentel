
import React, { useState } from "react";
import Servicesdata from "../data/Servicesdata";

function Services() {
  const [viewmore, setViewMore] = useState(false);

  return (
    <>
      <div className="my-10 mx-3">
        <h1 className="text-3xl text-amber-400 font-bold text-center uppercase">
          Our Dental Services
        </h1>

        <div className="flex justify-center py-3">
          <p className="text-center text-sm sm:text-base">
            Comprehensive dental care designed to keep your smile healthy,
            confident, and beautiful.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-4 sm:gap-5 py-5">
        {Servicesdata.slice(0, viewmore ? Servicesdata.length : 4).map((data) => (
          <div
            key={data.id}
            className="w-full max-w-[280px] border border-amber-400 rounded-2xl overflow-hidden shadow-md shadow-amber-400/20"
          >
            {/* Image and Overlay */}
            <div className="relative">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[220px] sm:h-[250px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-3">
                <h2 className="text-lg font-bold text-amber-400 text-center">
                  {data.service}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center my-5">
        <button
          type="button"
          onClick={() => setViewMore(!viewmore)}
          className="text-yellow-500 uppercase py-2 border-2 px-5 rounded-full border-amber-400 hover:bg-amber-400 hover:text-black duration-300 transition-colors"
        >
          {viewmore ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
}

export default Services;

