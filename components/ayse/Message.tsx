import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] py-24  px-4 sm:px-6">
        <div className="mx-auto lg:max-w-[1110px] relative">
          <div className=" absolute xl:-top-20 -top-6 md:-top-10 -left-2 xl:-left-20">
            <Image
              className="!w-[24px] md:!w-[40px] xl:!w-[70px]"
              src="/koinfolio/quotation.png"
              alt="Lumunate Ayse - Quotation"
              width={70}
              height={58}
            />
          </div>
          <div className=" px-4 xl:px-0">
            <p className="xl:text-[36px] md:text-[24px]  text-[14px] md:leading-[45px]">
              “I highly recommend working with Lumunate! The CEO and his team
              did a great job with helping me build my mobile application and
              they are clearly experts in their field. They were very easy to
              work with, polite, communicated efficiently, were transparent
              about their process, well-organized and had great time management
              skills. In fact, often times they completed tasks faster than we
              agreed upon. If you are looking for a high-quality development
              team, do not hesitate to use Lumunate’s services.”
            </p>
            <p className="md:text-[26px] text-[14px] mt-5">
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
