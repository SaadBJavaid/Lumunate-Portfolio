import ContactFormClient from "./contact-form";

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