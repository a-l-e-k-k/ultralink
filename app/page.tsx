"use client"
import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]).get();
  // oof, this is a lot of code for a landing page

  useEffect(() => {
 
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} opacity={opacity} />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;