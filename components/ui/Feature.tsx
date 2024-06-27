import { motion } from "framer-motion";

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

export default Feature