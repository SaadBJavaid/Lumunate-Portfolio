import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-24 py-12 px-4 sm:px-6">
        <div className="flex md:flex-row flex-col items-center text-[#FFFFFFA6]">
          <div className="md:w-[835px] w-auto ">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
              Fast Clean
            </h1>
            <div className=" max-w-[637px] md:mt-[20px] mt-2">
              <p className="md:text-[22px] text-[14px] font-medium ">
              Fast Clean Service is a comprehensive car detailing platform that revolutionizes the automotive cleaning industry through its sophisticated digital booking system. Built with Next.js and powered by advanced payment integrations, it offers seamless scheduling for both individual vehicles and fleet services. The platform features dynamic pricing based on vehicle types and locations, ensuring transparent and competitive rates for all customers. With its intuitive user interface and powerful admin capabilities, Fast Clean Service streamlines the entire detailing process from booking to completion. The integration of multiple payment gateways and real-time calendar synchronization makes it a versatile solution for modern car care needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end md:w-[556px] mt-10 md:mt-0 w-full gap-y-2">
            <div className="w-[100%] flex justify-between">
              <p>Technologies:</p>
              <p>Next.js Web Application</p>
            </div>
            <p className="h-[0.1px] bg-[#FFFFFFA6]" />
            <div className="w-[100%] flex justify-between">
              <p>Deliverables::</p>
              <p>Design, Website</p>
            </div>
            <p className="h-[0.1px] bg-[#FFFFFFA6]" />
            <div className="w-[100%] flex justify-between">
              <p>Preview:</p>
              <ul className="text-end">
                <li>Next.js</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>API Integration</li>
                <li>AWS S3</li>
                <li>render</li>
                <li>Google Calender API</li>
                <li>Redux</li>
                <li>Webhooks</li>
                <li>Payment Processing</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:mt-[105px] mt-16">
          <Image
            src="/fast-clean/fastClean.png"
            alt="Lumunate Fast Clean - Hero"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
