import React from 'react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 03. TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              SKILLS & STACK
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-xs mt-4 md:mt-0 uppercase tracking-wider">
            TECHNICAL PROFICIENCIES & FRAMEWORKS
          </p>
        </div>

        {/* Editorial Skill List Layout */}
        <div className="space-y-16">
          {skillCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="border-b border-[#F1EEE8]/10 pb-12 group">
              
              {/* Category Header */}
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="font-mono text-xs sm:text-sm font-semibold text-[#B7B5B0] tracking-widest uppercase flex items-center gap-3">
                  <span className="text-[#777772]">0{groupIdx + 1} //</span>
                  <span>{group.category}</span>
                </h3>
                <span className="font-mono text-xs text-[#777772]">
                  {group.skills.length} TECHNOLOGIES
                </span>
              </div>

              {/* Editorial Large Skill Pills / Words */}
              <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 items-center">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group/skill relative flex items-center gap-3 py-1 cursor-default"
                  >
                    <span className={`font-syne text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                      skill.primary
                        ? 'text-[#F1EEE8] group-hover/skill:text-white'
                        : 'text-[#B7B5B0] group-hover/skill:text-[#F1EEE8]'
                    }`}>
                      {skill.name}
                    </span>

                    <span className="font-mono text-[10px] text-[#777772] uppercase tracking-wider px-2 py-0.5 border border-[#F1EEE8]/10 rounded-full group-hover/skill:border-[#F1EEE8]/30 transition-colors">
                      {skill.level}
                    </span>

                    {skillIdx < group.skills.length - 1 && (
                      <span className="text-[#777772]/40 font-mono text-sm ml-2 hidden sm:inline">•</span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
