import React from 'react'

const Team = () => {
  return (
    <div className='w-full min-h-screen pt-[6.525rem]'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Our Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <div key={member} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='h-64 bg-gray-200'></div>
              <div className='p-6 text-center'>
                <h2 className='text-2xl font-semibold mb-2'>Team Member {member}</h2>
                <p className='text-[#3E5A9E] mb-4'>Position</p>
                <p className='text-gray-600'>
                  Brief description of the team member's expertise and experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
