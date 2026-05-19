import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: '01',
    title: 'Horizon Peak',
    category: 'Spatial Platform',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2670&auto=format&fit=crop',
    description: 'A WebGL-powered data visualization tool for an international real estate firm, turning vast architectural datasets into explorable spatial maps.',
  },
  {
    id: '02',
    title: 'Quantum Ledger',
    category: 'Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2670&auto=format&fit=crop',
    description: 'Enterprise-grade trading interface prioritizing extreme density and real-time socket performance without compromising typographic elegance.',
  },
  {
    id: '03',
    title: 'Aura Protocol',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2670&auto=format&fit=crop',
    description: 'Algorithmic brand system and promotional microsite featuring generative 3D assets that react to user scroll velocity.',
  },
];

export function Cases() {
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
              Proof of Work
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
            CASE STUDIES.
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            A selection of platforms, interfaces, and visual systems built for ambition.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto max-w-7xl px-container space-y-32">
        {cases.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center`}
          >
            <div className={`overflow-hidden rounded-xl liquid-glass aspect-video md:aspect-square ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
            </div>
            
            <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div>
                <span className="font-mono text-sm uppercase tracking-widest text-primary block mb-4">
                  {project.id} / {project.category}
                </span>
                <h2 className="font-sans text-4xl md:text-5xl font-bold text-on-surface">{project.title}</h2>
              </div>
              <p className="font-sans text-lg text-on-surface-variant">
                {project.description}
              </p>
              
              <Link to="#" className="group inline-flex items-center gap-4 text-on-surface hover:text-primary transition-colors pt-4 font-mono uppercase tracking-widest text-sm font-bold">
                View Full Spec
                <ArrowRight className="transition-transform group-hover:translate-x-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
