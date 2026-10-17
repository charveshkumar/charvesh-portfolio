import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import AdditionalProjects from './AdditionalProjects';

export default function Projects({ onSelectProject }) {
  return (
    <section id="work" className="w-full py-28 bg-[#08090D] border-b border-[#F1EEE8]/10 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 mb-16 border-b border-[#F1EEE8]/10">
          <div>
            <span className="font-mono text-xs text-[#777772] uppercase tracking-widest block mb-2">
              // 04. FEATURED CASE STUDIES
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#F1EEE8] tracking-tight uppercase font-extrabold">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777772] max-w-sm mt-4 md:mt-0 uppercase tracking-wider">
            AI/ML models, computer vision systems, RAG platforms & full-stack web applications.
          </p>
        </div>

        {/* Primary Editorial Project Cards Stack */}
        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* Secondary Additional Projects Section */}
        <AdditionalProjects />

      </div>
    </section>
  );
}
