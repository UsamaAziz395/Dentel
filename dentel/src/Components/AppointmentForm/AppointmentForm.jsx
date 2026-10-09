import React, { useState } from 'react';

function AppointmentForm() {
  const [fordata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messege: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...fordata,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });

    setSubmitted(false);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fordata.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (fordata.name.trim().length < 3) {
      newErrors.name = 'Please enter your full name';
    }

    if (!fordata.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fordata.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const phone = fordata.phone.replace(/\D/g, '');

    if (!fordata.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length < 7 || phone.length > 15) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (fordata.messege.length > 500) {
      newErrors.messege = 'Message must be under 500 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(fordata);
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        messege: '',
      });
    }
  };

  return (
    <section className="px-4 py-8 sm:py-10">
      <div className="mx-auto mb-6 max-w-lg text-center">
        <h1 className="text-2xl font-bold text-amber-400 sm:text-3xl">
          Book Your Appointment
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-300 sm:text-base">
          Schedule your visit with our experienced dental team and take
          the first step towards a healthier smile.
        </p>
      </div>

      <form
        onSubmit={handelSubmit}
        noValidate
        className="mx-auto w-full max-w-lg rounded-xl bg-white p-5 shadow-lg sm:p-6"
      >
        <h2 className="mb-1 text-xl font-bold text-[#4F5B60]">
          Appointment Details
        </h2>

        <p className="mb-5 text-sm text-gray-500">
          Fill out the form and we will get back to you shortly.
        </p>

        {submitted && (
          <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
            Form submitted successfully!
          </p>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="mb-1.5 block text-sm text-gray-700">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={fordata.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-amber-400"
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-1.5 block text-sm text-gray-700">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={fordata.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-amber-400"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="mb-1.5 block text-sm text-gray-700">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={fordata.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-amber-400"
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="messege"
            className="mb-1.5 block text-sm text-gray-700"
          >
            Message <span className="text-gray-400">(Optional)</span>
          </label>

          <textarea
            id="messege"
            name="messege"
            value={fordata.messege}
            onChange={handleChange}
            placeholder="Tell us about your dental concern"
            rows={3}
            maxLength={500}
            className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-amber-400"
          />

          {errors.messege && (
            <p className="mt-1 text-xs text-red-500">{errors.messege}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#D4AF37] py-2.5 text-sm font-semibold text-white transition hover:bg-[#c19b2e]"
        >
          Book Your Appointment
        </button>
      </form>
    </section>
  );
}

export default AppointmentForm;

