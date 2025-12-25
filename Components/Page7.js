"use client"
import React from 'react'
import { Briefcase, Code, Laptop } from "lucide-react";

const Page7 = () => {
  return (
    <>
    <div className='min-h-[105vh] width-[100vw] overflow-hidden
    bg-black font-[gilroy]'>
      <div className='w-[80vw] mx-auto mb-1'>
                <h1 className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-green-600'>Where I’ve Built & Learned-<span className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-white'>EXPERIENCE</span></h1>
              </div>
              <hr className='w-80 text-4xl font-extrabold text-green-800 mx-auto'></hr>
              <div
      className="absolute 
        w-[600px] h-[400px]
        bg-red-500/30
        rounded-full
        blur-[120px] mt-30
      "
    />
    <div
      className="absolute 
        w-[600px] h-[400px]
        bg-red-500/30
        rounded-full
        blur-[120px] mt-30 right-10
      "
    />
               <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-start py-16 font-[Gilroy]">

      {/* ---------------- CARD 1 - Collegetips.in ---------------- */}
      <div className=" relative w-[380px] md:w-[450px] lg:w-[450px] p-10 rounded-3xl
  bg-gradient-to-br from-[#0b1f17] to-[#020617]
  border border-emerald-300
  text-white
  shadow-[0_0_18px_rgba(110,231,183,0.35)]
  hover:shadow-[0_0_34px_rgba(110,231,183,0.65)]
  transition-all duration-300 hover:scale-[1.05]">

        {/* Glowing Border */}
        

        <Briefcase className="w-16 h-16 mb-6
    text-emerald-200
    drop-shadow-[0_0_14px_rgba(110,231,183,0.6)]" />

        <h2 className="text-3xl font-bold mb-2 tracking-wide">Collegetips.in</h2>
        <p className="text-emerald-300 text-sm mb-4">Full-Stack Developer • Apr 2025 - Jun 2025</p>

        <ul className="list-disc list-inside text-gray-200 space-y-2 text-[15.5px]">
          <li>Redesigned and elevated the website UI/UX using Figma and ReactJS.</li>
          <li>Improved site speed and responsiveness across all devices.</li>
          <li>Built and maintained MERN stack features, APIs, and database integration.</li>
          <li>Learned teamwork, collaboration, and leadership in a real-world project environment.</li>
          <li>Enhanced frontend animations and interactive components using ReactJS.</li>
        </ul>

        <div className="mt-5 text-gray-400 text-sm">Skills: ReactJS, JavaScript, Figma, MongoDB, Express, Node.js</div>
      </div>


      {/* ---------------- CARD 2 - Freelance Developer ---------------- */}
      <div className=" relative w-[380px] md:w-[450px] p-10 rounded-3xl
  bg-gradient-to-br from-[#1f130b] to-[#020617]
  border border-orange-300
  text-white
  shadow-[0_0_18px_rgba(253,186,116,0.35)]
  hover:shadow-[0_0_34px_rgba(253,186,116,0.65)]
  transition-all duration-300 hover:scale-[1.05]">

        {/* Glowing Border */}

        <Laptop className="w-16 h-16 mb-6
    text-orange-200
    drop-shadow-[0_0_14px_rgba(253,186,116,0.6)]" />

        <h2 className="text-3xl font-bold mb-2 tracking-wide">Freelance Developer</h2>
        <p className="text-orange-300 text-sm mb-4">May 2025 - Present</p>

        <ul className="list-disc list-inside text-gray-200 space-y-2 text-[15.5px]">
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