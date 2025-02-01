"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "AttendEase - Virtual Attendance System",
        title_desc: "A cutting-edge platform designed for seamless attendance management, leveraging geolocation and automation to ensure accurate and efficient tracking for virtual and hybrid environments.",
        img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
        desc: "AttendEase is a modern attendance management system that simplifies the process of tracking attendance for virtual and physical events. The application introduces a dynamic QR-based attendance system combined with geolocation verification, ensuring accurate and secure attendance tracking for both students and teachers. Key features include role-based access control, proximity-based attendance validation using the Haversine formula, and real-time analytics. Hosting is managed on Vercel for seamless deployment and scalability.",
        repo_link: "https://github.com/Sarvesh0906/DesignProject-",
        folder_name: "DesignProject-",
        features: [
            {
                id: 1, title: "Dynamic QR Code Generation", desc: (
                    <>
                        Teachers can initiate an attendance session during which a QR code is <span className="font-semibold">dynamically generated</span>. The QR code updates every 30 seconds to enhance security and prevent unauthorized access. Students must scan this QR code to retrieve a <span className="font-semibold">unique key</span> required for attendance marking.
                    </>
                )
            },
            {
                id: 2, title: "Proximity-Based Validation", desc: (
                    <>
                        Proximity-based validation ensures that students are physically present within a specific radius of the teacher before marking their attendance. This feature leverages <span className="font-semibold">GPS coordinates</span> for location validation and utilizes the <span className="font-semibold">Haversine formula</span> to compute the distance between two geographic points.
                    </>
                )
            },
            {
                id: 3,
                title: "Haversine Formula",
                desc: (
                    <>
                        The Haversine formula calculates the great-circle distance between two points on the Earth's surface using their latitude and longitude. It accounts for the Earth's spherical shape, ensuring high accuracy. <br />
                        The formula is defined as follows:
                    
                        <BlockMath className="text-sm">
                            {`
                                a = \\sin^2\\left(\\frac{\\Delta\\phi}{2}\\right) + \\cos(\\phi_1) \\cdot \\cos(\\phi_2) \\cdot \\sin^2\\left(\\frac{\\Delta\\lambda}{2}\\right) \\\\
                                c = 2 \\cdot \\text{atan2}(\\sqrt{a}, \\sqrt{1 - a}) \\\\
                                d = R \\cdot c
                            `}
                        </BlockMath>

                        <p className="font-semibold">Where:</p>
                        <ul className="list-disc ml-5 mb-2">
                            <li>
                                <InlineMath math="\phi_1, \phi_2" /> are the latitudes of the two points (in radians)
                            </li>
                            <li>
                                <InlineMath math="\Delta\phi" /> is the difference in latitudes
                            </li>
                            <li>
                                <InlineMath math="\Delta\lambda" /> is the difference in longitudes
                            </li>
                            <li>
                                <InlineMath math="R" /> is the Earth's radius (mean radius: 6,371,000 meters)
                            </li>
                            <li>
                                <InlineMath math="d" /> is the great-circle distance between the points
                            </li>
                        </ul>
                    </>
                )
            },
            {
                id: 4,
                title: "Analytics and History",
                desc: "The application offers detailed analytics and attendance history, catering to the needs of both teachers and students. This feature enhances transparency and supports effective classroom management by providing actionable insights and comprehensive data. The functionalities are described in detail below."
            },
            {
                id: 5,
                title: "Automated Reports",
                desc: "Teachers can export a Microsoft Excel sheet containing attendance session details for students enrolled in the class. Present students are marked as '1,' while absent students are marked as '0,' along with the date of the attendance session. The sheet can be downloaded from the history section of the respective classes."
            },
            {
                id: 6,
                title: "Attendance Correction",
                desc: "Teachers can manually update a student's attendance status in the history section of the respective classes. This feature allows teachers to handle cases where the student-side app fails or malfunctions and provides the authority to mark students absent in cases of malpractice without starting a new attendance session."
            },
        ],
        tech_stack: [
            { id: 1, title: "Frontend", desc: "Next.js, React, and Tailwind CSS for a responsive and dynamic user interface." },
            { id: 2, title: "Authentication", desc: "NextAuth for secure, role-based authentication. User can also login using their Google emails." },
            { id: 3, title: "Database", desc: "MongoDB for efficient data storage and retrieval." },
            { id: 4, title: "Hosting", desc: "Vercel for continuous deployment and scalability." },
            { id: 5, title: "Styling", desc: "ShadCN and Tailwind CSS for pre-built components and custom design." },
        ],
        conclusion: (
            <>
                <p className="my-1">
                    In conclusion, the attendance application uses advanced technology to address important issues in attendance management, improving accuracy, security, and efficiency. Features such as dynamic QR codes, proximity-based validation, and GPS-based position tracking provide a strong alternative to traditional attendance systems, decreasing proxy attendance and unauthorised access. The dynamic QR code updates every 30 seconds, and proximity validation employs GPS data and the Haversine formula to confirm student presence inside the set instructor radius, assuring accurate attendance tracking.
                </p>
                <p>
                    The application also includes full statistics and attendance histories, allowing professors to track class participation and providing students with transparent records. The development process demonstrated the actual application of modern web technologies to solve real-world problems. Future enhancements may include biometric authentication and improved scalability for larger universities.
                </p>
            </>
        ),
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "FoodGo - Food and Recipe Website",
        title_desc: "An engaging and interactive recipe and food blogging platform that offers delightful culinary content with modern design and smooth user experience.",
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "FoodGo is a modern food and recipe website that offers a wide range of culinary content, including recipes, cooking tips, and food blogs. The platform features an advanced search system that allows users to find recipes based on ingredients, cuisine types, and dietary preferences. Users can create personalized profiles to save their favorite recipes, create custom collections, and interact with other food enthusiasts. The website also includes interactive recipe guides with step-by-step instructions and visuals to enhance the cooking experience. The backend is powered by Node.js and Express.js, with MongoDB as the database for efficient data storage and retrieval.",
        repo_link: "https://github.com/Sarvesh0906/FullStack-Projects/tree/main/FoodWebsite",
        folder_name: "FoodWebsite",
        features: [
            {
                "id": 1,
                "title": "Responsive Design",
                "desc": "Optimized for various devices, ensuring a flawless user experience on mobile, tablet, and desktop with a focus on intuitive navigation and visually appealing layouts."
            },
            {
                "id": 2,
                "title": "Advanced Search Filters",
                "desc": "Allows users to easily find recipes based on ingredients, cuisine types, cooking times, or dietary preferences, making meal planning effortless."
            },
            {
                "id": 3,
                "title": "Personalized User Profiles",
                "desc": "Users can create and manage their recipe collections, track their favorite meals, and receive tailored suggestions based on their culinary preferences."
            },
            {
                "id": 4,
                "title": "Interactive Recipe Steps",
                "desc": "Step-by-step guides with visuals and timers for a seamless cooking experience, ensuring users achieve perfect results every time."
            },
            {
                "id": 5,
                "title": "Weekly Menus",
                "desc": "Curated weekly meal plans with customizable options to help users maintain a balanced and hassle-free dining schedule."
            },
            {
                "id": 6,
                "title": "Table Reservations",
                "desc": "Seamless integration for users to book tables at partnered restaurants directly through the platform, simplifying dining experiences."
            },
            {
                "id": 7,
                "title": "Email Subscriptions",
                "desc": "Stay updated with the latest recipes, meal plans, and culinary tips through personalized email newsletters."
            }
        ],
        tech_stack: [
            {
                "id": 1,
                "title": "HTML",
                "desc": "The foundational markup language for structuring content on modern web applications, enabling the creation of well-organized and accessible web pages."
            },
            {
                "id": 2,
                "title": "CSS",
                "desc": "A powerful styling language used to design visually appealing and responsive layouts, animations, and themes for web applications across various screen sizes."
            },
            {
                "id": 3,
                "title": "JavaScript",
                "desc": "A versatile scripting language that adds interactivity and dynamic content to websites, enabling features like real-time updates, form validations, and user interactions."
            },
            {
                "id": 4,
                "title": "NodeJS",
                "desc": "A runtime environment for executing JavaScript on the server side, supporting scalable and high-performance backend applications for web services."
            },
            {
                "id": 5,
                "title": "ExpressJS",
                "desc": "A fast and lightweight web application framework for NodeJS, offering robust routing, middleware support, and streamlined API development for backend services."
            },
            {
                "id": 6,
                "title": "MongoDB",
                "desc": "A flexible and scalable NoSQL database that stores data in JSON-like documents, enabling efficient handling of complex and unstructured data in web applications."
            }
        ],
        conclusion: "FoodGo is a comprehensive food and recipe platform that combines engaging culinary content with modern design and interactive features, offering users a delightful cooking and dining experience.",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Get Me A Chai - Platform for Creators",
        title_desc: "A vibrant platform that empowers content creators to connect with their audience and receive support in innovative ways.",
        img: "https://images.pexels.com/photos/8368351/pexels-photo-8368351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
        desc: "Get Me A Chai is a creator-centric platform that enables artists, writers, musicians, and other content creators to connect with their audience and receive support through various channels. The platform offers creators the flexibility to share exclusive content, host live events, and receive direct contributions from their fans. Creators can create personalized profiles, showcase their work, and engage with their audience through interactive features. Built with Next.js, Tailwind CSS, and MongoDB, the platform ensures a seamless user experience and secure payment processing for creators and users.",
        repo_link: "https://github.com/Sarvesh0906/FullStack-Projects/tree/main/get-me-a-chai",
        folder_name: "get-me-a-chai",
        features: [
            { id: 1, title: "Responsive Design", desc: "A mobile-first design ensuring a seamless user experience across all screen sizes, from smartphones to desktops. The interface dynamically adjusts to different screen resolutions, providing optimal usability." },
            { id: 2, title: "Creator Dashboard", desc: "A comprehensive dashboard where creators can monitor audience engagement, analyze performance metrics, and track their earnings over time." },
            { id: 3, title: "Secure Payments", desc: "Built-in secure payment processing with multiple payment gateway integrations to ensure seamless and safe transactions for users." },
            { id: 4, title: "Content Hosting", desc: "Supports various media formats for content uploads, including images, videos, and documents, giving creators the flexibility to share engaging content." },
            { id: 4, title: "User Authentication", desc: "Secure and scalable user authentication implemented using NextAuth.js for efficient session management and role-based access control." },
        ],
        tech_stack: [
            { id: 1, title: "NextJS", desc: "A powerful React framework for building fast, scalable static and dynamic web applications with optimized server-side rendering and file-based routing." },
            { id: 2, title: "Tailwind CSS", desc: "A utility-first CSS framework for rapidly building responsive and custom-designed user interfaces." },
            { id: 2, title: "Neth Auth", desc: "A robust and customizable authentication solution for managing secure user sessions in Next.js applications." },
            { id: 2, title: "MongoDB", desc: "A NoSQL database known for its flexibility, scalability, and high performance, ideal for storing user data and creator content metadata." },
            { id: 2, title: "Razorpay", desc: "A leading payment gateway offering secure and reliable payment solutions, enabling seamless transactions between users and creators." },
            { id: 3, title: "Vercel", desc: "A cloud platform for static sites and serverless functions that provides a scalable and lightning-fast deployment environment." },
        ],
        conclusion: "The platform stands as a testament to the convergence of creativity and technology, providing creators with a powerful space to connect, engage, and monetize their content. By leveraging modern web development frameworks, secure payment processing, and content hosting solutions, it ensures a seamless and efficient experience for both creators and users. Looking ahead, future iterations could include advanced features such as AI-driven analytics and personalized content recommendations, making the platform a comprehensive solution for the creator economy.",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Music Web App",
        title_desc: "A sleek and modern music streaming web application with a focus on personalized playlists and intuitive user experience.",
        img: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "The Music Web App is a modern and user-friendly music streaming platform that allows users to discover, create, and share playlists with ease. The application features a clean and intuitive interface, personalized recommendations, and high-quality audio streaming capabilities. Users can create custom playlists, explore trending tracks, and enjoy uninterrupted music playback across devices. The frontend is built using HTML, CSS, and JavaScript, ensuring a responsive and dynamic user interface.",
        repo_link: "https://github.com/Sarvesh0906/Frontend-Projects/tree/main/Spotify%20Clone",
        folder_name: "Spotify Clone",
        features: [
            { id: 1, title: "Responsive Design", desc: "Ensures seamless music streaming across various screen sizes, including mobile, tablet, and desktop devices. The interface dynamically adapts for a user-friendly experience." },
            { id: 2, title: "Playlist Management", desc: "Allows users to create, edit, and curate custom playlists effortlessly. Users can organize their favorite songs and enjoy a personalized listening experience." },
            { id: 3, title: "High-Quality Streaming", desc: " Enjoy high-definition audio with optimized buffering to ensure smooth and interruption-free playback, even on slower internet connections." },
            { id: 4, title: "Playback Options", desc: "Provides advanced playback controls, including shuffle, repeat, and skip functionalities, allowing users to tailor their listening experience to their preferences." },
        ],
        tech_stack: [
            { id: 1, title: "HTML", desc: "Provides structured content and semantic markup for a well-organized web application." },
            { id: 2, title: "CSS", desc: "Enables stylish and responsive page layouts, animations, and custom design elements for a visually engaging music platform." },
            { id: 3, title: "JavaScript", desc: "Powers dynamic and interactive functionalities, such as playlist creation, playback controls, and real-time updates, ensuring a seamless user experience." },
        ],
        conclusion: "This project exemplifies a user-centric music application that combines a delightful user experience with robust features for seamless music streaming. With responsive design, advanced playback options, and personalized playlist management, it showcases the effective integration of modern web technologies to deliver an exceptional audio experience. Future enhancements could include AI-driven music recommendations and offline playback for an even more engaging user experience.",
    },
];


