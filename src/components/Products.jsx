import React from 'react'

const Products = () => {
  return (
    <div id='product'>
        <div className='px-4 lg:px-14 max-w-screen 2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div >
                <img src="public/images/mobile-login/pana.png" alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-neutralDGrey  text-4xl font-semibold mb-4 md:w-4/5'>Join us to design your site</h2>
                <p className='md:w-3/4 text-sm text-neutralDGrey mb-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ducimus eos accusantium, ipsum exercitationem molestias dolore velit aliquam suscipit natus possimus, eum assumenda quod culpa! Consectetur quibusdam vero nobis. Maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum id modi accusantium officiis nemo inventore, exercitationem sapiente adipisci iure facere tenetur vero harum incidunt! Aperiam alias quae tempora iure! Totam.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
            <div className='flex  flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3 sm:w-1/3'>
                <img className="w-full" src="public/images/base images/image 9.png" alt="" />
            </div>
            <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-3/5 text-sm text-neutralDGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolores cum doloremque quisquam ut quidem. Dolorum quaerat saepe eos quod veritatis nisi sequi obcaecati vel. Aliquid illum aspernatur omnis velit.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit tempora, excepturi ex nesciunt voluptates sit exercitationem incidunt omnis, sapiente nobis dignissimos repellat quidem hic molestiae dolor, at rerum saepe atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem laborum quibusdam et a veniam quam iusto. Velit ad ullam nobis vel quisquam enim commodi, labore rem ipsa. Ullam, aut!</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Googly Dev</h5>
                    <p className='text-base tex-neutralGrey '>Chinese Dragon Boat Racing Organization</p>
                    <div>
                    <div className='flex items-center gap-4 my-3 flex-wrap cursor-pointer '>
                        <img src="public/images/logos/Logo.png" alt="" />
                         <img src="public/images/logos/Logo-1.png" alt="" />
                         <img src="public/images/logos/Logo-2.png" alt="" />
                         <img src="public/images/logos/Logo-3.png" alt="" />
                         <img src="public/images/logos/Logo-4.png" alt="" />
                         <img src="public/images/logos/Vector.png" alt="" />
                         <div className='flex items-center'>
                            <a href='/' className='font-bold text-brandPrimary hover:text-neutralDGrey'>Meet all customers</a>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
};

export default Products;