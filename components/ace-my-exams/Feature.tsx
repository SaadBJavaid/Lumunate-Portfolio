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
            <div className= {FeaturesStyle.cardOneLeftContainerInner}>
              <div className="">
                <h1 className={FeaturesStyle.AnalysisHeading}>
                  Learning Resources & Access
                </h1>
              </div>
              <div className={FeaturesStyle.CardOneListContainer}>
                <ul className={FeaturesStyle.CardOneList}>
                  <li>Multi-exam board past papers and revision materials</li>
                  <li>Topic-based question banks with instant access</li>
                  <li>Secure content delivery through AWS S3/CloudFront</li>
                  <li>Downloadable study resources and notes</li>
                  <li>Integrated PayPal and Stripe payment systems</li>
                  <li>Role-based access control for different user types</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full">
            <Image
              className=" scale-[1.01]"
              src="/ace-my-exams/resources.png"
              alt="Lumunate AceMyExams - Analysis"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={FeaturesStyle.CardTwoContainer}>
          <div className={FeaturesStyle.CardTwoLeftContainer}>
            <div className={FeaturesStyle.cardTwoLeftContainerInner}>
              <div className="">
                <h1 className={FeaturesStyle.ManagementHeading}>
                  Platform <br className=" hidden md:block" />
                  Management & <br className="hidden md:block" /> Reviews
                </h1>
              </div>
              <div className={FeaturesStyle.CardTwoListContainer}>
                <ul className={FeaturesStyle.CardTwoList}>
                  <li>ReComprehensive admin panel for content management</li>
                  <li>Student performance tracking and analytics</li>
                  <li>Tutor-student connection system</li>
                  <li>Trustpilot and Google Reviews integration</li>
                  <li>SEO-optimized responsive design</li>
                  <li>Multi-step resource selection process</li>
                  <li>Real-time content updates and management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full">
            <Image
              className=" scale-[1.01]"
              src="/ace-my-exams/management.png"
              alt=""
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
