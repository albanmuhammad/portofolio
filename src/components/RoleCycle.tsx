"use client";

import React, { useEffect, useState } from "react";

const roles = [
    "Front End Developer",
    "Mobile Application Developer",
    "Web Developer",
];

const RoleCycle = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 300)
        }, 2500)

        return () => clearInterval(interval);
    })
    return (
        <div className={`mt-6 text-6xl font-bold transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            {roles[index]}
        </div>
    )
}

export default RoleCycle