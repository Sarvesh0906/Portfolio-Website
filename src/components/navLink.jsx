"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ link }) => {
    const pathName = usePathname();

    const isActive =
    link.url === "/"
        ? pathName === "/"
        : pathName.startsWith(link.url);


    return (
        <Link
            href={link.url}
            className={`rounded py-2 px-3 ${isActive ? "bg-black text-white" : ""}`}
        >
            {link.title}
        </Link>
    );
}

export default NavLink;
