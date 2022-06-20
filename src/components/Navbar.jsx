import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0C4346] text-gray-300'>
      <div className='shadow-lg shadow-[#AD9128] hover:scale-150 duration-500'>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='shadow-lg shadow-[#AD9128] hover:scale-105 duration-500 pl-5'>
         <a href='/'>Home</a>
        </li>
        <li className='shadow-lg shadow-[#AD9128] hover:scale-105 duration-500 pl-5'>
        <a href='/about'>About</a>
        </li>
        <li className='shadow-lg shadow-[#AD9128] hover:scale-105 duration-500 pl-5'>
        <a href='/skills'>Skills</a>
        </li>
        <li className='shadow-lg shadow-[#AD9128] hover:scale-105 duration-500 pl-5'>
        <a href='/work'>Work</a>
        </li>
        <li className='shadow-lg shadow-[#AD9128] hover:scale-105 duration-500 pl-5'>
        <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/about'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/skills'>Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/work'>Work</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/contact'>Contact</a>
        </li>
      </ul>

      {/* Social icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/nimish-lal' target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/nimishlal' target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
