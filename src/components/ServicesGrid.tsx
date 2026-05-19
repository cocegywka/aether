import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ServicesGrid() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-container">
      {/* 01 */}
      <div className="grid grid-cols-1 items-center gap-20 border-t border-white/10 py-[15vh] md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="order-2 overflow-hidden md:order-1 aspect-square md:aspect-[4/5] object-cover"
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Spatial Interfaces"
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="order-1 space-y-8 md:order-2"
        >
          <div>
            <span className="mb-4 block font-mono text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              01 / CAPABILITY
            </span>
            <h3 className="font-sans text-[40px] font-bold leading-tight text-white md:text-[64px]">
              Spatial
              <br />
              Interfaces
            </h3>
          </div>
          <p className="max-w-md font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Designing beyond the screen. We create immersive 3D environments and spatial UX for the next
            era of computing.
          </p>
        </motion.div>
      </div>

      {/* 02 */}
      <div className="grid grid-cols-1 items-center gap-20 border-t border-white/10 py-[15vh] md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <div>
            <span className="mb-4 block font-mono text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              02 / CAPABILITY
            </span>
            <h3 className="font-sans text-[40px] font-bold leading-tight text-white md:text-[64px]">
              Algorithmic
              <br />
              Branding
            </h3>
          </div>
          <p className="max-w-md font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Identity systems built on code. We develop generative brand languages that evolve with your
            product ecosystem.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="overflow-hidden aspect-square md:aspect-[4/5] object-cover"
        >
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
            alt="Algorithmic Branding"
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
          />
        </motion.div>
      </div>

      {/* 03 */}
      <div className="border-t border-white/10 py-[15vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl space-y-12 text-center"
        >
          <div>
            <span className="mb-6 block font-mono text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              03 / CAPABILITY
            </span>
            <h3 className="font-sans text-[40px] font-bold leading-tight text-white md:text-[80px]">
              Refractive Product Strategy
            </h3>
          </div>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Engineering clarity through depth. Our strategic framework aligns technical complexity with
            effortless user agency.
          </p>
          <button className="group mx-auto flex items-center gap-4 rounded-full border border-white/20 px-10 py-4 transition-all duration-300 hover:border-primary/50">
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-on-surface">
              Learn Methodology
            </span>
            <ArrowRight className="text-primary transition-transform group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
