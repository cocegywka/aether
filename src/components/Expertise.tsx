import { motion } from 'motion/react';

const technicals = [
  'WebGL & Three.js',
  'React / Next.js Architecture',
  'High-Fidelity Prototyping',
  'Custom Physics Engines',
];

const aesthetics = [
  'Brutalist Precision',
  'Neo-Glassmorphism',
  'Adaptive Motion Systems',
  'Swiss-Style Typography',
];

const output = [
  'Venture-Scale Platforms',
  'Enterprise Dashboards',
  'Experimental Micro-sites',
  'Brand Design Systems',
];

export function Expertise() {
  return (
    <section id="expertise" className="mt-section border-y border-white/5 bg-surface-dim px-container py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Technicals
          </h4>
          <ul className="space-y-3 font-sans text-base text-on-surface-variant">
            {technicals.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Aesthetics
          </h4>
          <ul className="space-y-3 font-sans text-base text-on-surface-variant">
            {aesthetics.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Output
          </h4>
          <ul className="space-y-3 font-sans text-base text-on-surface-variant">
            {output.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
