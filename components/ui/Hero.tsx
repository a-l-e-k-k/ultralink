import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { useRef } from 'react';
import ParticleNetwork from './ParticleNetwork';

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
            <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 -mt-32 md:-mt-0 sm:px-6 lg:px-8 relative z-10 ">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                        <span className="block text-white">ULTRALINK</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 fallback-text-color">AI & Your Infrastructure</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        ULTRALINK empowers businesses to harness AI to supercharge their existing operations for unparalleled growth and efficiency.
                        <span className='font-semibold hidden md:block'> Integrate AI before powerful competitors leave you behind.</span>
                        
                    </p>
                    <ul className="mt-8 space-y-2 text-lg text-gray-300">
                        <li>✓ Accelerate business growth with tailored AI solutions</li>
                        <li className='hidden md:block'>✓ Gain a competitive edge in your rapidly evolving industry</li>
                        <li>✓ Save time, money, and resources</li>
                    </ul>
                    <motion.div
                        className="mt-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button onClick={scrollToContact} className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                            Start Your AI Journey Now
                            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                className="absolute bottom-12 md:bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <ChevronDown className="h-8 w-8 text-indigo-400" />
            </motion.div>
        </section>
    );
};

export default Hero