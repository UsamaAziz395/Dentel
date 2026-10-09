
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'

function Contactinfo() {
  return (
    <div className='w-full min-w-0'>

      <h1 className='text-xl text-amber-400 font-bold mb-5'>
        Contact Info
      </h1>

      <div className='flex flex-col gap-3 text-gray-300'>

        {/* Address */}
        <div className='flex items-start gap-3'>
          <FaLocationDot className='text-base shrink-0 mt-1' />
          <p className='text-sm leading-6'>
            123 Dubai Street, Downtown
            <br />
            Dubai, Dubai, UAE
          </p>
        </div>

        {/* Phone */}
        <div className='flex items-center gap-3'>
          <FaPhoneAlt className='text-base shrink-0' />
          <p className='text-sm'>
            +971 4 123 4567
          </p>
        </div>

        {/* Email */}
        <div className='flex items-center gap-3'>
          <MdOutlineMailOutline className='text-lg shrink-0' />
          <p className='text-sm break-all'>
            info@dentalavenue.ae
          </p>
        </div>

        {/* Timing */}
        <div className='flex items-start gap-3'>
          <IoMdTime className='text-base shrink-0 mt-1' />
          <p className='text-sm leading-6'>
            Mon–Fri 9:00 AM – 6:00 PM
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contactinfo