
'use client'
import { ExternalLink, Github } from "lucide-react";
import react from "react";
import { event } from '../lib/gtag';

export default function Projects() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Subtle Blue Glow */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2
        w-[600px] h-[350px] bg-blue-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* FEATURED PROJECT */}
        <div className="
          relative rounded-3xl p-12 mb-20
          bg-gradient-to-br from-[#020617] to-black
          border border-blue-400
          shadow-[0_0_35px_rgba(59,130,246,0.45)]
          hover:shadow-[0_0_55px_rgba(59,130,246,0.8)]
          transition duration-300
        ">

          <span className="text-blue-400 text-sm uppercase tracking-widest">
            Featured Project
          </span>

          <h3 className="text-4xl font-bold text-white mt-4 mb-6">
            ShopZilla — Full Stack E-Commerce Platform
          </h3>

          <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
            Designed and developed a scalable e-commerce platform focusing on performance,
            clean UI, and seamless user experience using the MERN stack.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Material UI"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 text-sm rounded-full
                  border border-blue-400 text-blue-300 bg-black/40"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-6">
            <a href="https://shopzilla-app-4ray.onrender.com" target="_blank" onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  } className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:cursor-pointer">
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
            <a href="https://github.com/codingerror7/shopzilla-app" target="_blank" onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  } className="flex items-center gap-2 text-gray-300 hover:text-white hover:cursor-pointer">
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

        <div className="
          relative rounded-3xl p-12 mb-20
          bg-gradient-to-br from-[#020617] to-black
          border border-orange-500
          shadow-[0_0_35px_rgba(249,115,22,0.45)]
          hover:shadow-[0_0_55px_rgba(249,115,22,0.8)]
          transition duration-300
        ">

          <span className="text-orange-500 text-sm uppercase tracking-widest">
            Featured Project
          </span>

          <h3 className="text-4xl font-bold text-white mt-4 mb-6">
            ShadowSafe AI - AI Powered safety and alert System
          </h3>

          <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
            Engineered ShadowSafe AI, an AI-powered women’s safety platform enabling real-time emergency alerts, live location tracking, Law-based AI chatbot and intelligent threat detection to ensure faster response and enhanced user security.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["React Native", "Gen AI", "Multer", "MongoDB", "OTP-based auth", "Cloudinary", "AI Chatbot"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 text-sm rounded-full
                  border border-orange-500 text-orange-500 bg-black/40"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-6">
            <a href="https://wa.me/919300446947" target="_blank" onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "ShadowSafe-ai",
    })
  } className="flex items-center gap-2 text-orange-500 hover:text-orange-500 hover:cursor-pointer">
              <ExternalLink className="w-5 h-5" />
              Request for Apk File
            </a>
            <a href="https://github.com/codingerror7/shadowSafe-ai" target="_blank" onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "ShadowSafe-ai",
    })
  } className="flex items-center gap-2 text-gray-300 hover:text-white hover:cursor-pointer">
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

        <div className="
  relative rounded-3xl p-12 mb-20
  bg-gradient-to-br from-[#1a1305] to-black
  border border-yellow-400
  shadow-[0_0_35px_rgba(250,204,21,0.45)]
  hover:shadow-[0_0_55px_rgba(250,204,21,0.8)]
  transition duration-300
">

  <span className="text-yellow-400 text-sm uppercase tracking-widest">
    Featured Project
  </span>

  <h3 className="text-4xl font-bold text-white mt-4 mb-6">
    TripNest — Smart Travel Booking Platform
  </h3>

  <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
    Developed a full-stack travel booking platform allowing users to explore destinations,
    plan trips, and manage bookings with a smooth and responsive UI.
  </p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-3 mb-10">
    {["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"].map(
      (tech) => (
        <span
          key={tech}
          className="px-4 py-1 text-sm rounded-full
          border border-yellow-400 text-yellow-300 bg-black/40"
        >
          {tech}
        </span>
      )
    )}
  </div>

  {/* Actions */}
  <div className="flex gap-6">
    <a
      href="https://tripnest-4-gxzg.onrender.com"
      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  }
    >
      <ExternalLink className="w-5 h-5" />
      Live Demo
    </a>

    <a href="https://github.com/codingerror7/Tripnest"
      className="flex items-center gap-2 text-gray-300 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "Tripnest",
    })
  }
    >
      <Github className="w-5 h-5" />
      Source Code
    </a>
  </div>
</div>

