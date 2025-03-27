"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "./Testimonials";


const SliderComponent = ({ reverse = false }) => {
  const [screenWidth, setScreenWidth] = useState(0);

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
          ["--slider-width" as string]: `${width}px`
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
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
};

export default SliderComponent;
