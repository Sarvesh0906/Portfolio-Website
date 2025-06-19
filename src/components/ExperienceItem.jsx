"use client";

import { motion } from "framer-motion";
import React from "react";

const ExperienceListItem = ({
    align = "left",
    title,
    descriptions = [],
    date,
    company,
    isVisible,
}) => {
    const content = (
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
        </div>
    );

    const descriptionList = (
        <div className="p-3 pb-0 text-sm italic">
            <ul className="list-disc list-inside">
                {descriptions.map((desc, index) => (
                    <li key={index} className="py-1">
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    );

    const dateInfo = (
        <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
    );

    const companyInfo = (
        <div className="p-2 mx-3 rounded bg-white text-sm font-semibold w-fit">
            {company}
        </div>
    );

    return (
        <motion.div
            initial={{ x: "-300px" }}
            animate={isVisible ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-between h-fit"
        >
            {align === "left" ? (
                <>
                    <div className="w-[45%]">
                        {content}
                        {descriptionList}
                        {dateInfo}
                        {companyInfo}
                    </div>
                    <CenterLine />
                    <div className="w-[45%]"></div>
                </>
            ) : (
                <>
                    <div className="w-[45%]"></div>
                    <CenterLine />
                    <div className="w-[45%]">
                        {content}
                        {descriptionList}
                        {dateInfo}
                        {companyInfo}
                    </div>
                </>
            )}
        </motion.div>
    );
};

const CenterLine = () => (
    <div className="w-[10%] flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
    </div>
);

export default ExperienceListItem;
