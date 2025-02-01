"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from "@/components/brain";
import Image from 'next/image';

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const educationRef = useRef();
    const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex no-scrollbar lg:gap-10 xl:gap-0" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-8 relative sm:p-10 md:p-14 lg:p-20 xl:px-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:pr-0 lg:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-8 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/images/photo1.png"
                            alt="myPhoto"
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />

                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg text-justify">Passionate and results-driven full-stack developer with 2+ years of experience in building responsive, dynamic, and scalable web applications. Proficient in both frontend and backend technologies with expertise in various frameworks and technologies. Adept at collaborating in cross-functional teams, solving complex problems, anddelivering high-quality, SEO-optimized applications.</p>

                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">Crafting Modern Web Experiences with Code and Creativity.</span>

                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>

                    </div>

                    {/* EDUCATION */}
                    <div
                        className="flex flex-col gap-12 justify-center"
                        ref={educationRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isEducationRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EDUCATION
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isEducationRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            <div className="flex justify-between gap-4 h-fit w-full">
                                {/* EDUCATION TITLE */}
                                <div className="bg-white px-5 sm:px-8 py-5 md:px-12 md:py-5 lg:p-10 font-semibold rounded-b-lg rounded-s-lg w-1/2 lg:w-fit text-xl uppercase flex items-center">
                                    Indian Institute <br />of Information Technology <br /> Vadodara
                                </div>

                                {/* EDUCATION DESC */}
                                <div className="p-3 flex flex-col">
                                    <p className="italic">Bachelor of Technology in Computer Science and Engineering
                                    </p>

                                    {/* EDUCATION DATE */}
                                    <div className="py-3 text-red-400 font-semibold">
                                        November 2022 - Present | Gandhinagar, Gujarat
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            TECHNICAL SKILLS
                        </motion.h1>

                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Kotlin</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML5</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS3</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">ReactJS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Angular</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NodeJS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">ExpressJS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySQL</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Postman</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Pug</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">EJS</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Google Cloud</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Version Control (Git)</div>

                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">REST APIs</div>
                        </motion.div>

                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            WORK EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-fit">
                                {/* LEFT */}
                                <div className="w-[45%]">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Frontend Developer Intern
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 pb-0 text-sm italic">
                                        <ul className="list-disc list-inside">
                                            <li className="py-1">Designed and developed 15+ fully responsive web pages using React.js and Tailwind CSS, achieving a 98% cross-platform compatibility rate.</li>
                                            <li className="py-1">Optimized website performance, reducing average page load time by 30%, contributing to a 15% increase in user retention.</li>
                                            <li className="py-1">Refactored 5,000+ lines of code in collaboration with a team, improving code maintainability and scalability by 20% for future projects.</li>
                                        </ul>

                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Sep 2024 - Nov 2024 | Remote
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-2 mx-3 rounded bg-white text-sm font-semibold w-fit">
                                        IIT Academy
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-[10%] flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-[45%]"></div>
                            </div>

                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-fit ">
                                {/* LEFT */}
                                <div className="w-[45%]"></div>
                                {/* CENTER */}
                                <div className="w-[10%] h- flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-[45%]">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Python Programming Content Developer Intern
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 pb-0 text-sm italic">
                                        <ul className="list-disc list-inside">
                                            <li className="py-1">Authored 3+ educational modules on Python programming, focusing on IoT applications, improving learner engagement rates by 20%.</li>
                                            <li className="py-1">Reviewed and tested 15+ Python code snippets, identifying and resolving 10+ critical errors, increasing code efficiency by 25%.</li>
                                            <li className="py-1">Contributed to the development of a structured content strategy, aligning tutorials with user needs and increasing user satisfaction ratings by 15%.</li>
                                        </ul>

                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        July 2023 - Aug 2023 | Remote
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-2 mx-3 rounded bg-white text-sm font-semibold w-fit">
                                        Inventrom Private Limited - Bolt IoT
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
  
                    {/* FOOTER */}
                    <footer className="text-gray-800 text-lg lg:text-xl text-center pb-0 md:pb-10">
                        <span>&copy;2025 Copyright | All Rights Reserved</span> <br />
                        <span className="italic text-sm sm:text-lg">Built with passion and modern web technologies.</span>
                    </footer>
                </div>

                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/2 sticky top-0 z-30">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div >
    );
};



export default AboutPage