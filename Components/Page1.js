
'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Mainslider from './Mainslider'
import { Typewriter } from "react-simple-typewriter";

const Page1 = () => {
 const [theme, settheme] = useState("orange");
  const btn1 = () => {
    settheme("yellow");
  }
  const btn2 = () => {
    settheme("green");
  }
  const btn3 = () => {
    settheme("blue");
  }
  return (
    <>
    <div id='Page1' className='relative lg:min-h-[100vh] w-full overflow-hidden bg-zinc-800 mt-[-2%] z-50'>
    <div className={`relative h-[85vh] rounded-b-[20px] lg:h-[110vh] w-full overflow-hidden lg:rounded-b-[100px] ${theme === "orange" && "bg-gradient-to-r from-orange-500 via-red-600 to-black"} ${theme === "yellow" && "bg-gradient-to-r from-yellow-400 via-amber-500 to-black"} ${theme === "green" &&    "bg-gradient-to-r from-green-400 via-emerald-800 to-black"} ${theme==="blue" && "bg-gradient-to-r from-blue-600 via-indigo-900 to-black"}`}>
        <Navbar/>
        <div className='relative flex flex-col w-full mt-0 lg:mt-[-5%]'>
        <div className='mx-auto w-full px-4 sm:px-6
      lg:absolute lg:left-[8vw] lg:top-[10vw]
      lg:max-w-[600px] lg:z-50
      text-white font-[gilroy]
'>
          <h1 className='text-[18px] lg:text-left text-center sm:text-[20px] lg:text-[30px] font-semibold'>Hey, I am</h1>
          <h2 className="block text-center md:hidden text-3xl sm:text-4xl font-extrabold uppercase leading-tight">
      Sujal Saraswat
    </h2>
          <div className="hidden md:block w-full overflow-hidden">
         <span className='block text-5xl lg:text-7xl
          font-extrabold uppercase
          whitespace-normal
'>
        <Typewriter
          words={[
            "Sujal Saraswat",
            "Web Developer",
            "Backend Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={60}
          delaySpeed={2000}
        />
      </span>
      </div>
        </div>
          <img src='./img6.png' className='w-[420px] sm:w-[280px]
      lg:w-[620px]
      lg:mt-[-60]
      h-auto mx-auto
      max-w-full z-40
      drop-shadow-2xl
      float-animation'></img>
          <div className='hidden lg:block absolute right-26 mt-[12.5vw] w-[30rem] text-white font-[gilroy]'>
          <h1 className='text-[30px] font-semibold'>Learning daily. Creating oftenly. Building slowly.</h1>
          <p className='text-[20px] mt-3'>Every line of code is a step toward the future I’m building for myself.</p>
        </div>
        </div>
        <div className='hidden lg:flex items-center gap-3 absolute right-10 bottom-10'>
          <button onClick={btn1} className='p-2 w-[10%] h-[90%] bg-yellow-600 rounded-[50%] cursor-pointer'></button>
          <button onClick={btn2} className='p-2 w-[10%] h-[90%] bg-green-900 rounded-[50%] cursor-pointer'></button>
          <button onClick={btn3} className='p-2 w-[10%] h-[90%] bg-blue-900 rounded-[50%] cursor-pointer'></button>
        </div>
    </div>
    <Mainslider/>
    </div>
    </>
  )
}

export default Page1
