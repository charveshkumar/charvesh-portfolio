import React from 'react';
import { experiences } from '../data/experience';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 05. INDUSTRY EXPOSURE
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            PRACTICAL MACHINE LEARNING INDUSTRY INTERNSHIP
          </p>
        </div>

        {/* Editorial Timeline Entries */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-b border-[#F1EEE8]/10 pb-16 space-y-8"
            >
              {/* Year & Role Title Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-3">
                  <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F1EEE8] font-bold block">
                    2026
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#777772] uppercase tracking-wider block mt-1">
                    {exp.period}
                  </span>
                </div>

                <div className="md:col-span-9 space-y-2">
                  <span className="font-mono text-xs sm:text-sm text-[#B7B5B0] uppercase tracking-widest block">
                    {exp.company} — {exp.domain}
                  </span>
                  <h3 className="font-syne text-3xl sm:text-4xl lg:text-5xl text-[#F1EEE8] font-bold">
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg text-[#B7B5B0] font-light leading-relaxed pt-2">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Responsibilities & Deliverables Full-Width Column */}
              <div className="pt-4 space-y-3">
                <h4 className="font-mono text-xs sm:text-sm text-[#F1EEE8] uppercase tracking-wider font-semibold mb-4">
                  PRACTICAL WORKFLOWS & DELIVERABLES:
                </h4>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#B7B5B0]">
                  {exp.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#F1EEE8] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
