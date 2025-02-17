import Image from "next/image";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className={`${HeroStyle.HeroContainer}`}>
        <div className="flex md:flex-row flex-col items-center text-[#FFFFFFA6]">
          <div className="md:w-[835px] w-auto ">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
              AceMyExams
            </h1>
            <div className=" max-w-[640px] md:mt-[20px] mt-2">
              <p className="md:text-[22px] text-[14px] font-medium ">
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
          <div className="flex flex-col justify-end md:w-[556px] mt-10 md:mt-0 w-full gap-y-2">
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
              <p>Preview:</p>
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
        <div className="md:mt-[105px] mt-16">
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
