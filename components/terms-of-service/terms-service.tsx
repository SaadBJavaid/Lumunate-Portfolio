import Link from "next/link";
import React from "react";

const TermsService = () => {
  return (
    <section className=" y-12 md:py-20  px-4 sm:px-6">
      <div className="container mx-auto max-w-[1440px] ">
        <h1 className="text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl max-w-5xl mx-auto ">
          Terms of Service (TOS)
        </h1>
        <div className="my-4 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">Welcome to Lumunate!</h2>
          <p className="text-[14px] leading-[35px]">
            These Terms of Service (“Terms”) govern your access to and use of
            our website and services. By using our services, you agree to comply
            with and be bound by the following terms. Please read these Terms
            carefully before accessing or using our website or services.
          </p>
        </div>
        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            1. Acceptance of Terms
          </h2>
          <p className="text-[14px] leading-[35px]">
            By accessing and using our services, you agree to these Terms. If
            you do not agree with these Terms, please refrain from using our
            services.
          </p>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">2. Services Provided</h2>
          <p className="text-[14px] leading-[35px]">
            Lumunate offers a wide range of digital services, including but not
            limited to:
          </p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Systems Integration</li>
            <li>Custom Software Development</li>
            <li>Digital Marketing Solutions</li>
            <li>IT Consulting</li>
          </ul>

          <p className="text-[1rem] italic">
            All services are subject to the terms outlined in individual
            contracts or agreements established between Lumunate and its
            clients.
          </p>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            3. User Responsibilities
          </h2>
          <p className="text-[14px]">By using our services, you agree to:</p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Provide <b>accurate and complete information</b> during project
              engagements.
            </li>
            <li>Maintain the <b>confidentiality</b> of your account credentials.</li>
            <li>
              Comply with all <b>applicable laws and regulations</b> while using our
              services.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">4. Payment Terms</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Payment terms will be <b>specified in a separate agreement or invoice</b>
              for each project.
            </li>
            <li>
              Payments are expected to be <b>made on time</b> as per the agreement.
              Delays in payment may result in <b>service suspension.</b>
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            5. Project Timelines & Delivery
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Lumunate will make every effort to meet the <b>agreed project
              timelines</b> for completion.
            </li>
            <li>
              Unforeseen circumstances, client-side delays, or project scope
              changes may impact delivery times.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            6. Intellectual Property
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              All content, designs, and materials created by Lumunate remain
              <b>intellectual property</b> of Lumunate unless otherwise agreed in
              writing.
            </li>
            <li>
              Upon <b>full payment,</b> clients will be granted the right to use the
              delivered project for its intended purposes.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            7. Revisions and Modifications
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Project revisions will be <b>limited</b> to the number outlined in the
              agreement.
            </li>
            <li>Additional revisions may be subject to <b>extra fees.</b></li>
            <li>
              Changes in project scope after the start of the project will
              require a <b>new agreement</b> or modification to the original contract.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            8. Limitation of Liability
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Lumunate will not be liable for any <b>direct, indirect, incidental,
              or consequential damages</b> resulting from the use or inability to
              use our services.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">9. Termination</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Lumunate reserves the right to <b>terminate</b> your access to our
              services if the Terms are violated.
            </li>
            <li>
              Upon termination, all <b>licenses and rights</b> granted will cease
              immediately.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">10. Confidentiality</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Lumunate values <b>client confidentiality</b> and will take reasonable
              steps to ensure the protection of sensitive data shared during
              project engagements.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">11. Third-Party Links</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Our website may contain links to third-party websites. Lumunate
              does not endorse or assume responsibility for third-party content
              or services.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">12. Governing Law</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              These Terms are governed by the laws of <b>Pakistan.</b> Any disputes
              arising will be subject to the <b>exclusive jurisdiction</b> of Pakistani
              courts.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">13. Changes to Terms</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Lumunate reserves the right to modify these Terms at any time.
            </li>
            <li>Changes will become effective once posted on our website.</li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">14. Contact Us</h2>
          <p className="text-[1rem]">
            If you have any questions or concerns about these Terms, feel free
            to contact us:
          </p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              <Link
                href="mailto: info@lumunate.com"
                className="flex items-center"
              >
                <span className="hover:text-forest-400">
                <b>Email : </b>info@lumunate.com
                </span>
              </Link>
            </li>
            <li>
              <Link href="tel: +923361000001" className="flex items-center">
                <span className="hover:text-forest-400"><b>Phone : </b>+92 3361000001</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+923310200888"
                className="flex items-center"
              >
                <span className="hover:text-forest-400"><b>WhatsApp : </b>+92 3310200888</span>
              </Link>
            </li>
            <li>
            <b>Office Address:</b> Office # 2, 3rd Floor, Plaza 74, Bahria Springs
              (North) Commercial, Bahria Town Phase 7, Rawalpindi, Pakistan
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsService;
