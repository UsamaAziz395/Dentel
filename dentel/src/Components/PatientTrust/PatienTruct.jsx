
import React from 'react'
import { Link } from 'react-router-dom'
import PatientTrust from '../../data/PatientTrust'
import Whitening from '../../assets/images/Dentel Services/Whitening.png'

function WhyChoose() {


  return (
    <section className='w-full bg-[#101010]  overflow-hidden'>
      <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center'>

        {/* Left Content */}
        <div className='px-5 sm:px-8 lg:px-10 py-12 md:py-16'>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 leading-tight mb-3'>
            Why Patients Trust
            <br />
            Dental Avenue
          </h1>

          <p className='text-gray-200 text-base sm:text-lg leading-7 mb-6'>
            Delivering exceptional dental care with precision,
            comfort, and trust since 1987.
          </p>

          {/* Feature Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>

            {PatientTrust.map((data, index) => (
              <div
                key={index}
                className='bg-[#202020] border border-gray-700 rounded-xl p-4 shadow-[0_0_5px_rgba(255,255,255,0.15)] hover:border-amber-400 transition-colors'
              >
                <h2 className='text-sm font-bold mb-2'>
                  {data.title}
                </h2>

                <p className='text-gray-400 text-xs sm:text-sm leading-5'>
                  {data.description}
                </p>
              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className='flex flex-wrap items-center gap-4'>

            <Link
              to='/Appointmentform'
              className='border border-amber-400 rounded-full px-4 py-2 text-amber-400 text-sm font-bold shadow-[0_0_5px_rgba(251,191,36,0.4)] hover:bg-amber-400 hover:text-black transition-colors'
            >
              BOOK APPOINTMENT
            </Link>

            <Link
              to='/HealthCare'
              className='border border-amber-400 rounded-full px-4 py-2 text-amber-400 text-sm font-bold shadow-[0_0_5px_rgba(251,191,36,0.4)] hover:bg-amber-400 hover:text-black transition-colors'
            >
              Meet Our Doctors
            </Link>

          </div>
        </div>

        {/* Right Image */}

<div className='relative min-h-[280px] md:min-h-[320px] flex items-center justify-center'>
          
          <div className="relative w-full h-[350px] sm:h-[420px] md:h-[400px] bg-[#202020] border-l-[6px] border-amber-400 rounded-bl-[80%]  overflow-hidden">
           <img
  src={Whitening}
  alt=""
  className='w-[100%] h-[105%] object-contain object-bottom'
/>
          </div>

          {/* Experience Badge */}
          <div className='absolute bottom-10 left-5 md:left-30 md:-translate-x-1/2 w-32 h-32  rounded-full border-2 border-amber-400 backdrop-blur-md opacity-80  flex flex-col items-center justify-center text-center shadow-[0_0_8px_rgba(251,191,36,0.25)]'>

            <span className='text-amber-400 text-3xl mb-1'>🏆</span>

            <h2 className='text-lg font-bold'>
              39+
            </h2>

            <p className='text-xs leading-4'>
              Years of
              <br />
              Experience
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChoose

// import React from 'react';
// import { Link } from 'react-router-dom';
// import PatientTrust from '../../data/PatientTrust';
// import Whitening from '../../assets/images/Dentel Services/Whitening.png';

// function WhyChoose() {
//   return (
//     <section className="w-full bg-[#101010] overflow-hidden text-white">
//       <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">

//         {/* Left Content */}
//         <div className="px-5 sm:px-8 lg:px-10 py-12 md:py-16">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 leading-tight mb-3">
//             Why Patients Trust
//             <br />
//             Dental Avenue
//           </h1>

//           <p className="text-gray-200 text-base sm:text-lg leading-7 mb-6">
//             Delivering exceptional dental care with precision,
//             comfort, and trust since 1987.
//           </p>

//           {/* Feature Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             {PatientTrust.map((data, index) => (
//               <div
//                 key={index}
//                 className="bg-[#202020] border border-gray-700 rounded-xl p-4 shadow-[0_0_5px_rgba(255,255,255,0.15)] hover:border-amber-400 transition-colors"
//               >
//                 <h2 className="text-sm font-bold mb-2">
//                   {data.title}
//                 </h2>

//                 <p className="text-gray-400 text-xs sm:text-sm leading-5">
//                   {data.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-wrap items-center gap-4">
//             <Link
//               to="/Appointmentform"
//               className="border border-amber-400 rounded-full px-4 py-2 text-amber-400 text-sm font-bold shadow-[0_0_5px_rgba(251,191,36,0.4)] hover:bg-amber-400 hover:text-black transition-colors"
//             >
//               BOOK APPOINTMENT
//             </Link>

//             <Link
//               to="/HealthCare"
//               className="border border-amber-400 rounded-full px-4 py-2 text-amber-400 text-sm font-bold shadow-[0_0_5px_rgba(251,191,36,0.4)] hover:bg-amber-400 hover:text-black transition-colors"
//             >
//               Meet Our Doctors
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[600px] flex items-center justify-center">

//           {/* Image Container + Curved Border */}
//           <div className="relative w-full h-[350px] sm:h-[420px] md:h-[600px] bg-[#202020] border-l-[6px] border-amber-400 rounded-l-[45%] overflow-hidden">

//             <img
//               src={Whitening}
//               alt="Dental treatment"
//               className="absolute inset-0 w-full h-full object-cover object-center block"
//             />

//           </div>

//           {/* Experience Badge */}
//           <div className="absolute bottom-6 left-4 sm:left-8 md:left-0 md:-translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-amber-400 backdrop-blur-md bg-gray-800 flex flex-col items-center justify-center text-center shadow-[0_0_8px_rgba(251,191,36,0.25)] z-10">

//             <span className="text-amber-400 text-3xl mb-1">
//               🏆
//             </span>

//             <h2 className="text-lg font-bold">
//               39+
//             </h2>

//             <p className="text-xs leading-4">
//               Years of
//               <br />
//               Experience
//             </p>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChoose;