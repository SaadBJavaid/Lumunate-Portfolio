import Image from "next/image";
import React from "react";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";
import LeftBlurred from "../ProjectPagesStyling/LeftBlurred";
import RightBlurred from "../ProjectPagesStyling/RightBlurred";

const Hero = () => {
  return (
    <section>
      <LeftBlurred/>
      <RightBlurred />
      <div className={HeroStyle.HeroContainer}>
        <div className={HeroStyle.DetailsContainer}>
          <div className={HeroStyle.LeftSideContainer}>
            <h1 className={HeroStyle.Heading}>
              Fast Clean
            </h1>
            <div className={HeroStyle.ParagraphContainer}>
              <p className={HeroStyle.Paragraph}>
              Fast Clean Service is a comprehensive car detailing platform that revolutionizes the automotive cleaning industry through its sophisticated digital booking system. Built with Next.js and powered by advanced payment integrations, it offers seamless scheduling for both individual vehicles and fleet services. The platform features dynamic pricing based on vehicle types and locations, ensuring transparent and competitive rates for all customers. With its intuitive user interface and powerful admin capabilities, Fast Clean Service streamlines the entire detailing process from booking to completion. The integration of multiple payment gateways and real-time calendar synchronization makes it a versatile solution for modern car care needs.
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
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>API Integration</li>
                <li>AWS S3</li>
                <li>render</li>
                <li>Google Calender API</li>
                <li>Redux</li>
                <li>Webhooks</li>
                <li>Payment Processing</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={HeroStyle.HeroImageContainer}>
          <Image
            src="/fast-clean/fastClean.png"
            alt="Lumunate Fast Clean - Hero"
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
