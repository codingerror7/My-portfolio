"use client"
import React from 'react'
import { Sparkles, Lightbulb, Trophy, Sparkle } from "lucide-react";
import Lottie from 'lottie-react';
import Celebration from '../public/Celebration.json'

const Page6 = () => {
  return (
    <>
    <div className='min-h-[180vh] width-[100vw] overflow-hidden
    bg-black font-[gilroy]'>
        <div className='w-[80vw] mx-auto mb-12'>
                <h1 className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-green-600'>ACIEVEMENTS,CERTIFICATIONS AND HACKATHONES <span className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-white'>A snapshot of my journey beyond academics</span></h1>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center py-10">

      {/* CARD 1 - Yellow Glow */}
      <div className="
        w-[330px] md:w-[380px] p-11 rounded-2xl 
        backdrop-blur-xl bg-black/40 border-[2px]
        border-yellow-400 text-white font-[Gilroy]
        shadow-[0_0_25px_3px_rgba(255,255,0,0.4)]
        hover:shadow-[0_0_35px_8px_rgba(255,255,0,0.6)]
        transition-all duration-300
      ">
        <Trophy size={48} className="text-yellow-300 mb-4" />
        <h2 className="text-2xl font-bold">Smart India Hackathon</h2>
        <p className="text-lg opacity-90 mt-1">Finalist • 2024</p>

        <p className="mt-4 text-[15px] opacity-80 leading-relaxed">
         Selected as a national finalist for building an innovative, impact-driven solution under intense competition, showcasing strong problem-solving.
        </p>
        <span className="text-yellow-200 text-sm mt-6 block">National Level • 36-Hour Sprint</span>
      </div>

      {/* CARD 2 - Orange Glow */}
      <div className="
        w-[330px] md:w-[380px] p-8 rounded-2xl 
        backdrop-blur-xl bg-black/40 border-[2px]
        border-orange-400 text-white font-[Gilroy]
        shadow-[0_0_25px_3px_rgba(255,140,0,0.4)]
        hover:shadow-[0_0_35px_8px_rgba(255,140,0,0.6)]
        transition-all duration-300
      ">
        <Lightbulb size={48} className="text-orange-300 mb-4" />
        <h2 className="text-2xl font-bold">Idea Hackathon</h2>
        <p className="text-lg opacity-90 mt-1">Finalist • 2025</p>

        <p className="mt-4 text-[15px] opacity-80 leading-relaxed">
         Recognized as a finalist for presenting a practical, high-value idea that impressed judges with strong implementation potential.
        </p>
         <span className="text-orange-300 text-sm mt-6 block">Bansal Group of Institutes • Innovation Challenge</span>
      </div>

      {/* CARD 3 - Pink Glow */}
      <div className="
        w-[330px] md:w-[380px] p-11.5 rounded-2xl 
        backdrop-blur-xl bg-black/40 border-[2px]
        border-pink-400 text-white font-[Gilroy]
        shadow-[0_0_25px_3px_rgba(255,0,0,0.9)]
        hover:shadow-[0_0_35px_8px_rgba(255,0,0,0.9)]
        transition-all duration-300
      ">
        <Sparkles size={48} className="text-pink-300 mb-4" />
        <h2 className="text-2xl font-bold">Samadhan 2.0</h2>
        <p className="text-lg opacity-90 mt-1">Participant • 2025</p>

        <p className="mt-4 text-[15px] opacity-80 leading-relaxed">
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
        blur-[120px] mt-20
      "
    />
    <div
      className="absolute 
        w-[500px] h-[400px]
        bg-blue-500/30
        rounded-full
        blur-[120px] mt-20 right-10
      "
    />
    <div className='w-[90vw] mx-auto font-[gilroy] text-white'>
        <div className='w-[40vw] border-[1px] border-white/40 p-2 mx-auto mt-15  backdrop-blur-md bg-black/40
     shadow-[0_0_18px_rgba(255,0,0,0.7)]'><p class="text-white text-xl">2024 - Microsoft azure Fundamnetals Certification</p></div>
    </div>
    <p className="text-white text-2xl text-center mt-8">• Solved 500+ Coding questions on Codechef.</p>
    <div className='w-[40vw] border-[1px] border-white/40 p-2 mx-auto mt-10  backdrop-blur-md bg-black/40
     shadow-[0_0_18px_rgba(255,0,0,0.7)]'>
        <p className="text-white text-xl">2024 - Infosys Springboard webdev Certification</p>
    </div>
    <p className="text-white text-2xl text-center mt-8">• Contributed in 2+ Open source projects.</p>
    <div className='w-[40vw] border-[1px] border-white/40 p-2 mx-auto mt-10  backdrop-blur-md bg-black/40
     shadow-[0_0_18px_rgba(255,0,0,0.7)]'>
        <p className="text-white text-xl">2024 - Skillsoft Java programming language Certification</p>
    </div>
    </div>
    </>
  )
}

export default Page6