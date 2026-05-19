import { motion } from 'motion/react';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export function Contact() {
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
              Initiate
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
            START THE SEQUENCE.
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Whether you have a fully formed brief or are exploring what's technically possible,
            our team is ready to consult.
          </p>
        </motion.div>
      </header>

      <section className="mx-auto max-w-7xl px-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-12"
          >
            <div className="liquid-glass rounded-xl p-8 space-y-8">
              <div>
                <MapPin className="text-primary w-6 h-6 mb-4" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-on-surface mb-2">Berlin Node</h3>
                <p className="font-sans text-on-surface-variant">
                  Torstraße 1<br />
                  10119 Berlin<br />
                  Germany
                </p>
              </div>
              
              <div className="border-t border-white/10 pt-8">
                <Mail className="text-primary w-6 h-6 mb-4" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-on-surface mb-2">Direct Channel</h3>
                <p className="font-sans text-on-surface-variant">
                  inquiries@aether.studio
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-sm uppercase text-on-surface-variant block mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="font-mono text-sm uppercase text-on-surface-variant block mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="font-mono text-sm uppercase text-on-surface-variant block mb-2">Email Address</label>
                <Input type="email" placeholder="you@company.com" />
              </div>

              <div>
                <label className="font-mono text-sm uppercase text-on-surface-variant block mb-2">Inquiry Type</label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="liquid-glass rounded p-4 border border-primary text-primary font-mono text-sm cursor-pointer hover:bg-white/5 transition-colors text-center">
                    New Project
                  </div>
                  <div className="liquid-glass rounded p-4 border border-white/10 text-on-surface font-mono text-sm cursor-pointer hover:bg-white/5 transition-colors text-center">
                    General Question
                  </div>
                </div>
              </div>

              <div>
                <label className="font-mono text-sm uppercase text-on-surface-variant block mb-2">Project Brief</label>
                <Textarea placeholder="Outline your objectives, timeline, and rough budget..." />
              </div>

              <Button type="button" className="group">
                TRANSMIT INQUIRY
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
