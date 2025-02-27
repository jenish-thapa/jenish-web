"use client";

import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const SpiderGreeting = () => {
  const head = "Greetings, explorer!";
  const body =
    "I’m Jenish’s little spider buddy, and I’m here to greet you. Enjoy your time exploring this space.";
  const tail = "Don’t worry—I don’t bite!";

  const [greetingHead, setGreetingHead] = useState("");
  const [greetingBody, setGreetingBody] = useState("");
  const [greetingTail, setGreetingTail] = useState("");

  const [headIndex, setHeadIndex] = useState(-1);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [tailIndex, setTailIndex] = useState(0);

  useEffect(() => {
    if (headIndex === -1) {
      const startTimeout = setTimeout(() => {
        setHeadIndex(0);
      }, 3000);
      return () => clearTimeout(startTimeout);
    }

    if (headIndex > -1 && headIndex < head.length) {
      const typingTimeout = setTimeout(() => {
        setGreetingHead((prev) => prev + head[headIndex]);
        setHeadIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    }
  }, [headIndex]);

  useEffect(() => {
    if (headIndex === head.length && bodyIndex < body.length) {
      const timeout = setTimeout(() => {
        setGreetingBody((prev) => prev + body[bodyIndex]);
        setBodyIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [bodyIndex, headIndex]);

  useEffect(() => {
    if (bodyIndex === body.length && tailIndex < tail.length) {
      const timeout = setTimeout(() => {
        setGreetingTail((prev) => prev + tail[tailIndex]);
        setTailIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }
  }, [tailIndex, bodyIndex]);

  return (
    <aside
      className={`absolute h-[20rem] top-[50%] right-[5%] -translate-y-[50%] w-[27%] select-none ${orbitron.className}`}
    >
      <h2 className="text-2xl mb-6 font-bold uppercase text-right">
        {greetingHead}
      </h2>
      <p className="text-lg text-white/70 uppercase text-right">
        {greetingBody}
        <br /> <span className="inline-block mt-2">{greetingTail}</span>
      </p>
    </aside>
  );
};

export default SpiderGreeting;
