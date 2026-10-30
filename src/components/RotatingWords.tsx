import { useEffect, useState } from 'react';

type Props = { words: string[]; interval?: number };

/** Cycles through words with a soft blur-in animation. */
export function RotatingWords({ words, interval = 1800 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="inline-flex items-baseline gap-3" aria-label={words.join(' ')}>
      <span aria-hidden="true" className="relative inline-block overflow-hidden align-bottom">
        <span key={index} className="inline-block animate-word-in text-gradient">
          {words[index]}
        </span>
      </span>
      <span aria-hidden="true" className="hidden gap-1.5 sm:inline-flex">
        {words.map((w, i) => (
          <span key={w} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-electric-400' : 'w-1.5 bg-white/20'}`} />
        ))}
      </span>
    </span>
  );
}
