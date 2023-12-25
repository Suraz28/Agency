import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
            <h2 className='text-neutral-800  lg:text-5xl text-3xl font-semibold mb-4 lg:leading-snug '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <div className='flex items-center justify-center gap-8'>
                <button className='btn-primary text-white'>Get a Demo</button>
            </div>
            </div>
        </div>
    </div>
  )
};

export default Newsletter;