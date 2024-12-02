"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const isHovered = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;

      const borderRect = borderRef.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.left);
      offsetY.set(e.clientY - borderRect.top);
    };

    const element = borderRef.current;
    if (element) {
      element.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      if (element) {
        element.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={title}
      className="border border-white/30 px-8 py-10 text-center rounded-lg sm:flex-1 relative"
      onMouseEnter={() => isHovered.set(1)}
      onMouseLeave={() => isHovered.set(0)}
      ref={borderRef}
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-lg"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          opacity: isHovered,
          pointerEvents: "none",
        }}
      ></motion.div>
      <div
        className="inline-flex h-14 w-14 bg-white text-black
              justify-center items-center rounded-lg"
      >
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
