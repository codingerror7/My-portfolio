"use client"
import React from 'react'
import { Briefcase, Code, Laptop } from "lucide-react";

const Page7 = () => {
  return (
    <>
    <div className='min-h-screen w-full overflow-hidden bg-black font-[gilroy] relative'>
      <div className='max-w-6xl mx-auto px-4 mb-4 mt-20'>
                <h1 className='text-center uppercase font-extrabold
    text-2xl sm:text-4xl lg:text-6xl
    text-green-600'>Where I’ve Built & Learned-<span className='block text-white mt-2'>EXPERIENCE</span></h1>
              </div>
              <hr className='w-34 lg:w-48 h-1 border-none bg-green-800 mx-auto mt-2'></hr>
              <div
      className="hidden md:block lg:block absolute 
        w-[600px] h-[400px]
        bg-red-500/30
        rounded-full
        blur-[120px] mt-30
      "
    />
    <div
      className="hidden md:block lg:block absolute 
        w-[600px] h-[400px]
        bg-red-500/30
        rounded-full
        blur-[120px] mt-30 right-10
      "
    />
               <div className="max-w-6xl mx-auto px-4
  flex flex-col lg:flex-row
  gap-10 justify-center items-stretch
  py-16 font-[Gilroy]">

      {/* ---------------- CARD 1 - Collegetips.in ---------------- */}
      <div className="relative w-full max-w-[450px] p-8 sm:p-10 rounded-3xl
  bg-gradient-to-br from-[#0b1f17] to-[#020617]
  border border-emerald-300 text-white
  shadow-[0_0_18px_rgba(110,231,183,0.35)]
  hover:shadow-[0_0_34px_rgba(110,231,183,0.65)]
  transition-all duration-300 hover:scale-[1.05]">

        {/* Glowing Border */}
        

        <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 mb-6
    text-emerald-200
    drop-shadow-[0_0_14px_rgba(110,231,183,0.6)]" />

        <h2 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide">Collegetips.in</h2>
        <p className="text-emerald-300 text-sm mb-4">Full-Stack Developer • Apr 2025 - Jun 2025</p>

        <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm sm:text-[15.5px]">
          <li>Redesigned and elevated the website UI/UX using Figma and ReactJS.</li>
          <li>Improved site speed and responsiveness across all devices.</li>
          <li>Built and maintained MERN stack features, APIs, and database integration.</li>
          <li>Learned teamwork, collaboration, and leadership in a real-world project environment.</li>
          <li>Enhanced frontend animations and interactive components using ReactJS.</li>
        </ul>

        <div className="mt-5 text-gray-400 text-sm">Skills: ReactJS, JavaScript, Figma, MongoDB, Express, Node.js</div>
      </div>


      {/* ---------------- CARD 2 - Freelance Developer ---------------- */}
      <div className="relative w-full max-w-[450px] p-8 sm:p-10 rounded-3xl
  bg-gradient-to-br from-[#2b1105] via-[#1a0f05] to-[#0f0a05]
  border border-orange-300 text-white
  shadow-[0_0_18px_rgba(253,186,116,0.35)] hover:shadow-[0_0_34px_rgba(253,186,116,0.65)] transition-all duration-300 hover:scale-[1.05]">

        {/* Glowing Border */}

        <Laptop className="w-12 h-12 sm:w-16 sm:h-16 mb-6
    text-orange-200
    drop-shadow-[0_0_14px_rgba(253,186,116,0.6)]" />

        <h2 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide">Freelance Developer</h2>
        <p className="text-orange-300 text-sm mb-4">May 2025 - Present</p>

        <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm sm:text-[15.5px]">
          <li>Worked on multiple full-stack projects, delivering high-quality frontend and backend solutions.</li>
          <li>Collaborated with clients to understand requirements and implement scalable solutions.</li>
          <li>Developed responsive, interactive UIs using ReactJS and modern JavaScript.</li>
          <li>Built REST APIs, integrated databases, and managed deployments using MERN stack.</li>
          <li>Improved project management, communication, and independent problem-solving skills.</li>
        </ul>

        <div className="mt-5 text-gray-400 text-sm">Skills: ReactJS, JavaScript, Node.js, Express, MongoDB, TailwindCSS</div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Page7
