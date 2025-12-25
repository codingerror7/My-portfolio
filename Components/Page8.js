"use client"
import React from 'react'
import {
  Linkedin,
  Github,
  Phone,
  Download,
  Mail,
  Twitter,
} from "lucide-react";
import Lottie from 'lottie-react';
import Hi from '../public/Hi.json'


const Page8 = () => {
  return (
    <>
    <div id='Page8' className='h-[170vh] width-[100vw] overflow-hidden
    bg-black font-[gilroy]'>

         <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Blue Glow Background */}
      <div className="absolute w-[520px] h-[350px] bg-blue-500/25 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-5xl w-full text-center">

        {/* Heading */}
        <h1 className="font-[gilroy] text-5xl font-extrabold text-white mb-4 tracking-tight">
          Let’s Connect
        </h1>
        <p className="text-gray-400 mb-16 max-w-xl mx-auto">
          Open to collaborations, freelance opportunities, and meaningful conversations.
          Let’s build something impactful together.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sujal-saraswat-a7aa63202/"
            target="_blank"
            className="group p-7 rounded-3xl bg-black/40 border border-blue-400
                       hover:scale-105 transition duration-300
                       shadow-[0_0_18px_rgba(59,130,246,0.4)]
                       hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
          >
            <Linkedin className="w-12 h-12 mx-auto mb-3 text-blue-400
              drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
            <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
            <p className="text-gray-400 text-xs mt-1">Professional profile</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/codingerror7"
            target="_blank"
            className="group p-7 rounded-3xl bg-black/40 border border-gray-500
                       hover:scale-105 transition duration-300
                       shadow-[0_0_16px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_0_32px_rgba(255,255,255,0.35)]"
          >
            <Github className="w-12 h-12 mx-auto mb-3 text-white
              drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
            <h3 className="text-lg font-semibold text-white">GitHub</h3>
            <p className="text-gray-400 text-xs mt-1">Code & projects</p>
          </a>

          {/* Email */}
          <a
            href="mailto:saraswatsujal@gmail.com"
            className="group p-7 rounded-3xl bg-black/40 border border-cyan-400
                       hover:scale-105 transition duration-300
                       shadow-[0_0_18px_rgba(34,211,238,0.4)]
                       hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]"
          >
            <Mail className="w-12 h-12 mx-auto mb-3 text-cyan-400
              drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-gray-400 text-xs mt-1">Direct contact</p>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/shotsinmind?t=Matt9gYz9gIQhtqTm3a17Q&s=09"
            target="_blank"
            className="group p-7 rounded-3xl bg-black/40 border border-sky-400
                       hover:scale-105 transition duration-300
                       shadow-[0_0_18px_rgba(56,189,248,0.4)]
                       hover:shadow-[0_0_35px_rgba(56,189,248,0.7)]"
          >
            <Twitter className="w-12 h-12 mx-auto mb-3 text-sky-400
              drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
            <h3 className="text-lg font-semibold text-white">X (Twitter)</h3>
            <p className="text-gray-400 text-xs mt-1">Thoughts & updates</p>
          </a>

          {/* Phone */}
          <div
            className="group p-7 rounded-3xl bg-black/40 border border-emerald-400
                       hover:scale-105 transition duration-300
                       shadow-[0_0_18px_rgba(52,211,153,0.4)]
                       hover:shadow-[0_0_35px_rgba(52,211,153,0.7)]"
          >
            <Phone className="w-12 h-12 mx-auto mb-3 text-emerald-400
              drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
            <h3 className="text-lg font-semibold text-white">Phone</h3>
            <p className="text-gray-400 text-xs mt-1">+91 9300446947</p>
          </div>

        </div>

        {/* Resume Button */}
        <a
          href="/Sujal_Saraswat_Resume.pdf"
          download
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                     bg-blue-500 text-white font-semibold text-lg
                     hover:bg-blue-600 transition
                     shadow-[0_0_25px_rgba(59,130,246,0.7)]
                     hover:shadow-[0_0_40px_rgba(59,130,246,0.9)]"
        >
          <Download className="w-6 h-6" />
          Download Resume
        </a>

      </div>
    </section>
    <Lottie className='mx-auto mt-[-18%]'
        animationData={Hi} 
        loop={true} 
        style={{ width: 1000, height: 900 }}
      />
    </div>
    </>
  )
}

export default Page8