"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient =new QueryClient();

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });


  return (
    <>
    <QueryClientProvider client={queryClient} >
      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
    </QueryClientProvider>
    </>
  );
}
