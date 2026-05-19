import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <header className="mx-auto mb-32 max-w-7xl px-container pt-32 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="status-orb" />
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Core Expertise
          </span>
        </div>
        <h1 className="mb-8 max-w-4xl font-sans text-[56px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[96px] lg:text-[112px]">
          ARCHITECTING <br /> DIGITAL <span className="text-primary italic">FRONTIERS.</span>
        </h1>
        <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
          We synthesize high-precision engineering with architectural aesthetics to deliver interfaces
          that don't just function—they resonate.
        </p>
      </motion.div>
    </header>
  );
}
