import React from "react";
import Appointment from "../Appointment/Appointment";
import { Link } from "react-router-dom";
import leftimage from "../../assets/images/leftimage.png";

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

        {/* Left Side Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">

          <h1 className="text-amber-300 opacity-80 text-lg sm:text-xl md:text-2xl uppercase">
            Since 1987
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Timeless <br />
            <span className="text-amber-300">
              Dental Care for
            </span>
            <br />
            Confident<span className="text-amber-300"> Smiles</span>
          </h2>

          <p className="max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-6 sm:leading-7 text-gray-200">
            Premium dental care combining advanced technology,
            experienced specialists, and personalized treatment —
            all delivered with comfort, precision, and trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 pt-2">
            <Link to="/Appointmentform">
              <Appointment />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center text-black bg-amber-400 font-medium uppercase text-sm sm:text-base py-2 px-4 sm:px-5 rounded-full border-2 border-amber-400 transition duration-300 hover:bg-transparent hover:text-amber-400"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={leftimage}
            alt="Dental care"
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

