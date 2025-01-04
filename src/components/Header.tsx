"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import ProgressSteps from "./ProgressSteps";

export default function Header() {
  const [lineWidth, setLineWidth] = useState(20);
  const activeParagraph = lineWidth / 20;

  useEffect(() => {
    const timer = setInterval(() => {
      setLineWidth((prevLineWidth) => {
        if (prevLineWidth >= 100) {
          return 20;
        } else {
          return prevLineWidth + 20;
        }
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="lg:px-3 lg:pt-3 overflow-hidden text-gray-50 relative">
      <Navigation />
      <div className="bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-24px)] w-full overflow-hidden max-lg:rounded-t-none rounded-[19px] relative pt-11px lg:pt-5">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative overflow-hidden w-full h-full">
            <Image
              alt="Profesjonalne rolety i żaluzje w Wałbrzychu"
              src="/zaluzje-47.webp"
              width={1200}
              height={1000}
              className="object-cover pointer-events-none w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 w-full h-[72%] lg:h-[62%] bg-backdrop-hero-landing-bottom -z-0"></div>
        <div className="h-full container-center">
          <div className="relative w-full h-full rounded-b-19">
            <div className="pb-4 lg:pb-[47px] h-full w-full flex flex-col justify-end">
              <HeroContent />
              <ProgressSteps
                lineWidth={lineWidth}
                setLineWidth={setLineWidth}
                activeParagraph={activeParagraph}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
