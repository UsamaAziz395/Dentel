
import React from 'react'
import logo from '../../assets/images/main/logo.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa'

function FooterAbout() {
  return (
    <div className='w-full min-w-0'>

      {/* Logo */}
      <img
        src={logo}
        alt='Dental Avenue Logo'
        className='w-full max-w-[390px] h-auto object-contain object-left mb-3'
      />

      {/* Description */}
      <p className='text-sm text-gray-400 leading-6 tracking-wide'>
        At Dental Avenue Clinic, we combine the latest dental technology
        with compassionate care to give you a healthy, confident smile every day.
      </p>

      {/* Social Links */}
      <div className='flex items-center gap-5 mt-4 text-xl text-white'>

        <Link
          to='https://www.instagram.com/'
          target='_blank'
          aria-label='Instagram'
          className='hover:text-amber-400 transition-colors'
        >
          <FaInstagram />
        </Link>

        <Link
          to='https://www.linkedin.com/'
          target='_blank'
          aria-label='LinkedIn'
          className='hover:text-amber-400 transition-colors'
        >
          <FaLinkedin />
        </Link>

        <Link
          to='https://www.behance.net/'
          target='_blank'
          aria-label='Behance'
          className='hover:text-amber-400 transition-colors'
        >
          <FaBehance />
        </Link>

        <Link
          to='https://www.facebook.com/'
          target='_blank'
          aria-label='Facebook'
          className='hover:text-amber-400 transition-colors'
        >
          <FaFacebook />
        </Link>

      </div>
    </div>
  )
}

export default FooterAbout