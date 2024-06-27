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

export default About;