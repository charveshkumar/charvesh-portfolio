import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article className="group relative border-b border-[#F1EEE8]/10 pb-16 transition-all duration-500">
      
      {/* Editorial Index & Category Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 font-mono text-xs text-[#777772]">
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl sm:text-5xl text-[#F1EEE8] font-bold">
            {project.number}
          </span>
          <span className="text-[#F1EEE8]/30">/</span>
          <span className="text-[#B7B5B0] uppercase tracking-widest">{project.category}</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider">
          <span className="px-2.5 py-1 border border-[#F1EEE8]/10 rounded-full text-[#B7B5B0]">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Grid: Visual Banner Left/Top, Editorial Content Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Visual Showcase Banner */}
        <div 
          onClick={() => onSelectProject(project)}
          className={`lg:col-span-7 cursor-pointer group/image relative min-h-[250px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-[#F1EEE8]/10 bg-[#101116] bg-gradient-to-br ${project.imageGradient} p-5 sm:p-8 flex flex-col justify-between transition-transform duration-700 hover:scale-[1.01]`}
        >
          <div className="absolute inset-0 bg-noise-overlay opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex justify-between items-start">
            <span className="font-mono text-xs text-[#B7B5B0] uppercase tracking-widest bg-[#08090D]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#F1EEE8]/10">
              CASE STUDY
            </span>
            <span className="w-10 h-10 rounded-full bg-[#F1EEE8]/10 border border-[#F1EEE8]/20 flex items-center justify-center text-[#F1EEE8] group-hover/image:bg-[#F1EEE8] group-hover/image:text-[#08090D] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F1EEE8] uppercase font-extrabold tracking-tight group-hover/image:translate-x-2 transition-transform duration-500">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#B7B5B0]">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Editorial Details & Stack */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-4">
          <div className="space-y-4">
            <p className="text-base text-[#B7B5B0] font-light leading-relaxed">
              {project.description}
            </p>

            {/* Highlights List */}
            {project.features && (
              <div className="space-y-2 border-t border-[#F1EEE8]/10 pt-4 font-mono text-xs text-[#777772]">
                <span className="text-[#F1EEE8] font-semibold block uppercase mb-1">
                  FEATURE ARCHITECTURE:
                </span>
                {project.features.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2">
                    <span className="text-[#F1EEE8]">—</span>
                    <span className="line-clamp-2 text-[#B7B5B0]">{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technology Badges & Links */}
          <div className="space-y-6 pt-4 border-t border-[#F1EEE8]/10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 bg-[#101116] border border-[#F1EEE8]/10 text-xs font-mono text-[#B7B5B0] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-2 font-mono text-xs text-[#F1EEE8] hover:text-white uppercase tracking-wider group/btn"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-[#F1EEE8]/10 text-[#B7B5B0] hover:text-[#F1EEE8] hover:border-[#F1EEE8]/30 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-[#F1EEE8]/10 text-[#B7B5B0] hover:text-[#F1EEE8] hover:border-[#F1EEE8]/30 transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

    </article>
  );
}
