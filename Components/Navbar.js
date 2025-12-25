import React from 'react'
import Link from 'next/link'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="w-full h-[130px] px-16 flex items-center justify-between 
  bg-transparent 
  font-[gilroy] mb-10 overflow-hidden">

  {/* Logo */}
  <h1 className="text-3xl mt-7 font-extrabold tracking-wider text-white uppercase">
    WORKS.<span className='text-orange-900'>SUJAL</span>
  </h1>

  {/* Nav Links */}
  <div className="flex relative z-[999] pointer-events-auto items-center justify-between mt-7 gap-10 text-md text-gray-300">
    <a href='#Page1' className="relative cursor-pointer uppercase tracking-wide 
        hover:text-white transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-orange-400
        hover:after:w-full after:transition-all after:duration-300">HOME</a>
    <a href='#Page2' className="relative cursor-pointer uppercase tracking-wide 
        hover:text-white transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-orange-400
        hover:after:w-full after:transition-all after:duration-300">ABOUT</a>
    <a href='#Page3' className="relative cursor-pointer uppercase tracking-wide 
        hover:text-white transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-orange-400
        hover:after:w-full after:transition-all after:duration-300">SKILLS</a>
    <a href='#Page4' className="relative cursor-pointer uppercase tracking-wide 
        hover:text-white transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-orange-400
        hover:after:w-full after:transition-all after:duration-300">PROJECTS</a>
    <a href='#Page8' className="relative cursor-pointer uppercase tracking-wide 
        hover:text-white transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-orange-400
        hover:after:w-full after:transition-all after:duration-300">CONNECT</a>

    {/* Resume Button */}
    <a
      href="/Sujal_Saraswat_Resume.pdf"
      download
      className="flex items-center gap-2 px-5 py-2 
      rounded-full text-black font-semibold
      bg-gradient-to-r from-orange-400 to-amber-400
      hover:from-orange-300 hover:to-amber-300
      transition-all duration-300 shadow-[0_0_20px_rgba(251,146,60,0.4)]"
    >
      Resume
      <FaCloudDownloadAlt className="text-lg" />
    </a>
  </div>
</div>

      </>
  )
}

export default Navbar