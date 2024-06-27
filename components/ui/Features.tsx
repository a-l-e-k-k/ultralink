import { Link, Server, Zap} from 'lucide-react';
import { motion } from 'framer-motion';
import Feature from '@/components/ui/Feature';

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

export default Features;