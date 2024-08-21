import React from 'react'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

const Home = () => {
  return (
    <section name="home" className='flex w-full h-screen bg-zinc-200'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
          <p className='text-2xl'>Use our chat platform</p>
          <h1 className='py-3 text-5xl font-bold dm:text-7xl'>Chat management</h1>
          <p className='text-2xl'>Chatty is the best chat platform</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div className='flex flex-col justify-center px-2'>
          <h2 className='font-semibold xs:text-[48px] text-[40px] xs:leading[76.8px] leading-[66.8px] w-full'>Easily download app <br className='hidden sm:block'/>Google & Apple</h2>
          <p  className='text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis justo felis, nec feugiat risus consectetur sed. Maecenas non scelerisque dolor, ac venenatis leo. Praesent eu tempor tellus. Aliquam euismod felis egestas ornare hendrerit. In gravida dui massa, sit amet consequat sapien interdum ut.
          </p>
        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt='apple_play' className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google_play' className='w-[144.17px] he-[43.08px] object-contain cursor-pointer'/>

        </div> 
        </div>
      </div>
    </section>
  )
}

export default Home