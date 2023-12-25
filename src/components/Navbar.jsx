import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    });

    const navItems =[
        {text: "Home", path: "home"},
        {text: "Service", path: "service"},
        {text: "About", path: "about"},
        {text: "Product", path: "product"},
        {text: "Testimonial", path: "testimonial"},
        {text: "FAQ", path: "faq"},
    ];

  return (
    <header className='w-full bg-white fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href=""  className='text-2xl font-semibold flex  items-center space-x-3'><img src="public/images/logo.png" alt="logo" className='w-10 inline-block items-center' /><span className='text-[#263238]'>AGENCY</span></a>    
                <ul className='md:flex space-x-12 hidden'>
                    {
                    navItems.map(({ text, path }) => (<ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='cursor-pointer block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{text}
                    </ScrollLink>
                    ))}
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900 text-4xl cursor-pointer'>LogIn</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey cursor-pointer'>SignUp</button>
                </div>
                <div className='md:hidden'>
                    <button 
                    onClick={toggleMenu}
                    className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6 text-neutralDGrey' />)
                        }
                    </button>
                </div>
            </div>
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                    navItems.map(({ text, path }) => (<ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 text-white hover:text-brandPrimary first:font-medium'>{text}
                    </ScrollLink>
                    ))}
            </div>
        </nav>
    </header>
  )
};

export default Navbar;