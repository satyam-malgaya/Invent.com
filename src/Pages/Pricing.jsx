import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full min-h-screen pt-[6.525rem]'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Our Pricing Plans</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            { name: 'Basic', price: '$99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { name: 'Pro', price: '$199', features: ['All Basic Features', 'Pro Feature 1', 'Pro Feature 2'] },
            { name: 'Enterprise', price: '$299', features: ['All Pro Features', 'Enterprise Feature 1', 'Enterprise Feature 2'] }
          ].map((plan, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold mb-4'>{plan.name}</h2>
              <p className='text-4xl font-bold mb-6'>{plan.price}<span className='text-lg text-gray-500'>/month</span></p>
              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center'>
                    <span className='mr-2'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-full py-3 bg-[#3E5A9E] text-white rounded-lg hover:bg-[#2d4375] transition-colors'>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
