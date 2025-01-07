"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs, contactSchema } from "@/types/contact-us";
import { useState } from "react";
import { submitContactForm } from "./contact-form.action";

export default function ContactFormClient() {
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus({
          message: result.message,
          type: "success",
        });
        reset();
      } else {
        setSubmitStatus({
          message: result.message,
          type: "error",
        });
      }
    } catch {
      setSubmitStatus({
        message: "An unexpected error occurred. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <form data-aos="fade-up"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-[700px]"
    >
      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full h-[49px] mt-[15px] focus:ring-[rgb(0,162,112)] bg-transparent text-white border-x-0"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full h-[49px] mt-[15px] focus:ring-[rgb(0,162,112)] bg-transparent text-white border-x-0"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Message</label>
        <textarea
          placeholder="Message"
          {...register("message")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full focus:ring-[rgb(0,162,112)] mt-[15px] bg-transparent text-white border-x-0 min-h-[142px]"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="mx-auto">
        <button
          type="submit"
          className="btn  group mb-4 w-full bg-gradient-to-t from-forest-600 to-forest-500 hover:bg-gradient-to-t hover:from-forest-800 hover:to-forest-900 hover:transition-all hover:duration-150 text-white rounded-full px-8 py-3 text-[16px]"
        >
          <span className="relative inline-flex items-center">
            Send Message
          </span>
        </button>
      </div>
    </form>
  );
}
