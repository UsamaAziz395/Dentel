
import React from 'react'
import { Link } from 'react-router-dom'

function QuickLinks() {
  return (
    <div className='w-full min-w-0'>

      <h1 className='text-xl text-amber-400 font-bold mb-5'>
        Quick Links
      </h1>

      <div className='text-gray-400 space-y-3 flex flex-col items-start'>

        <Link
          to='/'
          className='hover:text-amber-400 transition-colors'
        >
          Home
        </Link>

        <Link
          to='/about'
          className='hover:text-amber-400 transition-colors'
        >
          About
        </Link>

        <Link
          to='/services'
          className='hover:text-amber-400 transition-colors'
        >
          Services
        </Link>

        <Link
          to='/experience'
          className='hover:text-amber-400 transition-colors'
        >
          Experience
        </Link>

        <Link
          to='/testimonials'
          className='hover:text-amber-400 transition-colors'
        >
          Testimonials
        </Link>

        <Link
          to='/contact'
          className='hover:text-amber-400 transition-colors'
        >
          Contact
        </Link>

      </div>
    </div>
  )
}

export default QuickLinks