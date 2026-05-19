import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { mainNavItems } from '@/config/navigation';

export function Nav({ onStartProject }: { onStartProject?: () => void }) {
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-surface-dim/60 px-container py-6 backdrop-blur-[30px]">
      <Link to="/" className="text-[32px] font-bold uppercase tracking-tighter text-on-surface md:text-[48px]">
        AETHER
      </Link>
      <div className="hidden items-center gap-10 md:flex">
        {mainNavItems.map((item) => {
          const path = `/${item.toLowerCase()}`;
          const isActive = location.pathname.startsWith(path);
          return (
            <Link
              key={item}
              to={path}
              className={cn(
                "font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:text-primary",
                isActive ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant"
              )}
            >
              {item}
            </Link>
          );
        })}
        <Link
          to="/contact"
          className={cn(
            "font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:text-primary",
            location.pathname.startsWith('/contact') ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant"
          )}
        >
          CONTACT
        </Link>
      </div>
      <Button onClick={onStartProject} className="hidden md:flex">
        START PROJECT
      </Button>
    </nav>
  );
}
