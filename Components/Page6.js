"use client"
import React from 'react'
import { Sparkles, Lightbulb, Trophy, Sparkle } from "lucide-react";
import Lottie from 'lottie-react';
import Celebration from '../public/Celebration.json'

const Page6 = () => {
  return (
    <>
    <div className='min-h-screen w-full overflow-hidden bg-black font-[gilroy] relative'>
        <div className='max-w-6xl mx-auto px-4 mb-12'>
                <h1 className='text-center uppercase font-extrabold 
      text-2xl sm:text-4xl lg:text-6xl text-green-600 lg:mt-40'>ACIEVEMENTS,CERTIFICATIONS AND HACKATHONES <span className='block text-white text-lg sm:text-xl lg:text-2xl font-medium mt-4'>A snapshot of my journey beyond academics</span></h1>
              </div>
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">

      {/* CARD 1 - Yellow Glow */}
      <div className="
        w-full p-8 rounded-2xl
  backdrop-blur-xl bg-black/40 border-2 border-yellow-400
  text-white
        shadow-[0_0_25px_3px_rgba(255,255,0,0.4)]
        hover:shadow-[0_0_35px_8px_rgba(255,255,0,0.6)]
        transition-all duration-300
      ">
        <Trophy size={48} className="text-yellow-300 mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold">Smart India Hackathon</h2>
        <p className="text-base opacity-90 mt-1">Finalist • 2024</p>

        <p className="mt-4 text-sm opacity-80 leading-relaxed">
         Selected as a national finalist for building an innovative, impact-driven solution under intense competition, showcasing strong problem-solving.
        </p>
        <span className="text-yellow-200 text-sm mt-6 block">National Level • 36-Hour Sprint</span>
      </div>

      {/* CARD 2 - Orange Glow */}
      <div className="
        w-full p-8 rounded-2xl
  backdrop-blur-xl bg-black/40 border-2 border-yellow-400
  text-white
        shadow-[0_0_25px_3px_rgba(255,140,0,0.4)]
        hover:shadow-[0_0_35px_8px_rgba(255,140,0,0.6)]
        transition-all duration-300
      ">
        <Lightbulb size={48} className="text-yellow-300 mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold">Idea Hackathon</h2>
        <p className="text-base opacity-90 mt-1">Finalist • 2025</p>

        <p className="mt-4 text-sm opacity-80 leading-relaxed">
         Recognized as a finalist for presenting a practical, high-value idea that impressed judges with strong implementation potential.
        </p>
         <span className="text-orange-300 text-sm mt-6 block">Bansal Group of Institutes • Innovation Challenge</span>
      </div>

      {/* CARD 3 - Pink Glow */}
      <div className="
        w-full p-8 rounded-2xl
  backdrop-blur-xl bg-black/40 border-2 border-yellow-400
  text-white
        shadow-[0_0_25px_3px_rgba(255,0,0,0.9)]
        hover:shadow-[0_0_35px_8px_rgba(255,0,0,0.9)]
        transition-all duration-300
      ">
        <Sparkles size={48} className="text-yellow-300 mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold">Samadhan 2.0</h2>
        <p className="text-base opacity-90 mt-1">Participant • 2025</p>

        <p className="mt-4 text-sm opacity-80 leading-relaxed">
          Actively participated and contributed meaningful ideas while solving real-world challenges under pressure.
        </p>
        <span className="text-pink-300 text-sm mt-6 block">SISTec Bhopal • Problem-Solving Marathon</span>
      </div>
    </div>
    <div>
            </div>
            <div
      className="absolute 
        w-[500px] h-[400px]
        bg-blue-500/30
        rounded-full
        blur-[120px] mt-20 z-0
      "
    />
    <div
      className="absolute 
        w-[500px] h-[400px]
        bg-blue-500/30
        rounded-full
        blur-[120px] mt-20 right-10 z-0
      "
    />
    <div className='w-full max-w-6xl mx-auto px-4 font-[gilroy] text-white relative z-10'>
        <div className='w-full sm:w-[80%] md:w-[60%]
  mx-auto mt-10
  border border-white/40
  p-4 sm:p-5
  rounded-xl
  backdrop-blur-md bg-black/40
  shadow-[0_0_18px_rgba(255,0,0,0.6)]'>
    <p className="text-base sm:text-lg text-center">2024 - Microsoft azure Fundamnetals Certification</p></div>
    </div>
    <p className="text-base sm:text-xl text-center mt-6">• Solved 500+ Coding questions on Codechef.</p>
    <div className='w-full sm:w-[80%] md:w-[60%]
  mx-auto mt-10
  border border-white/40
  p-4 sm:p-5
  rounded-xl
  backdrop-blur-md bg-black/40
  shadow-[0_0_18px_rgba(255,0,0,0.6)]'>
        <p className="text-base sm:text-lg text-center">2024 - Infosys Springboard webdev Certification</p>
    </div>
    <p className="text-base sm:text-xl text-center mt-6">• Contributed in 2+ Open source projects.</p>
    <div className='w-full sm:w-[80%] md:w-[60%]
  mx-auto mt-10
  border border-white/40
  p-4 sm:p-5
  rounded-xl
  backdrop-blur-md bg-black/40
  shadow-[0_0_18px_rgba(255,0,0,0.6)] mb-20'>
        <p className="text-base sm:text-lg text-center">2024 - Skillsoft Java programming language Certification</p>
    </div>
    </div>
    </>
  )
}

export default Page6


