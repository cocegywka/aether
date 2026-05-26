import { motion } from 'motion/react';

export function Privacy() {
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
              PRIVACY POLICY
            </h1>
            <p className="font-mono text-sm uppercase tracking-widest text-on-surface-variant">
              Last Updated: October 2024
            </p>
          </header>

          <div className="space-y-12 font-sans text-lg leading-relaxed text-on-surface-variant">
            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                1. Data Collection Protocols
              </h2>
              <p>
                AETHER Architecture operates on a minimal viable data framework. We only collect
                telemetry essential for system stabilization and sequence initialization.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                2. Transmission Security
              </h2>
              <p>
                All direct communications and neural uplinks are encrypted using secure protocols.
                We do not store decipherable payloads on our edge nodes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-sans text-2xl font-bold text-on-surface">
                3. Cookie Configuration
              </h2>
              <p>
                We use localized temporal state tokens (cookies) purely for session persistence
                across the AETHER cloud.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
