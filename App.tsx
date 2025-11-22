import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BentoGrid } from './components/sections/BentoGrid';
import { Features } from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';

// Register GSAP plugins once at the app root
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Optional: A global reveal effect for sections if we wanted a unified controller
  // but we are handling them per-component for better granularity as requested.
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;