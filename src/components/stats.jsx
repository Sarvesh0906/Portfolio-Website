"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 10,
        text: "Projects Crafted"
    },
    {
        num: 300,
        text: "Leetcode Problems Solved"
    },
    {
        num: 230,
        text: "GFG Problems Solved"
    },
    {
        num: 70,
        text: "Code Commits"
    }
]

const Stats = () => {
    return (
        <section className="pb-12 pt-10 xl:p-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-10 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => {
                        return (
                            <div key={index} className="flex flex-1 items-center gap-4 xl:justify-start">
                                <div className="text-4xl xl:text-6xl font-extrabold">
                                    <CountUp end={stat.num} duration={5} delay={2} />
                                    <span>+</span>
                                </div>
                                <span className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black/80`}>{stat.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats