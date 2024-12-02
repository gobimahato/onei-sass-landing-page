"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24 relative">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>

        <div className="flex overflow-hidden mt-9 relative">
          <div
            className="absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-black/90 to-black/0
          pointer-events-none"
          ></div>
          <div
            className="absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-black/90 to-black/0
          pointer-events-none"
          ></div>

          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }, index) => (
              <Image
                src={src}
                alt={alt}
                key={index}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                src={src}
                alt={alt}
                key={index}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
