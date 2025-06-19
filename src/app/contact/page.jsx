"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return (
        <motion.div
            className="min-h-screen"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="min-h-screen w-full flex flex-col items-center lg:flex-row p-8 gap-6 md:gap-8 lg:gap-16 sm:p-16 lg:px-20 xl:px-40 lg:pt-16 lg:pb-0 pt-[6rem] sm:pt-[7rem]">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        {"Let's Connect!".split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                                className="text-gradient-hover"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            😊
                        </motion.span>
                    </div>

                    <div className="text-lg text-justify mt-4 px-4 py-2 sm:px-8 sm:py-4 lg:px-0 lg:py-7 xl:p-10 md:space-y-6 space-y-4">
                        <p className="leading-relaxed text-gray-700">I'm always open to collaboration and new opportunities — let's connect!</p>
                        <p className="italic my-7 text-gray-600 leading-relaxed">
                            If you're looking for a dedicated and enthusiastic candidate for your team, please feel free to reach out.
                        </p>
                        <p className="leading-relaxed text-gray-700">I look forward to connecting and exploring potential collaborations!</p>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <ContactForm />
            </div>
        </motion.div>
    );
};

export default ContactPage;
