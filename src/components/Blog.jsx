import React from 'react'

const Blog = () => {
    const blogs =[
        { id: 1, title: "Creating streamlined Safeguarding processes with OneRen", image: "public/images/base images/image 18.jpg"},
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "public/images/base images/image 19.png"},
        { id: 3, title: "Revamping the membership model with Triathlon Australia", image: "public/images/base images/image 20.png"},
    ]
  return (
    <div className='px-4 lg:px-14 max-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-neutralDGrey  text-4xl font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ducimus eos accusantium, ipsum exercitationem molestias dolore velit aliquam suscipit natus possimus, eum assumenda quod culpa! Consectetur quibusdam vero nobis. Maiores!</p>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog => <div  key={blog.id} className='mx-auto relative mb-1 cursor-pointer'>
                    <img src={blog.image} alt="" className='rounded-md'/>
                    <div className='text-center px-8 py-8 bg-white shadow-lg rounded-md md:w-4/3 mx-auto absolute left-0 right-0 bottom-1'>
                    <h3 className='mb-3 text-neutralGrey font-semibold '>{blog.title}</h3>
                    <div className='flex items-center justify-center'>
                    <a href='/' className='font-bold text-brandPrimary hover:text-neutralDGrey'>Readmore</a>
                    </div>
                    </div>
                </div>
                )
            }
        </div>
    </div>
  )
};

export default Blog;