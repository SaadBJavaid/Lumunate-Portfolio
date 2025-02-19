import Image from "next/image";
import React from "react";
import { MessageStyle } from "../ProjectPagesStyling/ProjectPageStyling";

const Message = () => {
  return (
    <section>
      <div className={MessageStyle.MessageContainer}>
        <div className={MessageStyle.MessageInnerContainer}>
          <div className={MessageStyle.QuotationContainer}>
            <Image
              className={MessageStyle.QoutationImage}
              src="/koinfolio/quotation.png"
              alt="Lumunate Ayse - Quotation"
              width={70}
              height={58}
            />
          </div>
          <div className={MessageStyle.ParagraphContainer}>
            <p className={MessageStyle.Paragraph}>
              “I highly recommend working with Lumunate! The CEO and his team
              did a great job with helping me build my mobile application and
              they are clearly experts in their field. They were very easy to
              work with, polite, communicated efficiently, were transparent
              about their process, well-organized and had great time management
              skills. In fact, often times they completed tasks faster than we
              agreed upon. If you are looking for a high-quality development
              team, do not hesitate to use Lumunate’s services.”
            </p>
            <p className={MessageStyle.CeoPara}>
              Cathy Charles - <span className="text-[#8A9688]">CEO Ayse</span>
            </p>
          </div>
          <div className=" flex justify-end">
            <Image
              className=" !w-[160px] md:!w-[331px]"
              src="/ayse/logo.svg"
              alt="Lumunate Ayse - Logo"
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
