"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/98 border-b border-slate-200 backdrop-blur-[20px] backdrop-saturate-180 transition-all duration-400 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-[18px] px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg sm:text-xl font-semibold text-slate-800 no-underline tracking-wide transition-all duration-300 ease hover:text-slate-900 hover:-translate-y-px"
        >
          Al Shariar Hossain
        </a>

        <ul className="hidden md:flex list-none items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="no-underline text-slate-600 font-medium text-base lg:text-lg relative py-2.5 px-0 tracking-wide hover:text-slate-800 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ease-in-out my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden bg-white/98 backdrop-blur-[20px] border-b border-slate-200 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col list-none py-4 px-4 sm:px-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="no-underline text-slate-600 font-medium text-lg block py-3 px-4 tracking-wide hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
