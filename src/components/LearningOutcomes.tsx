import React from 'react';
import { BookOpen, Sparkles, Check } from 'lucide-react';
import { LEARNING_OUTCOMES } from '../data';

export default function LearningOutcomes() {
  return (
    <section id="learning-outcomes" className="py-24 bg-[#0d0f14] relative">
      {/* Decorative vertical background divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            COMPREHENSIVE STUDENT CURRICULUM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            What Your Child Will Master
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Over the course of 4 intensive, playful weeks, students progress from coding beginners to creator-engineers, producing structural digital prototypes and expanding intellectual boundaries.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARNING_OUTCOMES.map((outcome, index) => {
            return (
              <div 
                key={outcome.id || index}
                className="group relative bg-[#13161c] border border-slate-800/80 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-[#161a24] hover:shadow-xl hover:shadow-blue-500/[0.02]"
              >
                {/* Micro-glow element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>

                {/* Card Top: Illustration and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-3xl bg-[#181c24] border border-slate-700/40 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner group-hover:border-blue-500/20">
                    {outcome.illustration}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase bg-[#0d0f14]/80 px-2.5 py-1 rounded-full border border-slate-800/75 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {outcome.badgeText}
                  </span>
                </div>

                {/* Card Info */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-snug transition-colors group-hover:text-blue-300">
                  {outcome.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {outcome.description}
                </p>

                {/* Check lists inside cards showing structured items */}
                <div className="pt-4 border-t border-slate-800/60 mt-auto">
                  <span className="text-[11px] font-mono font-medium text-slate-500 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Fully integrated lab assignments included
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 border border-dashed border-slate-800 rounded-2xl bg-[#111319]/20">
          <p className="text-xs text-slate-500 font-mono mb-2">No hardware kit struggles. Focus entirely on brain logic and code structure.</p>
          <span className="text-xs font-semibold text-blue-400 cursor-pointer hover:underline flex items-center justify-center gap-1" onClick={() => {
            const el = document.getElementById('enroll-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Secure your child’s seat for the upcoming cohort <Sparkles className="w-3 h-3 text-yellow-400" />
          </span>
        </div>

      </div>
    </section>
  );
}
