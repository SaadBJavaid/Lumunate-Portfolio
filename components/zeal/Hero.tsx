import Image from "next/image";
import React from "react";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Hero = () => {
  return (
    <section>
      <div className={HeroStyle.HeroContainer}>
        <div className={HeroStyle.DetailsContainer}>
          <div className={HeroStyle.LeftSideContainer}>
            <h1 className={HeroStyle.Heading}>
              Zeal
            </h1>
            <div className={HeroStyle.ParagraphContainer}>
              <p className={HeroStyle.Paragraph}>
                Zeal is an innovative full-stack business platform, designed to
                transform the healthcare industry through AI-driven solutions.
                Built with Next.js, React and Node.js, Zeal delivers a
                user-friendly and powerful experience. The platform’s front end,
                developed with Next.js and React, offers a dynamic and
                responsive interface that ensures seamless navigation across
                devices. Node.js powers the backend for efficient data
                processing, while a dedicated hackathon page adds engagement for
                users and contributors alike, making Zealan adaptable,
                interactive solution for modern healthcare needs.
              </p>
            </div>
          </div>
          <div className={HeroStyle.RightSideContainer}>
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
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Material-UI (MUI)</li>
                <li>API Integration</li>
                <li>AWS S3</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={HeroStyle.HeroImageContainer}>
          <Image
            src="/zeal/hero.png"
            alt="Lumunate Zeal - Hero"
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
