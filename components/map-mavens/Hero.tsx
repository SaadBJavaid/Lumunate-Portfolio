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
              Map Mavens
            </h1>
            <div className={HeroStyle.ParagraphContainer}>
              <p className={HeroStyle.Paragraph}>
                Map Mavens is an innovative web application that empowers users
                to create, customize, and share interactive maps effortlessly.
                Built with Next.js and integrated with Google Maps API, it
                provides a powerful yet intuitive platform for both personal and
                professional map-making. The application combines advanced
                visualization capabilities through Konva.js with secure data
                management using Prisma ORM and PostgreSQL, delivering a
                comprehensive solution for collaborative map creation.
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
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>API Integration</li>
                <li>AWS S3</li>
                <li>Google Maps API</li>
                <li>Konva.js</li>
                <li>Stripe Payment Processing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={HeroStyle.HeroImageContainer}>
          <Image
            src="/map-mavens/hero.png"
            alt="Lumunate Map Mavens - Hero"
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
