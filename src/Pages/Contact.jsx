import React from 'react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen pt-[6.525rem]'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>
            <form className='space-y-6'>
              <div>
                <label className='block text-gray-700 mb-2'>Name</label>
                <input 
                  type="text" 
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3E5A9E]'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>Email</label>
                <input 
                  type="email" 
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3E5A9E]'
                  placeholder='Your email'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-2'>Message</label>
                <textarea 
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#3E5A9E] h-32'
                  placeholder='Your message'
                ></textarea>
              </div>
              <button className='w-full py-3 bg-[#3E5A9E] text-white rounded-lg hover:bg-[#2d4375] transition-colors'>
                Send Message
              </button>
            </form>
          </div>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold mb-6'>Contact Information</h2>
            <div className='space-y-4'>
              <p className='flex items-center'>
                <span className='mr-2'>📍</span>
                123 Business Street, City, Country
              </p>
              <p className='flex items-center'>
                <span className='mr-2'>📞</span>
                +1 234 567 890
              </p>
              <p className='flex items-center'>
                <span className='mr-2'>✉️</span>
                contact@company.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
