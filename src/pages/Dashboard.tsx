import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Waves, Gauge, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Dashboard() {
  const [techOrder, setTechOrder] = useState<string[]>([
    'TypeScript',
    'Rust',
    'Kubernetes',
    'Python',
    'GraphQL',
    'Next.js',
    'Go',
    'AWS',
  ]);
  const terminalPhrases = [
    'Initialize neural hands',
    'Sync distributed nodes',
    'Compile adaptive interface',
  ];
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const shuffle = () => {
      setTechOrder((prev) => [...prev].sort(() => Math.random() - 0.5));
    };
    const interval = setInterval(shuffle, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentPhrase = terminalPhrases[phraseIndex];
    const typingDelay = isDeleting ? 45 : 75;
    const pauseDelay = isDeleting ? 350 : 1200;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentPhrase.slice(0, typedText.length + 1);
          setTypedText(next);
          if (next === currentPhrase) {
            setIsDeleting(true);
          }
        } else {
          const next = currentPhrase.slice(0, Math.max(typedText.length - 1, 0));
          setTypedText(next);
          if (next.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % terminalPhrases.length);
          }
        }
      },
      typedText === currentPhrase && !isDeleting ? pauseDelay : typingDelay
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <div className="w-full pb-32 pt-32 lg:pt-40">
      <section className="mx-auto mb-20 grid max-w-7xl grid-cols-1 items-center gap-10 px-container md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="md:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-dim/60 px-4 py-2">
            <div className="status-orb" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              NEXT GENERATION SOFTWARE HOUSE
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[56px] font-bold leading-[0.95] tracking-tighter text-on-surface md:text-[80px] lg:text-[96px]">
            We Code the <span className="text-primary italic">Future</span>.
          </h1>
          <p className="mb-10 max-w-xl font-sans text-lg leading-relaxed text-on-surface-variant">
            Architecting digital ecosystems that redefine performance. We blend computational precision with high-agency design to solve the unsolvable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button className="group">
                START PROJECT
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/expertise">
              <Button variant="outline">THE STUDIO</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="relative h-[560px] md:col-span-5"
        >
          <div className="liquid-glass h-full overflow-hidden rounded-[2rem]">
            <img
              className="h-full w-full object-cover opacity-80"
              alt="Liquid Metallic Structure"
              src="https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=2670&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>
          <div className="liquid-glass absolute -bottom-8 -left-6 max-w-[260px] rounded-xl p-6">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-primary">Live Throughput</p>
            <div className="flex items-end gap-2">
              <span className="font-mono text-4xl font-bold text-on-surface">142</span>
              <span className="mb-1 font-sans text-sm text-on-surface-variant">ms latency</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-container">
        <div className="mb-12">
          <h2 className="font-sans text-[40px] font-bold leading-tight text-on-surface md:text-[56px]">
            CORE ARCHITECTURE
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="liquid-glass rounded-xl p-8 md:col-span-4">
            <Terminal className="mb-6 h-10 w-10 text-primary" />
            <h3 className="mb-4 font-sans text-3xl font-bold text-on-surface">Hyper-stack Integration</h3>
            <p className="mb-8 font-sans text-on-surface-variant">
              Real-time switching between mission-critical protocols for maximum resilience.
            </p>
            <div className="relative h-40">
              {techOrder.map((tech, i) => (
                <div
                  key={tech}
                  className="absolute rounded-full border border-white/10 bg-surface-dim/70 px-4 py-2 font-mono text-xs text-on-surface transition-all duration-700"
                  style={{
                    top: `${(i * 38) % 120}px`,
                    left: `${(i * 54) % 170}px`,
                    zIndex: i + 1,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </article>

          <article className="liquid-glass relative overflow-hidden rounded-xl md:col-span-8">
            <img
              className="h-full min-h-[360px] w-full object-cover opacity-80"
              alt="Global Network"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dim/90 via-surface-dim/40 to-transparent p-8 md:p-10">
              <div className="mt-auto max-w-lg pt-40 md:pt-48">
                <h3 className="mb-4 font-sans text-4xl font-bold text-on-surface md:text-5xl">
                  Global Infrastructure
                </h3>
                <p className="font-sans text-on-surface-variant">
                  Deploying distributed systems that span continents with sub-millisecond precision.
                </p>
              </div>
            </div>
          </article>

          <article className="liquid-glass rounded-xl p-8 md:col-span-7">
            <div className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-primary">
              AETHER COMMAND CENTER
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface-dim/60 p-6">
              <div className="flex items-center gap-3 font-mono text-lg text-on-surface">
                <span className="text-primary">&gt;</span>
                <span>{typedText}</span>
                <span className="inline-block h-5 w-[2px] animate-pulse bg-primary" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/3 bg-primary/50" /></div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 bg-primary/50" /></div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/2 bg-primary/50" /></div>
            </div>
          </article>

          <article className="liquid-glass relative overflow-hidden rounded-xl p-8 md:col-span-5">
            <div className="relative z-10">
              <h3 className="mb-4 font-sans text-3xl font-bold text-on-surface">Adaptive Fluidity</h3>
              <p className="mb-8 font-sans text-on-surface-variant">
                Interfaces that breathe and respond to intent before the action is taken.
              </p>
              <div className="flex gap-4">
                <div className="rounded-xl border border-white/10 p-4"><Waves className="h-6 w-6 text-primary" /></div>
                <div className="rounded-xl border border-white/10 p-4"><Sparkles className="h-6 w-6 text-primary" /></div>
                <div className="rounded-xl border border-white/10 p-4"><Gauge className="h-6 w-6 text-primary" /></div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          </article>

          <article className="liquid-glass rounded-xl p-8 md:col-span-12 md:p-12">
            <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
              <div>
                <p className="mb-2 font-mono text-6xl font-bold text-primary">99.99</p>
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">UPTIME SLA</p>
              </div>
              <div>
                <p className="mb-2 font-mono text-6xl font-bold text-primary">240+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">DEPLOYMENTS/DAY</p>
              </div>
              <div>
                <p className="mb-2 font-mono text-6xl font-bold text-primary">12ms</p>
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">PEAK LATENCY</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
