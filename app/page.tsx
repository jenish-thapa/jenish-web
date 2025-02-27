"use client";
import { useEffect, useRef } from "react";
import LandingHead from "./components/LandingHead";
import ThreeScene from "./components/ThreeScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const RedStripes = "/ui-01.svg";
const WhiteLines = "/ui-02.svg";
const Ring = "/ring.svg";
const NumberRing = "/number-ring.svg";
import { Orbitron } from "next/font/google";
import LandingMessage from "./components/LandingMessage";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    gsap.set(pageRef.current, {
      clipPath: "polygon(16% 0%, 72% 0%, 90% 70%, 0% 100%)",
      borderRadius: "0 0 90% 10%",
      y: "-50vh",
    });

    gsap.from(pageRef.current, {
      y: "0vh",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: pageRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { y: "0vh" },
      {
        y: "-50vh",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-screen overflow-y-auto overflow-x-hidden bg-blue-500/30">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            ref={textRef}
            className={`absolute top-[50%] right-[5%] -translate-y-[50%] w-[30%] text-3xl uppercase font-bold text-red-500 leading-[3rem] cursor-pointer select-none text-right ${orbitron.className}`}
          >
            I love exploring technology and pushing boundaries
          </h1>
          <h1
            className={`absolute bottom-[5rem] w-[30%] text-5xl uppercase font-bold text-red-500 leading-[4rem] cursor-pointer select-none text-right ${orbitron.className}`}
          >
            Create <br /> something <br />{" "}
            <span className="text-6xl text-white mt-1 inline-block">
              extraordinary
            </span>
          </h1>
        </div>
        <main
          ref={pageRef}
          className="w-full h-full relative overflow-hidden bg-[#080808]"
        >
          <ThreeScene />
          <div className="absolute inset-0">
            <LandingHead />
            <LandingMessage />
            <div className="absolute inset-0 -z-10 flex justify-center items-center">
              <div className="absolute w-[55rem] h-[55rem] z-[-2] rounded-full border border-red-500/60 animate-flicker translate-x-[-1rem] translate-y-[-2rem]"></div>
              <img
                src={Ring}
                className="absolute z-[-5] w-[80rem] animate-custom-spin"
              />
              <img
                src={NumberRing}
                className="absolute w-[40rem] z-[-5] animate-custom-reverse-spin translate-x-[2rem]"
              />
            </div>
            <div className="absolute w-full top-[3rem] px-[5%] flex justify-between items-end">
              <div className="flex items-start gap-6">
                <img src={RedStripes} className="h-[1.2rem]" />
                <img src={WhiteLines} className="h-[8rem] scale-y-[-1]" />
              </div>
            </div>
            <div className="absolute w-full bottom-[3rem] px-[5%] flex justify-end items-end">
              <div className="flex items-end  gap-6">
                <img src={WhiteLines} className="h-[8rem] scale-x-[-1]" />
                <img
                  src={RedStripes}
                  className="h-[1.2rem] scale-x-[-1] animate-flicker-slow"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <main className="w-full h-screen relative overflow-hidden bg-[#080808]"></main>
    </div>
  );
}
