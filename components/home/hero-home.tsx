import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section style={{ height: "calc(100vh - 77px" }} className=" ">
      <div className="mx-auto max-w-[1440px] h-full px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 h-full">
          {/* Section header */}
          <div className="text-center h-full flex flex-col">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl max-w-5xl mx-auto"
              data-aos="fade-up"
            >
              Empowering Your Business with
              <br />
              Cutting-Edge Digital Solutions
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-[14px] sm:text-lg text-[#E8FFF8]/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We specialize in web and mobile development, systems integration
                and digital marketing to help businesses thrive in today’s
                fast-paced digital world.
              </p>
            </div>
            
            <div
              className="max-w-[1440px] overflow-hidden flex-1 w-full"
              data-aos="fade-up"
            >
              <Image
                src={"/images/hero-img.png"}
                className="!h-full object-cover object-center"
                width={1623}
                height={538}
                layout="responsive"
                alt="Lumunate Portfolio - Hero"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-offset="0"
              data-aos-anchor-placement="top-bottom"
            >
              <Link
                className="btn group mb-4 bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 w-auto rounded-full px-16 mt-8"
                href="https://calendly.com/saad-b-javaid22/consultation"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Book a Free Discovery Session
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-2">
                    -&gt;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
