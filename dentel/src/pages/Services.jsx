


import React, { useState } from 'react'
import Servicesdata from '../data/Servicesdata'

function Services() {

  const [viewmore, setViewMore] = useState(false)

  return (
    <>
      <div className='my-10'>
        <h1 className='text-3xl text-amber-400 font-bold text-center uppercase'>
          Our Dental Services
        </h1>

        <div className='flex justify-center py-3'>
          <p className='text-center'>
            Comprehensive dental care designed to keep your smile healthy, confident, and beautiful.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-evenly gap-6 py-5'>

        {Servicesdata.slice(0, viewmore ? Servicesdata.length : 4)
          .map((data) => (

            <div
              key={data.id}
              className='w-full border border-amber-400 rounded-2xl shadow-amber-400 overflow-hidden'
            >

              {/* Image and Overlay */}
              <div className='relative'>

                <img
                  src={data.image}
                  alt={data.title}
                  className='w-full h-[300px] object-cover'
                />

                {/* Overlay */}
                <div className='absolute bottom-0 left-0 w-full bg-black/60 py-2 px-3'>
                  <h2 className='text-xl font-bold text-amber-400 text-center'>
                        {data.service}
                  </h2>
                </div>

              </div>

            

            </div>
          ))}

      </div>

      <div className='flex justify-center my-5'>
        <button
          onClick={() => setViewMore(!viewmore)}
          className='text-yellow-500 uppercase py-2 border-2 px-5 rounded-4xl border-amber-400 shadow-amber-400 hover:bg-amber-400 hover:text-black duration-300 transition-transform'
        >
          {viewmore ? 'View Less' : 'View More'}
        </button>
      </div>
    </>
  )
}

export default Services
