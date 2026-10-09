
import React from "react";
import leftimage from '../assets/images/main/leftimage.png'

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  return (
    <section className="w-full bg-[#101010] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Left Image */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[480px]">
          <div className="absolute inset-0 overflow-hidden rounded-r-[45%] border-r-[6px] border-b-[6px] border-amber-400">
            <img
              src={leftimage}
              alt="Dental treatment"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="px-5 py-10 sm:px-8 md:px-10">
          <div className="max-w-[520px] mx-auto bg-black border border-amber-400/50 rounded-2xl p-5 sm:p-7 shadow-[0_0_12px_rgba(251,191,36,0.35)]">

            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 text-center mb-6">
              Contact Us Today
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#111] border border-amber-400 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-amber-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#111] border border-amber-400 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-amber-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#111] border border-amber-400 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-amber-400"
              />

              <textarea
                placeholder="Message"
                rows="3"
                required
                className="w-full resize-y bg-[#111] border border-amber-400 rounded-md px-3 py-3 text-sm outline-none focus:ring-1 focus:ring-amber-400"
              />

              <label className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-amber-400"
                />
                <span>
                  I agree with{" "}
                  <a href="/terms" className="text-amber-400 underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-amber-400 underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-amber-400 text-black font-bold py-3 rounded-md hover:bg-amber-300 transition-colors"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
