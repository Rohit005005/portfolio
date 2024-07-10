import Image from "next/image";
import Link from "next/link";
import React from "react";

function GetInTouch() {
  return (
    <div className="flex flex-col justify-center items-center my-40">
      <h1 className="text-neutral-300 text-4xl font-extrabold mb-5">
        Get In Touch
      </h1>
      <a href="mailto:romanrohit2005@gmail.com">
        <div className="flex justify-center items-center gap-2">
          <Image src={"/gmail.svg"} height={100} width={20} alt="gmail" />
          <h1 className="text-neutral-300 text-md font-light">
            romanrohit2005@gmail.com
          </h1>
        </div>
      </a>
    </div>
  );
}

export default GetInTouch;
