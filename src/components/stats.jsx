"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 10,
        text: "Projects Crafted"
    },
    {
        num: 400,
        text: "Leetcode Problems Solved"
    },
    {
        num: 310,
        text: "GFG Problems Solved"
    },
    {
        num: 100,
        text: "Code Commits"
    }
]

const Stats = () => {
    return (
        <section className="py-4 xl:py-0">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
                    {stats.map((stat, index) => {
                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col md:flex-row md:gap-2 items-center text-center p-2 xl:p-0 rounded-lg
                                    ${index === 3 ? 'xl:col-start-4 xl:col-span-1' : ''}`}
                            >
                                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2">
                                    <CountUp end={stat.num} duration={5} delay={2} />
                                    <span>+</span>
                                </div>
                                <span className="text-sm md:text-base text-black/80 max-w-[200px]">{stat.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats