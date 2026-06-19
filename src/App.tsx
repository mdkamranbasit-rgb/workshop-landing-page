import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import { Sparkles, GraduationCap, Github, Laptop, Milestone, Star } from 'lucide-react';
import { WORKSHOP_META } from './data';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f14] text-slate-100 font-sans selection:bg-blue-500/20 selection:text-blue-300">
      
      {/* Top Notification Badge Bar */}
      <div 
        id="top-alert-banner" 
        className="bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 border-b border-indigo-500/10 py-2.5 px-4 text-center text-xs text-indigo-200 flex items-center justify-center gap-2 relative z-[60]"
      >
        <span className="inline-flex px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono font-bold animate-pulse">
          50% DISCOUNT ACTIVE
        </span>
        <span className="font-medium">
          Summer Cohort seat registrations are closing. Secure an Early-Bird Scholarship slot today!
        </span>
        <button 
          onClick={() => {
            const el = document.getElementById('enroll-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="underline font-bold hover:text-white transition-colors ml-1 cursor-pointer"
        >
          Enroll Now &rarr;
        </button>
      </div>

      {/* Main Sticky Header */}
      <Header />

      {/* Hero Visual Block (with code simulation) */}
      <Hero />

      {/* Workshop Specs Section Cards */}
      <Details />

      {/* Learning Targets Overview */}
      <LearningOutcomes />

      {/* Interactive FAQ Accordion list */}
      <FAQ />

      {/* Admissions Registration Form Section */}
      <RegistrationForm />

      {/* FOOTER SECTION */}
      <footer id="main-footer" className="bg-[#090b0e] border-t border-slate-900 py-16 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Left Col Brand Block */}
            <div className="md:col-span-5 text-left flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-base font-bold text-white font-display uppercase tracking-widest">
                  KidLabs KidAcademy
                </span>
              </div>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-4">
                Providing standard-setting digital literacy, game development, and junior robotics courses. Inspiring students globally to advance from screen-consumers to future system architects.
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[11px] font-mono text-slate-400 ml-1.5">(4.9/5 Parent Rating)</span>
              </div>
            </div>

            {/* Middle Col Links */}
            <div className="md:col-span-3 text-left">
              <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase mb-4">
                Academic Modules
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Junior Arduino Labs</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Block-Based AI Engine Logic</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Autonomous Simulation Cars</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Parent Demonstration Day</li>
              </ul>
            </div>

            {/* Right Col Links */}
            <div className="md:col-span-4 text-left">
              <h4 className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase mb-4">
                Legal & Support
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Need immediate academic advisory or invoice credentials?
              </p>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-slate-300">📧 support@kidlabs-academy.org</p>
                <p className="text-slate-300">📞 +91 (800) 419-7221</p>
              </div>
            </div>

          </div>

          {/* Bottom attribution copyright block */}
          <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
            <div>
              &copy; {currentYear} KidLabs KidAcademy Inc. All rights reserved. Registered Educational Unit.
            </div>
            
            <div className="flex items-center gap-1">
              <span>Class Status Code: </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase text-[9px] font-semibold tracking-wider">
                COHORT START: 15 JULY
              </span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
