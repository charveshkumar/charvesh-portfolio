import React from 'react';
import { personal } from '../data/personal';

export default function Stats() {
  const statItems = [
    {
      value: "05+",
      label: "AI/ML & WEB PROJECTS",
      subtext: "Computer Vision, RAG, Full-Stack"
    },
    {
      value: "01ST",
      label: "PROJECT EXPO WINNER",
      subtext: "Prayuthi 2K26 National Expo"
    },
    {
      value: `${personal.cgpa}`,
      label: "ACADEMIC CGPA",
      subtext: `B.Tech CSE (AI & ML) ${personal.startYear}–${personal.graduationYear}`
    },
    {
      value: "01",
      label: "ML INDUSTRY INTERNSHIP",
      subtext: "Skilldzire ML Engineering"
    }
  ];

  return (
    <section className="w-full bg-[#08090D] border-y border-[#F1EEE8]/10 py-16 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 divide-y-0 lg:divide-x divide-[#F1EEE8]/10">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-3.5 sm:p-5 lg:p-0 bg-[#101116]/40 lg:bg-transparent rounded-xl lg:rounded-none border lg:border-0 border-[#F1EEE8]/10 ${idx !== 0 ? 'lg:pl-8' : ''}`}
            >
              <div>
                <span className="font-mono text-[10px] text-[#777772] uppercase tracking-widest block mb-3">
                  // 0{idx + 1} SPECIFICATION
                </span>
                <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F1EEE8] block font-extrabold tracking-tight mb-2">
                  {stat.value}
                </span>
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-[#B7B5B0] tracking-wider uppercase block mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[#777772] font-light block">
                  {stat.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
