import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-container text-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="space-y-8"
      >
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md relative">
          <span className="font-mono text-5xl font-bold text-primary">404</span>
          <div className="status-orb absolute -right-1 -top-1" />
        </div>
        <div className="space-y-4">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-tighter text-on-surface md:text-5xl">
            Signal Lost
          </h1>
          <p className="max-w-md font-sans text-lg text-on-surface-variant mx-auto">
            The architectural endpoint you're trying to reach does not exist in our current spatial mapping.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
