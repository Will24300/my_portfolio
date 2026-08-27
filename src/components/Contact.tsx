import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Terminal, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';
import { TerminalWindow } from './TerminalWindow';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4 text-term-accent" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4 text-term-cyan" />;
      case 'twitter':
      case 'x (twitter)':
        return <TwitterIcon className="w-4 h-4 text-term-amber" />;
      default:
        return <Mail className="w-4 h-4 text-term-purple" />;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-term-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Prompt */}
        <div className="flex items-center space-x-2 text-sm font-mono text-term-muted mb-6">
          <span className="text-term-cyan">visitor@portfolio:~$</span>
          <span className="text-term-accent font-semibold">send-message --to developer</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow
            title="contact_daemon.sh"
            path="~/net/connect"
            rightHeader={<span className="text-term-accent font-mono text-xs">PORT: 443 (OPEN)</span>}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Direct Terminal Links & Copy Email */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Terminal className="w-5 h-5 text-term-accent" />
                    <span>Get In Touch</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-term-muted leading-relaxed">
                    Feel free to reach out for project inquiries, technical collaborations, or just to say hello!
                  </p>
                </div>

                {/* Email Copy Card */}
                <div className="bg-term-surface p-4 rounded-lg border border-term-border space-y-2">
                  <div className="text-xs text-term-muted font-mono flex items-center justify-between">
                    <span>PRIMARY EMAIL</span>
                    <span className="text-term-accent text-[11px]">DIRECT</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-sm sm:text-base font-bold text-white truncate font-mono">
                      {profileData.email}
                    </span>
                    
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded bg-term-header hover:bg-term-card border border-term-border text-term-accent hover:border-term-accent transition-all flex-shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-term-green" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copied && (
                    <div className="text-[11px] text-term-green font-mono">✓ Copied email to clipboard!</div>
                  )}
                </div>

                {/* Terminal Social Links List */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-term-muted border-b border-term-border/40 pb-1">
                    // SOCIAL ENDPOINTS & SSH LINKS
                  </div>

                  {profileData.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-term-surface/70 hover:bg-term-header border border-term-border/60 hover:border-term-accent/60 transition-all group font-mono text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        {getSocialIcon(social.icon)}
                        <div>
                          <div className="text-white font-semibold group-hover:text-term-accent transition-colors">
                            {social.label}
                          </div>
                          <div className="text-[11px] text-term-muted">{social.command}</div>
                        </div>
                      </div>
                      <span className="text-term-accent group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  ))}
                </div>

              </div>

              {/* Right Column: Terminal Message Form */}
              <div className="lg:col-span-7 bg-term-surface/60 p-5 rounded-lg border border-term-border font-mono space-y-4">
                
                <div className="flex items-center space-x-2 border-b border-term-border/60 pb-3">
                  <MessageSquare className="w-4 h-4 text-term-cyan" />
                  <span className="text-sm font-bold text-white">Interactive Mailer Prompt</span>
                </div>

                {submitted ? (
                  <div className="p-6 text-center space-y-3 bg-term-header/80 rounded border border-term-accent/50">
                    <Check className="w-8 h-8 text-term-accent mx-auto" />
                    <div className="text-base font-bold text-white">$ mailx --status SUCCESS</div>
                    <p className="text-xs text-term-muted">
                      Your default mail client has been opened with your message. If it didn't open automatically, send directly to <span className="text-term-accent">{profileData.email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs px-3 py-1.5 rounded bg-term-card border border-term-border text-term-accent hover:border-term-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <label className="block text-term-muted mb-1 text-xs">$ set NAME=</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name / Handle"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-term-bg border border-term-border rounded px-3 py-2 text-term-text focus:outline-none focus:border-term-accent focus:ring-1 focus:ring-term-accent transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-term-muted mb-1 text-xs">$ set RETURN_EMAIL=</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-term-bg border border-term-border rounded px-3 py-2 text-term-text focus:outline-none focus:border-term-accent focus:ring-1 focus:ring-term-accent transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-term-muted mb-1 text-xs">$ cat MESSAGE &lt;&lt; EOF</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Type your message here..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-term-bg border border-term-border rounded px-3 py-2 text-term-text focus:outline-none focus:border-term-accent focus:ring-1 focus:ring-term-accent transition-all font-mono resize-none"
                      />
                      <div className="text-[10px] text-term-muted mt-1">EOF</div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded bg-term-accent hover:bg-term-accentHover text-term-bg font-bold font-mono shadow-term-glow flex items-center justify-center space-x-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>$ mailx --send</span>
                    </button>
                  </form>
                )}

              </div>

            </div>
          </TerminalWindow>
        </motion.div>

      </div>
    </section>
  );
};
