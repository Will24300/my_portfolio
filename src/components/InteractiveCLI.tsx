import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { profileData, skillsData } from '../data/profile';
import { projectsData } from '../data/projects';

interface InteractiveCLIProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveCLI: React.FC<InteractiveCLIProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-term-text">
          <div className="text-term-accent font-bold">⚡ WELCOME TO THE INTERACTIVE DEVELOPER SHELL ⚡</div>
          <div className="text-term-muted">Type <span className="text-term-cyan font-bold">help</span> to see available commands. Try <span className="text-term-cyan font-bold">projects</span> or <span className="text-term-cyan font-bold">skills</span>.</div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-term-text font-mono">
            <div className="text-term-accent font-bold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <div><span className="text-term-cyan">help</span> - Show this help menu</div>
              <div><span className="text-term-cyan">bio</span> / <span className="text-term-cyan">about</span> - Display developer bio</div>
              <div><span className="text-term-cyan">projects</span> / <span className="text-term-cyan">ls</span> - List portfolio projects</div>
              <div><span className="text-term-cyan">skills</span> - Display installed tech stack</div>
              <div><span className="text-term-cyan">contact</span> - Show email & socials</div>
              <div><span className="text-term-cyan">whoami</span> - Display current shell identity</div>
              <div><span className="text-term-cyan">date</span> - Display system timestamp</div>
              <div><span className="text-term-cyan">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'bio':
      case 'about':
      case 'cat about.md':
        output = (
          <div className="space-y-2 text-xs text-term-text font-mono">
            <div className="text-term-accent font-bold">// DEVELOPER BIO</div>
            {profileData.aboutMarkdown.map((line, idx) => (
              <div key={idx} className="text-term-muted">{line}</div>
            ))}
          </div>
        );
        break;

      case 'projects':
      case 'ls':
      case 'ls projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-term-accent font-bold">// CURATED PROJECTS ({projectsData.length})</div>
            <div className="space-y-2">
              {projectsData.map((p) => (
                <div key={p.id} className="p-2 rounded bg-term-header border border-term-border/60">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>{p.title}</span>
                    <span className="text-[10px] text-term-cyan">{p.techStack.slice(0, 3).join(', ')}</span>
                  </div>
                  <div className="text-term-muted text-[11px] mt-0.5">{p.description}</div>
                  <div className="text-term-accent text-[10px] mt-1">{p.githubUrl}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        output = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-term-accent font-bold">// TECH STACK INVENTORY</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="p-2 rounded bg-term-header border border-term-border/60">
                  <div className="text-term-amber font-semibold">{cat.categoryName}:</div>
                  <div className="text-term-muted text-[11px]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <div className="text-term-accent font-bold">// CONTACT ENDPOINTS</div>
            <div>Email: <span className="text-term-cyan font-bold">{profileData.email}</span></div>
            <div>Location: <span className="text-term-muted">{profileData.location}</span></div>
            {profileData.socials.map((s, idx) => (
              <div key={idx} className="text-term-muted">
                {s.label}: <a href={s.url} target="_blank" rel="noreferrer" className="text-term-accent hover:underline">{s.url}</a>
              </div>
            ))}
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs font-mono text-term-cyan">
            {profileData.handle} (role: fullstack-developer, privilege: root)
          </div>
        );
        break;

      case 'date':
        output = (
          <div className="text-xs font-mono text-term-amber">
            {new Date().toString()}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        output = null;
        break;

      default:
        output = (
          <div className="text-xs font-mono text-term-red">
            zsh: command not found: {trimmed}. Type <span className="text-term-cyan font-bold">help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdStr,
        output,
      },
    ]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && input !== '') return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-3xl h-[80vh] bg-term-card rounded-lg border border-term-accent/50 shadow-term-glow flex flex-col overflow-hidden font-mono">
        
        {/* CLI Header */}
        <div className="bg-term-header px-4 py-2.5 flex items-center justify-between border-b border-term-border select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-term-red cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-term-yellow" />
            <div className="w-3 h-3 rounded-full bg-term-green" />
            <span className="text-xs text-term-accent font-bold ml-2 flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5" /> Interactive CLI Session
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-term-muted">Press ESC or click ✕ to exit</span>
            <button
              onClick={onClose}
              className="text-term-muted hover:text-term-accent p-1"
              aria-label="Close interactive terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CLI Output Log Window */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm leading-relaxed">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              {item.command && (
                <div className="flex items-center space-x-2 text-term-muted text-xs">
                  <span className="text-term-cyan">visitor@portfolio:~$</span>
                  <span className="text-term-text font-bold">{item.command}</span>
                </div>
              )}
              {item.output && <div className="pl-4">{item.output}</div>}
            </div>
          ))}
        </div>

        {/* CLI Command Input Prompt */}
        <form onSubmit={onSubmit} className="bg-term-header p-3 border-t border-term-border flex items-center space-x-2">
          <span className="text-term-cyan text-xs font-bold flex-shrink-0">visitor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help', 'projects', 'skills', 'contact', 'clear'..."
            className="flex-1 bg-transparent text-term-accent focus:outline-none text-xs font-mono"
            autoFocus
          />
          <button type="submit" className="text-xs text-term-accent font-bold px-2 py-1 bg-term-bg rounded border border-term-border hover:bg-term-surface">
            RUN
          </button>
        </form>

      </div>
    </div>
  );
};
