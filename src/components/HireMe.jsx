"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const HireMe = () => {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
            <motion.h1
                initial={{ opacity: 0, scale: 0.5, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                delay={0.6}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Do you have a project?
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                className="italic mt-5">
                Click on Hire Me 😊
            </motion.div>

            <div className="relative">
                <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    viewBox="0 0 300 300"
                    className="w-96 h-96 md:w-[450px] md:h-[450px]"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                    </defs>
                    <text fill="#000">
                        <textPath xlinkHref="#circlePath" className="">
                            Fullstack Web Developer & UI/UX Designer
                        </textPath>
                    </text>
                </motion.svg>
                <Link
                    href={"/contact"}
                    className="w-28 h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xl"
                >
                    Hire Me
                </Link>
            </div>

            <div className="absolute bottom-0 w-[95%] pb-4">
                <Footer />
            </div>
        </div >
    );
};

export default HireMe;
