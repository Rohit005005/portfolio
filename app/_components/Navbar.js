import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="p-10">
        <Link href="/ResumeRohit.pdf">
          <button className="px-5 py-2 rounded-lg text-xl font-bold bg-neutral-300">
            Resume
          </button>
        </Link>
      </div>
      <div className="flex p-10 gap-5">
        <Link href={"https://www.linkedin.com/in/rohit-dev005/"}>
          <Image src={"/linkedin.svg"} height={100} width={50} alt="linkedin" />
        </Link>
        <Link href={"https://www.instagram.com/_me_rohitt._/"}>
          <Image src={"/insta.svg"} height={100} width={50} alt="insta" />
        </Link>
        <Link href={"https://github.com/Rohit005005"}>
          <Image src={"/github.svg"} height={100} width={50} alt="github" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
