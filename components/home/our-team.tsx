import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Saad Javaid",
      role: "CEO",
      description: "Strategic leadership and business growth.",
      description2:
        "Saad defines Lumunate’s vision and growth strategies, ensuring project success while empowering the entire team to deliver impactful results.",
      image: "/images/team-members/Saad.png",
      alt: "Lumunate Our Team - Saad Javaid",
    },
    {
      name: "Anas Bin Arif",
      role: "CTO",
      description: "Technical strategy and innovation.",
      description2:
        "Anas drives technical excellence, leading the development team with expertise in all tech stacks and scalable architectures.",
      image: "/images/team-members/Anas.jpeg",
      alt: "Lumunate Our Team - Anas Bin Arif",
    },
    {
      name: "Sherbano",
      role: "CMO",
      description: "Marketing leadership and brand growth.",
      description2:
        "The CMO leads brand strategy, ensuring data-driven campaigns, audience engagement and business visibility for Lumunate and its clients.",
      image: "/images/team-members/sherbano.jpeg",
      alt: "Lumunate Our Team - Sherbano",
    },
    {
      name: "Faizan Haq",
      role: "Team Lead (Development)",
      description: "Technical project oversight and execution.",
      description2:
        "Faizan manages the development lifecycle, ensuring technical quality, code consistency and on-time project delivery.",
      image: "/images/team-members/faizan.jfif",
      alt: "Lumunate Our Team - Faizan Haq",
    },
    {
      name: "Romaisa",
      role: "Team Lead (Creative)",
      description: "Creative direction and design strategy.",
      description2:
        "Romaisa leads the creative team, overseeing the design process and ensuring visually compelling brand storytelling.",
      image: "/images/team-members/romaisa1.jpeg",
      alt: "Lumunate Our Team - Romaisa",
    },
    {
      name: "Heer",
      role: "Content Marketing Lead",
      description: "Strategic leadership and business growth.",
      description2:
        "Specializes in content strategy and execution by focusing on audience engagement, storytelling excellence and results-driven campaigns that elevate brand presence.",
      image: "/images/team-members/Heer.jpeg",
      alt: "Lumunate Our Team - Heer",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-[1440px] md:py-20 py-12 px-4 sm:px-6">
        <h1 className="mb-[32px] text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl max-w-5xl mx-auto">
          Meet Our Team
        </h1>
        <div className="mx-auto max-w-[960px] grid md:grid-cols-3 grid-col-1 gap-6 ">
          {teamMembers.map((member, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={400}
                key={index}
                className="w-[303px] p-[8px] mx-auto border-opacity-70 border border-forest-900 rounded-2xl group"
              >
                <div className="relative w-[287px] rounded-2xl h-[360px]">
                  <div className="h-full">
                    <Image
                      className="!w-full rounded-2xl h-full object-cover "
                      src={member.image}
                      alt={member.alt}
                      width={100}
                      height={360}
                      quality={100}
                      unoptimized
                    />
                  </div>
                  <div className="absolute rounded-2xl bottom-0 z-20 h-[105px] group-hover:h-[194px] overflow-hidden transition-all duration-300 w-full backdrop-blur-[8px] text-[#E8FFF8A6]">
                    <div className=" flex flex-col items-center group-hover:px-0 p-3 ">
                      <h5 className="text-[1.25rem] font-normal">
                        {member.role}
                      </h5>
                      <h4 className="text-[1.25rem] font-bold mt-1">
                        {member.name}
                      </h4>
                      <p className="text-center italic group-hover:hidden block text-[14px]">
                        &quot;{member.description}&quot;
                      </p>
                      <p className="text-center italic hidden group-hover:block transition-all duration-300 text-[14px] px-[8px]">
                        &quot;{member.description2}&quot;
                      </p>
                    </div>
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
