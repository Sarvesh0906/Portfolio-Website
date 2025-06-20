"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
            }}>
                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.5, duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="w-[293px] h-[293px] xl:w-[494px] xl:h-[494px] absolute top-1 left-1 xl:top-[6px] xl:left-[6px]"
                >
                    <Image src="/image/photo2.png" priority quality={100} fill alt="" className="object-contain rounded-full" />
                </motion.div>

                {/* CIRCLE */}
                <motion.svg 
                    className={"w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"}
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#0096FF"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
