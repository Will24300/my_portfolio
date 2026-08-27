import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Filter, Code } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Featured', value: 'featured' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'CLI & Tools', value: 'cli' },
    { label: 'Open Source', value: 'open-source' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Prompt */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-2 text-sm font-mono text-term-muted">
            <span className="text-term-cyan">visitor@portfolio:~$</span>
            <span className="text-term-accent font-semibold">ls -la ~/projects</span>
          </div>

          {/* Terminal-styled Category Filters */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-3 py-1.5 rounded transition-all border ${
                  activeFilter === cat.value
                    ? 'bg-term-accent text-term-bg border-term-accent font-bold shadow-term-glow'
                    : 'bg-term-card text-term-muted border-term-border hover:border-term-accent/50 hover:text-term-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title Banner */}
        <div className="mb-8 p-4 rounded-lg bg-term-header/50 border border-term-border/80 flex items-center justify-between font-mono">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-term-accent" />
            <h2 className="text-lg font-bold text-white">Curated Software & Tools</h2>
          </div>
          <div className="text-xs text-term-muted hidden sm:block">
            Showing {filteredProjects.length} of {projectsData.length} entries
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-lg bg-term-surface border border-term-border text-center font-mono space-y-2">
            <Code className="w-8 h-8 text-term-muted mx-auto" />
            <div className="text-term-muted">No projects found matching filter "{activeFilter}".</div>
            <button
              onClick={() => setActiveFilter('all')}
              className="text-xs text-term-accent hover:underline"
            >
              Reset filter to all
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
