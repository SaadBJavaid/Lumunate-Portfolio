import Image from "next/image";
import React from "react";
import { FeaturesStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Features = () => {
  return (
    <section>
      <div className={`${FeaturesStyle.container}`}>
        <div>
          <h1 className={`${FeaturesStyle.heading}`}>Product Features</h1>
        </div>
        <div className={`${FeaturesStyle.cardOneContainer}`}>
          <div className={`${FeaturesStyle.cardOneLeftContainer}`}>
            <div className={`${FeaturesStyle.cardOneLeftContainerInner}`}>
              <div className="">
                <h1 className={`${FeaturesStyle.AnalysisHeading}`}>
                  Smart Event Discovery
                </h1>
              </div>
              <div className={`${FeaturesStyle.CardOneListContainer}`}>
                <ul className={`${FeaturesStyle.CardOneList}`}>
                  <li>
                    Real-time concert discovery powered by TicketMaster API
                    integration
                  </li>
                  <li>Secure user authentication through UCLA OAuth 2.0</li>
                  <li>In-app messaging system for direct user communication</li>
                  <li>
                    Dynamic content management with personalized event
                    recommendations
                  </li>
                  <li>
                    Customizable user profiles for personalized experiences
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${FeaturesStyle.CardRightContainer}`}>
            <Image
              className={`${FeaturesStyle.CardImage}`}
              src="/ayse/discovery.png"
              alt="Lumunate Ayse - Analysis"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className={`${FeaturesStyle.CardTwoContainer}`}>
          <div className={`${FeaturesStyle.CardTwoLeftContainer}`}>
            <div className={`${FeaturesStyle.cardTwoLeftContainerInner}`}>
              <div className="">
                <h1 className={`${FeaturesStyle.ManagementHeading}`}>
                  Marketplace & Community
                </h1>
              </div>
              <div className={`${FeaturesStyle.CardTwoListContainer}`}>
                <ul className={`${FeaturesStyle.CardTwoList}`}>
                  <li>
                    Integrated ticket marketplace for buying and selling concert
                    tickets
                  </li>
                  <li>Secure in-app transaction processing</li>
                  <li>Community-driven event discussions and sharing</li>
                  <li>Real-time event updates and notifications</li>
                  <li>Complementary web platform for extended accessibility</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${FeaturesStyle.CardRightContainer}`}>
            <Image
              className={`${FeaturesStyle.CardImage}`}
              src="/ayse/marketplace.png"
              alt="Lumunate Ayse - Management"
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
