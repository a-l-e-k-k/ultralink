import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Features = () => {
    // Retaining the same component name and structure to allow easy swapping.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Four simple FAQs at about a 5th-grade reading level
    const faqs = [
        {
            question: 'How can AI advance my services?',
            answer: `
        AI can fully automate tasks, helps you work faster, make better decisions, and improve customer experience. 
        It can handle routine tasks, analyze data for insights, and even predict trends, 
        so you can focus on what matters most.
      `,
        },
        {
            question: 'How much does it cost?',
            answer: `
        We at Ultralink currently offer free consulting in exchange for feedback, and a testimonial
        if you were impressed by our services. 
      `,
        },
        {
            question: 'Can I trust AI for important work?',
            answer: `
        Modern AI is very reliable when it is built and watched carefully. 
        Ultralink uses proven methods to make sure your AI works well. 
        We also give ongoing support to fix any issues fast, so your systems keep running.
      `,
        },
        {
            question: 'Why pick ULTRALINK for AI?',
            answer: `
        Ultralink makes AI solutions that match your needs. We mix our expert knowledge 
        with a personal approach, so your AI system is easy to use and keeps growing 
        with your business. This partnership sets us apart from other AI providers.
      `,
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.h2
                    className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 fallback-text-color"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Frequently Asked Questions
                </motion.h2>


                {/* FAQ Items */}
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-lg p-4 mt-20"
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="flex justify-between items-center w-full text-left focus:outline-none"
                                >
                                    <span className="text-lg font-semibold text-indigo-400">
                                        {item.question}
                                    </span>
                                    <svg
                                        className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            } text-indigo-400`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Answer */}
                                <motion.div
                                    className="overflow-hidden text-gray-300"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isOpen ? 'auto' : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen && (
                                        <div className="pt-2">
                                            <p className="leading-relaxed">{item.answer}</p>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
