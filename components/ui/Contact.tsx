import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { State, createContact } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Contact() {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useFormState(createContact, initialState);
    const [formKey, setFormKey] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (state.message === 'Submited Successfully!') {
            setIsSubmitted(true);
            // Reset the form by changing the key
            setFormKey(prevKey => prevKey + 1);
        }
    }, [state]);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitted(false);
        await formAction(formData);
    };

    return (
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
                    key={formKey}
                    action={handleSubmit}
                    className="max-w-lg mx-auto space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <input required name="name" type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <input required name="email" type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                            state.errors.email.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <textarea required name="message" placeholder="Tell us about how best to contact you, what operations take up substantial time, speculations on AI integration, etc" rows={4} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent"></textarea>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.message &&
                            state.errors.message.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button type="submit" className="w-full py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-md transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                            Submit
                        </Button>
                    </motion.div>
                    <div id="form-message" aria-live="polite" aria-atomic="true">
                        {isSubmitted && (
                            <p className="mt-2 text-sm text-green-400">{state.message}</p>
                        )}
                        {!isSubmitted && state.message && (
                            <p className="mt-2 text-sm text-red-400">{state.message}</p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
}