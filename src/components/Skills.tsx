import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Terminal, Database, Package, Check } from 'lucide-react';
import { skillsData } from '../data/profile';
import { TerminalWindow } from './TerminalWindow';

export const Skills: React.FC = () => {
  // Helper to resolve string icon name to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-term-accent" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-term-cyan" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-term-amber" />;
      case 'Database':
        return <Database className="w-4 h-4 text-term-purple" />;
      default:
        return <Package className="w-4 h-4 text-term-accent" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Prompt */}
        <div className="flex items-center space-x-2 text-sm font-mono text-term-muted mb-6">
          <span className="text-term-cyan">visitor@portfolio:~$</span>
          <span className="text-term-accent font-semibold">installed-packages --list-all</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow
            title="system_environment.lock"
            path="~/system/stack"
            rightHeader={
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-term-accent font-mono">STATUS: UP TO DATE</span>
              </div>
            }
          >
            <div className="space-y-8">
              
              <div className="border-b border-term-border/60 pb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Package className="w-5 h-5 text-term-accent" />
                  <span>Installed Tech Stack & Skill Inventory</span>
                </h2>
                <span className="text-xs text-term-muted font-mono hidden sm:inline">
                  total {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)} packages
                </span>
              </div>

              {/* Grid of Skill Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, idx) => (
                  <div
                    key={idx}
                    className="bg-term-surface/80 rounded-lg border border-term-border/70 p-4 space-y-3 hover:border-term-accent/50 transition-colors"
                  >
                    {/* Category Header & Command */}
                    <div className="flex items-center justify-between border-b border-term-border/40 pb-2">
                      <div className="flex items-center space-x-2 font-semibold text-white">
                        {getIcon(category.icon)}
                        <span>{category.categoryName}</span>
                      </div>
                      <span className="text-[11px] text-term-muted font-mono bg-term-header px-2 py-0.5 rounded border border-term-border/40">
                        {category.skills.length} pkgs
                      </span>
                    </div>

                    {/* Shell Command output label */}
                    <div className="text-[11px] font-mono text-term-muted flex items-center space-x-1">
                      <span className="text-term-accent">$</span>
                      <span className="text-term-text">{category.command}</span>
                    </div>

                    {/* Installed Package Pill Badges */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {category.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="flex items-center justify-between p-2 rounded bg-term-bg/80 border border-term-border/60 hover:border-term-accent/60 transition-all group"
                        >
                          <div className="flex items-center space-x-1.5 truncate">
                            <Check className="w-3 h-3 text-term-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-term-text font-medium truncate">{skill.name}</span>
                          </div>
                          {skill.version && (
                            <span className="text-[10px] text-term-muted font-mono bg-term-header px-1.5 py-0.5 rounded ml-1 flex-shrink-0">
                              {skill.version}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Package manager status footer */}
              <div className="pt-2 border-t border-term-border/40 text-xs text-term-muted flex items-center justify-between font-mono">
                <span>// RUNTIME: Node.js / V8 Engine</span>
                <span className="text-term-accent">✓ 0 vulnerabilities found</span>
              </div>

            </div>
          </TerminalWindow>
        </motion.div>

      </div>
    </section>
  );
};
