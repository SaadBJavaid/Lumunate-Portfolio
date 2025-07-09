import Image from "next/image";
import ContactFormClient from "./contact-form";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row max-w-[1440px] md:mx-auto px-4 sm:px-6 py-12 md:py-20 text-white"
    >
      <div className="lg:w-[40%] md:w-[45%] mb-6 flex flex-col items-center">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-menda text-[1.3rem] font-medium text-transparent md:text-[3.4rem] lg:text-6xl text-center">
          Let&apos;s <br className="md:block hidden"/>Connect
        </h2>
        <div  data-aos="fade-up" data-aos-offset="400"  className="md:flex flex-col mt-40 gap-y-2 h-full content-center  hidden">
          <div>
            <Link
              href="mailto: marketing@luminate.com"
              className="flex items-center"
            >
              <Image
                src="/images/icons/mail-outline.svg"
                alt="Lumunate Contact Form - Email"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[20px] hover:text-forest-400">marketing@lumunate.com</span>
            </Link>
          </div>
          <div>
            <Link
              href="tel: +923396100001"
              className="flex items-center"
            >
              <Image
                src="/images/icons/phone-flip.svg"
                alt="Lumunate Contact Form - Phone"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[16px] lg:text-[20px] hover:text-forest-400">+92 3396100001</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="https://wa.me/+923310200888"
              className="flex items-center"
            >
              <Image
                src="/images/icons/whatsapp.svg"
                alt="Lumunate Contact Form - Whatsapp"
                className="mr-4"
                width={24}
                height={24}
              />
              <span className="text-[16px] lg:text-[20px] hover:text-forest-400">+92 3310200888</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/icons/location-pin.svg"
              alt="Lumunate Contact Form - Location"
              className="mr-4"
              width={24}
              height={24}
            />
            <span className="text-[16px] lg:text-[20px] leading-7">Office # 2, 3rd Floor, Plaza 74, Bahria<br/>Springs (North) Commercial, Bahria<br/>Town Phase 7, Rawalpindi, Pakistan</span>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] md:w-[50%] w-[80%] mx-auto">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda font-medium text-transparent text-[22px] lg:text-[30px] md:block hidden">
          Let&apos;s Collaborate to Create Something Extraordinary
        </h2>
        <ContactFormClient/>
      </div>
    </div>
  );
}