import Image from "next/image";
import { describe } from "node:test";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Saad Javaid",
      role: "CEO",
      description: "Strategic leadership and business growth.",
      description2:
        "Saad defines Lumunate’s vision and growth strategies, ensuring project success while empowering the entire team to deliver impactful results.",
      image: "/images/team/Saad.png",
      alt:"Lumunate Our Team - Saad Javaid",
    },
    {
      name: "Anas Bin Arif",
      role: "CTO",
      description: "Technical strategy and innovation.",
      description2:
        "Anas drives technical excellence, leading the development team with expertise in all tech stacks and scalable architectures.",
      image: "/images/team/Anas.png",
      alt:"Lumunate Our Team - Anas Bin Arif",
    },
    {
      name: "Sherbano",
      role: "CMO",
      description: "Marketing leadership and brand growth.",
      description2:
        "The CMO leads brand strategy, ensuring data-driven campaigns, audience engagement and business visibility for Lumunate and its clients.",
      image: "/images/team/sherbano.png",
      alt:"Lumunate Our Team - Sherbano",
    },
    {
      name: "Faizan Haq",
      role: "Team Lead (Development)",
      description: "Technical project oversight and execution.",
      description2:
        "Faizan manages the development lifecycle, ensuring technical quality, code consistency and on-time project delivery.",
      image: "/images/team/faizan.png",
      alt:"Lumunate Our Team - Faizan Haq",
    },
    {
      name: "Romaisa",
      role: "Team Lead (Creative)",
      description: "Creative direction and design strategy.",
      description2:
        "Romaisa leads the creative team, overseeing the design process and ensuring visually compelling brand storytelling.",
      image: "/images/team/romaisa.png",
      alt:"Lumunate Our Team - Romaisa",
    },
    {
      name: "Hassan",
      role: "Lead Fullstack Developer",
      description: "Strategic leadership and business growth.",
      description2:
       "Strategic leadership and business growth.",
      image: "/images/team/Saad.png",
      alt:"Lumunate Our Team - Hassan",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-20 py-12 px-4 sm:px-6">
        <h1
          className="mb-[32px] text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          Meet Our Team
        </h1>
        <div className="mx-auto max-w-[960px] grid md:grid-cols-3 grid-col-1 gap-6 ">
          {teamMembers.map((member, index) => {
            return (
              <div key={index} className="w-[303px] mx-auto relative  group  ">
                <div className="">
                  <Image
                    className="!w-full object-cover "
                    src={member.image}
                    alt={member.alt}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="absolute bottom-0 z-50  w-full backdrop-blur-md rounded ">
                  <div className=" flex flex-col items-center p-3 ">
                    <h3 className="text-[1.25rem]">{member.role}</h3>
                    <p className="text-[1.25rem] font-bold">{member.name}</p>
                    <p className="text-center group-hover:hidden block text-[14px]">
                      {member.description}
                    </p>
                    <p className="text-center hidden group-hover:block transition-all duration-150 text-[14px]">
                      {member.description2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
