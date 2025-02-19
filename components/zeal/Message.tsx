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
              alt="Lumunate Zeal - Quotation"
              width={70}
              height={58}
              />
            </div>
          <div className={MessageStyle.ParagraphContainer}>
            <p className={MessageStyle.Paragraph}>
            “The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!”
            </p>
            <p className={MessageStyle.CeoPara}>Nir - <span className="text-[#8A9688]">CEO Zeal</span></p>
          </div>
          <div className=" flex justify-end">
            <Image className=" !w-[30px] md:!w-[40px]"
              src="/zeal/logo.svg"
              alt="Lumunate Zeal - Logo"
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
