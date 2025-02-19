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
              alt="Lumunate AceMyExams - Quotation"
              width={70}
              height={58}
              />
            </div>
          <div className={MessageStyle.ParagraphContainer}>
            <p className={MessageStyle.Paragraph}>
            “Working with Lumunate was an absolute game-changer for us. We had been struggling with an incomplete app built on Django, and it felt like we’d hit a dead end. The team at Lumunate not only understood our challenges but also took the time to truly grasp our vision. They rebuilt our tutoring platform from the ground up using Next.js, and the difference has been night and day. We couldn’t recommend them more highly!”
            </p>
            <p className={MessageStyle.CeoPara}>Asma - <span className="text-[#8A9688]">CEO AceMyExams</span></p>
          </div>
          <div className=" flex justify-end">
            <Image className=" !w-[125px] md:!w-[219px]"
              src="/ace-my-exams/logo.svg"
              alt="Lumunate AceMyExams - Logo"
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
