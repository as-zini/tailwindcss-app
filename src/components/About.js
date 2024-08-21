import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full h-screen'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>About this company</h2>
          <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit nisi ut lacinia interdum.</p>
        </div>

        <p className='mt-20 text-xl'>nteger pretium est vel lorem suscipit elementum. Fusce lorem ante, tincidunt tristique scelerisque sit amet, imperdiet vel dui. Ut pharetra elit libero.</p>
        
      </div>
    </section>
  )
}

export default About