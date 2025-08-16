import portfolioData from "@/lib/config/portfolio-data";
import Link from "next/link";
import { MatrixButton } from "../ui/button";
import { GridWrapper } from "../ui/grid-utils";
import DynamicMarquee from "../ui/marquee";

export default function Skills() {
  const originalItems: string[] = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.tools,
    ...portfolioData.skills.technologies,
  ];
  const marqueeItems: string[] = [
    ...portfolioData.skills.languages,
    "PIKACHU",
    ...portfolioData.skills.tools,
    ...portfolioData.skills.technologies,
    "Did you catch any pokémon in here?",
  ];
  return (
    <div id="skills" className=" py-[min(20%,20vh)] min-h-[40vh] relative">
      <div className="2xl:full-bleed">
        <div className="relative z-ui">
          {originalItems.length > 0 && (
            <div className="w-full overflow-hidden h-24 flex items-center">
              <DynamicMarquee
                marqueeItems={marqueeItems}
                downDirection="left"
                upDirection="right"
              />
            </div>
          )}
        </div>
        <div className="gradient-circle -translate-half absolute" />
      </div>
      <GridWrapper>
        <Link
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="-col-end-1 lg:-col-end-2 mt-8"
        >
          <MatrixButton content="SEE ALL MY SKILLS" />
        </Link>
      </GridWrapper>
    </div>
  );
}
