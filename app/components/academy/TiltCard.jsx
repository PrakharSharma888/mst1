"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse coordinates relative to the card center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the tilt
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    // Transform rotation based on mouse position
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Parallax effect for content layers (optional, but adds depth)
    const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5px", "5px"]);
    const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5px", "5px"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate normalized mouse position (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-all duration-200 ${className}`}
        >
            <div 
                style={{ 
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d" 
                }}
                className="relative h-full"
            >
                {children}
            </div>

            {/* Glare/Shine Effect */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseXSpring, mouseYSpring],
                        ([mx, my]) => `radial-gradient(circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(255,255,255,0.1) 0%, transparent 80%)`
                    ),
                }}
            />
        </motion.div>
    );
};

export default TiltCard;
