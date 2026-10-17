import React from 'react';
import { personal } from '../data/personal';

export default function About() {
  return (
    <section id="about" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 02. BIOGRAPHY & FOCUS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              ABOUT ME
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            CONTINUOUS LEARNER & DRIVEN AI/ML DEVELOPER
          </p>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Slogan */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-syne text-2xl sm:text-3xl lg:text-4xl text-[#F1EEE8] font-bold leading-snug">
              Building intelligent solutions with AI, ML and modern web technologies.
            </h3>
            
            <div className="p-4 sm:p-6 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-4">
              <div className="font-mono text-xs text-[#777772] uppercase tracking-wider">
                ACADEMIC PROFILE
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-[#F1EEE8]/5">
                  <span className="text-[#777772]">DEGREE:</span>
                  <span className="text-[#F1EEE8]">B.Tech CSE (AI & ML)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F1EEE8]/5">
                  <span className="text-[#777772]">INSTITUTION:</span>
                  <span className="text-[#F1EEE8]">Kuppam Engg College (JNTUA)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F1EEE8]/5">
                  <span className="text-[#777772]">TIMELINE:</span>
                  <span className="text-[#F1EEE8]">2023 — 2027</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#777772]">LOCATION:</span>
                  <span className="text-[#F1EEE8]">Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Focus */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#B7B5B0] font-light leading-relaxed">
              {personal.aboutText}
            </p>

            <p className="text-sm text-[#777772] font-light leading-relaxed">
              {personal.summary}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F1EEE8]/10">
              <div className="p-5 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-2">
                <span className="font-mono text-[10px] text-[#777772] uppercase tracking-widest block">
                  01 // DOMAIN FOCUS
                </span>
                <h4 className="font-mono text-xs font-semibold text-[#F1EEE8] uppercase tracking-wider">
                  AI & MACHINE LEARNING
                </h4>
                <p className="text-xs text-[#777772] font-light leading-relaxed">
                  Dataset cleaning, model training, computer vision (YOLO11m), and RAG agents for intelligent Q&A.
                </p>
              </div>

              <div className="p-5 bg-[#101116] border border-[#F1EEE8]/10 rounded-xl space-y-2">
                <span className="font-mono text-[10px] text-[#777772] uppercase tracking-widest block">
                  02 // DOMAIN FOCUS
                </span>
                <h4 className="font-mono text-xs font-semibold text-[#F1EEE8] uppercase tracking-wider">
                  FULL-STACK WEB DEVELOPMENT
                </h4>
                <p className="text-xs text-[#777772] font-light leading-relaxed">
                  Modern React frontend systems, Python Django backends, RESTful API architecture, and responsive UIs.
                </p>
              </div>
            </div>

            {/* Positioning Banner */}
            <div className="p-5 border border-[#F1EEE8]/15 bg-[#101116]/50 rounded-xl flex items-center justify-between font-mono text-xs text-[#B7B5B0]">
              <span>STATUS: <strong className="text-[#F1EEE8]">{personal.status}</strong></span>
              <a
                href="#contact"
                className="text-[#F1EEE8] hover:underline uppercase tracking-wider text-[11px]"
              >
                GET IN TOUCH →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
