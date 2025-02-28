"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const LandingMessage = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: "vw", y: "100vh", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 2.3,
      }
    );
  }, []);
  return (
    <h1
      ref={titleRef}
      className={`absolute top-[50%] right-[5%] -translate-y-[50%] w-[20%] text-2xl text-white/70 leading-[3rem] cursor-pointer select-none text-right ${roboto.className}`}
    >
      I love exploring technology and pushing boundaries.
    </h1>
  );
};

export default LandingMessage;
