import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  /** Array of strings to cycle through and type out */
  words: string[];

  /** Typing speed in milliseconds per character */
  typingSpeed?: number;

  /** Deleting speed in milliseconds per character */
  deletingSpeed?: number;

  /** Pause duration before deleting/switching to next word */
  pauseDuration?: number;

  /** Custom class name */
  className?: string;

  /** Show cursor */
  showCursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
  showCursor = true,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullText = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          // Finished typing full word, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === '') {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      {showCursor && (
        <span
          className="inline-block w-2.5 h-5 ml-1 bg-term-accent animate-blink shadow-term-glow"
          aria-hidden="true"
        />
      )}
    </span>
  );
};
