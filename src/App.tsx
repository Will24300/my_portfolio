import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveCLI } from './components/InteractiveCLI';
import { Terminal, Command } from 'lucide-react';

export function App() {
  const [cliOpen, setCliOpen] = useState(false);

  return (
    <div className="min-h-screen bg-term-bg text-term-text font-mono relative flex flex-col justify-between">
      
      <div>
        {/* Navigation Header */}
        <Navbar onOpenCli={() => setCliOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenCli={() => setCliOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>

      {/* Vim/Tmux Status Bar Footer */}
      <Footer />

      {/* Interactive CLI Terminal Modal */}
      <InteractiveCLI isOpen={cliOpen} onClose={() => setCliOpen(false)} />

      {/* Floating Bottom-Right CLI Launcher Trigger Button */}
      <button
        onClick={() => setCliOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-term-accent text-term-bg shadow-term-glow hover:bg-term-accentHover transition-all duration-300 group flex items-center justify-center"
        aria-label="Open Interactive CLI Terminal"
        title="Open Interactive Terminal"
      >
        <Command className="w-5 h-5 group-hover:rotate-45 transition-transform" />
      </button>

    </div>
  );
}

export default App;
