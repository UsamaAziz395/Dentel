


import React from 'react';
import Appointment from '../Appointment/Appointment';
import { Link } from 'react-router-dom';

function Smile() {
  return (
    <section className="text-center px-4 py-16 sm:py-24 md:py-32 lg:py-35 space-y-5">

      <h1 className="text-3xl sm:text-4xl md:text-5xl text-amber-400 font-bold">
        Your Smile Starts Here
      </h1>

      <p className="text-sm sm:text-base leading-6 sm:leading-7 max-w-2xl mx-auto">
        Book your appointment today and experience premium dental care
        <br className="hidden sm:block" />
        trusted by patients across Dubai.
      </p>

      <Link to='/AppointmentForm' className="flex justify-center pt-2">
        <Appointment />
      </Link>

    </section>
  );
}

export default Smile;
