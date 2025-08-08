"use client";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-0 lg:mt-0 mt-2 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-slate-800 shadow-lg mx-auto mb-6 sm:mb-8"
            src="profile.jpg"
            alt="Al Shariar Hossain"
          />
          <h4 className="text-xs sm:text-sm text-slate-600 mt-0.5 mb-1 font-semibold tracking-widest uppercase">
            Hello, I'm
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-2 sm:mb-3 tracking-tight leading-tight">
            Al Shariar Hossain
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-4 sm:mb-6 font-medium">
            CSE Undergrad @KUET
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mx-auto mb-8 sm:mb-12 max-w-4xl leading-relaxed px-4 sm:px-0">
            I'm passionate about Machine Learning, and currently diving into the
            world of Web and Mobile App Development. I love learning new
            technologies and building things that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 px-4 sm:px-0">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base py-4 px-8 sm:px-10 border-none rounded-lg cursor-pointer tracking-wide transition-all duration-300 ease-in-out bg-slate-800 text-white shadow-md hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-lg">
              Download CV
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base py-4 px-8 sm:px-10 border-2 border-slate-800 rounded-lg cursor-pointer tracking-wide transition-all duration-300 ease-in-out bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              Get In Touch
            </button>
          </div>
          <div className="mb-3 px-4 sm:px-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-3xl mx-auto">
              {[
                {
                  platform: "GitHub",
                  handle: "@alshariarmithu",
                  icon: Github,
                  link: "https://github.com/alshariarmithu",
                },
                {
                  platform: "LinkedIn",
                  handle: "alshariar.hossain",
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/alshariar-hossain/",
                },
                {
                  platform: "Email",
                  handle: "alshariarhossain@gmail.com",
                  icon: Mail,
                  link: "mailto:alshariarhossain@gmail.com",
                },
                {
                  platform: "Facebook",
                  handle: "alshariar.hossain.mithu",
                  icon: Facebook,
                  link: "https://facebook.com/alshariar.hossain.mithu",
                },
              ].map((social, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/90 cursor-pointer group"
                  onClick={() => {
                    if (social.platform === "Email") {
                      window.location.href = social.link;
                    } else {
                      window.open(social.link, "_blank");
                    }
                  }}
                >
                  <div className="flex flex-col items-center">
                    <social.icon
                      size={24}
                      className="text-slate-600 mb-2 group-hover:text-slate-800 transition-colors duration-300"
                    />
                    <span className="text-xs font-semibold text-slate-800 block mb-1">
                      {social.platform}
                    </span>
                    <span className="text-xs text-slate-600 font-normal break-all leading-tight">
                      {social.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
