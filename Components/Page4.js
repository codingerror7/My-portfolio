"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Skills from '../public/Skills.json'
import Projects from './Projects'

const Page4 = () => {
  return (
    <>
    <div id='Page4' className='min-h-[190vh] width-[100vw] overflow-hidden
    bg-black font-[gilroy]'>
      <div className='w-[80vw] mx-auto flex justify-around'>
        <div className='w-[45%] h-[70%] mt-40'>
          <h1 className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-white'>MY CREATIONS IN CODE - SEE MY <span className='text-center font-[gilroy] uppercase font-extrabold text-6xl text-green-600'>PROJECTS</span></h1>
          <p className='text-center text-2xl font-[gilroy] text-white font-medium mt-3'>Building modern web experiences that are both beautiful and meaningful</p>
        </div>
        <div>
          <Lottie 
        animationData={Skills} 
        loop={true} 
        style={{ width: 450, height: 550 }}
      />
        </div>
      </div>
      <Projects/>
    </div>
    </>
  )
}

export default Page4