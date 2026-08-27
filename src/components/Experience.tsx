import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/profile';
import { TerminalWindow } from './TerminalWindow';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Prompt */}
        <div className="flex items-center space-x-2 text-sm font-mono text-term-muted mb-6">
          <span className="text-term-cyan">visitor@portfolio:~$</span>
          <span className="text-term-accent font-semibold">tail -n 20 /var/log/career_history.log</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow
            title="career_history.log"
            path="/var/log"
            rightHeader={<span className="text-term-cyan font-mono text-xs">STREAMING</span>}
          >
            <div className="space-y-6">
              
              <div className="border-b border-term-border/60 pb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-term-amber" />
                  <span>Work Experience & Engineering Timeline</span>
                </h2>
                <span className="text-xs text-term-muted font-mono hidden sm:inline">
                  ORDER: DESCENDING
                </span>
              </div>

              {/* Vertical Log Timeline */}
              <div className="relative border-l border-term-border/80 ml-3 sm:ml-4 pl-6 space-y-8 my-4">
                {experienceData.map((item, idx) => (
                  <div key={item.id} className="relative group">
                    
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-term-header border-2 border-term-accent group-hover:bg-term-accent transition-colors" />

                    <div className="bg-term-surface/90 rounded-lg border border-term-border p-4 sm:p-5 space-y-3 hover:border-term-accent/50 transition-colors">
                      
                      {/* Log Timestamp Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono border-b border-term-border/40 pb-2">
                        <div className="flex items-center space-x-2 text-term-amber font-semibold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>[{item.year}]</span>
                        </div>
                        <div className="text-term-muted">
                          {item.location}
                        </div>
                      </div>

                      {/* Job Title & Company */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                          <span>{item.role}</span>
                          <span className="text-term-accent">@ {item.company}</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-term-muted mt-1 font-mono">
                          {item.description}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-term-text/90 font-mono">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2">
                            <ChevronRight className="w-4 h-4 text-term-accent flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-term-border/40">
                        {item.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-term-bg text-term-cyan border border-term-border/60 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                ))}
              </div>

              {/* Log EOF footer */}
              <div className="pt-2 text-xs text-term-muted font-mono flex items-center justify-between">
                <span>[EOF] End of career log stream</span>
                <span className="text-term-accent">STATUS: OK (200)</span>
              </div>

            </div>
          </TerminalWindow>
        </motion.div>

      </div>
    </section>
  );
};
