import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bot, Sparkles, ArrowRight, Play, CheckCircle, Database, Shield, Zap } from 'lucide-react';
import { WORKSHOP_META } from '../data';

export default function Hero() {
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [simMessage, setSimMessage] = useState("Status: Connected. Ready to upload code.");

  const handleRunSimulation = () => {
    if (running) return;
    setRunning(true);
    setSimMessage("Compiling kid-block code...");
    
    // Step 1
    setTimeout(() => {
      setActiveStep(1);
      setSimMessage("📡 Triggering Ultrasonic Distance Sensor...");
    }, 700);

    // Step 2
    setTimeout(() => {
      setActiveStep(2);
      setSimMessage("🤖 Microprocessor response: Obstacle cleared!");
    }, 1700);

    // Step 3
    setTimeout(() => {
      setActiveStep(3);
      setSimMessage("🚀 Accelerating dual stepper wheels at 100% power!");
    }, 2700);

    // End / Clear
    setTimeout(() => {
      setRunning(false);
      setActiveStep(null);
      setSimMessage("🎯 Destination reached successfully! Code run finished.");
    }, 3900);
  };

  const scrollToEnrollForm = () => {
    const element = document.getElementById('enroll-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-[#0d0f14]">
      {/* Visual background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{ animationDelay: '4s' }}></div>
        {/* Subtle cyan background grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#a855f7 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag / Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
              🤖 AGES 8–14 · LIMITED COHORT SEATS
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-400 mb-6"
            >
              AI & Robotics <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Summer Workshop
              </span>
            </motion.h1>

            {/* Sub-text */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              {WORKSHOP_META.desc} No physical hardware required — our interactive 3D digital laboratory introduces critical logic while keeping learning tactile and fun!
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={scrollToEnrollForm}
                className="group relative cursor-pointer px-8 py-4 rounded-xl font-bold tracking-tight text-white shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all text-center flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Visual hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <span className="relative flex items-center gap-1.5 text-base">
                  Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('details');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/70 transition-all font-semibold text-center text-base cursor-pointer"
              >
                Learn More
              </button>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-10 border-t border-slate-800/60 w-full"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-display">100%</span>
                <span className="text-xs text-slate-400 font-mono mt-1">Live Online Labs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-display">₹2,999</span>
                <span className="text-xs text-slate-400 font-mono mt-1">All-inclusive Fee</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white font-display">15 July</span>
                <span className="text-xs text-slate-400 font-mono mt-1">Cohort Start Date</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visuals - Interactive Kid block workspace */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#13161c] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              {/* Card top-bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#0d0f14] px-3 py-1 rounded-md border border-slate-800/60 font-mono text-[10px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping"></span>
                  KIDLABS-PROCESSOR.ts
                </div>
              </div>

              {/* Layout splits into block editor on top and visual simulator below */}
              <div>
                <p className="text-xs text-slate-400 font-medium font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" /> Lesson 1 Project: Obstacle Searcher
                </p>

                {/* Blocks Stack */}
                <div className="space-y-2 mb-4">
                  {/* Block 1 */}
                  <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                    activeStep === 1 
                      ? 'bg-blue-600/30 border-blue-400 text-white shadow-md shadow-blue-500/10 translate-x-2' 
                      : 'bg-[#181c24] border-slate-800 text-slate-300'
                  }`}>
                    <span className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] uppercase">Event</span>
                      when <span className="text-cyan-400 font-bold">radarDetectsObstacle</span> (15cm)
                    </span>
                    <span className="text-[10px] text-slate-500">Step 1</span>
                  </div>

                  {/* Block 2 */}
                  <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                    activeStep === 2 
                      ? 'bg-purple-600/30 border-purple-400 text-white shadow-md shadow-purple-500/10 translate-x-2' 
                      : 'bg-[#181c24] border-slate-800 text-slate-300'
                  }`}>
                    <span className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] uppercase">Action</span>
                      flash <span className="text-pink-400 font-bold">AlertLEDs (Cyan)</span> & beep
                    </span>
                    <span className="text-[10px] text-slate-500">Step 2</span>
                  </div>

                  {/* Block 3 */}
                  <div className={`p-2.5 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                    activeStep === 3 
                      ? 'bg-emerald-600/30 border-emerald-400 text-white shadow-md shadow-emerald-500/10 translate-x-2' 
                      : 'bg-[#181c24] border-slate-800 text-slate-300'
                  }`}>
                    <span className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] uppercase">Control</span>
                      steer <span className="text-yellow-400 font-semibold">WheelsRight(45°)</span> and accelerate
                    </span>
                    <span className="text-[10px] text-slate-500">Step 3</span>
                  </div>
                </div>

                {/* Simulated Rover Display */}
                <div className="relative bg-[#0d0f14] border border-slate-800/80 rounded-xl p-4 flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
                  
                  {/* Grid lines inside simulation screen */}
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                  
                  {/* Circular Radar Sweep */}
                  <div className={`absolute w-36 h-36 rounded-full border border-dashed transition-colors duration-500 flex items-center justify-center ${
                    running ? 'border-cyan-500/20 scale-105' : 'border-slate-800'
                  }`}>
                    {running && (
                      <div className="absolute inset-0 rounded-full bg-cyan-400/5 animate-ping" style={{ animationDuration: '3s' }}></div>
                    )}
                  </div>

                  {/* Robot Rover graphic */}
                  <div className={`relative z-10 transition-transform duration-700 ${
                    activeStep === 3 ? 'rotate-45 scale-105' : activeStep === 2 ? 'scale-95' : 'rotate-0'
                  }`}>
                    <svg width="60" height="60" viewBox="0 0 60 060" fill="none" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      {/* Body */}
                      <rect x="15" y="15" width="30" height="30" rx="6" fill="#1e293b" stroke={activeStep ? "#60a5fa" : "#475569"} strokeWidth="2" />
                      {/* Wheels */}
                      <rect x="8" y="18" width="6" height="8" rx="2" fill="#3b82f6" />
                      <rect x="8" y="34" width="6" height="8" rx="2" fill="#3b82f6" />
                      <rect x="46" y="18" width="6" height="8" rx="2" fill="#3b82f6" />
                      <rect x="46" y="34" width="6" height="8" rx="2" fill="#3b82f6" />
                      {/* LED Eye */}
                      <circle cx="30" cy="23" r="4" fill={activeStep === 2 ? "#06b6d4" : "#ef4444"} />
                      {/* Antennas */}
                      <line x1="30" y1="15" x2="30" y2="8" stroke={activeStep ? "#60a5fa" : "#475569"} strokeWidth="2" />
                      <circle cx="30" cy="6" r="2.5" fill={activeStep ? "#a855f7" : "#475569"} />
                    </svg>
                  </div>

                  {/* Ultrasonic Waves representation */}
                  {activeStep === 1 && (
                    <div className="absolute top-4 flex flex-col gap-1 items-center">
                      <span className="w-8 h-1 bg-cyan-400/40 rounded animate-bounce"></span>
                      <span className="w-12 h-1 bg-cyan-400/25 rounded"></span>
                    </div>
                  )}

                  {/* Terminal log message line */}
                  <div className="absolute bottom-2 left-3 right-3 text-center">
                    <p className="font-mono text-[10px] text-cyan-400/90 truncate bg-[#101319]/80 border border-slate-800 px-2 py-0.5 rounded">
                      {simMessage}
                    </p>
                  </div>
                </div>

                {/* Submitter Action */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Interactive simulation</span>
                    <p className="text-xs font-semibold text-slate-300">Run actual student code block</p>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={running}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                      running 
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                        : 'bg-emerald-500 hover:bg-emerald-400 text-[#0d0f14] shadow-md shadow-emerald-500/15 cursor-pointer hover:scale-102Active'
                    }`}
                  >
                    <Play className={`w-3.5 h-3.5 ${running ? 'text-slate-500' : 'fill-current'}`} />
                    {running ? "EXECUTING..." : "RUN CODE"}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
