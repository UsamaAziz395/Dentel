
import React, { useState } from 'react'

function Newsletter() {
  const [emaildata, setEmaildata] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emaildata.trim()) {
      setMessage('Please enter your email address.')
      return
    }

    setMessage('Thank you! Your email has been submitted.')
    setEmaildata('')
  }

  return (
    <div className='w-full min-w-0'>

      <h1 className='text-2xl text-amber-400 font-bold mb-3'>
        Newsletter
      </h1>

      <p className='text-gray-300 leading-6'>
        Stay Smiling! Get the Latest Dental Tips & Updates.
      </p>

      <form onSubmit={handleSubmit} className='w-full'>

        <input
          className='w-full box-border py-3 px-4 border border-amber-400 rounded-lg bg-gray-300 text-black text-left placeholder:text-left my-5 outline-none focus:ring-2 focus:ring-amber-400'
          type='email'
          placeholder='Enter Email Address'
          value={emaildata}
          onChange={(e) => {
            setEmaildata(e.target.value)
            setMessage('')
          }}
          required
        />

        <button
          type='submit'
          className='w-full box-border py-3 px-4 border border-amber-400 rounded-lg bg-amber-400 text-black font-bold hover:bg-yellow-500 transition-colors'
        >
          Send Message
        </button>

        {message && (
          <p className='text-sm text-amber-400 mt-3'>
            {message}
          </p>
        )}

      </form>

    </div>
  )
}

export default Newsletter