import { Fragment } from "react";
import { useTransition, animated } from "@react-spring/web";

interface ProgressStepsProps {
  lineWidth: number;
  setLineWidth: (width: number) => void;
  activeParagraph: number;
}

export default function ProgressSteps({
  lineWidth,
  setLineWidth,
  activeParagraph,
}: ProgressStepsProps) {
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
    <div className="mt-[5.2vh] xs:mt-[46px] lg:mt-[9.13vh] xl:mt-[84px]">
      <div style={{ opacity: "1", transform: "none" }}>
        <div className="overflow-hidden rounded-full bg-white/10 relative z-20">
          <div
            className="h-px rounded-full bg-blue-200 transition-width duration-1000 ease-in-out"
            style={{ width: `${lineWidth}%` }}
          ></div>
        </div>
      </div>
      <div className="lg:pt-6 max-lg:hidden no-scrollbar w-full flex flex-nowrap overflow-y-hidden overflow-x-scroll lg:overflow-hidden snap-x snap-mandatory scroll-smooth lg:justify-between">
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className="flex lg:overflow-hidden lg:inline-block max-lg:w-full max-lg:justify-center snap-start max-lg:flex-none cursor-pointer"
            onMouseEnter={() => setLineWidth(step * 20)}
          >
            <div style={{ transform: "translateY(0%) translateZ(0px)" }}>
              <div className="flex flex-col gap-3 max-lg:w-full max-lg:items-center">
                <p
                  className={`text-center lg:text-left text-sm !leading-[21px] font-medium text-grey-400 ${
                    activeParagraph === step ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <span>
                    {paragraphs[step - 1]?.split("\n").map((line, i) => (
                      <Fragment key={i}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </span>
        ))}
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
  );
}
