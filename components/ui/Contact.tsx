import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

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

export default Contact; 