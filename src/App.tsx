/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Performance } from './components/Performance';
import { Schedule } from './components/Schedule';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const scrollToSchedule = () => {
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white font-sans text-[#0F172A]">
      <Navbar onOpenConsultation={scrollToSchedule} />
      
      <main className="flex-grow">
        <ScrollReveal>
          <Hero onScheduleClick={scrollToSchedule} />
        </ScrollReveal>
        <ScrollReveal>
          <Expertise />
        </ScrollReveal>
        <ScrollReveal>
          <Performance />
        </ScrollReveal>
        <ScrollReveal>
          <Schedule />
        </ScrollReveal>
        <ScrollReveal>
          <Philosophy />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

