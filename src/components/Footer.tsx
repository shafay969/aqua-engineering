import React from 'react';
import { Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200/80 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-headline text-2xl tracking-tighter text-[#0F172A] font-extrabold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
            AQUA ENGINEERING
          </div>
          <p className="text-[#45464d] text-base opacity-80 max-w-sm leading-relaxed">
            Specializing in mission-critical water systems for high-value residential and commercial assets.
          </p>
          <p className="text-[#0F172A] text-sm opacity-60 mt-8 font-medium">
            © 2024 Aqua Engineering. Precision in Water.
          </p>
        </div>

        <div className="flex flex-col md:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-8 text-sm font-medium">
            <a href="#" className="text-[#45464d] hover:text-[#2563EB] transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="text-[#45464d] hover:text-[#2563EB] transition-colors underline-offset-4 hover:underline">Terms of Service</a>
            <a href="#" className="text-[#45464d] hover:text-[#2563EB] transition-colors underline-offset-4 hover:underline">Technical Standards</a>
            <a href="#" className="text-[#45464d] hover:text-[#2563EB] transition-colors underline-offset-4 hover:underline">Contact</a>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => alert("Aqua Engineering International: Americas, Europe & Middle East regions active.")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-[#2563EB] transition-colors cursor-pointer"
              title="Regional Hubs"
            >
              <Globe size={18} />
            </button>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Aqua Engineering', url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-[#2563EB] transition-colors cursor-pointer"
              title="Share Page"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
