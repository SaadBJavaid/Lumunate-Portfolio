import Image from "next/image";
import React from "react";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Hero = () => {
  return (
    <section>
      <div className={`${HeroStyle.HeroContainer}`}>
        <div className={`${HeroStyle.DetailsContainer}`}>
          <div className={`md:w-[702px] ${HeroStyle.LeftSideContainer}`}>
            <h1 className={`${HeroStyle.Heading}`}>
              Koinfolio
            </h1>
            <div className={`${HeroStyle.ParagraphContainer}`}>
              <p className={`${HeroStyle.Paragraph}`}>
                Koinfolio is a comprehensive cryptocurrency portfolio management
                platform designed for crypto investors to track, analyze and
                optimize digital assets. With advanced features like real-time
                asset tracking, customizable dashboards, in-depth market data,
                dynamic coin comparisons and powerful asset management tools,
                Koinfolio simplifies crypto investing
              </p>
            </div>
          </div>
          <div className={`${HeroStyle.RightSideContainer}`}>
            <div className="w-[100%] flex justify-between">
              <p>Technologies:</p>
              <p>Next.js Web Application</p>
            </div>
            <p className="h-[0.1px] bg-[#FFFFFFA6]" />
            <div className="w-[100%] flex justify-between">
              <p>Deliverables::</p>
              <p>Design, Website</p>
            </div>
            <p className="h-[0.1px] bg-[#FFFFFFA6]" />
            <div className="w-[100%] flex justify-between">
              <p>Skills</p>
              <ul className="text-end">
                <li>Next.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>API Integration</li>
                <li>AWS</li>
                <li>Webhooks</li>
                <li>Payment Processing</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${HeroStyle.HeroImageContainer}`}>
          <Image
            src="/koinfolio/koinfolio.png"
            alt="Lumunate Koinfolio - Hero"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
