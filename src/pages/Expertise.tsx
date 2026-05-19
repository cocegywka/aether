import { motion } from 'motion/react';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Expertise as ExpertiseGrid } from '@/components/Expertise';

export function Expertise() {
  return (
    <div className="w-full pb-32 pt-32 lg:pt-40">
      <header className="mx-auto mb-20 max-w-7xl px-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="status-orb" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Capabilities
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
            WHAT WE ENGINEER.
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            From low-level graphics optimization to comprehensive brand identity systems, 
            our expertise spans the entire spectrum of premium digital product creation.
          </p>
        </motion.div>
      </header>

      {/* Reuse homepage components for the deeply detailed breakdown */}
      <ServicesGrid />
      
      <div className="mt-12">
        <h2 className="mx-auto max-w-7xl px-container font-mono text-xl font-bold uppercase tracking-widest text-on-surface mb-8">
          Detailed Stack
        </h2>
        <ExpertiseGrid />
      </div>
    </div>
  );
}