<div className="
  relative rounded-3xl p-12 mb-20
  bg-gradient-to-br from-[#0b0b0b] to-black
  border border-green-700
  shadow-[0_0_35px_rgba(34,197,94,0.25)]
hover:shadow-[0_0_55px_rgba(34,197,94,0.45)]
  transition duration-300
">

  <span className="text-white/70 text-sm uppercase tracking-widest">
    Work In Progress
  </span>

  <h3 className="text-4xl font-bold text-white mt-4 mb-6">
    Cinesocial - Social platform for cinephiles.
  </h3>

  <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
    Building CineSocial, a scalable social platform for movie enthusiasts featuring community-driven discussions, content sharing (posts, polls, scenarios), real-time chat, and AI-powered movie recommendations.
  </p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-3 mb-10">
    {["Socket.io", "AI Integration", "Cloudinary", "Redis", "MongoDB", "Docker", "Next.js"].map(
      (tech) => (
        <span
          key={tech}
          className="px-4 py-1 text-sm rounded-full
          border border-green-700 text-green-700 bg-black/40"
        >
          {tech}
        </span>
      )
    )}
  </div>

  {/* Status & Actions */}
  <div className="flex gap-6 items-center">
    <a href="https://cinesocial-app.onrender.com" target="_blank" onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  } className="flex items-center gap-2 text-green-400 hover:text-blue-300 hover:cursor-pointer">
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>

    <a href="https://github.com/codingerror7/cinesocial"
      className="flex items-center gap-2 text-gray-300 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  }
    >
      <Github className="w-5 h-5" />
      Source Code
    </a>
  </div>
</div>

<div className="
  relative rounded-3xl p-12 mb-20
  bg-gradient-to-br from-[#0b0b0b] to-black
  border border-white/40
  shadow-[0_0_35px_rgba(255,255,255,0.25)]
  hover:shadow-[0_0_55px_rgba(255,255,255,0.45)]
  transition duration-300
">

  <span className="text-white/70 text-sm uppercase tracking-widest">
    Work In Progress
  </span>

  <h3 className="text-4xl font-bold text-white mt-4 mb-6">
    Cluvio — Club & Event Management System
  </h3>

  <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
    Currently building a modern club and event management platform to streamline
    event creation, member management, registrations, and real-time updates.
  </p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-3 mb-10">
    {["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"].map(
      (tech) => (
        <span
          key={tech}
          className="px-4 py-1 text-sm rounded-full
          border border-white/40 text-white/80 bg-black/40"
        >
          {tech}
        </span>
      )
    )}
  </div>

  {/* Status & Actions */}
  <div className="flex gap-6 items-center">
    <span className="flex items-center gap-2 text-white/70 italic">
      🚧 Actively under development
    </span>

    <a href="https://github.com/codingerror7/Cluvio-app"
      className="flex items-center gap-2 text-gray-300 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
    event({
      action: "project_click",
      category: "portfolio",
      label: "tripnest",
    })
  }
    >
      <Github className="w-5 h-5" />
      Source Code
    </a>
  </div>
</div>


        {/* OTHER PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">

  {[
    {
      title: "Tutorly.ai",
      desc: "An AI-powered learning assistant platform that helps students get instant explanations, summaries, and study guidance.",
      tech: ["React", "Chatbot", "OpenAI API"],
      live: "https://tutorly-ai-nine.vercel.app/",
      github: "https://github.com/codingerror7/Tutorly.ai",
    },
    {
      title: "DUO Website",
      desc: "A modern, responsive business website designed with clean UI, smooth animations, and strong visual hierarchy.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "https://duo-website-eight.vercel.app/",
      github: "https://github.com/codingerror7/Duo-Website",
    },
    {
      title: "HackVerse",
      desc: "A hackathon discovery and collaboration platform where developers explore events, teams, and ideas in one place.",
      tech: ["javascript","GSAP","Three.js"],
      github: "https://github.com/codingerror7/Hacker-Website-Project",
    },
  ].map((project, i) => (
    <div
      key={i}
      className="
        p-8 rounded-2xl
        bg-black/40 border border-white/10
        hover:border-blue-400
        transition duration-300
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
      "
    >
      <h4 className="text-2xl font-semibold text-white mb-3">
        {project.title}
      </h4>

      <p className="text-gray-400 mb-6">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full
            border border-gray-600 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Live Demo →
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          GitHub →
        </a>
      </div>
    </div>
  ))}
</div>

        {/* Closing Line */}
        <p className="text-center text-2xl text-gray-500 mt-18">
          Every project is a step forward — learning, refining, and building with intent.
        </p>

      </div>
    </section>
  );
}

