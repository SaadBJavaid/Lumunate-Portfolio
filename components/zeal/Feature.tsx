import Image from "next/image";
import React from "react";
import { FeaturesStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Features = () => {
  return (
    <section>
      <div className={FeaturesStyle.container}>
        <div>
          <h1 className={FeaturesStyle.heading}>
            Product Features{" "}
          </h1>
        </div>
        <div className={FeaturesStyle.cardOneContainer}>
          <div className={FeaturesStyle.cardOneLeftContainer}>
            <div className={FeaturesStyle.cardOneLeftContainerInner}>
              <div className="">
                <h1 className={FeaturesStyle.AnalysisHeading}>
                  Technical Innovation
                </h1>
              </div>
              <div className={FeaturesStyle.CardOneListContainer}>
                <ul className={FeaturesStyle.CardOneList}>
                  <li>Next.js and React-powered dynamic interface</li>
                  <li>Advanced AI integration for healthcare solutions</li>
                  <li>Robust data processing through Node.js backend</li>
                  <li>MongoDB database for efficient data management</li>
                  <li>Material-UI components for consistent design patterns</li>
                  <li>AWS S3 integration for secure data storage</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/zeal/Technical.png"
              alt="Lumunate Zeal - Analysis"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={FeaturesStyle.CardTwoContainer}>
          <div className={FeaturesStyle.CardTwoLeftContainer}>
            <div className= {FeaturesStyle.cardTwoLeftContainerInner}>
              <div className="">
                <h1 className={FeaturesStyle.ManagementHeading}>
                  Platform Features
                </h1>
              </div>
              <div className={FeaturesStyle.CardTwoListContainer}>
                <ul className={`xl:text-[22px] lg:text-[16px] md:text-[14px] text-[12px] list-disc font-medium lg:ml-[6%] ml-[20px]`}>
                  <li>Interactive hackathon page for community engagement</li>
                  <li>Cross-device responsive design for universal access</li>
                  <li>Custom API integrations for healthcare services</li>
                  <li>Real-time data processing and visualization</li>
                  <li>Secure user authentication and authorization</li>
                  <li>Scalable architecture for enterprise deployment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/zeal/feature.png"
              alt="Lumunate Zeal - Management"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
