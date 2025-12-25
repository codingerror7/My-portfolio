"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Wave from '../public/Wave.json'
import Snowfall from 'react-snowfall'

const Page2 = () => {
  return (
    <>
    <div id='Page2' className='relative min-h-[210vh] width-[100vw] overflow-hidden
    bg-black'>
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
      <img className = 'rotating' src='./reactjs.png'></img>
      <div className="relative z-30 w-[75%] mx-auto mt-32 p-12 
  flex items-center gap-16 rounded-[30px]
  bg-gradient-to-br from-black/90 via-[#0f5132]/40 to-black/90
  border border-white/10 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

  {/* Image */}
  <div className="relative">
    <img
      src="./myimage.jpg"
      alt="Sujal"
      className="h-[600px] w-[1200px] object-cover rounded-3xl 
      border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
    />
    <div className="absolute inset-0 rounded-3xl 
      bg-gradient-to-t from-black/60 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-50 flex flex-col gap-6 text-white font-[gilroy]">
    
    <span className="uppercase tracking-widest text-sm text-emerald-400">
      About Me
    </span>

    <h1 className="text-5xl font-extrabold leading-tight">
      Who <span className="text-green-400">I Am</span>
    </h1>

    <p className="text-xl text-gray-200 leading-relaxed">
      Hello 👋🏼, I am a <span className="text-white font-semibold">
      B.Tech CSE 3rd-year student</span> at Lakshmi Narain College of Technology,
      Bhopal, passionate about building modern and functional web applications.
    </p>

    <p className="text-xl text-gray-200 leading-relaxed">
      As a <span className="text-white font-semibold">
      Full Stack MERN Developer</span>, I transform ideas into interactive,
      valuable, and visually engaging digital experiences using React,
      Node.js, Express, and MongoDB.
    </p>

    <p className="text-xl text-gray-200 leading-relaxed">
      I constantly explore new technologies and design trends to push boundaries. I use <span className="text-white font-semibold">Java</span> to practice data structures and algorithms, focusing on writing efficient and optimized solutions. This has strengthened my understanding of problem-solving patterns, time complexity, and clean logic building.
    </p>


  </div>
</div>


      <div className="absolute z-0 ml-30">
      <Lottie 
        animationData={Wave} 
        loop={true} 
        style={{ width: 300, height: 300 }}
      />
    </div>
      <h1 className='text-center font-[gilroy] uppercase font-extrabold text-4xl text-white mt-30'>WHAT I DO <span className='text-center font-[gilroy] uppercase font-extrabold text-4xl text-green-700'>ACTUALLY?</span></h1>
      <hr className='w-30 text-4xl font-extrabold mt-1 text-green-800 mx-auto'></hr>
      <p className='relative z-10 mx-auto text-center text-xl font-[gilroy] text-white font-medium w-280 mt-3'>I create responsive websites, dynamic frontends, custom APIs, and full-stack solutions tailored to real-world needs, ensuring performance, scalability, and aesthetic polish.</p>
      <div className='relative z-10 flex items-center justify-around p-5 w-[85%] mx-auto mt-5 gap-10 mb-30'>
        <div className='p-4 h-[45vh] w-[25%] font-[gilroy] bg-gradient-to-r from-yellow-600 to-yellow-800'>
          <img className='mt-4' src='./graphic.png'></img>
          <h3 className='text-white text-xl font-extrabold text-center uppercase mt-9'>Graphic design</h3>
          <p className='text-white text-[15px] font-medium text-center'>Crafting visual identities through creative illustrations, icons, layouts, and modern aesthetics.</p>
        </div>
        <div className='p-4 h-[45vh] w-[25%] font-[gilroy] w-64 h-32 bg-gradient-to-r from-brown-900 to-blue-900'>
          <img src='./webdev.png'></img>
          <h3 className='text-white text-xl font-extrabold text-center uppercase mt-3'>Web development</h3>
          <p className='text-white text-[15px] font-medium text-center'>Building responsive, dynamic, fast, and scalable websites using modern technologies efficiently</p>
        </div>
        <div className='p-4 h-[45vh] w-[25%] font-[gilroy] w-64 h-32 bg-gradient-to-r from-red-500 to-orange-900'>
          <img src='./ui.png'></img>
          <h3 className='text-white text-xl font-extrabold text-center uppercase mt-3'>Ui/Ux design</h3>
          <p className='text-white text-[15px] font-medium text-center'>Improving speed, performance, SEO, and user experience for smoother website functionality</p>
        </div>
        <div className='p-4 h-[45vh] w-[25%] font-[gilroy] bg-gradient-to-r from-yello-900 to-green-800'>
          <img src='./webopt.png'></img>
          <h3 className='text-white text-xl font-extrabold text-center uppercase mt-3'>Web optimization</h3>
          <p className='text-white text-[15px] font-medium text-center'>Designing intuitive interfaces focused on clarity, user flow, consistency, and engagement.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page2