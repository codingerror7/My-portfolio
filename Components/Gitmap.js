"use client"
import React from "react";

import { useState,useEffect } from "react";

import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "codingerror7";


const DeveloperActivity = () => {
  const [blockSize, setBlockSize] = useState(12);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setBlockSize(12);
      else if (window.innerWidth < 1024) setBlockSize(10);
      else setBlockSize(18);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-[gilroy] uppercase font-extrabold text-3xl sm:text-3xl lg:text-4xl text-white text-center">
          Code momentum
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Turning ideas into commits, consistently.
        </p>
      </div>

      {/* Graph Card */}
      <div className="relative group mb-10 lg:mb-20">
        <div className="absolute -inset-[1px] bg-transparent opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <div className="relative bg-transparent p-0 sm:p-6 shadow-xl">
          <img
  src={`https://github-readme-activity-graph.vercel.app/graph?username=codingerror7&theme=github-dark&bg_color=000000&hide_border=true`}
  className="w-full 
    h-[220px] 
    sm:h-[280px] 
    md:h-[320px] 
    lg:h-[440px]
    object-cover 
    rounded-xl"
/>
        </div>
      </div>

      {/* Heatmap Card */}
      <div className="relative group overflow-hidden">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <div className="relative bg-black p-4 sm:p-6 shadow-xl overflow-x-auto">
          
          <div className="mb-20">
            <GitHubCalendar
  username="codingerror7"
  colorScheme="dark"
  blockSize={blockSize}
  blockMargin={8}
  fontSize={16}
  theme={{
    dark: [
      "#12161b", // empty (transparent-like)
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ],
  }}
/>
          </div>

        </div>
      </div>

    </section>
  );
};

export default DeveloperActivity;