const PortfolioPage = () => {
    const ref = useRef();
    const [selectedProject, setSelectedProject] = useState(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    return (
        <motion.div
            className="h-full w-screen"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="h-[600vh] w-screen relative" ref={ref}>
                <div className="flex w-screen h-[calc(100vh-6rem)] items-center justify-center text-8xl text-center">My Works</div>

                <div className="sticky top-0 left-0 flex h-screen w-full gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-5 text-white">
                                    <h1 className="text-3xl w-80 md:w-96 lg:w-[500px] xl:w-[600px] font-bold md:text-4xl lg:text-5xl">
                                        {item.title}
                                    </h1>

                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} className="rounded-lg" alt="" fill />
                                    </div>

                                    <p className="w-80 text-justify md:w-96 lg:w-[500px] lg:text-lg xl:text-xl xl:w-[600px]">
                                        {item.title_desc}
                                    </p>


                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setSelectedProject(item)}
                                            className="p-2 text-sm md:p-3 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded"
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modal Popup */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md text-justify">
                    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-1/2 h-[90vh] overflow-y-scroll">
                        <button
                            className="mb-4 text-black border-2 border-black/50 transition-all duration-500 hover:bg-black hover:text-white py-2 px-3 rounded-lg font-bold flex items-center justify-center gap-2"
                            onClick={() => setSelectedProject(null)}
                        >
                            <MdKeyboardBackspace className="text-xl" />
                            Back
                        </button>

                        <div className="flex flex-col px-4 md:px-6 lg:px-8 xl:px-14 my-10 text-sm">
                            {/* Title */}
                            <h1 className="text-xl lg:text-3xl font-bold text-left">{selectedProject.title}</h1>

                            {/* Image Section */}
                            <div className="relative flex justify-center items-center my-4">
                                <Image
                                    src={selectedProject.img}
                                    className="rounded-lg object-contain"
                                    alt="Project Image"
                                    width={600}
                                    height={400}
                                />
                            </div>

                            {/* Description Section */}
                            <p className="mt-2">{selectedProject.desc}</p>

                            {/* Features */}
                            <h2 className="text-xl font-semibold mt-8 my-3">Features:</h2>
                            <ul className="list-disc ml-5 px-3 py-1">
                                {selectedProject.features.map((feature) => (
                                    <li className="my-1" key={feature.id}>
                                        <span className="font-semibold">{feature.title}</span>: {feature.desc}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies Used */}
                            <h2 className="text-xl font-semibold mt-8 my-3">Technologies Used:</h2>
                            <ul className="list-disc ml-5 px-3">
                                {selectedProject.tech_stack.map((tech) => (
                                    <li className="my-1" key={tech.id}>
                                        <span className="font-semibold">{tech.title}</span>: {tech.desc}
                                    </li>
                                ))}
                            </ul>

                            {/* Getting Started */}
                            <h2 className="text-xl font-semibold mt-8">Getting Started:</h2>
                            <p className="mt-2">
                                To get started with this project, you can clone the repository from GitHub and install the dependencies:
                            </p>
                            <div className="bg-slate-200 rounded-lg w-full p-5 text-gray-600 font-semibold my-2 text-left break-all">
                                <pre className="whitespace-pre-wrap">
                                    <code className="">
                                        {`git clone ${selectedProject.repo_link}
cd ${selectedProject.folder_name}
npm install`}
                                    </code>
                                </pre>
                            </div>
                            <p className="mt-2">
                                Once the dependencies are installed, you can run the development server:
                            </p>
                            <div className="bg-slate-200 rounded-lg w-full p-5 text-gray-600 font-semibold my-2">
                                <pre className="whitespace-pre-wrap">
                                    <code className="">
                                        {`npm run dev`}
                                    </code>
                                </pre>
                            </div>
                            <p className="mt-2">
                                The development server will start at <span className="font-semibold">http://localhost:3000</span>.
                            </p>

                            {/* Conclusion */}
                            <h2 className="text-xl font-semibold mt-8">Conclusion:</h2>
                            <p className="mt-2">{selectedProject.conclusion}</p>
                        </div>

                        {/* Footer */}
                        <footer className="text-gray-800 text-sm text-center">
                            <span>&copy;2025 Copyright | All Rights Reserved</span> <br />
                            <span className="italic text-sm">Built with passion and modern web technologies.</span>
                        </footer>
                    </div>
                </div>
            )}

            {/* HIRE ME BUTTON */}
            <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl p-10">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-96 h-96 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Fullstack Web Developer & UI Designer-
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-28 h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xl"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage



{/* <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-3 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded">View Project</button>
                                    </Link> */}