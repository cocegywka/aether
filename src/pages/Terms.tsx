import { motion } from 'motion/react';

export function Terms() {
  return (
    <div className="w-full pb-32 pt-32 lg:pt-40">
      <main className="mx-auto max-w-4xl px-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <header className="mb-20">
            <h1 className="mb-8 font-sans text-[48px] font-bold leading-[0.9] tracking-tighter text-on-surface md:text-[80px]">
              TERMS OF SERVICE
            </h1>
            <p className="font-mono text-sm uppercase tracking-widest text-on-surface-variant">
              Last Updated: October 2024
            </p>
          </header>

          <div className="space-y-12 font-sans text-lg leading-relaxed text-on-surface-variant">
            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                1. Ecosystem Licensing
              </h2>
              <p>
                By accessing the AETHER network, you are granted a non-exclusive license to
                interact with our front-facing constructs.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                2. Implementation Liability
              </h2>
              <p>
                Our open-source components are provided as-is. AETHER Architecture accepts no
                responsibility for localized system failures caused by improper integration.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                3. Iterative Amendments
              </h2>
              <p>
                These protocols are fluid. Continued use of our infrastructure implies consent to
                the active service schema.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
