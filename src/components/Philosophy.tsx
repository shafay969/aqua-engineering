import React from 'react';
import { IMAGES } from '../types';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="pt-8 pb-20 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Copy Side */}
          <div>
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] block mb-2">
              The Aqua Ethos
            </span>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-bold tracking-tight mb-8">
              Precision in Water
            </h2>

            <div className="space-y-6">
              <blockquote className="border-l-4 border-[#2563EB] pl-6 py-1 bg-gradient-to-r from-blue-50/40 to-transparent">
                <p className="font-headline text-xl sm:text-2xl italic text-[#0F172A]/90 font-medium leading-relaxed">
                  "Plumbing is the circulatory system of architecture. It must be silent, invisible, and absolute."
                </p>
              </blockquote>

              <p className="text-lg text-[#45464d] leading-relaxed">
                At Aqua Engineering, we reject the notion of 'standard plumbing.' Our philosophy is rooted in the belief that water delivery is a technical art form. We prioritize longevity over quick fixes, using only the highest specification hydraulic materials sourced globally.
              </p>
            </div>
          </div>

          {/* Grid Side */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
              <div 
                className="aspect-[3/4] bg-cover bg-center rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-200/60"
                style={{ backgroundImage: `url('${IMAGES.philosophy1}')` }}
              />
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <span className="text-sm font-bold text-[#0F172A] block">Material Integrity</span>
                <span className="text-xs text-[#45464d] mt-0.5 block">Swiss & German CNC Valves</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <span className="text-sm font-bold text-[#0F172A] block">Elite Craft</span>
                <span className="text-xs text-[#45464d] mt-0.5 block">Master Licensed Engineers</span>
              </div>
              <div 
                className="aspect-[3/4] bg-cover bg-center rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-200/60"
                style={{ backgroundImage: `url('${IMAGES.philosophy2}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
