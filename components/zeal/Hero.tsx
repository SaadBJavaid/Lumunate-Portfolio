import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-24 py-12 px-4 sm:px-6">
        <div className="flex md:flex-row flex-col items-center text-[#FFFFFFA6]">
          <div className="md:w-[835px] w-auto ">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
              Zeal
            </h1>
            <div className=" max-w-[640px] md:mt-[20px] mt-2">
              <p className="md:text-[22px] text-[14px] font-medium ">
                Zeal is an innovative full-stack business platform, designed to
                transform the healthcare industry through AI-driven solutions.
                Built with Next.js, React and Node.js, Zeal delivers a
                user-friendly and powerful experience. The platform’s front end,
                developed with Next.js and React, offers a dynamic and
                responsive interface that ensures seamless navigation across
                devices. Node.js powers the backend for efficient data
                processing, while a dedicated hackathon page adds engagement for
                users and contributors alike, making Zeal an adaptable,
                interactive solution for modern healthcare needs.
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
        <div className="md:mt-[105px] mt-16">
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
