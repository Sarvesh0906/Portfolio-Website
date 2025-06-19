"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Hr from "@/components/ui/Hr";
import HireMeBtn from "@/components/HireMe";

// Import projects data
import ProjectsData from "@/json/data.json";

// Project Card Component
const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    const gradientMap = {
        blueToBlue: "bg-gradient-to-b from-blue-100 to-blue-300",
        blueToViolet: "bg-gradient-to-b from-blue-300 to-violet-300",
        violetToPurple: "bg-gradient-to-b from-violet-300 to-purple-300",
        purpleToRed: "bg-gradient-to-b from-purple-300 to-red-100",
    };

    return (
        <div className={`relative min-h-screen w-full mx-auto container gap-4 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 ${gradientMap[project.color]} py-16 md:py-20`}>
            {/* Image gallery section - always on the left for mobile, alternates in desktop */}
            <div className={`flex justify-center items-start flex-col mb-5 ${isEven && "md:order-2"}`}>
                <div className="images relative w-full aspect-square">
                    {project.images && project.images.length >= 3 ? (
                        <>
                            {/* First image */}
                            <div className="absolute top-28 left-10 h-[40%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    className="w-full h-full shadow-xl rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className="object-cover rat"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </motion.div>
                            </div>

                            {/* Second image */}
                            <div className="absolute top-16 right-28 h-[30%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="w-full h-full shadow-xl rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={project.images[1]}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-[0%_0%]"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </motion.div>
                            </div>

                            {/* Third image */}
                            <div className="absolute bottom-16 right-20 h-[35%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="w-full h-full shadow-xl rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={project.images[2]}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </motion.div>
                            </div>
                        </>
                    ) : (
                        // Fallback if not enough images
                        <div className="h-full w-full flex items-center justify-center">
                            <Image
                                src={project.thumbnail || project.images[0]}
                                alt={project.title}
                                fill
                                className="rounded-lg shadow-xl"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Project details section - always on the right for mobile, alternates in desktop */}
            <motion.div
                className={`flex justify-center items-start flex-col mb-5 md:px-10 ${isEven && "md:order-1"}`}
                initial={{ opacity: 0, x: isEven ? 200 : -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
                    {project.title}
                </h2>
                <p className="text-gray-600 text-justify title text-lg leading-relaxed">
                    {project.desc[0]}
                </p>
                <div className="mt-6 flex gap-4">
                    <Button variation="primary">
                        <Link href={`/portfolio/projects/${project.slug}`}>View Project</Link>
                    </Button>
                    {project.preview && (
                        <Button variation="secondary">
                            <a
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Preview
                            </a>
                        </Button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const PortfolioPage = () => {
    const filteredProjects = ProjectsData.Projects.filter(project => project.show);

    return (
        <motion.div
            className="min-h-screen w-full overflow-x-hidden"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="min-h-screen w-full relative">
                <div className="flex w-full h-screen items-center justify-center text-6xl md:text-8xl text-center">My Works</div>

                {/* Projects Section */}
                <div className="mt-10 flex flex-col justify-center md:justify-start items-center w-full px-4 sm:px-6 md:px-8 lg:px-10 ml-14 bg-blue-100">
                    <div className="flex justify-center items-center flex-col my-5 self-start">
                        <Hr variant="long"></Hr>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3">Projects</h1>
                    </div>
                </div>

                {/* Dynamically render project cards */}
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}

                {/* HIRE ME BUTTON */}
                <HireMeBtn />
            </div>
        </motion.div>
    );
};

export default PortfolioPage;