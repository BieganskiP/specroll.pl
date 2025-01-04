import Link from "next/link";

export default function HeroContent() {
  return (
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
            Rolety | Żaluzje | Plisy | Bramy garażowe | Markizy | Moskitiery
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
                    Skonatkuj się z nami
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
                <span className="inline-block z-[2]">Dowiedz się więcej</span>
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
  );
}
