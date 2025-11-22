import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const containerRef = useRef<HTMLElement>(null);

  // Pricing constants
  const monthlyPrice = 15;
  const discountPercentage = 0.20;
  const discountedMonthlyPrice = Math.round(monthlyPrice * (1 - discountPercentage)); // 12

  // GSAP Micro-interactions for hover
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const isPro = e.currentTarget.classList.contains("bg-slate-900");
    
    gsap.to(e.currentTarget, {
      scale: 1.02,
      boxShadow: isPro 
        ? "0 0 60px -12px rgba(59,130,246,0.15)" // Premium glow on hover (reduced intensity by ~5%)
        : "0 25px 50px -12px rgba(0, 0, 0, 0.15)", // Standard deep shadow for light card
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const isPro = e.currentTarget.classList.contains("bg-slate-900");

    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: isPro
         ? "0 0 40px -10px rgba(59,130,246,0.10)" // Resting state: very subtle glow (reduced)
         : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      duration: 0.4,
      ease: "power2.out"
    });
  };

  // Scroll Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.fromTo(".pricing-card", 
        { y: 50, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%"
          }
        }
       );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-600 mb-8">Invest in your future for less than the cost of a coffee.</p>
          
          {/* Toggle - Glassmorphism pill container */}
          <div className="inline-flex items-center justify-center gap-4 bg-white/80 backdrop-blur-md border border-slate-200 py-2.5 px-6 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] transition-all duration-300">
            <span className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-9 bg-slate-200 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-inner"
              aria-label="Toggle pricing interval"
            >
              <div className={`w-7 h-7 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium transition-colors duration-300 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-brand-600 text-xs font-bold bg-brand-100 px-2 py-0.5 rounded-full ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Starter Plan */}
          <div 
            className="pricing-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm opacity-0 translate-y-10 origin-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for polishing your existing resume.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500">/month</span>
            </div>
            <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors mb-8">
              Get Started Free
            </button>
            <ul className="space-y-4">
              {['Basic Resume Analysis', '1 Active Job Tracker', 'Limited Keyword Matching', 'Standard Templates'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-slate-600 text-sm">
                  <Check size={16} className="text-slate-400" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div 
            className="pricing-card bg-slate-900 p-8 rounded-3xl border border-slate-800 relative overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.10)] opacity-0 translate-y-10 origin-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Career</h3>
            <p className="text-slate-400 text-sm mb-6">Full AI power to land your dream job.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">${isAnnual ? discountedMonthlyPrice : monthlyPrice}</span>
              <span className="text-slate-400">/month</span>
            </div>
             <button className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors mb-8 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
              Start 7-Day Trial
            </button>
            <ul className="space-y-4">
              {['Unlimited AI Analysis', 'Unlimited Job Tracking', 'Semantic JD Matching', 'Cover Letter Generator', 'Interview Prep Notes'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="bg-brand-500/20 p-0.5 rounded-full">
                    <Check size={14} className="text-brand-400" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};