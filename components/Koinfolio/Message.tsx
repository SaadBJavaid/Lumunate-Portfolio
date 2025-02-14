import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] py-24  px-4 sm:px-6">
        <div className="mx-auto md:max-w-[1110px] relative">
            <div className=" absolute lg:-top-20 -top-6 md:-top-8 -left-2 lg:-left-20">
            <Image className="!w-[24px] md:!w-[40px] lg:!w-[70px]"
              src="/koinfolio/quotation.png"
              alt=""
              width={70}
              height={58}
              />
            </div>
          <div>
            <p className="lg:text-[36px] md:text-[24px]  text-[14px] md:leading-[45px]">
              “The team at Lumunate is simply the best. They do the best jobs as
              always and have brought our idea for Koinfolio to life. Will
              continue the work with them for sure!”
            </p>
            <p className="md:text-[26px] text-[14px] mt-5">Ebrahim - <span className="text-[#8A9688]">CEO Koinfolio</span></p>
          </div>
          <div className=" flex justify-end">
            <Image className=" !w-[145px] md:!w-[245px]"
              src="/koinfolio/logo.png"
              alt=""
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
