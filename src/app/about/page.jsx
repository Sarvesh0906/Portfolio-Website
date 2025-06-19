"use client";

import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';

import Brain from "@/components/Brain";
import ScrollDownIcon from "@/components/ui/ScrollDownIcon";
import Footer from "@/components/Footer";
import SkillLabel from '@/components/ui/SkillLabel';
import ExperienceItem from "@/components/ExperienceItem";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const aboutRef = useRef();
    const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

    const educationRef = useRef();
    const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    const isInView = useInView(experienceRef, { once: true });


    return (
        <motion.div
            className="lg:h-[calc(100vh-1px)] h-full w-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex no-scrollbar lg:gap-10 xl:gap-0 pt-[4rem]" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-8 pb-0 relative sm:p-10 sm:pb-0 md:p-14 md:pb-0 lg:p-20 lg:pb-0 xl:px-32 xl:pb-0 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:pr-0 lg:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-8 justify-center items-center md:items-start">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/image/photo1.png"
                            alt="myPhoto"
                            width={150}
                            height={150}
                            className="w-[35vh] h-[35vh] mb-4 rounded-full object-cover cursor-pointer lg:grayscale hover:grayscale-0 transition duration-100"
                        />

                        <div ref={aboutRef}>
                            <motion.div
                                initial={{ x: "-300px" }}
                                animate={isAboutRefInView ? { x: "0" } : {}}
                                className="flex flex-col gap-8"
                            >
                                {/* BIOGRAPHY TITLE */}
                                <motion.h1
                                    initial={{ x: "-300px" }}
                                    animate={isAboutRefInView ? { x: "0" } : {}}
                                    transition={{ delay: 0.2 }}
                                    className="font-bold text-3xl">
                                    About Me
                                </motion.h1>

                                {/* BIOGRAPHY DESC */}
                                <motion.p
                                    initial={{ x: "-300px" }}
                                    animate={isAboutRefInView ? { x: "0" } : {}}
                                    className="text-lg text-justify">
                                    Hi, I'm Sarvesh Chaurasia, a full-stack web developer with over 2 years of hands-on experience in building responsive and scalable web applications.
                                </motion.p>

                                <motion.p
                                    initial={{ x: "-300px" }}
                                    animate={isAboutRefInView ? { x: "0" } : {}}
                                    className="text-lg text-justify">
                                    Currently pursuing my degree in Indian Institute of Information Technology Vadodara, I'm someone who believes in learning by doing. Whether it's solving a tricky bug, picking up a new framework, or contributing to a team project, I'm always up for the challenge. Outside of development, I'm passionate about exploring tech communities, gaming, and staying updated with the latest in software and design.
                                </motion.p>

                                {/* BIOGRAPHY QUOTE */}
                                <span className="italic">Crafting Modern Web Experiences with Code and Creativity.</span>
                            </motion.div>
                        </div>

                        {/* BIOGRAPHY SCROLL SVG */}
                        <div className="w-full">
                            <ScrollDownIcon />
                        </div>

                    </motion.div>

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

                        {/* EDUCATION SCROLL SVG */}
                        <ScrollDownIcon />
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
                            <SkillLabel text="C" />
                            <SkillLabel text="Java" />
                            <SkillLabel text="Python" />
                            <SkillLabel text="Kotlin" />
                            <SkillLabel text="HTML5" />
                            <SkillLabel text="CSS3" />

                            <SkillLabel text="JavaScript" />
                            <SkillLabel text="ReactJS" />
                            <SkillLabel text="NextJS" />
                            <SkillLabel text="Tailwind CSS" />
                            <SkillLabel text="Redux" />

                            <SkillLabel text="Bootstrap" />
                            <SkillLabel text="Angular" />
                            <SkillLabel text="TypeScript" />
                            <SkillLabel text="NodeJS" />
                            <SkillLabel text="ExpressJS" />

                            <SkillLabel text="MySQL" />
                            <SkillLabel text="MongoDB" />
                            <SkillLabel text="Postman" />
                            <SkillLabel text="Pug" />
                            <SkillLabel text="EJS" />

                            <SkillLabel text="Framer Motion" />
                            <SkillLabel text="Figma" />
                            <SkillLabel text="Google Cloud" />
                            <SkillLabel text="Version Control (Git)" />
                            <SkillLabel text="REST APIs" />
                        </motion.div>

                        {/* SKILL SCROLL SVG */}
                        <ScrollDownIcon />
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
                            {/* Experience Items */}
                            <ExperienceItem
                                align="left"
                                title="Fullstack Web Developer Intern"
                                descriptions={[
                                    "Built dynamic web applications using React.js and Next.js, focusing on scalability, SEO, and optimized routing.",
                                    "Collaborated on task-based projects to implement clean UI components and server-side rendering features, enhancing performance and maintainability."
                                ]}
                                date="March 2025 – April 2025 | Remote"
                                company="SkillCraft Technology"
                                isVisible={isInView}
                            />

                            <ExperienceItem
                                align="right"
                                title="Frontend Developer Intern"
                                descriptions={[
                                    "Designed and developed 15+ fully responsive web pages using React.js and Tailwind CSS, achieving a 98% cross-platform compatibility rate.",
                                    "Optimized website performance, reducing average page load time by 30%, contributing to a 15% increase in user retention.",
                                    "Refactored 5,000+ lines of code in collaboration with a team, improving code maintainability and scalability by 20% for future projects.",
                                ]}
                                date="Sep 2024 - Nov 2024 | Remote"
                                company="IIT Academy"
                                isVisible={isInView}
                            />

                            <ExperienceItem
                                align="left"
                                title="Python Programming Content Developer Intern"
                                descriptions={[
                                    "Authored 3+ educational modules on Python programming, focusing on IoT applications, improving learner engagement rates by 20%.",
                                    "Reviewed and tested 15+ Python code snippets, identifying and resolving 10+ critical errors, increasing code efficiency by 25%.",
                                    "Contributed to the development of a structured content strategy, aligning tutorials with user needs and increasing user satisfaction ratings by 15%.",
                                ]}
                                date="July 2023 - Aug 2023 | Remote"
                                company="Inventrom Private Limited - Bolt IoT"
                                isVisible={isInView}
                            />
                        </motion.div>
                    </div>

                    {/* SMALL FOOTER */}
                    <div className="relative">
                        <Footer />
                    </div>
                </div>

                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/2 sticky top-0 z-30">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div >
    );
};



export default AboutPage;