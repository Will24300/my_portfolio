/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0a0c10',         // Ultra-dark background
          surface: '#11151c',    // Slightly lighter terminal surface
          card: '#161b22',       // Terminal window body background
          header: '#1c2128',     // Terminal header bar background
          border: '#30363d',     // Subtle border line
          text: '#c9d1d9',       // High-contrast clean text
          muted: '#8b949e',      // Muted comment text
          accent: '#10b981',     // Primary Matrix green neon accent
          accentGlow: 'rgba(16, 185, 129, 0.15)',
          accentHover: '#059669',
          amber: '#f59e0b',      // Warning/secondary accent
          cyan: '#06b6d4',       // Prompt/highlight accent
          purple: '#a855f7',     // Syntax highlight
          red: '#ef4444',        // Terminal traffic red dot
          yellow: '#eab308',     // Terminal traffic yellow dot
          green: '#22c55e',      // Terminal traffic green dot
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"IBM Plex Mono"', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'term-glow': '0 0 20px rgba(16, 185, 129, 0.25)',
        'term-window': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
