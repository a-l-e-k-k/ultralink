"use client"
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Link, Server, Zap, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]).get();

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

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, opacity }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, activeSection: string, opacity: number }) => (
  <motion.header style={{ opacity }} className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <motion.h1
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 fallback-text-color"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ULTRALINK
      </motion.h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {['home', 'features', 'about', 'contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item}`}
                className={`text-lg transition-colors ${activeSection === item ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <Button className="md:hidden" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
    </div>
    <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
  </motion.header>
);

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="md:hidden bg-black p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="space-y-4">
          {['home', 'features', 'about', 'contact'].map((item) => (
            <motion.li key={item} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item}`}
                className="block text-lg hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
);

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleNetwork />
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="block text-white">Linking</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 fallback-text-color">AI & Infrastructure</span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            ULTRALINK seamlessly connects cutting-edge AI tools with your existing infrastructure,
            unlocking new possibilities and propelling your operations into the future.
          </p>
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={scrollToContact} className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
              Revolutionize Your Systems
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-indigo-400" />
      </motion.div>
    </section>
  );
};

const Features = () => (
  <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 fallback-text-color"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Transformative Capabilities
      </motion.h2>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
        <Feature
          icon={<Link className="h-16 w-16 text-indigo-400" />}
          title="Quantum Integration"
          description="Forge unbreakable links between AI tools and your infrastructure, transcending traditional boundaries."
        />
        <Feature
          icon={<Zap className="h-16 w-16 text-indigo-400" />}
          title="Cognitive Acceleration"
          description="Amplify your systems' intelligence, enabling lightning-fast decision-making and adaptation."
        />
        <Feature
          icon={<Server className="h-16 w-16 text-indigo-400" />}
          title="Infinite Scalability"
          description="Expand your digital ecosystem effortlessly, with solutions that evolve alongside your ambitions."
        />
      </div>
    </div>
  </section>
);

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-400">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const About = () => (
  <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 fallback-text-color"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        The ULTRALINK Paradigm
      </motion.h2>
      <motion.p
        className="text-xl text-center max-w-3xl mx-auto text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We&apos;re not merely connecting systems; we&apos;re architecting the future of tomorrow&apos;s enterprises.
        ULTRALINK stands at the vanguard of the AI revolution, ensuring businesses of all scales can harness
        the full spectrum of artificial intelligence, seamlessly integrated into their core processes.
      </motion.p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-b from-indigo-900 to-black">
    <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 fallback-text-color"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join the AI Revolution
      </motion.h2>
      <motion.form
        className="max-w-lg mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
        <textarea placeholder="Tell us about your AI integration needs" rows={4} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent"></textarea>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button type="submit" className="w-full py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-md transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
            Contact Us
          </Button>
        </motion.div>
      </motion.form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black border-t pt-9 border-gray-800">
    <div className="max-w-7xl mx-auto py-8 px-4  sm:px-6 lg:px-8 text-center text-gray-400">
      <p>&copy; 2024 ULTRALINK. Forging the synapses of tomorrow&apos;s digital ecosystem.</p>
    </div>
  </footer>
);

const ParticleNetwork = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-black opacity-70"></div>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="#4F46E5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#network)" />
    </svg>
  </div>
);

export default LandingPage;