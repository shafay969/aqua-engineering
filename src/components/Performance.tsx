import React from 'react';
import { IMAGES } from '../types';
import { CheckCircle2, Gauge, Shield, Zap } from 'lucide-react';

export const Performance: React.FC = () => {
  const highlights = [
    {
      title: "Zero-Leak Guarantee",
      desc: "Verified with digital sonic pressure and acoustic stress testing."
    },
    {
      title: "Acoustic Dampening",
      desc: "Engineered isolation mounts for near-silent pipe flow across all floors."
    },
    {
      title: "Surgical-Grade Stainless",
      desc: "High-specification 316L alloy componentry resisting corrosion indefinitely."
    }
  ];

  return (
    <section id="performance" className="pt-8 pb-20 overflow-hidden bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Image & Badge */}
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-square bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden border border-gray-200/60 group">
              <img 
                src={IMAGES.performance} 
                alt="High specification industrial plumbing valves" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Standard Output Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-6 rounded-xl shadow-2xl border border-gray-700/50 hidden sm:block animate-in fade-in zoom-in duration-500">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                <Gauge size={14} />
                Standard Output
              </div>
              <p className="font-headline text-4xl font-extrabold tracking-tight text-white">99.9%</p>
              <p className="text-xs text-gray-300 mt-0.5">Uptime & Flow Reliability</p>
            </div>
          </div>

          {/* Right Copy */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em]">
              PERFORMANCE
            </span>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-bold tracking-tight">
              Technical Superiority
            </h2>

            <p className="text-lg text-[#45464d] leading-relaxed">
              Our performance isn't just felt; it's measured. We apply industrial engineering standards to residential environments, ensuring silent operation and consistent volumetric water pressure.
            </p>

            <div className="space-y-4 mt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 border-b border-gray-100 pb-4 group">
                  <div className="mt-1 text-[#2563EB] group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} className="fill-blue-50 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] text-base">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-[#f8fafc] rounded-lg border border-gray-200/80 flex items-center gap-4">
              <div className="p-2.5 rounded-md bg-blue-100/70 text-[#2563EB]">
                <Shield size={20} />
              </div>
              <div className="text-xs text-gray-700">
                <span className="font-bold text-[#0F172A] block">ISO 9001 & Hydraulic Certified</span>
                All installations include a 10-year structural warranty and annual diagnostic calibration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
