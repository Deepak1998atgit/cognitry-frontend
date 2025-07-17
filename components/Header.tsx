"use client";
import { useState } from "react";
import { HiChevronRight } from 'react-icons/hi';
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Programs", "Courses", "Sparkventure 2.0", "Contact"];
  return (
    <header className="bg-black text-white w-full font-proxima">
      <div className="flex justify-between items-center h-32 pr-16 pl-3">
        <a href="#" className="flex items-center" aria-label="Cognitry Home">
          <Image
            src="/cognitry_logo.png"
            alt="Cognitry logo with colorful dot cluster"
            width={144}
            height={60}
            priority
          />
        </a>
        <nav className="hidden md:flex items-center space-x-7" aria-label="Main navigation">
          <ul className="flex space-x-7 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-[15px] hover:text-[#ffbf23] tracking-wide">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-[#ffbf23] flex items-center justify-center text-black text-[13.5px] tracking-widest pl-2 pr-1 h-[38px] w-[128px] hover:bg-white transition ml-2"
          >
            <span className="pt-0.5">Get Started</span>
            <HiChevronRight size={21} className="relative top-[0.5px]" />
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black z-50 transform transition-all duration-700 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 mt-8" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`${
                item === "Home" ? "text-gray-500 font-semibold" : "font-bold"
              } text-lg transform transition-all duration-700 ease-in-out ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

