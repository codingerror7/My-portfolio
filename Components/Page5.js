"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Student from '../public/Student.json'
import Books from '../public/Books.json'

const Page5 = () => {
  return (
    <>
    <div className='min-h-[190vh] width-[100vw] overflow-hidden
    bg-black font-[gilroy]'>
      <div className='w-[80vw] mx-auto flex justify-around mb-12'>
        <div>
          <Lottie 
        animationData={Student} 
        loop={true} 
        style={{ width: 400, height: 500 }}
      />
        </div>
        <div className='w-[45%] h-[70%] mt-40'>
          <h1 className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-white'>Learning Path - MY <span className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-green-600'>EDUCATION</span></h1>
          <p className='text-center text-2xl font-[gilroy] text-white font-medium mt-3'>I may not be from a top-tier institute, but I strive to create top-tier work.</p>
        </div>
      </div>
      <div className='flex w-[80vw] ml-15'>
      <div className="relative w-full max-w-4xl">
    <div className="absolute h-full w-[5px] bg-gradient-to-b from-[#F97316] via-[#F59E0B] to-[#FACC15] rounded-full ml-50"></div>

    {/* === B.Tech Card === */}
    <div className="w-full flex justify-start mb-16 ml-56">
      <div className="w-[65%] bg-[#111111] border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all relative">
        <div className="absolute -left-8 top-8 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-lg"></div>

        <h3 className="text-2xl font-semibold text-white mb-1">B.Tech – Computer science & Engineering</h3>
        <p className="text-xl text-purple-300 mb-3">LNCT Group of Colleges (2023–2027)</p>
        <p className="text-white/70 text-md leading-relaxed">
          CGPA: <span className="text-white font-semibold">7.5</span><br />
          Bhopal, Madhya Pradesh
        </p>
      </div>
    </div>

    {/* === Higher Secondary Card === */}
    <div className="w-full flex justify-end mb-16 ml-[-90]">
      <div className="w-[65%] bg-[#111111] border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all relative">
        <div className="absolute -left-8 top-8 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-lg"></div>

        <h3 className="text-2xl font-semibold text-white mb-1">Higher Secondary (12th)</h3>
        <p className="text-xl text-pink-300 mb-3">Model Higher Secondary School – 2023</p>
        <p className="text-white/70 text-md leading-relaxed">
          Percentage: <span className="text-white font-semibold">87%</span><br />
          Bhopal, Madhya Pradesh
        </p>
      </div>
    </div>

    {/* === High School Card === */}
    <div className="w-full flex justify-start ml-56">
      <div className="w-[65%] bg-[#111111] border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-violet-500/20 transition-all relative">
        <div className="absolute -left-8 top-8 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-lg"></div>

        <h3 className="text-2xl font-semibold text-white mb-1">High School (10th)</h3>
        <p className="text-xl text-indigo-300 mb-3">Father Agnel High School – 2021</p>
        <p className="text-white/70 text-md leading-relaxed">
          Percentage: <span className="text-white font-semibold">93%</span><br />
          Bhopal, Madhya Pradesh
        </p>
      </div>
    </div>
  </div>
  <Lottie className='mt-10'
        animationData={Books} 
        loop={true} 
        style={{ width: 500, height: 600 }}
      />
  </div>
    </div>
    </>
  )
}

export default Page5