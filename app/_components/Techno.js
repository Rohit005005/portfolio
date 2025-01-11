"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


let scr;
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
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
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {scr <= 505 ? (
        <div className="flex gap-2">
          <Image
            className="border border-neutral-500 rounded-xl p-4"
            src={"/react.svg"}
            width={60}
            height={50}
          />
          <Image
            className="border bg-white border-neutral-500 rounded-xl p-4"
            src={"/next1.svg"}
            height={100}
            width={60}
          />
          <Image
            className="border border-neutral-500 rounded-xl p-4"
            src={"/node.svg"}
            height={100}
            width={60}
          />
          <Image
            className="border bg-white border-neutral-500 rounded-xl p-4"
            src={"/tail.svg"}
            height={100}
            width={60}
          />
          <Image
            className="border border-neutral-500 rounded-xl p-4"
            src={"/mongo.svg"}
            height={100}
            width={60}
          />
          <Image
            className="border bg-white border-neutral-500 rounded-xl p-4"
            src={"/post.svg"}
            height={100}
            width={60}
          />
        </div>
      ) : (
        <div className="flex gap-5">
          <Image
            className="border-2 border-neutral-500 rounded-3xl p-4"
            src={"/react.svg"}
            width={100}
            height={50}
          />
          <Image
            className="border-2 bg-white border-neutral-500 rounded-3xl p-4"
            src={"/next1.svg"}
            height={100}
            width={100}
          />
          <Image
            className="border-2 border-neutral-500 rounded-3xl p-4"
            src={"/node.svg"}
            height={100}
            width={100}
          />
          <Image
            className="border-2 bg-white border-neutral-500 rounded-3xl p-4"
            src={"/tail.svg"}
            height={100}
            width={100}
          />
          <Image
            className="border-2 border-neutral-500 rounded-3xl p-4"
            src={"/mongo.svg"}
            height={100}
            width={100}
          />
          <Image
            className="border-2 bg-white border-neutral-500 rounded-3xl p-4"
            src={"/post.svg"}
            height={100}
            width={100}
          />
        </div>
      )}
    </motion.div>
  );
};

function Techno() {
  useEffect(() => {
    scr = window.innerWidth;
    console.log(scr)
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-40 ">
      <div className="text-neutral-300 text-4xl font-extrabold mb-10">
        <h1>Technologies</h1>
      </div>
      <Box num={1} />
    </div>
  );
}
export default Techno;
