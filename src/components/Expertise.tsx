import React, { useState } from 'react';
import { DraftingCompass, Droplets, Cpu, ChevronUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Expertise: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleCard = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const cards = [
    {
      icon: DraftingCompass,
      title: "System Design",
      description: "Meticulous CAD-driven plumbing blueprints designed to integrate seamlessly with modern high-end architectural plans.",
      badge: "CAD / BIM Level 3",
      specs: [
        { label: "Blueprint Accuracy", value: "Sub-millimeter routing models" },
        { label: "Structural Harmony", value: "Zero joist or structural load compromise" },
        { label: "Acoustic Modelling", value: "Fluid dynamics acoustic dampening" },
        { label: "Standard Compliance", value: "IPC & UPC Luxury Residential Certified" }
      ]
    },
    {
      icon: Droplets,
      title: "Water Purification",
      description: "Advanced filtration engineering that delivers studio-quality water purity through multi-stage technical extraction.",
      badge: "0.0001 Micron RO",
      specs: [
        { label: "Extraction Stages", value: "5-Stage Catalytic Carbon & RO Extraction" },
        { label: "Purity Index", value: "99.99% VOC, Heavy Metal & PFAS Removal" },
        { label: "Volumetric Flow", value: "High-retention 12 GPM continuous delivery" },
        { label: "Bio-Sanitation", value: "Automated inline UV-C bacterial sterilization" }
      ]
    },
    {
      icon: Cpu,
      title: "Tech Integration",
      description: "Smart water management systems with digital leak detection and automated pressure optimization at the source.",
      badge: "IoT Telemetry Sync",
      specs: [
        { label: "Anomaly Detection", value: "24/7 Sonic pressure & acoustic monitoring" },
        { label: "Emergency Shutoff", value: "0.5-sec automatic electronic valve closure" },
        { label: "Ecosystem Integration", value: "Apple Home, KNX, Control4 & Savant Sync" },
        { label: "Power Redundancy", value: "72-hour internal lithium backup system" }
      ]
    }
  ];

  return (
    <section id="expertise" className="bg-white pt-8 pb-20 border-y border-gray-200/40 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] block mb-2">
            EXPERTISE
          </span>
          <h2 className="font-headline text-3xl md:text-5xl text-[#0F172A] font-bold">
            Engineering Precision
          </h2>
          <p className="text-[#45464d] text-base mt-3 max-w-xl mx-auto">
            Hover over our core engineering pillars below and click <span className="text-[#2563EB] font-semibold">View Specification</span> to expand detailed technical parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div 
                layout
                key={idx}
                onClick={() => toggleCard(idx)}
                className={`bg-white p-8 sm:p-10 lg:p-12 border rounded-xl group transition-all duration-300 flex flex-col justify-between relative cursor-pointer select-none ${
                  isExpanded
                    ? 'border-[#2563EB] ring-4 ring-[#2563EB]/10 shadow-2xl bg-gradient-to-b from-blue-50/30 to-white scale-[1.03] z-10'
                    : 'border-gray-200/80 hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-100/60 transition-colors pointer-events-none" />

                <motion.div layout>
                  <div className="flex items-center justify-between mb-6 gap-2">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all shadow-sm shrink-0 ${
                      isExpanded ? 'bg-[#2563EB] text-white scale-110' : 'bg-[#f2f4f6] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200/60 shrink-0">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl text-[#0F172A] font-semibold mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#45464d] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>

                {/* Expanded Specifications Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-6 pt-6 border-t border-blue-100"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-4">
                        <Sparkles size={14} />
                        Technical Specifications
                      </div>
                      <div className="space-y-2.5">
                        {card.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="bg-[#f8fafc] p-3 rounded-lg border border-gray-200/70 text-xs">
                            <span className="font-bold text-[#0F172A] block mb-0.5">{spec.label}</span>
                            <span className="text-gray-600 font-normal">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Action Button */}
                <motion.div layout className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(idx);
                    }}
                    className={`w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider py-1.5 transition-all cursor-pointer ${
                      isExpanded
                        ? 'text-[#0F172A] opacity-100'
                        : 'text-[#2563EB] opacity-70 md:opacity-0 group-hover:opacity-100 focus:opacity-100'
                    }`}
                  >
                    <span>{isExpanded ? 'Hide Specification' : 'View Specification'}</span>
                    <span className={`transform transition-transform duration-300 ${isExpanded ? 'text-[#2563EB]' : 'group-hover:translate-x-1'}`}>
                      {isExpanded ? <ChevronUp size={16} /> : '→'}
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
