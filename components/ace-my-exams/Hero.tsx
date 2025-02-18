import Image from "next/image";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className={`${HeroStyle.HeroContainer}`}>
        <div className={`${HeroStyle.DetailsContainer}`}>
          <div className={`${HeroStyle.LeftSideContainer}`}>
            <h1 className={`${HeroStyle.Heading}`}>
              AceMyExams
            </h1>
            <div className={`${HeroStyle.ParagraphContainer}`}>
              <p className={`${HeroStyle.Paragraph}`}>
                Ace My Exam is a sophisticated Learning Management System
                designed to bridge the gap between students and tutors through
                seamless online education. Built with Next.js and powered by
                robust cloud infrastructure, it offers comprehensive educational
                resources including past papers, revision notes, and
                topic-specific questions from multiple exam boards. The platform
                combines secure content delivery, flexible payment options, and
                intuitive user management to create an effective learning
                environment.
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
                <li>PostgreSQL</li>
                <li>API Integration</li>
                <li>AWS S3/Cloudfront</li>
                <li>Redux</li>
                <li>Webhooks</li>
                <li>Payment Processing</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${HeroStyle.HeroImageContainer}`}>
          <Image
            src="/ace-my-exams/AceMyExams.png"
            alt="Lumunate AceMyExams - Hero"
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
