

export const metadata = {
  title: "Lumunate - Home",
  description: "Partner with Lumunate, a full-service digital agency offering web and mobile app development, IT consulting, cloud solutions, systems integration, digital marketing and custom CMS development. Delivering innovative, scalable, and user-centric technology solutions to drive your business growth.",
  keywords: ["Lumunate", "Portfolio", "Next.js", "React", "Web Development",
    "Mobile App Development",
    "IT Consulting",
    "Cloud Solutions",
    "Digital Marketing",
    "Custom Software",
    "API Integration",
    "SEO Optimization",
    "UX/UI Design",],
  authors: [
    { name: "Saad Javaid" },
    { name: "Lumunate" }
  ],
};

import PageIllustration from "@/components/home/page-illustration";
import Hero from "@/components/home/hero-home";
import Workflows from "@/components/home/workflows";
import Features from "@/components/home/features";
import Cta from "@/components/home/cta";
import WhyChooseUs from "@/components/home/why-choose-us";
import ContactForm from "@/components/home/contact-us";
import OurTeam from "@/components/home/our-team";
import TestimonialSection from "@/components/home/testimonial/TestimonialSection";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Workflows />
      <TestimonialSection/>
      <OurTeam/>
      <ContactForm />
      <Cta />
    </>
  );
}
