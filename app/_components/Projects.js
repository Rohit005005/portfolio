"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


const boxVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: -100, opacity: 0 },
};

const boxVariant2 = {
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { x: 100, opacity: 0 },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="border-y-4 p-10 rounded-xl md:rounded-none md:p-0 border-neutral-300 md:border-opacity-0 flex flex-col md:flex-row justify-center gap-10">
        <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <Image
            src={"/formio.png"}
            width={300}
            height={500}
            alt="profile"
            className="rounded-xl"
          />
        </div>
        <div className=" shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl flex flex-col items-center justify-center  w-[300px] h-[400px]">
          <div className="text-neutral-100 text-3xl font-extrabold px-10 mt-5">
            Formio
          </div>
          <div className="text-neutral-300 text-sm font-semibold text-center p-5">
            Formio is an innovative platform that streamlines form creation.
            Using AI, it allows users to generate customized forms in seconds,
            just by giving simple promt. You can personalize themes,
            backgrounds, and other elements. Formio enables easy sharing of
            forms with others. It provides the option to download responses in
            spreadsheet format.
          </div>
          <Link href={"https://formio-omega.vercel.app/"}>
            <button className="text-black font-bold text-lg px-20 py-1 rounded-xl bg-neutral-300 mt-6">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Box2 = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant2}
      initial="hidden"
      animate={control}
    >
      <div className="border-y-4 p-10 rounded-xl md:rounded-none md:p-0 border-neutral-300 md:border-opacity-0 flex flex-col md:flex-row justify-center gap-10 mt-20">
        <div className=" shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl flex flex-col items-center justify-center  w-[300px] h-[400px]">
          <div className="text-neutral-100 text-3xl font-extrabold px-10 mt-5">
            PrePeak
          </div>
          <div className="text-neutral-300 text-sm font-semibold text-center p-5">
            PrepPeak revolutionizes interview preparation. Users input their job
            position, tech stack, and years of experience. Based on this
            information, the AI generates interview questions. Users then answer
            these questions by turning on their camera and microphone. PrepPeak
            provides an overall rating, feedback on each answer, and correct
            answers to enhance learning.
          </div>
          <Link href={"https://preppeak-five.vercel.app/"}>
          <button className="text-black font-bold text-lg px-20 py-1 rounded-xl bg-neutral-300 mt-2">
            Visit
          </button></Link>
        </div>
        <div className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <Image
            src={"/preppeak.png"}
            width={300}
            height={500}
            alt="profile"
            className="rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="text-neutral-300 text-4xl font-extrabold mb-10">
        Projects
      </h1>
      <Box num={1} />
      <Box2 num={1} />
    </div>
  );
}

export default Projects;
