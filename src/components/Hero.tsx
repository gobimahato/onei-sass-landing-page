"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ArrowIcon from "../assets/icons/arrow-w.svg";
import cusrorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
  return (
    <section
      className="bg-black text-white py-[72px] sm:py-24 relative overflow-clip
    bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] "
    >
      <div
        className="absolute h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]
        rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde]
      bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "
      ></div>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span
              className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#2fd8fe)]
              text-transparent bg-clip-text [-webkit-background-clip:text]"
            >
              Version 2.0 is here
            </span>

            <span className="inline-flex gap-1 items-center">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cusrorImage}
                alt=""
                width="200"
                height="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[498px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt=""
                width="200"
                height="200"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your effors, and celebrate your successes.
          </p>
        </div>

        <div className="flex justify-center mt-8 text-black">
          <button
            className="bg-white border border-white py-2 px-4 rounded-lg
             hover:bg-black hover:text-white hover:border-blue-100 transition-colors"
          >
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};
