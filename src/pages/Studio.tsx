import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function Studio() {
  return (
    <div className="w-full pb-32 pt-32 lg:pt-40">
      <header className="mx-auto mb-32 max-w-7xl px-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="status-orb" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The Studio
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
            DESIGN LOGIC. <br /> ENGINEERING RIGOR.
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Based in Berlin, AETHER operates at the intersection of high-fidelity spatial design and
            deep technical architecture. We build platforms for the venture-backed and the visually ambitious.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-container md:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="liquid-glass aspect-square rounded-xl overflow-hidden md:aspect-[3/4]"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
            alt="Studio Interior"
            className="h-full w-full object-cover grayscale opacity-70 transition-all duration-700 hover:scale-105 hover:grayscale-0 hover:opacity-100"
          />
        </motion.div>
        
        <div className="flex flex-col justify-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-primary">Philosophy</h3>
            <h2 className="font-sans text-3xl font-bold text-on-surface">Function dictating form.</h2>
            <p className="font-sans text-lg text-on-surface-variant">
              We reject the idea that complex software must look utilitarian. By applying architectural 
              principles to digital product design, we create interfaces that command attention and foster trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-primary">Approach</h3>
            <h2 className="font-sans text-3xl font-bold text-on-surface">Surgical execution.</h2>
            <p className="font-sans text-lg text-on-surface-variant">
              No bloated processes. We lead with code and high-fidelity artifacts. Our engineering 
              backgrounds mean we don't just design what looks good—we design what can perform flawlessly 
              at a global scale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8"
          >
            <Link to="/expertise">
              <Button className="group flex items-center">
                SEE OUR EXPERTISE
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
