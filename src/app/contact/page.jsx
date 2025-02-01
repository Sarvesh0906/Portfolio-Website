"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiMailSend } from "react-icons/bi";

const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Let's Connect!";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full w-full flex flex-col lg:flex-row p-12 gap-14 sm:p-16 lg:px-20 xl:px-48 lg:py-4">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </div>
                    <div className="text-lg mt-12 md:mb-10 md:mt-16 lg:mt-4 lg:p-7 xl:p-10 text-justify px-4 sm:px-8 lg:px-12">
                        <p>I'm currently seeking exciting internship and job opportunities where I can contribute my skills and grow professionally.</p> 
                        <p className="italic my-5">If you're looking for a dedicated and enthusiastic candidate for your team, please feel free to reach out.</p> 
                        <p>I look forward to connecting and exploring potential collaborations!</p>
                    </div>
                </div>

                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-1/2 lg:h-[80vh] lg:w-1/2 bg-red-50 rounded-xl text-lg md:text-xl flex flex-col gap-6 justify-center p-12 lg:p-20"
                >
                    <span>Dear Sarvesh Chaurasia,</span>
                    <textarea
                        rows={6}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                        name="user_message"
                    // placeholder="Write your message here..."
                    />
                    <span>My mail address is:</span>
                    <input
                        name="user_email"
                        type="text"
                        className="bg-transparent border-b-2 border-b-black outline-none"
                    />
                    <span>Regards,</span>
                    <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 transition-all duration-500 hover:bg-black hover:text-white flex gap-2 items-center justify-center">
                        Send
                        <BiMailSend className="text-3xl" />
                    </button>
                    {success && (
                        <span className="text-green-600 font-semibold">
                            Your message has been sent successfully!
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold">
                            Something went wrong!
                        </span>
                    )}
                </form>
            </div>
        </motion.div>
    );
};

export default ContactPage;
