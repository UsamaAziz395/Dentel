import React from 'react';
import QuickLinks from '../QuickLinks/QuickLinks';
import Contactinfo from '../Contactinfo/Contactinfo';
import Newsletter from '../Newsletter/Newsletter';
import FooterAbout from '../FooterAbout/FooterAbout';

function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-15 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">

        <FooterAbout />

        <Contactinfo />

        <QuickLinks />

        <Newsletter />

      </div>

      <hr className='text-amber-400 mt-5 ' />
      <p className='text-center mt-2.5 md:text-current text-sm'>© 2026 Dental Avenue Clinic. All Rights Reserved | Privacy Policy</p>

    </footer>
  );
}

export default Footer;
