import React from 'react';
import { educationTimeline } from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 06. ACADEMIC QUALIFICATIONS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            KUPPAM ENGINEERING COLLEGE & BOARD EXAMINATIONS
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative pl-4 sm:pl-6 md:pl-10 border-l border-[#F1EEE8]/15 space-y-8 sm:space-y-12">
          {educationTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[25px] sm:-left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-[#08090D] border-2 border-[#F1EEE8] rounded-full group-hover:bg-[#F1EEE8] transition-all" />

              <div className="p-5 sm:p-8 bg-[#101116] border border-[#F1EEE8]/10 rounded-2xl space-y-4 hover:border-[#F1EEE8]/30 transition-colors">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F1EEE8]/10">
                  <div>
                    <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-1">
                      {item.period} • {item.status}
                    </span>
                    <h3 className="font-syne text-2xl sm:text-3xl text-[#F1EEE8] font-bold">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Score Highlight Box */}
                  <div className="sm:text-right shrink-0">
                    <span className="font-mono text-[10px] text-[#777772] uppercase block">GRADE / RESULT</span>
                    <span className="font-display text-3xl sm:text-4xl text-[#F1EEE8] font-bold">
                      {item.cgpa}
                    </span>
                  </div>
                </div>

                {/* Institution Info */}
                <p className="font-mono text-xs text-[#B7B5B0]">
                  {item.institution}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-1.5 font-mono text-xs text-[#777772] pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[#F1EEE8]">—</span>
                      <span className="text-[#B7B5B0]">{h}</span>
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
