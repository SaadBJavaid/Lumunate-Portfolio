import Image from "next/image";
import React from "react";
import { FeaturesStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Features = () => {
  return (
    <section>
      <div className={FeaturesStyle.container}>
        <div>
          <h1 className={FeaturesStyle.heading}>Product Features </h1>
        </div>
        <div className={FeaturesStyle.cardOneContainer}>
          <div className={FeaturesStyle.cardOneLeftContainer}>
            <div className={FeaturesStyle.cardOneLeftContainerInner}>
              <div className="">
                <h1 className={FeaturesStyle.AnalysisHeading}>
                  Market Analysis
                </h1>
              </div>
              <div className={FeaturesStyle.CardOneListContainer}>
                <ul className={FeaturesStyle.CardOneList}>
                  <li>Access to in-depth market data and insights</li>
                  <li>Historical price tracking and trend analysis</li>
                  <li>Bubble visualization for intuitive market comparisons</li>
                  <li>
                    News and post creation for staying updated with crypto
                    trends
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/koinfolio/analysis.png"
              alt="Lumunate Koinfolio - Analysis"
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
                  Portfolio Management
                </h1>
              </div>
              <div className={FeaturesStyle.CardTwoListContainer}>
                <ul className={FeaturesStyle.CardTwoList}>
                  <li>
                    Real-time tracking of cryptocurrency assets and holdings
                  </li>
                  <li>
                    Customizable dashboards for personalized portfolio views
                  </li>
                  <li>Dynamic coin comparisons for performance analysis</li>
                  <li>
                    Advanced asset management tools for better decision-making
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/koinfolio/management.png"
              alt="Lumunate Koinfolio - Management"
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
