import React from 'react';
import { CheckCircle2, Sparkles, FileText, Target, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-200/40 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

      {/* Floating Particles - Adjusted for natural parallax */}
      <div className="absolute top-32 left-[8%] w-3 h-3 bg-brand-400 rounded-full opacity-20 animate-float -z-10 pointer-events-none" style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-[5%] w-5 h-5 border border-purple-300/50 rounded-full opacity-20 animate-float -z-10 pointer-events-none" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-[40%] w-20 h-20 bg-blue-100/50 rounded-full blur-xl opacity-30 animate-float -z-10 pointer-events-none" style={{ animationDuration: '15s', animationDelay: '-3s' }}></div>

      {/* Additional Layered Particles */}
      <div className="absolute top-[20%] left-[60%] w-6 h-6 border-2 border-brand-100/50 rounded-full opacity-20 animate-float -z-10 pointer-events-none" style={{ animationDuration: '9s', animationDelay: '4s' }}></div>
      <div className="absolute bottom-[15%] right-[15%] w-32 h-32 bg-purple-100/40 rounded-full blur-3xl opacity-20 animate-float -z-10 pointer-events-none" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
      <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-indigo-300 rounded-full opacity-40 animate-float -z-10 pointer-events-none" style={{ animationDuration: '11s', animationDelay: '5s' }}></div>
      
      {/* Parallax Depth Elements */}
      <div className="absolute top-[10%] right-[25%] w-4 h-4 border border-slate-300/30 rounded-full opacity-30 animate-float -z-10 pointer-events-none" style={{ animationDuration: '14s', animationDelay: '2.5s' }}></div>
      <div className="absolute bottom-[30%] left-[5%] w-2 h-2 bg-brand-200 rounded-full opacity-30 animate-float -z-10 pointer-events-none" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-[60%] right-[45%] w-24 h-24 bg-pink-100/10 rounded-full blur-2xl -z-10 animate-float -z-10 pointer-events-none" style={{ animationDuration: '20s', animationDelay: '3s' }}></div>

      {/* Deep Background Particles */}
      <div className="absolute top-[15%] right-[8%] w-2 h-2 bg-slate-200 rounded-full opacity-40 animate-float -z-10 pointer-events-none" style={{ animationDuration: '13s', animationDelay: '4s' }}></div>
      <div className="absolute bottom-[25%] right-[35%] w-12 h-12 bg-purple-50/50 rounded-full blur-lg opacity-40 animate-float -z-10 pointer-events-none" style={{ animationDuration: '16s', animationDelay: '1.5s' }}></div>
      <div className="absolute top-[35%] left-[12%] w-6 h-6 border border-slate-100/50 rounded-full opacity-20 animate-float -z-10 pointer-events-none" style={{ animationDuration: '10s', animationDelay: '3.5s' }}></div>

      {/* New Subtle Shapes & Atmospheric Layers */}
      {/* Large slow moving gradient blob */}
      <div className="absolute -top-20 left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/10 to-transparent rounded-full blur-3xl -z-10 animate-float pointer-events-none" style={{ animationDuration: '25s', animationDelay: '0s' }}></div>
      
      {/* Small distinctive pulse point */}
      <div className="absolute top-[80%] left-[50%] w-1.5 h-1.5 bg-amber-200/40 rounded-full -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
      
      {/* Wide subtle stroke circle */}
      <div className="absolute top-[25%] right-[18%] w-32 h-32 border border-slate-200/10 rounded-full -z-10 animate-float pointer-events-none" style={{ animationDuration: '22s', animationDelay: '2s' }}></div>
      
      {/* Faint angled line for texture */}
      <div className="absolute bottom-[40%] left-[10%] w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-200/20 to-transparent rotate-45 -z-10 animate-float" style={{ animationDuration: '15s', animationDelay: '5s' }}></div>

      {/* Animated Waves - Bottom Layer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 translate-y-[1px] pointer-events-none">
        <div className="relative w-[200%] h-16 md:h-24 lg:h-32 flex">
          
          {/* Wave 1 - Back - Slowest */}
          <div className="absolute bottom-0 left-0 w-full h-full flex animate-wave-slower z-0">
             <svg className="w-1/2 h-full text-brand-200 fill-current opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
             <svg className="w-1/2 h-full text-brand-200 fill-current opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>

          {/* Wave 2 - Middle - Medium Speed */}
          <div className="absolute bottom-0 left-0 w-full h-full flex animate-wave-slow z-10">
             <svg className="w-1/2 h-full text-purple-200 fill-current opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
             <svg className="w-1/2 h-full text-purple-200 fill-current opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>

           {/* Wave 3 - Front - Faster & White Transition */}
           <div className="absolute bottom-0 left-0 w-full h-full flex animate-wave z-20">
             <svg className="w-1/2 h-full text-white fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
             <svg className="w-1/2 h-full text-white fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             </svg>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-4 py-1.5 rounded-full text-brand-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-500 fill-brand-500" />
            <span>AI-Powered Career Architect</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Craft the career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
              you deserve.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Stop sending resumes into the void. Our semantic vector engine matches your profile to JDs, tracks applications, and prepares you for interviews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              Analyze My Resume
              <span className="bg-white/20 rounded px-1.5 py-0.5 text-xs font-mono text-white/90">FREE</span>
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-semibold text-lg shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
              View Sample
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>ATS Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>GPT-4o Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Privacy First</span>
            </div>
          </div>
        </div>

        {/* Right Visual - Abstract Dashboard Mockup */}
        <div className="relative hidden lg:block h-[600px] transform scale-105 -translate-x-[2%]">
          
          {/* Main Card - Resume Score */}
          <div className="absolute top-10 left-10 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-20 animate-float">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Product Designer</h3>
                  <p className="text-xs text-slate-500">Senior Level • San Francisco</p>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">94% Match</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Keywords Found</span>
                  <span className="font-bold text-brand-600">18/20</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-500 h-full w-[90%] rounded-full"></div>
                </div>
              </div>
              
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Impact Quantification</span>
                  <span className="font-bold text-amber-500">Needs Work</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[40%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
               <div className="h-8 w-24 bg-slate-100 rounded-lg animate-pulse"></div>
               <div className="h-8 w-24 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Floating Element - Application Tracker */}
          <div className="absolute top-64 -right-4 w-64 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 p-4 z-30 animate-float-delayed">
            <div className="flex items-center gap-2 mb-3">
               <div className="w-2 h-2 rounded-full bg-brand-500"></div>
               <span className="text-xs font-bold text-slate-400 uppercase">Latest Activity</span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Target size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Applied to Stripe</p>
                  <p className="text-xs text-slate-500">2 mins ago via Magic Link</p>
                </div>
              </div>
               <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                  <TrendingUp size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Interview Request</p>
                  <p className="text-[10px] text-slate-500">Airbnb • System Design</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};