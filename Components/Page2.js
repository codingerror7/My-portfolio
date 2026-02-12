"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Wave from '../public/Wave.json'
import Snowfall from 'react-snowfall'

const Page2 = () => {
  return (
    <>
    <div id='Page2' className='relative min-h-screen w-full overflow-hidden bg-black'>
       <Snowfall snowflakeCount={50} color='#010d1aff' 
  style={{
    filter: "blur(0.7px) brightness(3.7)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%", 
    zIndex: 0
  }}
/>
      <img className = 'rotating hidden lg:block' src='./reactjs.png'></img>
      <div className="lg:mt-30 relative z-30
    w-full max-w-6xl
    mx-auto mt-16 px-6 py-10
    flex flex-col lg:flex-row
    items-center gap-10
    rounded-3xl
    bg-gradient-to-br from-black/90 via-[#0f5132]/40 to-black/90
    border border-white/10 backdrop-blur-xl">

  {/* Image */}
  <div className="relative">
    <img
      src="./myImage.jpg"
      alt="Sujal"
      className="w-48 sm:w-60 lg:w-[20vw] max-w-[420px]
    h-auto rounded-3xl shadow-xl mx-auto"
    />
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 to-transparent" />
  </div>

  {/* Content */}
  <div className="flex flex-col gap-5 text-white font-[gilroy] text-center lg:text-left">
    
    <span className="uppercase tracking-widest text-sm text-emerald-400">
      About Me
    </span>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
      Who <span className="text-green-400">I Am</span>
    </h1>

    <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
      Hello 👋🏼, I am a <span className="text-white font-semibold">
      B.Tech CSE 3rd-year student</span> at Lakshmi Narain College of Technology,
      Bhopal, passionate about building modern and functional web applications.
    </p>

    <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
      As a <span className="text-white font-semibold">
      Full Stack MERN Developer</span>, I transform ideas into interactive,
      valuable, and visually engaging digital experiences using React,
      Node.js, Express, and MongoDB.
    </p>

    <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
      I constantly explore new technologies and design trends to push boundaries. I use <span className="text-white font-semibold">Java</span> to practice data structures and algorithms, focusing on writing efficient and optimized solutions. This has strengthened my understanding of problem-solving patterns, time complexity, and clean logic building.
    </p>


  </div>
</div>


      <div className="hidden md:block lg:hidden absolute z-0 ml-30">
      <Lottie 
        animationData={Wave} 
        loop={true} 
        style={{ width: 300, height: 300 }}
      />
    </div>
      <h1 className='text-center uppercase font-extrabold text-xl lg:text-3xl sm:text-4xl text-white mt-20'>WHAT I DO <span className='text-center font-[gilroy] uppercase font-extrabold text-2xl lg:text-4xl text-green-700'>ACTUALLY?</span></h1>
      <hr className='w-24 lg:w-34 h-1 border-none bg-green-800 mx-auto mt-2'></hr>
      <p className='relative z-10 mx-auto text-center text-sm lg:text-xl font-[gilroy] text-white font-medium lg:w-280 mt-3'>I create responsive websites, dynamic frontends, custom APIs, and full-stack solutions tailored to real-world needs, ensuring performance, scalability, and aesthetic polish.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  gap-6 w-full max-w-6xl mx-auto
  mt-10 px-6'>
        <div className='p-6 font-[gilroy] rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-800'>
          <img className='mx-auto w-20' src='./graphic.png'></img>
          <h3 className='text-white text-lg font-extrabold text-center uppercase mt-6'>Graphic design</h3>
          <p className='text-white text-sm text-center mt-2'>Crafting visual identities through creative illustrations, icons, layouts, and modern aesthetics.</p>
        </div>
        <div className='p-6 font-[gilroy] rounded-xl bg-gradient-to-r from-brown-900 to-blue-900'>
          <img className='mx-auto w-20' src='./webdev.png'></img>
          <h3 className='text-white text-lg font-extrabold text-center uppercase mt-6'>Web development</h3>
          <p className='text-white text-sm text-center mt-2'>Building responsive, dynamic, fast, and scalable websites using modern technologies efficiently</p>
        </div>
        <div className='p-6 font-[gilroy] rounded-xl bg-gradient-to-r from-red-500 to-orange-900'>
          <img className='mx-auto w-20' src='./ui.png'></img>
          <h3 className='text-white text-lg font-extrabold text-center uppercase mt-6'>Ui/Ux design</h3>
          <p className='text-white text-sm text-center mt-2'>Improving speed, performance, SEO, and user experience for smoother website functionality</p>
        </div>
        <div className='p-6 font-[gilroy] rounded-xl bg-gradient-to-r from-yello-900 to-green-800'>
          <img className='mx-auto w-20' src='./webopt.png'></img>
          <h3 className='text-white text-lg font-extrabold text-center uppercase mt-6'>Web optimization</h3>
          <p className='text-white text-sm text-center mt-2'>Designing intuitive interfaces focused on clarity, user flow, consistency, and engagement.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page2



