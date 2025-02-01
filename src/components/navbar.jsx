"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navLink';
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

    return (
        <div className="h-full flex items-center justify-between px-8 sm:px-10 md:px-14 lg:px-20 xl:px-48 text-xl">
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:justify-center gap-5">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white p-1 mr-1">Sarvesh</span>
                    <span className="w-fit p-1 h-8 rounded bg-white text-black flex items-center justify-center">Chaurasia</span>
                </Link>
            </div>

            {/* LINKS */}
            <div className="hidden md:flex gap-2">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            {/* ICONS */}
            <div className="hidden md:flex gap-4 items-center justify-center">
                <Link target='_blank' href={"https://github.com/Sarvesh0906"}>
                    <Image src="/logo/github.png" alt="" width={30} height={30} />
                </Link>
                <Link target='_blank' href={"https://www.linkedin.com/in/sarvesh-chaurasia-03844b25b/"}>
                    <Image src="/logo/linkedin.png" alt="" width={30} height={30} />
                </Link>
                <Link target='_blank' href={"https://leetcode.com/u/SarveshChaurasia/"}>
                    <Image src="/logo/leetcode.svg" alt="" width={30} height={30} />
                </Link>
                <Link target='_blank' href={"https://www.geeksforgeeks.org/user/sarveshcha1wfb/"}>
                    <Image src="/logo/gfg.png" alt="" width={40} height={40} />
                </Link>
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
    );
}

export default Navbar;
