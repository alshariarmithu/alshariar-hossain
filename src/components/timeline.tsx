import React from "react";
import { Award } from "lucide-react";

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Khulna University of Engineering & Technology (KUET)",
      duration: "2022 - Present",
      year: "2022",
      cgpa: "3.84",
      status: "Currently in 3rd Year",
      current: true,
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Islamabad Collegiate School Khulna",
      duration: "2019 - 2021",
      year: "2021",
      cgpa: "5.00",
      current: false,
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Islamabad Collegiate School Khulna",
      duration: "2017 - 2019",
      year: "2019",
      cgpa: "5.00",
      current: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3">
            Education Timeline
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            My academic journey and educational milestones
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="space-y-8 sm:space-y-10">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-400 shadow-sm z-10 flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.current ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <div
                  className={`ml-10 sm:ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  }`}
                >
                  <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-end mb-3">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          item.current
                            ? "bg-blue-100 text-blue-700"
                            : ""
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.institution}
                    </p>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          {item.current ? "CGPA" : "GPA"}
                        </span>
                      </div>
                      <span className="font-semibold text-lg text-gray-800">
                        {item.cgpa}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-2 rounded-lg shadow-sm">
                      <span className="text-sm font-medium tracking-wide">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
