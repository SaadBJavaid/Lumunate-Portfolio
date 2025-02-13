import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-52 py-12 px-4 sm:px-6">
        <div>
          <h1 className=" animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.5rem] font-medium text-transparent md:text-[56px]">
            Product Features{" "}
          </h1>
        </div>
        <div className="flex md:flex-row flex-col border border-[#555555] rounded-[29px] md:mt-[60px] mt-4 items-center text-[#FFFFFFA6]">
          <div className=" h-[100%] md:w-[702px] w-full flex justify-center">
            <div className="md:max-w-[526px] w-full">
              <div className="md:p-0 p-3">
                <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text md:pb-4 pb-2 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
                  Market Analysis
                </h1>
              </div>
              <div className="  md:mt-[20px] mt-0">
                <ul className="md:text-[22px] text-[14px] list-disc font-medium md:pl-0 pl-5">
                  <li>Access to in-depth market data and insights</li>
                  <li>Historical price tracking and trend analysis</li>
                  <li>Bubble visualization for intuitive market comparisons</li>
                  <li>
                    News and post creation for staying updated with crypto
                    trends
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full mt-10 md:mt-0">
            <Image
              className=" scale-[1.01]"
              src="/koinfolio/analysisPic.png"
              alt=""
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col border border-[#555555] rounded-[29px] md:mt-[60px] mt-10 items-center  text-[#FFFFFFA6]">
          <div className=" h-[100%] md:w-[702px] w-full flex justify-center">
            <div className="md:max-w-[526px] w-full">
                <div className="md:p-0 p-3">

              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text md:pb-4 pb-2 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
                Portfolio Management
              </h1>
                </div>
              <div className="  md:mt-[20px] mt-0">
                <ul className="md:text-[22px] text-[14px] list-disc font-medium md:pl-0 pl-5">
                  <li>
                    Real-time tracking of cryptocurrency assets and holdings
                  </li>
                  <li>
                    Customizable dashboards for personalized portfolio views
                  </li>
                  <li>Dynamic coin comparisons for performance analysis</li>
                  <li>
                    Advanced asset management tools for better decision-making
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[702px] w-full mt-10 md:mt-0">
            <Image
              className=" scale-[1.01]"
              src="/koinfolio/management.png"
              alt=""
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
