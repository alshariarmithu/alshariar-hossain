"use client";
import React, { useState } from "react";

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item: string) => {
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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
      <div className="max-w-7xl mx-auto flex justify-between items-center py-[15px] px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavClick("Home")}
          className="text-lg sm:text-xl font-semibold text-slate-800 no-underline tracking-wide transition-all duration-300 ease hover:text-slate-900 hover:-translate-y-px bg-transparent border-none cursor-pointer"
        >
          Al Shariar Hossain
        </button>

        <ul className="hidden md:flex list-none items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className={`no-underline font-medium text-base lg:text-lg relative py-2.5 px-0 tracking-wide transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                  activeSection === item
                    ? "text-slate-800 font-semibold"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-800 rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none bg-transparent border-none"
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
              <button
                onClick={() => handleNavClick(item)}
                className={`no-underline font-medium text-lg block py-3 px-4 tracking-wide rounded-lg transition-all duration-300 w-full text-left bg-transparent border-none cursor-pointer ${
                  activeSection === item
                    ? "text-slate-800 bg-slate-100 font-semibold"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
