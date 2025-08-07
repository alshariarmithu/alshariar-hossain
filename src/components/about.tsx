import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center py-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="img1.jpg"
                alt="Al Shariar Hossain"
                className="relative w-75 h-75 lg:w-85 lg:h-85 rounded-3xl object-cover shadow-2xl transform group-hover:scale-[1.02] transition duration-300"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl lg:text-3xl font-medium text-slate-800 mb-8 tracking-wide">
                Al Shariar Hossain
              </h3>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  Computer Science and Engineering undergraduate at{" "}
                  <span className="text-slate-800 font-medium">
                    Khulna University of Engineering & Technology (KUET)
                  </span>
                  , currently in my 3rd year with a strong academic foundation.
                </p>

                <p>
                  Passionate about{" "}
                  <span className="text-slate-800 font-medium">
                    Machine Learning and Artificial Intelligence
                  </span>
                  , exploring how algorithms can learn patterns and make
                  intelligent decisions. I'm also developing expertise in web
                  and mobile application development.
                </p>

                <p>
                  I believe in continuous learning and contributing meaningfully
                  to the tech community through innovative projects and research
                  that create positive societal impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
