"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-16 w-[50%]">
        <div className="text-neutral-300 text-6xl font-extrabold mb-8">
          <motion.h1 variants={container(0)} initial="hidden" animate="visible">
            Rohit
          </motion.h1>
        </div>
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10"
        >
          Full Stack Developer
        </motion.div>
        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-neutral-300 text-lg"
        >
          Aspiring Full Stack Developer skilled in leveraging a diverse tech
          stack, including React.js, Next.js, Tailwind CSS, TypeScript, and
          Node.js, to build dynamic and responsive web applications.
        </motion.div>
      </div>
      <motion.div
        variants={container2(0.5)}
        initial="hidden"
        animate="visible"
        className="rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      >
        <Image
          src={"/profile.jpg"}
          width={300}
          height={500}
          alt="profile"
          className="rounded-xl"
        />
      </motion.div>
    </div>
    );
}

export default Hero;
