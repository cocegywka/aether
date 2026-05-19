import { Link } from 'react-router-dom';
import { Input } from './ui/Input';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { footerNavItems, legalItems, socialItems } from '@/config/navigation';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dim px-container pb-12 pt-24 mt-section">
      <div className="mx-auto mb-24 grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-5">
          <div className="text-[32px] font-bold uppercase tracking-tighter text-on-surface md:text-[48px]">
            AETHER
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Stay Synced
            </p>
            <form className="group relative max-w-md">
              <Input type="email" placeholder="ENTER YOUR EMAIL" className="pr-12" />
              <button
                type="submit"
                className="absolute bottom-4 right-0 text-primary transition-transform duration-300 hover:translate-x-2"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 lg:col-span-7 md:grid-cols-3 lg:justify-items-end">
          <div className="space-y-6">
              <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-on-surface">
              Navigation
              </h5>
              <nav className="flex flex-col gap-4">
              {footerNavItems.map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="font-sans text-sm tracking-wider text-on-surface-variant uppercase transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-6">
              <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-on-surface">
              Connect
              </h5>
              <nav className="flex flex-col gap-4">
              {socialItems.map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="font-sans text-sm tracking-wider text-on-surface-variant uppercase transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden space-y-6 md:block">
              <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-on-surface">
              Legal
              </h5>
              <nav className="flex flex-col gap-4">
              {legalItems.map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="font-sans text-sm tracking-wider text-on-surface-variant uppercase transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/50">
          © 2024 AETHER ARCHITECTS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 md:hidden">
          <Link
            to="#"
            className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50"
          >
            Privacy
          </Link>
          <Link
            to="#"
            className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
