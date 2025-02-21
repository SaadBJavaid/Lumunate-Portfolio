import Image from "next/image";
import React from "react";
import { HeroStyle } from "../ProjectPagesStyling/ProjectPageStyling";
import LeftBlurred from "../ProjectPagesStyling/LeftBlurred";
import RightBlurred from "../ProjectPagesStyling/RightBlurred";

const Hero = () => {
  return (
    <section>
      <LeftBlurred />
      <RightBlurred/>
      <div className={HeroStyle.HeroContainer}>
        <div className={HeroStyle.DetailsContainer}>
          <div className={HeroStyle.LeftSideContainer}>
            <h1 className={HeroStyle.Heading}>
              Ayse
            </h1>
            <div className={HeroStyle.ParagraphContainer}>
              <p className={HeroStyle.Paragraph}>
                Ayse is a cutting-edge mobile application designed to
                revolutionize how concert enthusiasts discover, engage with, and
                experience live music events. Built using React Native for
                cross-platform compatibility on both iOS and Android, this
                comprehensive solution seamlessly integrates with Firebase
                backend services and leverages UCLA OAuth 2.0 for secure user
                authentication. The platform represents a perfect blend of
                modern technology and user-centric design, complemented by a
                responsive web interface developed with React.js and Node.js.
              </p>
            </div>
          </div>
          <div className={HeroStyle.RightSideContainer}>
            <div className="w-[100%] flex justify-between">
              <p>Technologies:</p>
              <p>React Native Mob App</p>
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
                <li> Mobile App Development </li>
                <li>React Native</li>
                <li>Front-End Development</li>
                <li>React</li>
                <li>Node.js</li>
                <li>API Integration</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={HeroStyle.HeroImageContainer}>
          <Image
            src="/ayse/Ayse.png"
            alt="Lumunate Ayse - Hero"
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
