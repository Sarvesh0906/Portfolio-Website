"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faLink, faCode, faCalendarAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/ui/Button";
import Hr from "@/components/ui/Hr";
import FixedButon from "@/components/ui/FixedButton";
import ScrollDownIcon from "@/components/ui/ScrollDownIcon";
import HireBtn from "@/components/HireMe";

// Import projects data
import ProjectsData from "@/json/data.json";

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the project with the matching slug
        const slug = params.slug;
        const foundProject = ProjectsData.Projects.find(p => p.slug === slug);

        if (foundProject) {
            setProject(foundProject);
        }

        setLoading(false);

        // Scroll to top on component mount
        window.scrollTo(0, 0);
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-pulse text-xl">Loading project details...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
                <Link href="/projects">
                    <Button variation="primary">Back to Projects</Button>
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen overflow-x-hidden lg:overflow-x-visible relative">
            <FixedButon href="/portfolio">
                <FontAwesomeIcon icon={faChevronLeft} className="text-black h-6 w-6" />
            </FixedButon>

            {/* Hero section */}
            <div className="relative w-full h-[50vh] md:h-[100vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <Image
                    src={project.thumbnail || project.images[0]}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="z-0"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech && project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ScrollDownIcon className="md:block hidden absolute invert bottom-28 right-20" />
                    </motion.div>
                </div>
            </div>

            {/* Project details */}
            <div className="container mx-auto px-6 md:px-10 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Main content - 2/3 width on desktop */}
                    <div className="flex-1 lg:flex-[2]">
                        <div className="mb-6 md:mb-10 text-justify">
                            <h2 className="text-2xl font-bold mb-6">About This Project</h2>
                            {project.desc && project.desc.map((paragraph, index) => (
                                <p key={index} className="text-gray-700">
                                    {paragraph}
                                </p>
                            ))}

                            <h2 className="text-2xl font-bold my-6">Features</h2>
                            <ul className="list-disc list-inside mb-2">
                                {project.features?.map((feature) => (
                                    <li key={feature.id} className="text-gray-700">
                                        <span className="font-semibold">{feature.title}:</span> {feature.desc}
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-bold my-6">Tech Stack</h2>
                            <ul className="list-disc list-inside mb-2">
                                {project.tech_stack?.map((tech) => (
                                    <li key={tech.id} className="text-gray-700">
                                        <span className="font-semibold">{tech.title}:</span> {tech.desc}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Project gallery */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images && project.images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                            className="hover:scale-105 transition-transform duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - 1/3 width on desktop */}
                    <div className="lg:w-1/3 lg:flex-shrink-0">
                        <div className="lg:sticky lg:top-28">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:px-32 lg:px-6">
                                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                                <Hr />

                                {/* Project Details */}
                                <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                                    {project.year && (
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Year</p>
                                                <p className="font-medium">{project.year}</p>
                                            </div>
                                        </div>
                                    )}

                                    {project.status && (
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Status</p>
                                                <p className="font-medium">{project.status}</p>
                                            </div>
                                        </div>
                                    )}

                                    {project.preview && (
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faLink} className="text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Live Preview</p>
                                                <a
                                                    href={project.preview}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-blue-600 hover:underline"
                                                >
                                                    Visit Site
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {project.code && (
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faCode} className="text-gray-500" />
                                            <div>
                                                <p className="text-sm text-gray-500">Source Code</p>
                                                <a
                                                    href={project.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-blue-600 hover:underline"
                                                >
                                                    GitHub Repository
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="mt-8 flex justify-around items-center flex-row lg:flex-col xl:flex-row gap-4">
                                    {project.preview && (
                                        <a
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-md md:text-base"
                                        >
                                            <Button variation="primary" className="w-full">
                                                Live Preview
                                            </Button>
                                        </a>
                                    )}
                                    {project.code && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-md md:text-base"
                                        >
                                            <Button variation="secondary" className="w-full">
                                                View Code
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hire Me & Footer section */}
            <HireBtn />
        </main>
    );
}