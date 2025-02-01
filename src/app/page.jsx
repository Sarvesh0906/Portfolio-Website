"use client";

import { FiDownload } from 'react-icons/fi';
import Photo from '@/components/photo';
import Stats from '@/components/stats';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {

    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed('#typed-element', {
            strings: ['Web Developer', 'UI/UX Designer', 'SEO Expert', 'Logo Designer', 'Freelancer', 'Software Engineer'],
            typeSpeed: 120,
            loop: true, 
            loopCount: Infinity,
            // showCursor: false,
        });

        // Cleanup on component unmount
        return () => typed.destroy();
    }, []);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-8 sm:px-10 md:px-14 lg:px-20 xl:px-48 h-full">
                <div className="flex flex-col xl:gap-10 xl:flex-row items-center justify-between xl:pt-3 xl:pb-10">
                    {/* TEXT */}
                    <div className="text-center xl:text-left order-2 xl:order-none w-full lg:w-3/4 xl:w-1/2">
                        <div className="text-2xl relative px-1 h-10">
                            <span id="typed-element" className="text-black"></span>
                        </div>
                        <h1 className="h1 mb-6">
                            Hello! I'm <br /><span className="text-gradient-hover">Sarvesh Chaurasia</span>
                        </h1>

                        <p className="xl:max-w-[500px] mb-9 text-black/80 text-center xl:text-left">
                            I am a dedicated web developer creating dynamic, user-centric websites that seamlessly blend functionality and design with clean, efficient code.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4 w-full justify-center xl:justify-start">
                            <Link href={"/portfolio"}>
                                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-black/70 transition-all duration-500">View My Work</button>
                            </Link>

                            <Link href={"/contact"}>
                                <button className="p-4 rounded-lg ring-1 ring-black flex gap-2 justify-center items-center bg-white hover:bg-slate-300 transition-all duration-500">
                                    Contact Me
                                    <Image src="/logo/telegram.png" alt="" width={24} height={24} />
                                </button>
                            </Link>

                            <a
                                href="/resume.pdf"
                                download="Sarvesh-Chaurasia-Resume.pdf">
                                <button className="p-4 rounded-lg ring-1 text-white bg-red-600 hover:bg-red-900 transition-all duration-500 ring-black flex gap-2 justify-center items-center">
                                    Download Resume
                                    <FiDownload className="text-xl" />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* PHOTO */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>

                <Stats />
            </div>
        </motion.div>
    )
}

export default HomePage;
