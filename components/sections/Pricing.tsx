import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
          <p className="text-slate-600 mb-8">Invest in your future for less than the cost of a coffee.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-brand-600 text-xs font-bold bg-brand-100 px-2 py-0.5 rounded-full ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for polishing your existing resume.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900">{isAnnual ? '$0' : '$0'}</span>
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
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro Career</h3>
            <p className="text-slate-400 text-sm mb-6">Full AI power to land your dream job.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">{isAnnual ? '$12' : '$15'}</span>
              <span className="text-slate-400">/month</span>
            </div>
             <button className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors mb-8 shadow-lg shadow-brand-500/25">
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