import {motion} from 'framer-motion';

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
                About the Firm
            </motion.h2>
            <motion.p
                className="text-xl text-center max-w-3xl mx-auto text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                At Ultralink AI, we're not your typical tech consulting firm — we're a small, driven team of college students and young professionals passionate about bringing real AI solutions to real-world problems. Our mission is simple: help businesses and local governments integrate AI tools that actually work—saving time, reducing costs, and improving efficiency.
            </motion.p>
        </div>
    </section>
);

export default About;