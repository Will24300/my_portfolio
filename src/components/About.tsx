import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MapPin, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { TerminalWindow } from './TerminalWindow';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prompt */}
        <div className="flex items-center space-x-2 text-sm font-mono text-term-muted mb-6">
          <span className="text-term-cyan">visitor@portfolio:~$</span>
          <span className="text-term-accent font-semibold">cat about.md</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow
            title="about.md"
            path="~/documents"
            rightHeader={<span className="text-term-accent font-mono text-xs">READONLY</span>}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Markdown formatted bio text */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-2 border-b border-term-border/60 pb-3">
                  <FileText className="w-5 h-5 text-term-accent" />
                  <h2 className="text-xl font-bold text-white tracking-wide">Developer Bio & Background</h2>
                </div>

                <div className="space-y-4 text-term-text text-sm sm:text-base leading-relaxed">
                  {profileData.aboutMarkdown.map((paragraph, index) => {
                    if (paragraph.startsWith('# ')) {
                      return null; // Header already shown above
                    }
                    return (
                      <p key={index} className="text-term-text/90 font-mono">
                        <span className="text-term-muted mr-2">&gt;</span>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Key Technical Philosophy Block */}
                <div className="mt-6 p-4 rounded bg-term-header/80 border border-term-border/80 font-mono text-xs sm:text-sm space-y-2">
                  <div className="text-term-amber font-semibold flex items-center space-x-2">
                    <span>// CORE ENGINEERING PRINCIPLES</span>
                  </div>
                  <ul className="space-y-1.5 text-term-muted">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-term-accent flex-shrink-0 mt-0.5" />
                      <span>Write clean, maintainable, and self-documenting code.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-term-accent flex-shrink-0 mt-0.5" />
                      <span>Prioritize performance, accessibility, and high contrast UX.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-term-accent flex-shrink-0 mt-0.5" />
                      <span>Embrace developer productivity tools, automation, and continuous delivery.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Quick Metadata & Profile Photo */}
              <div className="lg:col-span-4 bg-term-surface/70 p-4 rounded border border-term-border/60 space-y-4 font-mono text-xs">
                
                {/* Profile Photo Display */}
                {profileData.avatarUrl && (
                  <div className="text-center space-y-2 border-b border-term-border/60 pb-3">
                    <div className="relative inline-block">
                      <img
                        src={profileData.avatarUrl}
                        alt={profileData.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-2 border-term-accent shadow-term-glow mx-auto bg-term-card"
                      />
                      <span className="absolute bottom-1 right-1 px-2 py-0.5 rounded bg-term-bg border border-term-accent text-[10px] text-term-accent font-bold">
                        @Will24300
                      </span>
                    </div>
                    <div className="text-base font-bold text-white pt-1">{profileData.name}</div>
                    <a
                      href="https://github.com/Will24300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-term-cyan hover:underline inline-block font-mono"
                    >
                      github.com/Will24300
                    </a>
                  </div>
                )}

                <div className="text-term-cyan font-bold border-b border-term-border/60 pb-2 flex items-center space-x-2">
                  <span>METADATA // INFO</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-term-accent flex-shrink-0" />
                    <div>
                      <div className="text-term-muted">Location:</div>
                      <div className="text-white font-medium">{profileData.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-term-amber flex-shrink-0" />
                    <div>
                      <div className="text-term-muted">Email:</div>
                      <a href={`mailto:${profileData.email}`} className="text-term-accent hover:underline break-all">
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-term-cyan flex-shrink-0" />
                    <div>
                      <div className="text-term-muted">Availability:</div>
                      <div className="text-term-accent font-semibold">{profileData.status}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-term-border/60 text-[11px] text-term-muted space-y-1">
                  <div>FILE PERMISSIONS: <span className="text-term-text">-rw-r--r--</span></div>
                  <div>HASH: <span className="text-term-cyan">sha256-a9f87c2b...</span></div>
                </div>
              </div>

            </div>
          </TerminalWindow>
        </motion.div>

      </div>
    </section>
  );
};
