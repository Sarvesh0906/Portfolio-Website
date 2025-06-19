"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/services", title: "Services" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Prevent scrolling when the navbar is open
    React.useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open]);

    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "rgb(255, 255, 255)" }
    };
    const centerVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 }
    };
    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "rgb(255, 255, 255)" }
    };
    const listVarients = {
        closed: { x: "100vw" },
        opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2 } }
    };
    const listItemVarients = {
        closed: { x: -10, opacity: 0 },
        opened: { x: 0, opacity: 1 }
    };

    // Icons
    const icons = [
        {
            href: "https://github.com/Sarvesh0906",
            src: "/logo/github.png",
            width: 30,
            height: 30,
        },
        {
            href: "https://www.linkedin.com/in/sarvesh-chaurasia-03844b25b/",
            src: "/logo/linkedin.png",
            width: 30,
            height: 30,
        },
        {
            href: "https://leetcode.com/u/SarveshChaurasia/",
            src: "/logo/leetcode.svg",
            width: 30,
            height: 30,
        },
        {
            href: "https://www.geeksforgeeks.org/user/sarveshcha1wfb/",
            src: "/logo/gfg.png",
            width: 40,
            height: 40,
        },
    ];
 

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            className="z-40 backdrop-blur-md bg-transparent">
            <div className="h-16 md:h-20 flex items-center justify-between bg-white/20 px-8 sm:px-10 md:px-14 lg:px-20 xl:px-48 text-xl">
                {/* LOGO */}
                <div className="md:hidden lg:flex xl:justify-center gap-5">
                    <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                        <span className="text-white p-1 mr-1">Sarvesh</span>
                        <span className="w-fit p-1 h-8 rounded bg-white text-black flex items-center justify-center">Chaurasia</span>
                    </Link>
                </div>

                {/* LINKS */}
                <div className="hidden md:flex lg:gap-2">
                    {links.map(link => (
                        <NavLink link={link} key={link.title} />
                    ))}
                </div>

                {/* ICONS */}
                <div className="hidden md:flex gap-2 lg:gap-4 items-center justify-center">
                    {icons.map((icon, index) => (
                        <div key={index} >
                            <Link target="_blank" href={icon.href}>
                                <Image src={icon.src} alt="" width={icon.width} height={icon.height} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* RESPONSIVE MENU */}
                <div className="md:hidden">
                    <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
                        <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                        <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                        <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    </button>

                    {/* MENU LIST */}
                    {open && (
                        <motion.div variants={listVarients} initial="closed" animate="opened" className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
                            {links.map(link => (
                                <motion.div variants={listItemVarients} className='block' key={link.title} onClick={() => setOpen(false)}>
                                    <Link href={link.url}>{link.title}</Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
