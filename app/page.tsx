import LandingHead from "./components/LandingHead";
import SpiderGreeting from "./components/SpiderGreeting";
import ThreeScene from "./components/ThreeScene";
const RedStripes = "/ui-01.svg";
const WhiteLines = "/ui-02.svg";
const Ring = "/ring.svg";
const NumberRing = "/number-ring.svg";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100vw] h-[100vh] relative">
      <ThreeScene />
      <div className="absolute inset-0">
        <LandingHead />
        <SpiderGreeting />
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          {/* <div className="absolute w-[25rem] h-[25rem] z-[-2] rounded-full border border-red-500/50"></div> */}
          <div className="absolute w-[55rem] h-[55rem] z-[-2] rounded-full border border-red-500/50 animate-flicker"></div>
          <img
            src={Ring}
            className="absolute z-[-5] w-[50rem] animate-custom-spin"
          />
          <img
            src={NumberRing}
            className="absolute w-[70rem] z-[-5] animate-custom-reverse-spin"
          />
        </div>
        <div className="absolute w-full top-[3rem] px-[5%] flex justify-between items-end">
          <div className="flex items-start gap-6">
            <img src={RedStripes} className="h-[1.2rem]" />
            <img
              src={WhiteLines}
              className="h-[11rem] scale-y-[-1]"
            />
          </div>

          {/* <div className="flex items-start gap-6">
            <img
              src={WhiteLines}
              className="h-[11rem] scale-x-[-1] scale-y-[-1]"
            />
            <img src={RedStripes} className="h-[1.2rem] scale-x-[-1]" />
          </div> */}
        </div>
        <div className="absolute w-full bottom-[3rem] px-[5%] flex justify-end items-end">
          {/* <div className="flex items-end gap-6">
            <img src={RedStripes} className="h-[1.2rem]" />
            <img src={WhiteLines} className="h-[11rem]" />
          </div> */}

          <div className="flex items-end  gap-6">
            <img src={WhiteLines} className="h-[11rem] scale-x-[-1]" />
            <img
              src={RedStripes}
              className="h-[1.2rem] scale-x-[-1] animate-flicker-slow"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
