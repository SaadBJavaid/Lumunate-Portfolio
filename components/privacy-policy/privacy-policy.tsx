import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className=" y-12 md:py-20  px-4 sm:px-6">
      <div className="container mx-auto max-w-[1440px] ">
        <h1 className="text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl max-w-5xl mx-auto ">
          Privacy Policy
        </h1>
        <div className="my-4 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">Introduction</h2>
          <p className="text-[14px] leading-[35px]">
            At <b>Lumunate,</b> we are committed to protecting your privacy. This
            Privacy Policy outlines the types of personal information we
            collect, how we use and safeguard it, and your rights regarding your
            personal data.
          </p>
        </div>
        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            1. Information We Collect
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
            <b>Personal Information:</b> Name, email, phone number, company
              information provided during sign-up or communication.
            </li>
            <li>
            <b>Technical Information:</b> IP address, browser type, operating system,
              usage statistics collected through cookies.
            </li>
            <li>
              <b>Project Information:</b> Specifications, design preferences, business
              details necessary for service delivery.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            2. How We Use Your Information
          </h2>
          <p className="text-[14px] leading-[35px]">
            We use your information to:
          </p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
            <b>Provide Services:</b> Deliver web development, app development, and <b>IT</b>
              solutions as requested.
            </li>
            <li>
            <b>Improve Our Website:</b> Enhance user experience through analytics.
            </li>
            <li>
              <b>Communicate with You:</b> Send project updates and respond to
              inquiries.
            </li>
            <li>
              <b>Marketing (With Consent):</b> Send promotional content and newsletters
              if opted in.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            3. Cookies and Tracking Technologies
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              We use <b>cookies</b> to improve website functionality and user
              experience.
            </li>
            <li>
              Cookies help us track <b>user behavior</b> and optimize our services.
            </li>
            <li>You can control cookies through your browser settings.</li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            4. How We Share Your Information
          </h2>
          <p className="text-[14px] leading-[35px]">
            We do not sell, trade, or rent your information. However, we may
            share it with:
          </p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
            <b>Service Providers:</b> Trusted third-party tools for hosting, payment,
              or analytics.
            </li>
            <li>
            <b>Legal Obligations:</b> When required by law or in legal proceedings.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">5. Data Security</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              We take reasonable steps to protect your personal data from
              <b>unauthorized access or alteration.</b>
            </li>
            <li>
              However, no method of transmission over the internet is 100%
              secure.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            6. Your Rights Regarding Your Information
          </h2>
          <p className="text-[14px] leading-[35px]">You have the right to:</p>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li><b>Access:</b> Request access to your personal data.</li>
            <li><b>Correction:</b> Request correction of inaccurate data.</li>
            <li>
              <b>Deletion:</b> Request deletion of personal data where legally
              applicable.
            </li>
            <li>
              <b>Opt-Out:</b> Withdraw consent for marketing communications at any
              time.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            7. Retention of Information
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              We retain personal information only for as long as necessary to
              provide services or as required by law.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">8. Third-Party Links</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>Our website may contain links to third-party services.</li>
            <li>Lumunate is <b>not responsible</b> for their privacy practices.</li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">9. Children's Privacy</h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>
              Our services are <b>not directed to children under 18 years old.</b>
            </li>
            <li>
              If you believe we have collected data from a minor, please contact
              us.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">
            10. Changes to This Privacy Policy
          </h2>
          <ul className="text-[14px] list-disc ml-10 leading-[35px] ">
            <li>We reserve the right to <b>update this policy</b> at any time.</li>
            <li>
              Continued use of our services after changes signifies <b>acceptance</b>
              of the updated policy.
            </li>
          </ul>
        </div>

        <div className="mb-4 pt-8 space-y-3 ">
          <h2 className=" text-[1rem] font-semibold ">14. Contact Us</h2>
          <p className="text-[1rem]">
            If you have any questions about this Privacy Policy, you can contact
            us:
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
                <span className="hover:text-forest-400">
                  <b>Phone : </b>+92 3361000001
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+923310200888"
                className="flex items-center"
              >
                <span className="hover:text-forest-400">
                  <b>WhatsApp : </b>+92 3310200888
                </span>
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

export default PrivacyPolicy;
