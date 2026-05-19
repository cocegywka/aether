import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-mono text-sm font-semibold uppercase tracking-[0.05em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary text-[#003352] glow-primary glow-primary-hover': variant === 'primary',
            'border border-white/10 text-on-surface hover:bg-white/5': variant === 'outline',
            'text-on-surface-variant hover:text-primary': variant === 'ghost',
            'h-14 px-8 py-4': size === 'default',
            'h-10 px-6 py-2': size === 'sm',
            'h-16 px-10 py-5 text-base': size === 'lg',
            'h-14 w-14': size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
