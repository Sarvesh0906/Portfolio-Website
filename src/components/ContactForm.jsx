"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiMailSend } from "react-icons/bi";

const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const form = useRef();

    const isFormValid = email.trim() !== "" && message.trim() !== "";

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        setSubmitted(true);

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
                    setEmail("");
                    setMessage("");
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <>
            {/* FORM CONTAINER */}
            < form
                onSubmit={sendEmail}
                ref={form}
                className="h-fit w-full lg:w-1/2 bg-white rounded-2xl text-lg md:text-xl flex flex-col gap-6 justify-center p-10 md:p-16 lg:p-12 xl:p-16 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
                <span className="text-gray-700 font-medium">Dear Sarvesh Chaurasia,</span>
                <textarea
                    rows={6}
                    className="bg-transparent border-b-2 border-b-gray-300 focus:border-b-black outline-none resize-none transition-colors duration-300 placeholder-gray-400"
                    name="user_message"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <span className="text-gray-700 font-medium">My mail address is:</span>
                <input
                    name="user_email"
                    type="text"
                    className="bg-transparent border-b-2 pb-4 border-b-gray-300 focus:border-b-black outline-none transition-colors duration-300 placeholder-gray-400"
                    placeholder="Write your email here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <span className="text-gray-700 font-medium">Regards,</span>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`rounded-lg font-semibold p-4 flex gap-2 items-center justify-center transition-all duration-500 shadow-md hover:shadow-lg
                            ${submitted
                            ? "bg-black text-white" // Stay like hover after submission
                            : "bg-purple-200 text-gray-600 hover:bg-black hover:text-white"
                        }
                            ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                >
                    Send <BiMailSend className="text-3xl transition-transform duration-300 group-hover:scale-110" />
                </button>

                {
                    success && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-600 font-semibold"
                        >
                            Your message has been sent successfully!
                        </motion.span>
                    )
                }
                {
                    error && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-600 font-semibold"
                        >
                            Something went wrong!
                        </motion.span>
                    )
                }
            </form >
        </>
    );
};

export default ContactPage;
