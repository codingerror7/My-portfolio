"use client"
import React from 'react'


const Page3 = () => {
  return (
    <>
    <div  className='bg-black font-[gilroy] overflow-hidden py-16'>
      <div className="bg-zinc-900 shadow-lg backdrop-blur-lg 
    w-full max-w-7xl mx-auto rounded-2xl p-4 sm:p-6 lg:p-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    <div className="h-50 p-5 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-5xl font-extrabold text-white text-center mb-2">3+</h3>
      <p className="text-white text-xl text-center">Years of Experience in Ui/Ux and Web Designing</p>
    </div>


    <div className="h-50 p-5 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-5xl font-extrabold text-white text-center mb-2">1+</h3>
      <p className="text-white text-xl text-center">Years of Experince in Web Development</p>
    </div>

    <div className="glass-card p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500 col-span-1 row-span-2">
      <h3 className="text-4xl font-extrabold text-white text-center mb-2">FRONTEND DEVELOPMENT</h3>
      <img src='./frontchart.png'></img>
    </div>


    <div className="glass-card p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-5xl font-extrabold text-white text-center mb-2">5+</h3>
      <p className="text-white text-xl text-center">Well functional and modern frontend apps.</p>
    </div>


    <div className="glass-card p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-5xl font-extrabold text-white text-center mb-2">3+</h3>
      <p className="text-white text-xl text-center">Fundamental Backend Projects. </p>
    </div>

    <div className="glass-card p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-5xl font-extrabold text-white text-center mb-2">3+</h3>
      <p className="text-white text-xl text-center">Full-Stack MERN Projects</p>
    </div>

    <div className="glass-card p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500 col-span-1 row-span-2">
      <h3 className="text-4xl font-extrabold text-white text-center mb-2">BACKEND DEVELOPMENT</h3>
      <p className="text-white text-xl text-center"></p>
      <img src='./backchart.png'></img>
    </div>

    <div className="h-60 p-5 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-4xl font-extrabold text-white text-center mb-2">Libraries & Frameworks</h3>
      <p className="text-white text-xl text-center">used 20+ Libraries and frameworks including React, Redux, Next.js</p>
    </div>

    <div className="glass-card p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500 col-span-1 row-span-2">
      <h3 className="text-6xl mt-7 font-extrabold text-blue-400 text-center mb-2 uppercase">HIRE <br></br>ME.</h3>
    </div>

    <div className="glass-card p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-black border border-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-500">
      <h3 className="text-4xl mt-5 font-extrabold text-white text-center mb-2">SOLVED 600+</h3>
      <p className="text-white text-xl text-center">Questions on Variouse coding platforms.</p>
    </div>

  </div>
</div>
<h1 id='Page3' className='text-center font-[gilroy] uppercase font-extrabold text-xl lg:text-4xl text-white mt-30'>HAVE A LOOK ON MY <span className='text-center font-[gilroy] uppercase font-extrabold text-2xl lg:text-5xl text-green-600'>SKILLS</span></h1>
{/*<Lottie 
        animationData={Wave} 
        loop={true} 
        style={{ width: 300, height: 300 }}
      />*/}
        <hr className='w-24 lg:w-48 h-1 border-none bg-green-800 mx-auto mt-2'></hr>
        <h1 className="font-[gilroy] uppercase font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-20 text-center">
  FRONTEND
</h1>

<div
  className="
    flex flex-wrap 
    justify-center 
    gap-5 sm:gap-4 lg:gap-10
    max-w-6xl 
    mx-auto 
    mt-8 
    px-4
    text-white 
    font-[gilroy]
  "
>
  {[
    "Javascript",
    "React.js",
    "Next.js",
    "React Native",   
    "TailwindCSS",
    "Bootstrap 5",
    "GSAP",
    "Material UI",
    "Figma",
    "Framer Motion",
    "React Query",
    "Chakra UI",
  ].map((skill, index) => (
    <div
      key={index}
      className="
        border border-white/40
        rounded-2xl
        px-6 py-1.5
        text-sm sm:text-base
        text-center
        whitespace-nowrap
        shadow-[0_0_12px_#ff9900,0_0_20px_#ffb347]
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
    >
      {skill}
    </div>
  ))}
</div>

        <h1 className="font-[gilroy] uppercase font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-16 text-center">
  BACKEND
</h1>

<div
  className="
    flex flex-wrap
    justify-center
    gap-5 sm:gap-4 lg:gap-10
    max-w-6xl
    mx-auto
    mt-8
    px-4
    text-white
    font-[gilroy]
  "
>
  {[
    "MySQL",
    "MongoDB",
    "Express",
    "Node.js",
    "REST API",
    "GraphQL",
    "Firebase",
    "JWT Auth",
    "Jest",
    "Postman",
    "Docker",
  ].map((skill, index) => (
    <div
      key={index}
      className="
        border border-white/40
        rounded-2xl
        px-6 py-1.5
        text-sm sm:text-base
        text-center
        whitespace-nowrap
        shadow-[0_0_12px_#ff4d4d,0_0_20px_#ff9999]
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
    >
      {skill}
    </div>
  ))}
</div>

         <h1 className="font-[gilroy] uppercase font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-16 text-center">
  TOOLS & OTHERS
</h1>

<div
  className="
    flex flex-wrap
    justify-center
    gap-5 sm:gap-4 lg:gap-10
    max-w-6xl
    mx-auto
    mt-8
    px-4
    text-white
    font-[gilroy]
  "
>
  {[
    "Java",
    "Python",
    "AWS",
    "Git",
    "GitHub",
    "Cloudflare",
    "Vercel",
    "Render",
    "VS Code",
    "IntelliJ",
    "Gen AI",
  ].map((skill, index) => (
    <div
      key={index}
      className="
        border border-white/40
        rounded-2xl
        px-6 py-1.5
        text-sm sm:text-base
        text-center
        whitespace-nowrap
        shadow-[0_0_12px_#00ff00,0_0_20px_#66ff66]
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
    >
      {skill}
    </div>
  ))}
</div>

        <h1 className="font-[gilroy] uppercase font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-16 text-center">
  ACADEMICS
</h1>

<div
  className="
    flex flex-wrap
    justify-center
    gap-5 sm:gap-4 lg:gap-10
    max-w-6xl
    mx-auto
    mt-8
    px-4
    text-white
    font-[gilroy]
  "
>
  {[
    "OOPS",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Data Structures",
    "Software Engineering",
    "ADA",
    "Problem Solving",
    "Communication Skills",
    "Project Management",
  ].map((skill, index) => (
    <div
      key={index}
      className="
        border border-white/40
        rounded-2xl
        px-6 py-1.5
        text-sm sm:text-base
        text-center
        whitespace-nowrap
        shadow-[0_0_12px_#00ffff,0_0_20px_#66ffff]
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
    >
      {skill}
    </div>
  ))}
</div>

    </div>
    </>
  )
}

export default Page3
