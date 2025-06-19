import React from "react";

const SkillLabel = ({ text = "C", className = "" }) => {
    return (
        <span
            className={`
                inline-flex items-center justify-center
                rounded px-4 py-2 text-sm font-medium select-none cursor-pointer
                bg-black text-white hover:bg-white hover:text-black
                transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg
                ${className}
            `}
        >
            {text}
        </span>
    );
};

export default SkillLabel;
