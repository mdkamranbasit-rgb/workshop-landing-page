import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, ArrowRight, Shield, Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { WORKSHOP_META } from '../data';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Validation States
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    success: boolean;
    message: string;
    persistence: string;
    data?: { name: string; email: string; phone: string; createdAt: string };
  } | null>(null);

  // Client-side Validation helper
  const validateForm = () => {
    const tempErrors: typeof errors = {};
    let isValid = true;

    if (!name.trim()) {
      tempErrors.name = "Full name is required for student enrollment.";
      isValid = false;
    }

    if (!email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email.trim())) {
        tempErrors.email = "Please specify a valid email format (e.g., mail@example.com).";
        isValid = false;
      }
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required for follow-up.";
      isValid = false;
    } else {
      // Clean phone check
      const cleanPhone = phone.replace(/[^0-9+()-\s]/g, "");
      if (cleanPhone.length < 8) {
        tempErrors.phone = "Please enter a valid phone number (at least 8 digits).";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      // Success
      setSuccessData({
        success: true,
        message: data.message,
        persistence: data.persistence,
        data: data.data,
      });

      // Reset
      setName('');
      setEmail('');
      setPhone('');
    } catch (err: any) {
      console.error("[Registration Submit Error]:", err);
      setServerError(err.message || "Failed to submit enquiry. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enroll-form" className="py-24 bg-[#0d0f14] relative">
      {/* Decorative vertical separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column (Left) */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              ADMISSIONS ENQUIRY COHORT 2026
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-6">
              Claim Your Child’s Seat Today
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Our cohort sizes are restricted to structured, small clusters (maximum 15 students per live cohort) to ensure high individual instructor guidance, mentorship, and support.
            </p>

            {/* Quick summary checkmarks lists */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Risk-free Enrollment:</span> Fully refundable within the first week of live sessions if your child chooses a different pathway.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Full-Stack Storage:</span> Submitted inquiry details are stored securely using standard database persistence protocols.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Live Support:</span> Dedicated WhatsApp group channel setup with master coaches to answer homework bugs daily.
                </p>
              </div>
            </div>

            {/* Price block widget */}
            <div className="p-4 rounded-xl bg-[#111319] border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Promo Pricing Applied</span>
                <p className="text-slate-300 text-xs">Total payable tuition</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 line-through mr-1.5 font-mono">{WORKSHOP_META.originalFee}</span>
                <span className="text-2xl font-bold text-white font-display">{WORKSHOP_META.fee}</span>
              </div>
            </div>
          </div>

          {/* Form Card Column (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111319] border border-slate-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

              {successData ? (
                /* SUCCESS PANEL DESIGN */
                <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    Enquiry Registered Successfully!
                  </h3>
                  
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    {successData.message}
                  </p>

                  {/* Submitted metadata overview dashboard */}
                  {successData.data && (
                    <div className="bg-[#0b0c10] border border-slate-800 rounded-xl p-5 text-left max-w-md mx-auto mb-8 space-y-2.5 font-sans">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5">
                        DATABASE SUBMISSION METADATA
                      </span>
                      <p className="text-xs text-slate-300 flex justify-between gap-4">
                        <span className="text-slate-500">Student Name:</span> 
                        <span className="font-semibold text-white">{successData.data.name}</span>
                      </p>
                      <p className="text-xs text-slate-300 flex justify-between gap-4">
                        <span className="text-slate-500">Parent Email:</span> 
                        <span className="font-semibold text-white">{successData.data.email}</span>
                      </p>
                      <p className="text-xs text-slate-300 flex justify-between gap-4">
                        <span className="text-slate-500">Contact Phone:</span> 
                        <span className="font-semibold text-white">{successData.data.phone}</span>
                      </p>
                      <p className="text-xs text-slate-300 flex justify-between gap-4">
                        <span className="text-slate-500">Record Storage:</span> 
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-semibold border border-emerald-500/10 uppercase">
                          {successData.persistence}
                        </span>
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setSuccessData(null)}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-sm font-semibold tracking-tight transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                /* WORKSHOP ENQUIRY FORM */
                <div>
                  
                  {/* Form Header */}
                  <div className="mb-8 text-left">
                    <h3 className="text-xl font-bold font-display text-white">Join the Smart-Bots Hub</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Provide contact credentials to check availability, obtain syllabus, and confirm entry schedules.
                    </p>
                  </div>

                  {serverError && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5 text-left animate-shake">
                      <AlertCircle className="w-4.5 h-4.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="flex-1 font-medium leading-relaxed">{serverError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                    
                    {/* Input 1: Student Name */}
                    <div>
                      <label htmlFor="student-name" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Student’s Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="student-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                          }}
                          placeholder="e.g., Arnav Sharma"
                          className={`w-full bg-[#0d0f14] text-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm border focus:outline-none focus:ring-1 transition-all ${
                            errors.name 
                              ? 'border-red-500/40 focus:border-red-500 focus:ring-red-500' 
                              : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-[11px] mt-1.5 font-medium">{errors.name}</p>}
                    </div>

                    {/* Input 2: Parent Email */}
                    <div>
                      <label htmlFor="student-email" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Parent’s Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="student-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                          }}
                          placeholder="parent@example.com"
                          className={`w-full bg-[#0d0f14] text-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm border focus:outline-none focus:ring-1 transition-all ${
                            errors.email 
                              ? 'border-red-500/40 focus:border-red-500 focus:ring-red-500' 
                              : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-[11px] mt-1.5 font-medium">{errors.email}</p>}
                    </div>

                    {/* Input 3: Parent Phone */}
                    <div>
                      <label htmlFor="student-phone" className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Contact Phone Number <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="student-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                          }}
                          placeholder="e.g., +91 98765 43210"
                          className={`w-full bg-[#0d0f14] text-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm border focus:outline-none focus:ring-1 transition-all ${
                            errors.phone 
                              ? 'border-red-500/40 focus:border-red-500 focus:ring-red-500' 
                              : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/30'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1.5 font-medium">{errors.phone}</p>}
                    </div>

                    {/* Submit button with loading spinner state */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-center py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white rounded-xl text-sm font-bold tracking-tight shadow-lg shadow-indigo-500/10 cursor-pointer hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>PROCESSING ADMISSIONS INTAKE...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT REGISTRATION ENQUIRY</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Trust details footer line */}
                    <p className="text-[10px] text-slate-500 font-medium text-center flex items-center justify-center gap-1 mt-4">
                      <Shield className="w-3.5 h-3.5" /> Your data is protected by automated cloud security rules.
                    </p>

                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
