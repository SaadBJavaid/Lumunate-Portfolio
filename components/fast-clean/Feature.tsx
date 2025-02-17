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
                  Booking & Payment System
                </h1>
              </div>
              <div className={FeaturesStyle.CardOneListContainer}>
                <ul className={FeaturesStyle.CardOneList}>
                  <li>Dynamic pricing based on location and vehicle type</li>
                  <li>
                    Multi-payment gateway integration (PayPal/Stripe/Coinbase)
                  </li>
                  <li>
                    Real-time slot availability and calendar synchronization
                  </li>
                  <li>Automated booking confirmations and reminders</li>
                  <li>Interactive vehicle selection interface</li>
                  <li> Flexible add-on service options</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full">
            <Image
              className=" scale-[1.01]"
              src="/fast-clean/booking.png"
              alt="Lumunate Fast Clean - Analysis"
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
                  Admin & Fleet Management
                </h1>
              </div>
              <div className={FeaturesStyle.CardTwoListContainer}>
                <ul className={FeaturesStyle.CardTwoList}>
                  <li>
                    Comprehensive admin dashboard for service customization
                  </li>
                  <li>Bulk service scheduling for fleet management</li>
                  <li>Real-time service tracking and updates</li>
                  <li>Multi-location service coordination</li>
                  <li>Custom reporting and analytics</li>
                  <li>Automated customer feedback collection</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full">
            <Image
              className=" scale-[1.01]"
              src="/fast-clean/management.png"
              alt="Lumunate Fast Clean - Management"
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
