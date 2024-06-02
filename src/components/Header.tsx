"use client";
import { Fragment, useState, useEffect } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { useTransition, animated } from "@react-spring/web";

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

  const paragraphs = [
    "Zadzwoń, specjalista\nprzyjedzie i wyceni gratis.",
    "Odwiedzamy Cię\ni pomagamy wybrać produkt.",
    "Składamy zamówienie\ni czekamy na realizację.",
    "Przyjeżdżamy zamontować\nTwoje produkty.",
    "Ciesz się\ndobrą decyzją.",
  ];

  const transitions = useTransition(activeParagraph - 1, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    exitBeforeEnter: true,
  });
  return (
    <header className="lg:px-3 lg:pt-3 overflow-hidden text-gray-50 relative">
      {/* Animate 2nd */}
      <div className="absolute inset-x-0 z-50 pt-4 bg-hero">
        <div className="container-center w-full">
          <div
            className="inline-block w-full"
            style={{
              opacity: 1,
              transform: "translateY(0%) translateZ(0px)",
              backdropFilter: "blur(25px)",
              borderRadius: "100px",
            }}
          >
            <nav className="relative overflow-visible visible h-16 border border-white/5 backdrop-blur-[25px] p-4 lg:pl-10 lg:py-3 lg:pr-3 rounded-[100px] bg-white/10 flex items-center space-x-5 xl:space-x-[50px] w-full justify-between">
              <Logo />

              <div className="hidden lg:flex items-center space-x-5 xl:space-x-12">
                <Link href="/produkty">Produkty</Link>
                <Link href="/uslugi">Nasze usługi</Link>
                <Link href="/realizacje">Realizacje</Link>
                <Link href="/kontakt">Kontakt</Link>
              </div>
              <button className="hidden md:block text-sm !leading-6 font-medium text-primary px-6 py-[10.5px] bg-blue-300 rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]">
                Umów wycenę już dziś
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-primary h-[calc(100svh+14px)] lg:h-[calc(100vh-24px)] w-full overflow-hidden max-lg:rounded-t-none rounded-[19px] relative pt-11px lg:pt-5">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative overflow-hidden w-full h-full">
            <Image
              alt="hero"
              src="/zaluzje-47.webp"
              width={1200}
              height={1000}
              className="object-cover pointer-events-none w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 w-full h-[72%] lg:h-[62%] bg-backdrop-hero-landing-bottom -z-0"></div>
        <div className="h-full container-center">
          <div className="relative w-full h-full rounded-b-19">
            <div className="pb-4 lg:pb-[47px] h-full w-full flex flex-col justify-end">
              {/* Animate 1st */}
              <div className="text-left flex flex-col">
                <span className="overflow-hidden inline-flex">
                  <h2
                    className="text-grey-secondary font-Poppins inline-flex font-semibold text-[10px] sm:text-xs lg:text-sm !leading-6 uppercase tracking-0.11em"
                    style={{
                      transform: "translateY(0%) translateZ(0px)",
                    }}
                  >
                    Wygoda, Estetyka, bezpieczeństwo
                  </h2>
                </span>
                <h1 className="sm:max-w-[738px] flex flex-col max-sm:hidden">
                  <span className="overflow-hidden inline-flex">
                    <span
                      className="inline-flex font-medium text-[6.667vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary"
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      Rolety | Żaluzje | Plisy | Bramy garażowe | Markizy |
                      Moskitiery
                    </span>
                  </span>
                </h1>
                <h1 className="sm:hidden flex flex-col mt-5px">
                  <span className="overflow-hidden inline-flex">
                    <span
                      className="inline-flex font-medium text-[6.667vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary"
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      Rolety | Żaluzje | Plisy |
                    </span>
                  </span>
                  <span className="overflow-hidden inline-flex">
                    <span
                      className="inline-flex font-medium text-[6.667vw] xs:text-3xl md:text-4xl lg:text-[5vh] xl:text-[46px] !leading-normal -tracking-0.04em text-grey-secondary"
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      Bramy garażowe | Markizy | Moskitiery
                    </span>
                  </span>
                </h1>
                <div className="flex w-full mt-[5vh] xs:mt-[42px] lg:mt-[5.435vh] xl:mt-50px">
                  <div className="grid grid-cols-1 auto-rows-fr sm:flex gap-4 xxs:gap-6 lg:gap-[42px] items-center w-full">
                    <div className="overflow-hidden inline-block h-full text-black">
                      <div
                        className="inline-block w-full"
                        style={{
                          transform: "translateY(0%) translateZ(0px)",
                        }}
                      >
                        <div className="flex max-sm:w-full max-sm:justify-center">
                          <Link
                            aria-label="Join Geviti"
                            className="group relative grid flex-row-reverse place-items-center overflow-hidden gap-6 py-1.5 rounded-full font-medium text-lg leading-6 bg-white text-primary grid-cols-[auto_46px] pl-[42px] pr-1.5 max-sm:w-full"
                            href="/kontakt"
                          >
                            <span className="inline-block z-[2]">
                              Skonatkuje się z nami
                            </span>
                            <span className="rounded-full w-[46px] h-[46px] relative flex items-center justify-center bg-black text-blue-50">
                              <span className="opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-[50%] transition-all">
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[18px] h-[18px] flex-shrink-0"
                                >
                                  <path
                                    d="M7.25 13.5L11.75 9L7.25 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <span className="opacity-100 group-hover:opacity-0 translate-x-[-50%] group-hover:translate-x-full transition-all">
                                <svg
                                  width="19"
                                  height="18"
                                  viewBox="0 0 19 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[18px] h-[18px] flex-shrink-0"
                                >
                                  <path
                                    d="M7.25 13.5L11.75 9L7.25 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden inline-block h-full">
                      <div
                        className="flex w-full h-full"
                        style={{
                          transform: "translateY(0%) translateZ(0px)",
                        }}
                      >
                        <Link
                          aria-label="Dowiedz się więcej o naszych usługach"
                          className="group relative grid flex-row-reverse place-items-center overflow-hidden gap-6 py-1.5 rounded-full font-medium text-lg leading-6 font-Poppins bg-white/10 hover:bg-white/20 text-white border border-white/5 backdrop-blur-[25px] grid-cols-[auto_46px] pl-[42px] pr-1.5 max-sm:w-full"
                          href="/uslugi"
                        >
                          <span className="inline-block z-[2]">
                            Dowiedz się więcej
                          </span>
                          <span className="rounded-full w-[46px] h-[46px] relative flex items-center justify-center bg-white/15 text-blue-50">
                            <span className="opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-[50%] transition-all">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[18px] h-[18px] flex-shrink-0"
                              >
                                <path
                                  d="M7.25 13.5L11.75 9L7.25 4.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <span className="opacity-100 group-hover:opacity-0 translate-x-[-50%] group-hover:translate-x-full transition-all">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[18px] h-[18px] flex-shrink-0"
                              >
                                <path
                                  d="M7.25 13.5L11.75 9L7.25 4.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[5.2vh] xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]">
                {/* Animate 3rd */}
                <div style={{ opacity: "1", transform: "none" }}>
                  <div className="overflow-hidden rounded-full bg-white/10 relative z-20">
                    <div
                      className="h-px rounded-full bg-blue-200 transition-width duration-1000 ease-in-out"
                      style={{ width: `${lineWidth}%` }}
                    ></div>
                  </div>
                </div>
                <div className="lg:pt-6 max-lg:hidden no-scrollbar w-full flex flex-nowrap overflow-y-hidden overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory scroll-smooth lg:justify-between">
                  {/* Animate 4th */}
                  <span
                    className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
                    onMouseEnter={() => setLineWidth(20)}
                  >
                    <div
                      style={{ transform: "translateY(0%) translateZ(0px)" }}
                    >
                      <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                        <p
                          className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                            activeParagraph === 1 ? "opacity-100" : "opacity-70"
                          }`}
                        >
                          <span>
                            Zadzwoń, specjalista
                            <br />
                            przyjedzie i wyceni gratis.
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  {/* Animate 5th */}
                  <span
                    className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
                    onMouseEnter={() => setLineWidth(40)}
                  >
                    <div
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                        <p
                          className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                            activeParagraph === 2 ? "opacity-100" : "opacity-70"
                          }`}
                        >
                          <span>
                            Odwiedzamy Cię
                            <br />i pomagamy wybrać produkt.
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  {/* Animate 6th */}
                  <span
                    className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
                    onMouseEnter={() => setLineWidth(60)}
                  >
                    <div
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                        <p
                          className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                            activeParagraph === 3 ? "opacity-100" : "opacity-70"
                          }`}
                        >
                          <span>
                            Składamy zamówienie
                            <br />i czekamy na realizację.
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  {/* Animate 7th */}
                  <span
                    className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
                    onMouseEnter={() => setLineWidth(80)}
                  >
                    <div
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                        <p
                          className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                            activeParagraph === 4 ? "opacity-100" : "opacity-70"
                          }`}
                        >
                          <span>
                            Przyjeżdżamy zamontować
                            <br />
                            Twoje produkty.
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                  {/* Animate 8th */}
                  <span
                    className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
                    onMouseEnter={() => setLineWidth(100)}
                  >
                    <div
                      style={{
                        transform: "translateY(0%) translateZ(0px)",
                      }}
                    >
                      <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                        <p
                          className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                            activeParagraph === 5 ? "opacity-100" : "opacity-70"
                          }`}
                        >
                          <span>
                            Ciesz się
                            <br />
                            dobrą decyzją.
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                </div>

                {transitions((style: any, item: any) => (
                  <animated.div
                    className="flex md:hidden flex-col gap-3 max-lg:w-full max-lg:items-center mt-4"
                    style={style}
                  >
                    <p className="text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-50">
                      <span>
                        {paragraphs[item]?.split("\n").map((line, i) => (
                          <Fragment key={i}>
                            {line}
                            <br />
                          </Fragment>
                        ))}
                      </span>
                    </p>
                  </animated.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
