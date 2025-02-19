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
                  Map Creation & Customization
                </h1>
              </div>
              <div className={FeaturesStyle.CardOneListContainer}>
                <ul className={FeaturesStyle.CardOneList}>
                  <li>
                    Interactive map creation with Google Maps API integration
                  </li>
                  <li>Custom point of interest markers and annotations</li>
                  <li>Secure image uploading through AWS S3</li>
                  <li>Advanced visual customization with Konva.js</li>
                  <li>Real-time layout editing and styling options</li>
                  <li>PDF export functionality for sharing and printing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/map-mavens/creation.png"
              alt="Lumunate Map Mavens - Analysis"
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
                  Collaboration & Subscription
                </h1>
              </div>
              <div className={FeaturesStyle.CardTwoListContainer}>
                <ul className={FeaturesStyle.CardTwoList}>
                  <li>Team-based map editing and sharing</li>
                  <li>Real-time collaboration features</li>
                  <li>Tiered subscription plans via Stripe</li>
                  <li>Secure user authentication system</li>
                  <li>Version control for map changes</li>
                  <li> Cross-device accessibility and synchronization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={FeaturesStyle.CardRightContainer}>
            <Image
              className={FeaturesStyle.CardImage}
              src="/map-mavens/collaboration.png"
              alt="Lumunate Map Mavens - Management"
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
