import { Cog, Lightbulb, Phone, Calendar, FileText, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Feature from '@/components/ui/Feature';

const Features = () => (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 fallback-text-color"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Tailored AI Solutions for Your Business
            </motion.h2>

            <motion.p
                className="text-xl text-center text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                At ULTRALINK, we specialize in creating bespoke AI solutions that address your unique challenges. Our approach ensures that businesses of all sizes can leverage AI to compete effectively in today's technology-driven market.
            </motion.p>

            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mb-16">
                <Feature
                    icon={<Cog className="h-16 w-16 text-indigo-400" />}
                    title="Custom AI Integration"
                    description="We don't believe in one-size-fits-all solutions. Our team of AI experts works closely with you to understand your unique business challenges and goals. We then design and implement custom AI solutions that seamlessly integrate with your existing systems and workflows, ensuring maximum impact and ROI. Whether you're looking to automate processes, enhance decision-making, or create innovative products, we tailor our approach to your specific needs."
                />
                <Feature
                    icon={<Lightbulb className="h-16 w-16 text-indigo-400" />}
                    title="AI Innovation Partnership"
                    description="We see ourselves as your AI innovation partner. Our team stays at the forefront of AI research and development, continuously updating our knowledge and capabilities. We work with you to identify opportunities where cutting-edge AI can give you a competitive edge. This ongoing partnership ensures that your business always has access to the latest AI advancements, allowing you to adapt quickly to market changes and stay ahead of larger competitors."
                />
            </div>

            <motion.h3
                className="text-3xl font-bold text-center mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Examples of Our Tailored Solutions
            </motion.h3>

            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                <Feature
                    icon={<Phone className="h-16 w-16 text-indigo-400" />}
                    title="Intelligent Call Management"
                    description="Transform your phone interactions into a powerful sales tool. Our custom AI system can be tailored to your specific sales process, recording and transcribing calls in real-time, analyzing content for key points and sentiment, and automatically generating personalized follow-ups. We adapt this solution to integrate with your existing CRM and communication tools, ensuring a seamless workflow that gives your sales team a competitive edge."
                />
                <Feature
                    icon={<Calendar className="h-16 w-16 text-indigo-400" />}
                    title="AI Scheduling Assistant"
                    description="Streamline your scheduling process with our intelligent booking system, customized to your business needs. We can integrate this AI solution with your team's calendars and preferred tools, optimizing scheduling based on your unique business rules and client relationships. The system learns your team's preferences over time, continuously improving its performance and adapting to your evolving business needs."
                />
                <Feature
                    icon={<FileText className="h-16 w-16 text-indigo-400" />}
                    title="Document Intelligence"
                    description="Unlock the power of your business documents with our tailored AI document processor. We customize this solution to handle the specific types of documents your business deals with, from industry-specific contracts to unique report formats. The AI can be trained on your company's documentation history, ensuring it understands your specific terminology and requirements, providing insights and automation that are directly relevant to your operations."
                />
                <Feature
                    icon={<BarChart2 className="h-16 w-16 text-indigo-400" />}
                    title="Predictive Business Intelligence"
                    description="Harness the power of predictive analytics tailored to your business decisions. We create custom AI models that integrate data from your specific sources - whether it's proprietary databases, industry-specific platforms, or unique market indicators. These bespoke models provide insights and forecasts that are directly applicable to your business context, giving you the same level of data-driven decision-making capabilities as larger corporations."
                />
            </div>

            <motion.p
                className="text-xl text-center text-gray-300 mb-12 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                And so much more! Our team is ready to work with you to create AI solutions that meet your unique business needs. Contact us today to start your AI journey!
            </motion.p>
        </div>
    </section>
);

export default Features;