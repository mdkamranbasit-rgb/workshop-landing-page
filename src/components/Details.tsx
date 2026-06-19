import React from 'react';
import { Target, Clock, Laptop, Calendar, CreditCard, Sparkles, Tag } from 'lucide-react';
import { WORKSHOP_DETAILS, WORKSHOP_META } from '../data';

// Custom component to map string representations to physical Lucide icons
function DetailIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Target':
      return <Target className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'CreditCard':
      return <CreditCard className={className} />;
    default:
      return <Target className={className} />;
  }
}

export default function Details() {
  return (
    <section id="details" className="py-24 bg-[#0a0c0f] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Tag className="w-3 h-3 text-indigo-400" />
            WORKSHOP CORE MATRICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Workshop Information & Structure
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about class structure, cohort schedule, and registration. Simple, affordable, and flexible learning pathways designed for ambitious young minds.
          </p>
        </div>

        {/* Dynamic Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WORKSHOP_DETAILS.map((card) => {
            const isFeeCard = card.id === 'fee';
            
            return (
              <div 
                key={card.id}
                className={`relative group bg-[#111319] border rounded-2xl p-6 transition-all duration-300 hover:bg-[#151921] hover:border-slate-700/80 hover:-translate-y-1 select-none flex flex-col justify-between ${
                  isFeeCard 
                    ? 'border-indigo-500/30 shadow-lg shadow-indigo-500/5 lg:col-span-1 md:col-span-2' 
                    : 'border-slate-800'
                }`}
              >
                {/* Background glow for Fee special card */}
                {isFeeCard && (
                  <div className="absolute inset-0 bg-indigo-500/[0.02] rounded-2xl pointer-events-none"></div>
                )}

                {/* Card Icon & Label Header */}
                <div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br border w-fit mb-5 transition-transform duration-300 group-hover:scale-110 ${card.colorClass}`}>
                    <DetailIcon name={card.iconName} className="w-5 h-5" />
                  </div>
                  
                  <span className="text-xs font-mono font-medium text-slate-400 tracking-wide uppercase">
                    {card.label}
                  </span>
                </div>

                {/* Card Value Content */}
                <div className="mt-4">
                  {isFeeCard ? (
                    <div>
                      {/* Pricing Tag details with discount cross-out */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-white font-display">
                          {card.value}
                        </span>
                        <span className="text-xs text-slate-500 line-through font-mono">
                          {WORKSHOP_META.originalFee}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {WORKSHOP_META.discountPercent}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Scholarship applied
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-lg font-bold text-slate-100 font-display">
                      {card.value}
                    </p>
                  )}
                </div>

                {/* Bottom decorative bar */}
                <div className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-t bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isFeeCard ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-indigo-500'
                }`}></div>

              </div>
            );
          })}
        </div>

        {/* Quick Program Feature List */}
        <div className="mt-16 bg-[#111319]/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">1</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Class Schedules</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Runs 2 sessions a week on weekends with flexible slots. Safe recorded reviews for any misses.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">2</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">No Hardware Bottleneck</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Runs entirely in-browser. Fully interactive virtual 3D workspace where kids write and test code.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold">3</span>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Lifetime Certification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Graduate with a Junior Developer Verification Badge with an online portfolio containing projects.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
