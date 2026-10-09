import React from 'react'
import HealthCaredata from '../../data/HealthCaredata'
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from 'react-router-dom'
  import { FaArrowCircleRight } from "react-icons/fa";
  import { FaArrowCircleLeft } from "react-icons/fa";


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

      {/* ================= HEADING ================= */}

      <div className='text-center'>

        <h1 className='text-3xl text-amber-400 font-bold'>
          Oral Health & Smile Care
        </h1>

        <p>
          Stay informed with expert tips, dental care guides, and the latest insights to keep
          <br />
          your smile healthy and confident.
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

          {HealthCaredata.map((data) => (

            <SwiperSlide key={data.id}>

              {/* Card */}

              <div
                className=' w-full h-[320px] rounded-2xl border border-amber-400 p-4 flex flex-col ' >

                {/* Image */}

                <img
                  src={data.image}
                  alt={data.title}
                  className=' w-full h-[180px] object-cover rounded-tl-xl rounded-tr-xl ' />


                {/* Title */}

                <h2
                  className=' text-lg font-bold mt-3 min-h-[52px] line-clamp-2 ' >
                  {data.title}
                </h2>


                {/* Button */}

                <Link
                  to="#"
                  className='mt-auto w-fit'
                >

                  <div
                    className=' flex rounded-full px-5 py-1 border-2 border-amber-400 shadow-2xl shadow-amber-400 items-center gap-3 transition-all duration-300 hover:bg-amber-400 hover:text-white ' >

                    {data.button}

                    <FaArrowRightLong />

                  </div>

                </Link>

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