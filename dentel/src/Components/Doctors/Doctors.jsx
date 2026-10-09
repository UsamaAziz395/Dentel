import React, { useState } from "react";
import Doctorsdata from "../../data/Doctorsdata";

function Docters() {
  const [showAll, setShowAll] = useState(false);

  const visibleDoctors = showAll
    ? Doctorsdata
    : Doctorsdata.slice(0, 2);

  return (
    <section className="w-full bg-black text-white py-10 sm:py-12 overflow-hidden">

      {/* Heading */}
      <div className="text-center px-5 mb-8">
        <h1 className="text-amber-400 font-bold text-3xl sm:text-4xl mb-3">
          Meet Our Dental Experts
        </h1>

        <p className="text-gray-200 text-sm sm:text-base leading-6">
          Our experienced dental professionals are dedicated to providing personalized,
          <br className="hidden sm:block" />
          comfortable, and advanced dental care.
        </p>
      </div>

      {/* Doctors */}
      <div className="max-w-4xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 justify-items-center">

          {visibleDoctors.map((data, index) => (
            <div
              key={data.id ?? index}
              className="w-full max-w-[260px] text-center"
            >
              {/* Doctor Image */}
              <div className="w-full h-[230px] sm:h-[250px] flex items-end justify-center overflow-hidden">
                <img
                  src={data.image}
                  alt={data.name || "Dental doctor"}
                  className="w-[210px] h-full object-contain object-bottom"
                />
              </div>

              {/* Doctor Name */}
              <h3 className="text-lg font-bold text-amber-400 mt-2">
                {data.name}
              </h3>

              {/* Profession and Location - Same Row */}
              <div className="flex items-center justify-between gap-2 mt-2 w-full">
                <p className="text-xs sm:text-sm text-gray-200 text-left">
                  {data.professtion}
                </p>

                <span className="border border-amber-400 rounded-full px-3 py-1 text-[11px] sm:text-xs text-gray-200 whitespace-nowrap">
                  {data.location}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* View Full Team */}
        {Doctorsdata.length > 2 && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-white text-base sm:text-lg font-bold hover:text-amber-400 transition-colors"
            >
              {showAll ? "Show Less" : "View Full Team"} <span>⟶</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Docters;