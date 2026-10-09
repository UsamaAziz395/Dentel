import React, { useState } from 'react';
import FAQsdata from '../../data/FAQsdata';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';

function FAQs() {
  const [openicon, setOpenIcon] = useState(null);

  return (
    <section className="py-10 sm:py-12 md:py-15 px-4">

      {/* Heading */}
      <div className="text-center py-5 space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-400">
          Dental FAQs
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-6">
          Get clear answers to the most common questions about our
          treatments, procedures, and patient care.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto">

        {FAQsdata.map((data) => (
          <div key={data.id} className="my-4">

            {/* Question */}
            <div
              className="border border-amber-300 rounded-2xl
              font-medium px-4 sm:px-6 md:px-8 py-4 sm:py-5
              flex justify-between items-center gap-4"
            >
              <h2 className="text-sm sm:text-base leading-6">
                {data.question}
              </h2>

              <button
                type="button"
                aria-label={
                  openicon === data.id
                    ? 'Hide answer'
                    : 'Show answer'
                }
                aria-expanded={openicon === data.id}
                onClick={() =>
                  setOpenIcon(openicon === data.id ? null : data.id)
                }
                className="text-amber-400 text-xl shrink-0
                transition-transform duration-300"
              >
                {openicon === data.id
                  ? <FaChevronCircleUp />
                  : <FaChevronCircleDown />}
              </button>
            </div>

            {/* Answer */}
            {openicon === data.id && (
              <div
                className="border border-amber-300 rounded-2xl
                px-4 sm:px-6 md:px-8 py-4 mt-3
                text-gray-400 text-sm sm:text-base leading-7"
              >
                {data.answer}
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQs