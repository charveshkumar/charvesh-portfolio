import React from 'react';
import { achievements } from '../data/achievements';
import { ShieldCheck } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 07. RECOGNITION & SYMPOSIA
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              ACHIEVEMENTS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            COMPETITIONS, NATIONAL HACKATHONS & SYMPOSIA
          </p>
        </div>

        {/* Numbered Editorial Achievements List */}
        <div className="space-y-12">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className="border-b border-[#F1EEE8]/10 pb-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                
                {/* Index & Year */}
                <div className="lg:col-span-3 flex items-baseline gap-4 font-mono">
                  <span className="font-display text-5xl sm:text-6xl text-[#F1EEE8] font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs text-[#777772] uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#777772]">
                    <span className="px-3 py-0.5 border border-[#F1EEE8]/15 rounded-full text-[#B7B5B0] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span>{item.organization}</span>
                  </div>

                  <h3 className="font-syne text-2xl sm:text-3xl text-[#F1EEE8] font-bold group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#777772] font-light leading-relaxed">
                    {item.description}
                  </p>

                  {item.certificateUrl && (
                    <div className="pt-2">
                      <a
                        href="#certifications"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Certificate Available (ID: {item.certificateId})</span>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
