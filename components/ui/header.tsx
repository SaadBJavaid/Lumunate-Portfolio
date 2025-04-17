"use client";

import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="z-30 mt-2 w-full md:mt-5 relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-forest-900/10 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          <ul className="sm:flex items-center justify-end md:gap-10 gap-6 hidden">
            <li>
              <Link href="/" className="hover:text-forest-400 duration-200">
                Home
              </Link>
            </li>
            <li className="relative group">
              <div className="cursor-pointer hover:text-forest-400 duration-200 py-4">
                Projects
              </div>
              <ul className="absolute -left-10 mt-0 top-[54px] hidden w-40 rounded-md bg-forest-900/30 backdrop-blur-md shadow-lg group-hover:block z-50">
                <li>
                  <Link
                    href="/projects/ayse"
                    className="block px-4 py-2  hover:text-forest-600"
                  >
                    Ayse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/zeal"
                    className="block px-4 py-2   hover:text-forest-600"
                  >
                    Zeal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/koinfolio"
                    className="block px-4 py-2   hover:text-forest-600"
                  >
                    Koinfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/fast-clean"
                    className="block px-4 py-2   hover:text-forest-600"
                  >
                    Fast Clean
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/map-mavens"
                    className="block px-4 py-2   hover:text-forest-600"
                  >
                    Map Mavens
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/ace-my-exams"
                    className="block px-4 py-2   hover:text-forest-600"
                  >
                    Ace My Exam
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-forest-400 duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-3 ">
            <Link
              href="https://calendly.com/saad-b-javaid22/consultation"
              target="_blank"
              className="btn-sm bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Let&apos;s Talk
            </Link>
            <button
              className="sm:hidden flex"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image
                src="/toggle.svg"
                alt="Toggle Menu"
                width={38}
                height={38}
              />
            </button>
          </div>
        </div>

        {/* Mobile Drop-down Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden rounded-md bg-forest-900/30 backdrop-blur-md p-4 space-y-3 shadow-md">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block hover:text-forest-400">
              Home
            </Link>

            {/* Projects Dropdown */}
            <div>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="font-medium mb-1 flex items-center justify-between w-full"
              >
                Projects
                <span>{projectsOpen ? "▲" : "▼"}</span>
              </button>
              {projectsOpen && (
                <ul className="space-y-1 pl-2 mt-1">
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/ayse"
                      className="block hover:text-forest-600"
                    >
                      Ayse
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/zeal"
                      className="block hover:text-forest-600"
                    >
                      Zeal
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/koinfolio"
                      className="block hover:text-forest-600"
                    >
                      Koinfolio
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/fast-clean"
                      className="block hover:text-forest-600"
                    >
                      Fast Clean
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/map-mavens"
                      className="block hover:text-forest-600"
                    >
                      Map Mavens
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setIsMobileMenuOpen(false)}
                      href="/projects/ace-my-exams"
                      className="block hover:text-forest-600"
                    >
                      Ace My Exam
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="block hover:text-forest-400">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
