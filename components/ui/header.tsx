"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-forest-900/10 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="sm:flex items-center justify-end md:gap-10 gap-6 hidden">
            <li>
              <Link
                href="#services"
                className="hover:text-forest-400 duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-forest-400 duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="hover:text-forest-400 duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="hover:text-forest-400 duration-200"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-forest-400 duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://calendly.com/saad-b-javaid22/consultation"
                target="_blank"
                className="btn-sm  bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
