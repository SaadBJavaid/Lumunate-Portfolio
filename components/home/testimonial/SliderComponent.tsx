"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import flagsLinks from "../flags/Flags";

const SliderComponent = ({ reverse = false }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  const testimonials = [
    {
      id: 1,
      clientImg: "/images/logos/map-mavens.png",
      clientImgAlt: "Lumunate Testimonials - Logo Map Mavens",
      name: "Henry",
      company: "CEO Map Mavens",
      flag: flagsLinks.usa,
      flagAlt: "Lumunate Testimonials - Flag US",
      content:
        "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience.We’ve received rave reviews from our users and the app has seen tremendous growth since its launch.Will be back for future upgrades!",
      h: 36,
      w: 38,
      invertProp: "",
    },
    {
      id: 2,
      clientImg: "/images/logos/dify-ai.png",
      clientImgAlt: "Lumunate Testimonials - Logo Dify Ai",
      name: "Luc Elsby",
      company: "Dify.AI",
      flag: flagsLinks.uk,
      flagAlt: "Lumunate Testimonials - flag UK",
      content:
        "Working with the team at Lumunate, in software development, was an excellent experience. As always they went above and beyond, to deliver quality outputs for us, providing post-deployment support. Very proactive communication and a deep understanding, making the whole process smooth and enjoyable!",
      w: 60,
      h: 38,
      invertProp: "",
    },
    {
      id: 3,
      clientImg: "/images/logos/fast-clean.png",
      clientImgAlt: "Lumunate Testimonials - Logo Fast Clean",
      name: "Felicio",
      company: "CEO Fast CLean Service",
      flag: flagsLinks.netherlands,
      flagAlt: "Lumunate Testimonials - Flag Netherlands",
      content:
        "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience. We’ve received rave reviews from our users and the app has seen tremendous growth since it s launch. Will be back for future upgrades!",
      w: 70,
      h: 38,
      invertProp: "",
    },
    {
      id: 4,
      clientImg: "/images/logos/real-outlet.png",
      clientImgAlt: "Lumunate Testimonials - Logo Real Outlet",
      name: "Ivavisocka",
      company: "CEO The Real Outlet",
      flag: flagsLinks.latvia,
      flagAlt: "Lumunate Testimonials - Flag Latvia",
      content:
        "“The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w: 52,
      h: 36,
      invertProp: "filter invert",
    },
    {
      id: 5,
      clientImg: "/images/logos/zeal.png",
      clientImgAlt: "Lumunate Testimonials - Logo Zeal",
      name: "Nir",
      company: "",
      flag: flagsLinks.peru,
      flagAlt: "Lumunate Testimonials - Flag Peru",
      content:
        "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w: 28,
      h: 36,
      invertProp: "",
    },
    {
      id: 6,
      clientImg: "/images/logos/active-campaign.png",
      clientImgAlt: "Lumunate Testimonials - Logo Active Campaign",
      name: "Ofirsilbiger",
      company: "",
      flag: flagsLinks.sweden,
      flagAlt: "Lumunate Testimonials - Flag Sweden",
      content:
        "“Quite proactive with communication, great attention to detail and very prompt with delivering the final project. 5 stars, would certainly recommend",
      w: 120,
      h: 36,
      invertProp: "",
    },
    {
      id: 7,
      clientImg: "/images/logos/audiodrome.png",
      clientImgAlt: "Lumunate Testimonials - Logo Audio Drome",
      name: "Dave Newell",
      company: "",
      flag: flagsLinks.usa,
      flagAlt: "Lumunate Testimonials - Flag US",
      content:
        "They were great! Took time to understand what I needed, quickly worked to deliver the project for me and then worked with me to make a few revisions to get it exactly how I wanted it. I will definitely work with them again and recommend them to anyone looking for reliable and excellent work",
      w: 122,
      h: 36,
      invertProp: "",
    },
    {
      id: 8,
      clientImg: "/images/logos/legacy-distrubuting.png",
      clientImgAlt: "Lumunate Testimonials - Logo Legacy Distributing",
      name: "Katelyn",
      company: "Legacy Distributing",
      flag: flagsLinks.usa,
      flagAlt: "Lumunate Testimonials - Flag US",
      content:
        "Fantastic job! Was very easy to get this project done and I will definitely use them for future needs, time and time again. Wonderful experience.",
      w: 50,
      h: 36,
      invertProp: "",
    },
    {
      id: 9,
      clientImg: "/images/logos/koinfolio.png",
      clientImgAlt: "Lumunate Testimonials - Logo Koinfolio",
      name: "Ebrahim",
      company: "CEO Koinfolio",
      flag: flagsLinks.germany,
      flagAlt: "Lumunate Testimonials - Flag Germany",
      content:
        "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!",
      w: 96,
      h: 21,
      invertProp: "",
    },
    {
      id: 10,
      clientImg: "/images/logos/ace-my-exam.png",
      clientImgAlt: "Lumunate Testimonials - Logo AceMyExam",
      name: "Asma",
      company: "CEO Acemyexam",
      flag: flagsLinks.uk,
      flagAlt: "Lumunate Testimonials - Flag UK",
      content:
        "Working with Lumunate was an absolute game-changer for us. We had been struggling with an incomplete app built on Django, and it felt like we’d hit a dead end. The team at Lumunate not only understood our challenges but also took the time to truly grasp our vision. They rebuilt our tutoring platform from the ground up using Next.js, and the difference has been night and day. We couldn’t recommend them more highly!",
      w: 110,
      h: 36,
      invertProp: "",
    },
    {
      id: 11,
      clientImg: "/images/logos/thomas.png",
      clientImgAlt: "Lumunate Testimonials - Logo Marketing Captain",
      name: "Thomas",
      company: "The Marketing Captain",
      flag: flagsLinks.netherlands,
      flagAlt: "Lumunate Testimonials - Flag Netherlands",
      content:
        "This was a very big project of mine and needed some helpen from them. They’ve done exactly what was needed to get the end result for my marketing agency. Happy with the expertise and knowledge and looking forward to work more with them in the future. Thanks!",
      w: 60,
      h: 36,
      invertProp: "",
    },
    {
      id: 12,
      clientImg: "/images/logos/ayse.png",
      clientImgAlt: "Lumunate Testimonials - Logo Ayse",
      name: "Cathy Charles",
      company: "CEO Ayse",
      flag: flagsLinks.usa,
      flagAlt: "Lumunate Testimonials - Flag US",
      content:
        "I highly recommend working with Lumunate! The CEO and his team did a great job with helping me build my mobile application and they are clearly experts in their field. They were very easy to work with, polite, communicated efficiently, were transparent about their process, well-organized and had great time management skills. In fact, often times they completed tasks faster than we agreed upon. If you are looking for a high-quality development team, do not hesitate to use Lumunate’s services.",
      w: 103,
      h: 32,
      invertProp: "",
    },
  ];

  const width = screenWidth > 768 ? 500 : 350;
  const height = screenWidth > 768 ? 300 :  390;
  const quantity = testimonials.length;
  const animationDuration = 60;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="slider w-full overflow-hidden mb-8"
      style={{
        height: `${height}px`,
        maskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div
        className={`relative list flex transition-transform`}
        style={{
            width: '100%',
          minWidth: `calc(${width}px * ${quantity})`,
          position: "relative",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`relative rounded-2xl p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] bg-[linear-gradient(88.12deg,rgba(17,39,24,0.48)_3.17%,rgba(33,55,31,0.2304)_52.41%,rgba(17,39,24,0.48)_94.35%)]`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              position: "absolute",
            //   left: "100%",
              animation: reverse
                ? `reversePlay ${animationDuration}s linear infinite`
                : `autoRun ${animationDuration}s linear infinite`,
              animationDelay: `calc((${animationDuration}s / ${quantity}) * ${index} - ${animationDuration}s)`,
              transition: "filter 0.5s",
              filter: "grayscale(0)",
            }}
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex justify-between">
                <div>
                  <Image
                    className={testimonial.invertProp}
                    width={testimonial.w}
                    src={testimonial.clientImg}
                    height={testimonial.h}
                    alt={testimonial.clientImgAlt}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-sm mr-1"
                    width={40}
                    src={testimonial.flag}
                    height={20}
                    alt={testimonial.flagAlt}
                  />
                </div>
              </div>
              <p className="text-[#838AA7] before:content-['“'] after:content-['”']">
                {testimonial.content}
              </p>
              <div className="">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-gray-200">
                    <span>{testimonial.name}</span>
                    {testimonial.company && (
                      <span className="text-gray-700"> - </span>
                    )}
                    <span className="text-forest-200/65 transition-colors hover:text-forest-500">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(${width}px * -1);
          }
        }
        @keyframes reversePlay {
          from {
            left: calc(${width}px * -1);
          }
          to {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderComponent;
