import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first FAQ by default

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faqs" className="py-24 bg-[#0a0c0f] border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Answering Parent’s Concerns
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about software environments, laptop prerequisites, or scheduling? Here are direct answers to our most popular inquiries.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#12151d] border-purple-500/30 shadow-md shadow-purple-500/[0.02]' 
                    : 'bg-[#111319]/70 border-slate-800/80 hover:border-slate-700/60'
                }`}
              >
                
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <span className={`p-2 rounded-lg border text-sm mt-0.5 transition-colors duration-300 ${
                      isOpen 
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' 
                        : 'bg-[#181c24] border-slate-700/40 text-slate-400 group-hover:text-slate-200'
                    }`}>
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <div className="flex-1">
                      <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase mb-1 block">
                        {faq.category}
                      </span>
                      <h3 className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                        isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <span className={`p-2 rounded-lg bg-slate-800/40 border border-slate-700/10 text-slate-400 group-hover:text-white transition-transform duration-300 mt-1 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-purple-500/10 border-purple-500/10 text-purple-400' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Accordion Disclosure Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-800/50' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-[#0f1117]/80 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Still have a custom question regarding billing or syllabus?
          </p>
          <span 
            onClick={() => {
              const el = document.getElementById('enroll-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-2.5 inline-flex items-center gap-1 cursor-pointer hover:underline"
          >
            Submit an Enquiry and our Program Advisor will call you back &rarr;
          </span>
        </div>

      </div>
    </section>
  );
}
