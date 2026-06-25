import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Performance', href: '#performance' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Philosophy', href: '#philosophy' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white shadow-md border-gray-200/80' 
          : 'bg-white/80 backdrop-blur-xl border-gray-200/30 shadow-sm'
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] origin-left z-[100]"
        style={{ scaleX }}
      />
      <div className="flex justify-between items-center h-20 px-5 md:px-12 lg:px-16 max-w-[1280px] mx-auto gap-4 md:gap-6 lg:gap-8">
        <a href="#" className="font-headline text-xl sm:text-2xl tracking-tighter text-[#0F172A] font-extrabold flex items-center gap-2 mr-auto shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
          AQUA ENGINEERING
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center shrink-0">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#45464d] hover:text-[#2563EB] transition-colors cursor-pointer active:scale-95 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button 
            onClick={onOpenConsultation}
            className="bg-[#2563EB] text-white px-5 lg:px-6 py-2.5 rounded-lg text-xs lg:text-sm font-semibold uppercase tracking-wider hover:bg-[#1d4ed8] transition-all shadow-md shadow-blue-500/10 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0F172A] hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 py-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-semibold uppercase tracking-wider text-[#0F172A] py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="mt-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-center shadow-md active:scale-95"
          >
            Consultation
          </button>
        </div>
      )}
    </nav>
  );
};
