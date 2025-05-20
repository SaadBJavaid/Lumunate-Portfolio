import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Lumunate Portfolio - Blurred shape" />
      </div>
      <div className="mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[rgba(5,5,5,0.5)] via-forest-800/10 to-[rgba(5,5,5,0.5)] py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-menda text-[1.1rem] sm:text-[20px] font-medium text-transparent md:text-4xl"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              Let’s Build Your
              Vision Together
            </h2>
            <p className="text-[#E8FFF8A6] sm:text-[14px] text-[12px] font-normal md:text-[18px] font-raleway mb-4">
              Transform your ideas into reality with our cutting-edge web,
              mobile and IT solutions. Take the first step toward digital
              excellence today!
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway">
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay={400}
              >
                <Link
                  className="btn group mb-4 w-auto bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 rounded-full md:px-16 px-5 text-[12px] sm:text-[14px]"
                  href="https://calendly.com/saad-b-javaid22/consultation"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Start Your Project Today
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-2">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
