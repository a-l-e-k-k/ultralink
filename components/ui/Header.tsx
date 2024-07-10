import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Button } from "./Button";
import MobileMenu from "./MobileMenu";

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, opacity }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, activeSection: string, opacity: number }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.header style={{ opacity }} className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
                    <img src={'favicon-32x32.png'} alt="Company Logo" className="h-8 mr-3" />
                    <motion.h1
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 fallback-text-color cursor-pointer"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={scrollToTop}
                    >
                        ULTRALINK
                    </motion.h1>
                </div>
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
};

export default Header;