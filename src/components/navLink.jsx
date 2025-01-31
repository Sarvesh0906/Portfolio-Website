"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLink = ({ link }) => {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <Link className={`rounded py-2 px-3 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>{link.title}</Link>
    )
}
 
export default navLink