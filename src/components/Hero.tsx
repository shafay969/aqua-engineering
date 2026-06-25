import React from 'react';
import { IMAGES } from '../types';
import { ArrowDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 pt-32 pb-24 min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold uppercase tracking-widest w-fit animate-pulse">
          <ShieldCheck size={14} />
          Architectural Water Systems
        </div>

        <h1 className="font-headline text-4xl sm:text-5xl lg:text-[72px] leading-[1.1] text-[#0F172A] font-bold tracking-tight">
          Flawless Plumbing. <br />
          <span className="text-[#2563EB]">Engineered</span> for Your Home.
        </h1>

        <p className="text-lg text-[#45464d] max-w-lg leading-relaxed">
          Experience the pinnacle of water delivery systems. We redefine residential plumbing through technical mastery and architectural precision.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a 
            href="#schedule"
            className="bg-[#2563EB] text-white px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-center cursor-pointer"
          >
            Schedule Inspection
          </a>
          <button 
            onClick={onScheduleClick}
            className="border border-[#0F172A]/20 text-[#0F172A] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95 cursor-pointer"
          >
            Instant Estimate
          </button>
        </div>

        <div className="mt-6 flex items-center gap-6 text-xs font-medium text-gray-500 pt-4 border-t border-gray-200/60">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Sonic Pressure Tested
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            CAD-Driven Layouts
          </span>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200/60 bg-[#eceef0] shadow-2xl relative group">
          <img 
            src={IMAGES.hero} 
            alt="Premium kitchen water system" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-gray-200/80 flex items-center justify-between text-xs font-medium text-gray-800 shadow-sm">
          <span>High-Specification Stainless Steel Componentry</span>
          <span className="text-[#2563EB] font-bold tracking-wider uppercase text-[10px] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">Certified Master</span>
        </div>
      </div>
    </section>
  );
};
