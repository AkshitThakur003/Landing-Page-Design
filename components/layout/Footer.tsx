import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 lg:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content - Increased gap for better balance (gap-12/gap-20) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-20 mb-12 lg:mb-20">
          
          {/* Brand Section - Spans 2 cols on large screens */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 text-white">
               <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-brand-900/20">R</div>
               <span className="font-bold text-xl tracking-tight">ResumeCraft</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering professionals to take control of their careers through data-driven insights, intelligent automation, and semantic analysis.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 group" aria-label="Twitter">
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 group" aria-label="LinkedIn">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 group" aria-label="GitHub">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Link Column 1 */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-8">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Link Column 2 */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-8">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Resume Templates</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Career Guide</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Link Column 3 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-8">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ResumeCraft Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50 hover:border-slate-600 transition-colors cursor-help">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="font-medium text-xs text-slate-300">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
