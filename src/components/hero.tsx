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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base py-4 px-8 sm:px-10 border-none rounded-lg cursor-pointer tracking-wide transition-all duration-300 ease-in-out bg-slate-800 text-white shadow-md hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-lg">
              Download CV
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base py-4 px-8 sm:px-10 border-2 border-slate-800 rounded-lg cursor-pointer tracking-wide transition-all duration-300 ease-in-out bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 hover:shadow-md">
              Get In Touch
            </button>
          </div>
          <div className="mb-3 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {[
              { number: "3.84", label: "CGPA" },
              { number: "5+", label: "PROJECTS" },
              { number: "2", label: "PUBLICATIONS" },
              { number: "2", label: "AWARDS" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white/90"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 block mb-2 sm:mb-3">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
