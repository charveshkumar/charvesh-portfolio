import React from 'react';
import { Phone, ArrowDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/personal';

export default function Hero() {
  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-4 sm:pt-6 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-ambient-cinematic bg-noise-overlay text-[#F1EEE8]">
      
      {/* Soft Cinematic Ambient Lighting Spots */}
      <div className="absolute top-[-5%] left-[25%] w-[700px] h-[700px] bg-white/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[15%] w-[600px] h-[600px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* 1. TOP HEADER CONTROLS BAR — FULL VIEWPORT EDGE */}
      <header className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16 flex justify-between items-center z-30 pt-2 sm:pt-4">
        {/* TOP LEFT: Minimal Outlined CALL Button */}
        <a
          href={`tel:${personal.phone.replace(/\s+/g, '')}`}
          className="group inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 border border-[#F1EEE8]/30 hover:border-[#F1EEE8] rounded-lg font-mono text-xs uppercase tracking-widest text-[#F1EEE8] transition-all duration-300 hover:bg-[#F1EEE8]/10 shadow-lg shadow-black/40 min-h-[44px]"
          title={`Call ${personal.name}`}
          aria-label={`Call ${personal.name}`}
        >
          <Phone className="w-4 h-4 text-[#B7B5B0] group-hover:text-[#F1EEE8] transition-colors" />
          <span>CALL</span>
        </a>

        {/* TOP RIGHT: Social & Resume Icons (GitHub | LinkedIn | Resume) */}
        <div className="flex items-center gap-1 sm:gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4.5" />
          </a>
          <a
            href={personal.resume || "/resume/Charvesh_Kumar_Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/resume text-[#B7B5B0] hover:text-[#F1EEE8] hover:scale-110 transition-all duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5"
            aria-label="View Resume"
            title="Resume"
          >
            <FileText className="w-4.5 h-4.5" />
            {/* Desktop Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#14151C] border border-[#F1EEE8]/15 text-[#F1EEE8] text-[10px] font-mono uppercase tracking-wider rounded pointer-events-none opacity-0 group-hover/resume:opacity-100 transition-opacity duration-200 hidden sm:block whitespace-nowrap shadow-lg z-30">
              Resume
            </span>
          </a>
        </div>
      </header>

      {/* 2. HERO CENTRAL COMPOSITION: GIANT TYPOGRAPHY + PORTRAIT POSITIONED BELOW */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16 my-auto py-4 sm:py-6 relative z-10 flex flex-col items-center">
        
        {/* Availability / Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 font-mono text-[11px] sm:text-xs md:text-sm text-[#B7B5B0] tracking-wider uppercase text-center px-2">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F1EEE8] animate-pulse shrink-0" />
          <span className="border-b border-[#F1EEE8]/20 pb-0.5">{personal.status}</span>
          <span className="text-[#777772] inline-block">• BANGALORE, INDIA</span>
        </div>

        {/* Unified Name & Portrait Composition */}
        <div className="relative w-full flex flex-col items-center text-center overflow-visible">
          
          {/* GIANT NAME TYPOGRAPHY - BLACK FILL WITH WHITE OUTLINE & MILD WHITE SHADE */}
          <div className="flex flex-col items-center justify-center select-none w-full relative z-10">
            <h1 className="font-display text-[10.5vw] sm:text-[11.2vw] md:text-[112px] lg:text-[140px] xl:text-[168px] 2xl:text-[189px] uppercase font-extrabold tracking-tight leading-[0.86] hero-name-stroke">
              CHARVESH
            </h1>
            <h1 className="font-display text-[10.5vw] sm:text-[11.2vw] md:text-[112px] lg:text-[140px] xl:text-[168px] 2xl:text-[189px] uppercase font-extrabold tracking-tight leading-[0.86] hero-name-stroke">
              KUMAR
            </h1>
          </div>

          {/* EDITORIAL MONOCHROME PORTRAIT - POSITIONED COMPLETELY BELOW KUMAR */}
          <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 z-20 group flex flex-col items-center">
            <div className="w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F1EEE8]/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#101116] transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/images/profile/charvesh.jpg"
                alt="Charvesh Kumar - AI & Machine Learning Developer"
                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:contrast-110 transition-all duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* AI / ML DEVELOPER Badge - Positioned Directly Beneath Photograph */}
            <div className="mt-3 sm:mt-4 px-3.5 sm:px-4 py-1 sm:py-1.5 bg-[#101116]/95 border border-[#F1EEE8]/20 rounded-full font-mono text-[10px] sm:text-xs tracking-widest uppercase text-[#B7B5B0] whitespace-nowrap shadow-xl backdrop-blur-md">
              AI / ML DEVELOPER
            </div>
          </div>

        </div>

        {/* 3. HERO LOWER ASYMMETRIC METADATA ROW */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-8 sm:pt-12 md:pt-16 items-end border-t border-[#F1EEE8]/10 mt-8 sm:mt-12">
          
          {/* Lower Left Block: Primary Role & Identity */}
          <div className="md:col-span-6 space-y-2.5">
            <h2 className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#F1EEE8] font-semibold">
              AI & MACHINE LEARNING DEVELOPER
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#777772] uppercase tracking-wider">
              B.Tech CSE (AI & ML) — Kuppam Engineering College (2023–2027)
            </p>
            <p className="text-base md:text-lg text-[#B7B5B0] max-w-xl font-light leading-relaxed pt-2">
              Building intelligent systems with AI, machine learning and modern web technologies. Focused on practical applications, computer vision, and RAG architectures.
            </p>
          </div>

          {/* Lower Center: Explore Scroll Prompt */}
          <div className="md:col-span-2 hidden md:flex flex-col items-center justify-end pb-2">
            <button
              onClick={scrollToWork}
              className="group flex flex-col items-center gap-2 text-[#777772] hover:text-[#F1EEE8] transition-colors duration-300"
              aria-label="Scroll to Work"
            >
              <span className="font-mono text-xs tracking-widest uppercase">EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-[#B7B5B0] group-hover:text-[#F1EEE8]" />
            </button>
          </div>

          {/* Lower Right Block: Philosophy Statement */}
          <div className="md:col-span-4 text-left md:text-right space-y-2.5">
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#777772] uppercase tracking-wider">
              // DESIGN & DEVELOPMENT PHILOSOPHY
            </p>
            <p className="text-base md:text-lg text-[#B7B5B0] font-light leading-relaxed">
              Focused on developing intelligent solutions and digital experiences that solve real-world problems through clean architecture and continuous learning.
            </p>
          </div>

        </div>

      </div>

      {/* 4. BOTTOM FOOTER TICKER BAR */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 pt-6 flex justify-between items-center font-mono text-xs sm:text-sm text-[#777772] uppercase tracking-widest">
        <span>CHARVESH KUMAR • PORTFOLIO 2026</span>
        <span>01 / 07</span>
      </div>

    </section>
  );
}
