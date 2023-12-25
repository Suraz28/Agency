import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <div className='px-4 lg:px-14 max-w-screen 2xl mx-auto my-8' >
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div >
                <img src="public/images/mobile-login/rafiki.png" alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-neutralDGrey  text-4xl font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ducimus eos accusantium, ipsum exercitationem molestias dolore velit aliquam suscipit natus possimus, eum assumenda quod culpa! Consectetur quibusdam vero nobis. Maiores!</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
        </div>
        
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex  flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='text-neutralDGrey  text-4xl font-semibold mb-4 md:w-2/3'>Helping a local <br/><span className='text-brandPrimary'>business reinvent itself</span></h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8 '>We reached here with our hard work and dedication</p>
                <button className='btn-primary'>Learn More</button>
            </div>

            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="public/images/icons/members.png" alt="" />
                        <div>
                        <h4 className='text-2xl text-neutralDGrey font-semibold'>2,987,435</h4>
                        <p>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="public/images/icons/clubs.png" alt="" />
                        <div>
                        <h4 className='text-2xl text-neutralDGrey font-semibold'>87,437</h4>
                        <p>Members</p>
                        </div>
                    </div>
                </div> 
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="public/images/icons/eventbookings.png" alt="" />
                        <div>
                        <h4 className='text-2xl text-neutralDGrey font-semibold'>987,543</h4>
                        <p>Event Bookings</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="public/images/icons/payments.png" alt="" />
                        <div>
                        <h4 className='text-2xl text-neutralDGrey font-semibold'>5,905,903</h4>
                        <p>Payments</p>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </div>

    </div>
  )
};

export default About;