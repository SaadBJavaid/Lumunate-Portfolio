import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] py-24  px-4 sm:px-6">
        <div className="mx-auto lg:max-w-[1110px] relative">
            <div className=" absolute xl:-top-20 -top-6 md:-top-10 -left-2 xl:-left-20">
            <Image className="!w-[24px] md:!w-[40px] xl:!w-[70px]"
              src="/koinfolio/quotation.png"
              alt="Lumunate Fast Clean - Quotation"
              width={70}
              height={58}
              />
            </div>
          <div className=" px-4 xl:px-0">
            <p className="xl:text-[36px] md:text-[24px]  text-[14px] md:leading-[45px]">
            “Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience. We’ve received rave reviews from our users and the app has seen tremendous growth since it s launch. Will be back for future upgrades!”
            </p>
            <p className="md:text-[26px] text-[14px] mt-5">Felicio Perk - <span className="text-[#8A9688]">CEO Fast Clean</span></p>
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
