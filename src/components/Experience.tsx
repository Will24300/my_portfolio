import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Briefcase, ExternalLink, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/experience';
import { ExperienceType } from '../types/experience';
import { TerminalWindow } from './TerminalWindow';

export const Experience: React.FC = () => {
  const getTypeIcon = (type: ExperienceType) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-term-cyan" />;
      case 'opensource':
        return <Code2 className="w-4 h-4 text-term-amber" />;
      case 'internship':
      default:
        return <Briefcase className="w-4 h-4 text-term-accent" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Prompt Header */}
        <div className="flex items-center space-x-2 text-sm font-mono text-term-muted mb-6">
          <span className="text-term-cyan">visitor@portfolio:~$</span>
          <span className="text-term-accent font-semibold">tail -f /var/log/experience.log</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow
            title="experience.log"
            path="/var/log"
            rightHeader={<span className="text-term-accent font-mono text-xs">STREAMING</span>}
          >
            <div className="space-y-6 font-mono">
              
              <div className="border-b border-term-border/60 pb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-term-accent" />
                  <span>Work Experience & Education Timeline</span>
                </h2>
                <span className="text-xs text-term-muted hidden sm:inline">
                  $ status --current
                </span>
              </div>

              {/* Log Entries Timeline */}
              <div className="relative border-l border-term-border/80 ml-3 sm:ml-4 pl-6 space-y-8 my-4">
                {experienceData.map((item, idx) => {
                  const isActive = item.status === 'ACTIVE';

                  return (
                    <div key={item.id} className="relative group">
                      
                      {/* Timeline Node Dot */}
                      <div
                        className={`absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                          isActive
                            ? 'bg-term-accent border-term-accent shadow-term-glow'
                            : 'bg-term-header border-term-border group-hover:border-term-accent'
                        }`}
                      />

                      <div className="bg-term-surface/90 rounded-lg border border-term-border p-4 sm:p-5 space-y-3 hover:border-term-accent/50 transition-colors">
                        
                        {/* Terminal Log Header: Period + Type + Scannable Status Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-term-border/40 pb-2 text-xs">
                          
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1.5 text-term-muted">
                              <Clock className="w-3.5 h-3.5 text-term-cyan" />
                              <span className="text-white font-semibold">[{item.period}]</span>
                            </div>

                            <span className="text-term-border">|</span>

                            <span className="text-term-muted uppercase text-[11px]">
                              [{item.type}]
                            </span>
                          </div>

                          {/* Scannable Status Tag: [ACTIVE] vs [COMPLETED] */}
                          <div className="flex items-center space-x-2">
                            {isActive ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-term-accent/15 text-term-accent border border-term-accent/40 shadow-term-glow">
                                <span className="w-1.5 h-1.5 rounded-full bg-term-accent animate-ping mr-1.5" />
                                [ACTIVE]
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-term-cyan/10 text-term-cyan border border-term-cyan/30">
                                [COMPLETED]
                              </span>
                            )}
                          </div>

                        </div>

                        {/* Job Role Title & Organization */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                              {getTypeIcon(item.type)}
                              <span>{item.role}</span>
                            </h3>

                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-term-accent hover:text-term-accentHover flex items-center space-x-1 text-xs"
                                title="View Link"
                              >
                                <span className="hidden sm:inline">View</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          <div className="text-xs sm:text-sm text-term-accent font-semibold">
                            @ {item.org}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-term-muted leading-relaxed">
                          {item.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-term-border/40">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-term-bg text-term-text border border-term-border/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Log EOF footer */}
              <div className="pt-2 text-xs text-term-muted flex items-center justify-between">
                <span>[EOF] Experience log stream loaded successfully</span>
                <span className="text-term-accent">STATUS: ACTIVE</span>
              </div>

            </div>
          </TerminalWindow>
        </motion.div>

      </div>
    </section>
  );
};
