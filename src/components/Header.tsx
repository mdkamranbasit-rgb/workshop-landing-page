import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="app-header" 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0d0f14]/90 backdrop-blur-md border-b border-slate-800/40 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 border border-blue-500/30 group-hover:border-blue-500/60 transition-colors">
              <Bot className="w-5 h-5 text-blue-400 group-hover:rotate-6 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display tracking-tight text-white flex items-center gap-1.5 leading-none">
                KidLabs <span className="text-xs font-mono font-medium text-blue-400 border border-blue-500/20 px-1 py-0.5 rounded bg-blue-500/5">ROBOTICS</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">FUTURE-READY EDUCATION</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('details')} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Workshop Details
            </button>
            <button 
              onClick={() => scrollToSection('learning-outcomes')} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              What they Learn
            </button>
            <button 
              onClick={() => scrollToSection('faqs')} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('enroll-form')} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Admissions Enquiry
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('enroll-form')}
              className="relative overflow-hidden group px-5 py-2.5 rounded-lg text-sm font-semibold tracking-tight text-white transition-all cursor-pointer"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:opacity-90 transition-opacity"></div>
              {/* Highlight flare */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="relative flex items-center gap-1.5">
                Join Cohort <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f14] border-b border-slate-800/70 py-4 px-4 space-y-3 shadow-2xl absolute w-full top-full left-0 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => scrollToSection('details')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            Workshop Details
          </button>
          <button
            onClick={() => scrollToSection('learning-outcomes')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            What they Learn
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection('enroll-form')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            Admissions Enquiry
          </button>
          <div className="pt-2 px-3">
            <button
              onClick={() => scrollToSection('enroll-form')}
              className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg py-2.5 text-sm font-semibold hover:from-blue-500 hover:to-indigo-500 transition-colors"
            >
              Enroll Now — ₹2,999 Only
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
