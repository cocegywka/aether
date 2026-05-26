import * as React from 'react';
import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Expertise } from '@/components/Expertise';

export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ServicesGrid />
      <Expertise />
    </div>
  );
}
