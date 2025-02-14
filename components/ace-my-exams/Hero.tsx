import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-24 py-12 px-4 sm:px-6">
        <div className="flex md:flex-row flex-col items-center text-[#FFFFFFA6]">
          <div className="md:w-[835px] w-auto ">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
              AceMyExams
            </h1>
            <div className=" max-w-[620px] md:mt-[20px] mt-2">
              <p className="md:text-[22px] text-[14px] font-medium ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat accusantium animi magni eum debitis nobis autem laborum dolor saepe magnam dolore sed natus explicabo, quibusdam quam ipsa in hic.Voluptate provident doloribus numquam rem aperiam, officiis ullam quia possimus distinctio qui ex dolor iste cumque error dignissimos sunt voluptatem, velit sint similique commodi quidem aut libero. Voluptates, corporis dolore.
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
              <Link className="hover:text-blue-500 hover:underline"
                href="https://koinfolio.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <a className="text-blue-500 hover:underline"> */}
                  https://koinfolio.com/en
                {/* </a> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="md:mt-[105px] mt-16">
          <Image
            src="/koinfolio/koinfolio.png"
            alt="Lumunate AceMyExams - Hero"
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
