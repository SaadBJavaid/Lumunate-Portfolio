import React from "react";
import SliderComponent from "./SliderComponent";

const TestimonialSection = () => {
  return (
    <div id="testimonials" className="mx-auto max-w-[1440px] px-4 sm:px-6">
      {/* Section header */}
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
            <span className="inline-flex text-[14px] sm:text-[16px] bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-[1.3rem] font-medium text-transparent md:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="container mx-auto mt-16">
          <SliderComponent />
          <SliderComponent reverse={true} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
