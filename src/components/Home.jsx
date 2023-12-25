import React from 'react'
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className=' w-full mx-auto my-auto'>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src="/public/images/Illustration.png" alt="" />
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and Insights<span className='text-brandPrimary leading-snug'> from 8 years</span></h1><p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src="/public/images/Illustration.png" alt="" />
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lets Learn and Earn<span className='text-brandPrimary leading-snug'> in 4 months</span></h1><p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
            <img src="/public/images/Illustration.png" alt="" />
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and Insights<span className='text-brandPrimary leading-snug'>from 8 years</span></h1><p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
          </div>
        </div>
      </Carousel>
        </div>
    </div>
  )
};

export default Home;