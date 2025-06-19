"use client"

import React from 'react'
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const transitionProvider = ({ children }) => {
    const pathName = usePathname();
    const lastSegment = pathName === "/"
        ? "home"
        : pathName.substring(pathName.lastIndexOf("/") + 1);

    const capitalizedSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    return (
        <AnimatePresence mode="wait">
            <div key={capitalizedSegment} className="min-h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-50"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 z-50 text-white text-5xl sm:text-7xl md:text-8xl cursor-default w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {capitalizedSegment}
                </motion.div>

                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />

                <div className='fixed top-0 left-0 right-0 z-40'>
                    <Navbar />
                </div>

                <div className="w-full">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default transitionProvider
