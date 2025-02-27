"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const LandingHead = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: "-100vw", y: "100vh", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 2,
      }
    );
  }, []);
  return (
    <h1
      ref={titleRef}
      className={`absolute top-[50%] left-[5%] -translate-y-[50%] w-[30%] text-5xl uppercase font-bold text-red-500 leading-[4rem] cursor-pointer select-none ${orbitron.className}`}
    >
      Exploring <br /> <span className="text-white stroke">the</span> Future,{" "}
      <br />
      One <span className="text-white stroke">Project</span> <br />
      at <span className="text-white stroke">a</span> Time.
    </h1>
  );
};

export default LandingHead;
