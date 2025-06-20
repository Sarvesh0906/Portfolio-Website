"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "I specialize in building fast, responsive, and scalable websites and web applications using modern technologies like React, Next.js, and Tailwind CSS.",
        href: "/services/web-development",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "I create intuitive and aesthetically pleasing user interfaces with a focus on usability and seamless user experience, using tools like Figma.",
        href: "/services/ui-ux-design",
    },
    {
        num: "03",
        title: "Logo Design",
        description: "I design memorable and impactful logos that align with your brand identity, ensuring your business stands out in a competitive market.",
        href: "/services/logo-design",
    },
    {
        num: "04",
        title: "SEO",
        description: "I help improve your website's visibility on search engines with tailored SEO strategies, ensuring better ranking and more organic traffic.",
        href: "/services/seo",
    }
]

const Services = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="min-h-screen flex items-center lg:p-0 pt-8 lg:pt-10">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16">
                    <div className="grid grid-cols-1 gap-[40px] md:gap-[50px] lg:gap-[30px] xl:gap-[30px] md:grid-cols-2 xl:grid-cols-4">
                        {services.map((service, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-center group relative cursor-pointer"
                                >
                                    <div
                                        className="flex flex-col flex-1 justify-center gap-6 bg-white p-6 md:p-8 xl:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 border border-gray-100"
                                    >
                                        {/* top */}
                                        <div className="flex w-full justify-between items-center">
                                            <div className="text-4xl md:text-5xl text-outline text-transparent transition-all duration-500 text-outline-hover group-hover:text-gradient-hover group-hover:text-outline-none font-bold tracking-tight">
                                                {service.num}
                                            </div>
                                            <div
                                                className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full bg-black/60 group-hover:bg-gradient-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:-rotate-45 shadow-md group-hover:shadow-lg"
                                            >
                                                <BsArrowDownRight className="text-white text-xl md:text-3xl bg-transparent transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                        </div>

                                        {/* title */}
                                        <h2 className="text-[32px] md:text-[42px] font-bold leading-none group-hover:text-gradient-hover transition-all duration-500 p-1 tracking-tight">
                                            {service.title}
                                        </h2>

                                        {/* description */}
                                        <p className="text-black/60 text-sm md:text-base text-justify p-2 leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                                            {service.description}
                                        </p>

                                        {/* border */}
                                        <div className="border-b border-black/20 w-full group-hover:border-black/40 transition-colors duration-300"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services;
