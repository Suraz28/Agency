import React from 'react'

const Services = () => {

        const services = [
            {id: 1, title: "Membership Organizations", description: "Our membership management software provides full animation of membership renewals and payments", image: "public/images/membership.png"},
            {id: 2, title: "National Associations", description: "Our membership management software provides full animation of membership renewals and payments", image: "public/images/associations.png"},
            {id: 3, title: "Clubs and Groups", description: "Our membership management software provides full animation of membership renewals and payments", image: "public/images/groups.png"},
        ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>  
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralDGrey'>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-around items-center flex-wrap my-12 '>
            <img src="public/images/logos/Logo-1.png" alt="" />
            <img src="public/images/logos/Logo-2.png" alt="" />
            <img src="public/images/logos/Logo-3.png" alt="" />
            <img src="public/images/logos/Logo-4.png" alt="" />
            <img src="public/images/logos/Vector.png" alt="" />
        </div>
        </div>
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
        <p className='text-neutralDGrey'> Who is Agency suitable for?</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto'>
            {services.map(service => (<div key={service.id} className='flex justify-center items-center px-4 py-8 text-center md:w-[300px] mx-auto mg:h-80 rounded-md shadow cursor-pointer hover:translate-y-3 hover:border-b-4 hover:border-indigo-700 transition-all duration-300'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='ml-5'/></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralDGrey'>{service.description}</p>
                    </div>
                </div>))
            }
        </div>
    </div>
  )
};

export default Services;