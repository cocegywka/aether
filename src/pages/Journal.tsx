import { motion } from 'motion/react';

const entries = [
  {
    date: 'OCT 24',
    title: 'The End of Flat Design.',
    excerpt: 'Why architectural depth and refraction are replacing flat color blocks in enterprise interfaces.',
  },
  {
    date: 'SEP 12',
    title: 'Performant WebGL in React.',
    excerpt: 'A technical teardown of how we achieved 60fps on mobile devices utilizing a custom React Three Fiber architecture.',
  },
  {
    date: 'AUG 05',
    title: 'Typographic Hierarchy in High-Density Dashboards.',
    excerpt: 'Balancing data density with legibility using monospace fonts and deliberate whitespace.',
  },
];

export function Journal() {
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
              Notes & Thoughts
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
            THE JOURNAL.
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Essays on frontend engineering, motion design, and spatial computing architecture.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto max-w-7xl px-container">
        <div className="liquid-glass rounded-xl overflow-hidden divide-y divide-white/5 border border-white/10">
          {entries.map((entry, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group p-8 md:p-12 hover:bg-white/5 cursor-pointer transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 lg:gap-24">
                <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  {entry.date}
                </span>
                <div className="space-y-4">
                  <h2 className="font-sans text-2xl md:text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {entry.title}
                  </h2>
                  <p className="font-sans text-lg text-on-surface-variant">
                    {entry.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
