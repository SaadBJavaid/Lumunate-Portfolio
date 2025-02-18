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
              alt="Lumunate Koinfolio - Quotation"
              width={70}
              height={58}
            />
          </div>
          <div className={MessageStyle.ParagraphContainer}>
            <p className={MessageStyle.Paragraph}>
              “The team at Lumunate is simply the best. They do the best jobs as
              always and have brought our idea for Koinfolio to life. Will
              continue the work with them for sure!”
            </p>
            <p className={MessageStyle.CeoPara}>
              Ebrahim - <span className="text-[#8A9688]">CEO Koinfolio</span>
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              className=" !w-[145px] md:!w-[245px]"
              src="/koinfolio/logo.png"
              alt="Lumunate Koinfolio - Logo"
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
