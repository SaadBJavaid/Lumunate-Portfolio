import Image from "next/image";
import React from "react";

const HeroTermOfService = () => {
  return (
    <section style={{ height: "calc(100vh - 77px" }} className='mx-auto max-w-[1440px] flex flex-col justify-center'>
      <div >
        <Image
          src={"/newLogo.svg"}
          width={500}
          height={-1}
          alt="Footer logo"
          className="object-center !w-[350px] md:!w-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroTermOfService;
