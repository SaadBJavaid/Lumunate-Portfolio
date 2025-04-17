"use client";

import Image from "next/image";
import { useSpotlight } from "@/components/animations/spotlight-hook";
import Link from "next/link";

export default function WhyChooseUs() {
  const containerRef = useSpotlight();

  return (
    <section id="about" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src="/images/blurred-shape-gray.svg"
          width={760}
          height={668}
          alt="Lumunate About Us - Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src="/images/blurred-shape.svg"
          width={760}
          height={668}
          alt="Lumunate About Us - Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="py-12 mx-auto w-fit sm:w-auto">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
              <span className="inline-flex text-[12px] sm:text-[16px] bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                About Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.1rem] font-medium text-transparent md:text-4xl">
              Why Choose Lumunate?
            </h2>
          </div>

          {/* Items container with spotlight effect */}
          <div className="relative flex justify-center" ref={containerRef}>
            <div className=" grid max-w-sm gap-2 sm:max-w-none sm:grid-cols-[auto_1px_auto] md:gap-x-12 md:gap-y-16 gap-y-12 lg:grid-cols-[auto_1px_auto_1px_auto] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] py-20 sm:px-8 px-2 border-[1px] border-[#374151] rounded-2xl">
              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/Frame 2.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - Frame"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    Agile Development Processes
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Speed, flexibility, and innovation
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  At Lumunate, we combine innovation with expertise to deliver
                  IT solutions tailored to your unique business needs. From
                  responsive web applications to seamless systems integration,
                  we turn ideas into impactful digital experiences.
                </p>
              </article>
              {/* //vertical line for large screen */}
              <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
              {/* //horizontal line for small screen */}
              <div className="sm:hidden block w-[80%] mx-auto h-[1px] bg-[linear-gradient(to_right,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/workflow.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - work Flow"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    Flexible Workflow Management
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Workflows tailored to your business
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  Whether you&apos;re a solopreneur or an enterprise, our
                  solutions streamline your workflows, enabling teams to
                  collaborate seamlessly and achieve more in less time.
                </p>
              </article>

              <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
              {/* //horizontal line for small screen */}
              <div className="sm:hidden block w-[80%] mx-auto h-[1px] bg-[linear-gradient(to_right,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/market-analysis.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - Market Analysis"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    Results-Oriented Approach
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Your success is our priority
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  At Lumunate, we don&apos;t just build solutions; we deliver
                  measurable results. Our team works with you to understand your
                  objectives, ensuring every project aligns with your vision and
                  drives success.
                </p>
              </article>

              <div className="lg:hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
              {/* //horizontal line for small screen screen */}
              <div className="sm:hidden block w-[80%] mx-auto h-[1px] bg-[linear-gradient(to_right,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/network-tree.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - Network"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    End-to-End IT Support
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Support at every step.
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  From consultation to deployment and beyond, we offer
                  comprehensive IT support to ensure your digital solutions
                  perform at their best. We&apos;re with you every step of the
                  way
                </p>
              </article>

              <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
              {/* //horizontal line for small screen screen */}
              <div className="sm:hidden block w-[80%] mx-auto h-[1px] bg-[linear-gradient(to_right,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/Lock-Cloud.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - Lock Cloud"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    Enterprise-Grade Cloud Solutions
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Innovation in the cloud.
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  Accelerate your digital transformation with our secure and
                  scalable cloud services. We build cloud-native applications
                  and optimize infrastructure to meet the demands of your
                  business.
                </p>
              </article>

              <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>
              {/* //horizontal line for small screen screen */}
              <div className="sm:hidden block w-[80%] mx-auto h-[1px] bg-[linear-gradient(to_right,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

              <article data-aos="fade-up" data-aos-offset="300">
                <Image
                  className="mb-2"
                  src="/images/icons/file-securtiry.svg"
                  width={29}
                  height={29}
                  alt="Lumunate About Us - File Security"
                />
                <div className="mb-4">
                  <h3 className="font-menda font-semibold text-[14px] sm:text-[1rem] text-gray-200">
                    Advanced Data Security
                  </h3>
                  <h4 className="font-raleway font-normal text-[14px] sm:text-[1rem] text-forest-500 mt-1">
                    Your data, protected.
                  </h4>
                </div>
                <p className="text-white/85 sm:text-base text-xs">
                  Trust Lumunate to safeguard your sensitive information. We
                  implement robust security protocols and compliance standards,
                  ensuring your data is secure in every project we handle.
                </p>
              </article>
            </div>

            {/* Spotlight overlay */}
            <div
              className="absolute inset-0 pointer-events-none select-none rounded-2xl"
              style={{
                opacity: "var(--opacity, 0)",
                transition: "opacity 500ms",
                background:
                  "radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(0, 162, 112, 0.3), transparent 40%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway mt-8">
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <Link
                className="btn group mb-4 w-auto bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 rounded-full px-16"
                href="https://calendly.com/saad-b-javaid22/consultation"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Let&apos;s work together{" "}
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
