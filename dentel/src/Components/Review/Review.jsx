import React from 'react'
import Reviewdata from '../../data/Reviewdata'
  import { FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
 


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function HealthCare() {

  return (
    <>

         <div className='text-center'>

        <h1 className='text-3xl text-amber-400 font-bold'>
          Trusted by Smiles Across World
        </h1>

        <p>
        Real patient experiences that reflect our commitment to comfort, quality, and exceptional dental care.
        </p>

      </div>


      {/* ================= CAROUSEL ================= */}

      <div className='max-w-[1000px] mx-auto py-8 px-4'>

        <Swiper

          /* ================= MODULES ================= */

          modules={[Navigation, Pagination, Autoplay]}


          /* ================= ARROWS ================= */

          navigation={{
            nextEl: '.health-next',
            prevEl: '.health-prev',
          }}


          /* ================= PAGINATION ================= */

          pagination={{
            el: '.health-pagination',
            clickable: true,

            // Normal dot
            bulletClass:
              'swiper-pagination-bullet !w-2.5 !h-2.5 bg-gray-200 opacity-100 rounded-full cursor-pointer transition-all duration-300',

            // Active dot
            bulletActiveClass:
              'swiper-pagination-bullet-active !bg-amber-400 !opacity-100 !scale-125',
          }}


          /* ================= CARD GAP ================= */

          spaceBetween={30}


          /* ================= ANIMATION ================= */

          speed={800}


          /* ================= AUTO PLAY ================= */

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}


          /* ================= RESPONSIVE ================= */

          breakpoints={{

            // Mobile
            0: {
              slidesPerView: 1,
            },

            // Tablet
            768: {
              slidesPerView: 2,
            },

            // Desktop
            1024: {
              slidesPerView: 3,
            },

          }}

        >


          {/* ================= CARDS ================= */}

     
{/* Review Cards */}
{Reviewdata.map((data, index) => (
  <SwiperSlide key={data.id ?? index}>
    <div className="w-full h-[250px] bg-gray-900 rounded-2xl border border-amber-400 p-4 flex flex-col">

      {/* Top Row */}
      <div className="flex items-center justify-between gap-3">

        {/* Logo + Name + Title */}
        <div className="flex items-center gap-3 min-w-0">

          {/* Logo */}
          <div className="flex-shrink-0 rounded-full h-10 w-10 text-black font-bold bg-white flex items-center justify-center">
            {data.logo}
          </div>

          {/* Name and Title */}
          <div className="min-w-0 flex flex-col justify-center">
            <h2 className="text-base font-bold text-amber-300 truncate leading-tight">
              {data.name}
            </h2>

            <h3 className="text-sm text-gray-300 truncate leading-tight mt-0.5">
              {data.title}
            </h3>
          </div>

        </div>

        {/* Rating Right Side */}
        <span className="text-amber-400 font-semibold whitespace-nowrap text-sm">
         {data.rating}
        </span>

      </div>

      {/* Review Message */}
      <p className="text-gray-400 text-sm pt-4 leading-relaxed">
        {data.messege}
      </p>

    </div>
  </SwiperSlide>
))}

        </Swiper>


        {/* Controls*/}

        <div
          className=' flex items-center justify-center gap-3 mt-8 ' >


          {/*Left arrow*/}

          <button
            className=' health-prev w-10 h-10 text-amber-400  ' >
            <FaArrowCircleLeft />
          </button>


          {/* Dots*/}

          <div
            className=' health-pagination flex items-center text-amber-50 justify-center gap-2 ' >
          </div>


          {/* Right arrow */}

          <button
  className=' health-next w-10 h-10 text-amber-400   '>          
<FaArrowCircleRight />
          </button>


        </div>

      </div>

    </>
  )
}

export default HealthCare

