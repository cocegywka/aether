import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Expertise as ExpertiseGrid } from '@/components/Expertise';

export function Expertise() {
  return (
    <div className="w-full">
      <Hero />
      <ServicesGrid />
      <ExpertiseGrid />
    </div>
  );
}
