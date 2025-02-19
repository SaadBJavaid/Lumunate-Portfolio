import Image from "next/image";
import React from "react";
import { MessageStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Message = () => {
  return (
    <section>
      <div className={MessageStyle.MessageContainer}>
        <div className={MessageStyle.MessageInnerContainer}>
            <div className={MessageStyle.QuotationContainer}>
              <Image className={MessageStyle.QoutationImage}
              src="/koinfolio/quotation.png"
              alt="Lumunate Fast Clean - Quotation"
              width={70}
              height={58}
              />
            </div>
          <div className={MessageStyle.ParagraphContainer}>
            <p className={MessageStyle.Paragraph}>
            “Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience. We’ve received rave reviews from our users and the app has seen tremendous growth since it s launch. Will be back for future upgrades!”
            </p>
            <p className={MessageStyle.CeoPara}>Felicio Perk - <span className="text-[#8A9688]">CEO Fast Clean</span></p>
          </div>
          <div className=" flex justify-end">
            <Image className=" !w-[70px] md:!w-[105px]"
              src="/fast-clean/logo.svg"
              alt="Lumunate Fast Clean - Logo"
              width={225}
              height={58}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
