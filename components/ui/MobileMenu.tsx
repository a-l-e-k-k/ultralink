import { AnimatePresence, motion } from "framer-motion";

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

export default MobileMenu;