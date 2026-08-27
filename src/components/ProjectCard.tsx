import React from 'react';
import { ExternalLink, Terminal, Sparkles, Folder } from 'lucide-react';
import { Project } from '../types/project';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-term-card border border-term-border hover:border-term-accent/60 shadow-term-window transition-all duration-300 flex flex-col h-full group">
      
      {/* Terminal Top Window Header */}
      <div className="bg-term-header px-3 py-2 flex items-center justify-between border-b border-term-border/70 select-none">
        {/* Three dots / traffic lights */}
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-term-red/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-term-yellow/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-term-green/90" />
        </div>

        {/* Project Window Name */}
        <div className="flex items-center space-x-1.5 text-[11px] font-mono text-term-muted truncate mx-2">
          <Folder className="w-3 h-3 text-term-accent flex-shrink-0" />
          <span className="text-term-accent truncate">~/projects/{project.id}</span>
        </div>

        {/* Featured indicator badge */}
        <div>
          {project.featured && (
            <span className="inline-flex items-center space-x-1 text-[10px] font-mono bg-term-accent/15 text-term-accent px-1.5 py-0.5 rounded border border-term-accent/30">
              <Sparkles className="w-2.5 h-2.5" />
              <span className="hidden sm:inline">FEATURED</span>
            </span>
          )}
        </div>
      </div>

      {/* Optional Project Screenshot / Thumbnail Header */}
      {project.imageUrl ? (
        <div className="relative h-44 sm:h-48 overflow-hidden bg-term-bg border-b border-term-border/60 group-hover:opacity-95 transition-opacity">
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-term-card via-transparent to-transparent opacity-80" />
        </div>
      ) : (
        <div className="h-32 bg-term-bg/60 border-b border-term-border/60 flex items-center justify-center p-4">
          <div className="text-center space-y-1">
            <Terminal className="w-8 h-8 text-term-accent/50 mx-auto" />
            <div className="text-xs text-term-muted font-mono">// NO_IMAGE_PREVIEW</div>
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 font-mono flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Command execution title */}
          <div className="text-xs text-term-cyan font-semibold flex items-center space-x-1">
            <span>$</span>
            <span>exec --name</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-term-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-term-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-term-surface text-term-text border border-term-border/60 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Action Links: GitHub & Live Demo */}
          <div className="flex items-center space-x-3 pt-3 border-t border-term-border/40 text-xs">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-term-text hover:text-term-accent transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-term-accent hover:text-term-accentHover transition-colors font-semibold"
                title="View Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
