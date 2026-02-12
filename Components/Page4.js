"use client"
import React from 'react'
import Lottie from 'lottie-react'
import Skills from '../public/Skills.json'
import Projects from './Projects'

const Page4 = () => {
  return (
    <>
    <div id='Page4' className='min-h-screen w-full overflow-hidden bg-black font-[gilroy]'>
      <div className='max-w-7xl
      mx-auto
      px-4 sm:px-6
      flex flex-col lg:flex-row
      items-center
      justify-between
      gap-10
      pt-20 lg:pt-32'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h1 className='uppercase font-extrabold
          text-xl sm:text-4xl lg:text-4xl
          text-white
          leading-tight'>MY CREATIONS IN CODE - SEE MY <span className='text-center font-[gilroy] uppercase font-extrabold text-2xl lg:text-5xl text-green-600'>PROJECTS</span></h1>
          <p className='text-base sm:text-lg lg:text-2xl
          text-white
          font-medium
          mt-4'>Building modern web experiences that are both beautiful and meaningful</p>
        </div>
        <div>
          <Lottie className="w-[180px] sm:w-[340px] lg:w-[500px]"
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
