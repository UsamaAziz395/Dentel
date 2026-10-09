import React, { useState } from 'react';
import logo from '../../assets/images/main/logo.png';
import { Link } from 'react-router-dom';
import Appointment from '../Appointment/Appointment';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between border-b border-gray-300 px-4 py-3 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="Dental Avenue Logo"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-5 text-white lg:flex xl:gap-6">
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            About
          </Link>

          <Link
            to="/services"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            Services
          </Link>

          <Link
            to="/experience"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            Experience
          </Link>

          <Link
            to="/testimonials"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            Testimonials
          </Link>

          <Link
            to="/contact"
            className="transition-colors duration-300 hover:text-amber-400"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Appointment Button */}
        <Link    to='/Appointmentform'
         className="hidden lg:block"
         >
          <Appointment />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-2xl text-amber-400 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>
      </nav>

      {/* Background Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      />

      {/* Right Side Sliding Menu */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[80%] max-w-sm flex-col gap-6 overflow-y-auto bg-black px-6 py-6 text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-5">
          <span className="text-xl font-bold text-amber-400">
            Dental Avenue
          </span>

          <button
            type="button"
            onClick={closeMenu}
            className="text-2xl text-amber-400 transition hover:text-white"
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <Link
          to="/"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          About
        </Link>

        <Link
          to="/services"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          Services
        </Link>

        <Link
          to="/experience"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          Experience
        </Link>

        <Link
          to="/testimonials"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          Testimonials
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          className="transition-colors duration-300 hover:text-amber-400"
        >
          Contact
        </Link>

        {/* Mobile Appointment Button */}
         
                    <Link
                      to='/Appointmentform'
                       className="pt-3">
                     <Appointment />
                    </Link> 
      </div>
    </>
  );
}

export default Navbar;
