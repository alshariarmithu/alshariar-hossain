"use client"

import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Calendar,
  Code,
  Users,
  Award,
} from "lucide-react";

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      status: "Completed",
      duration: "3 months",
      team: "4 members",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com",
      featured: true,
      completion: "2024",
    },
    {
      id: 2,
      title: "AI-Powered Chat Application",
      description:
        "Real-time messaging platform integrated with AI assistant capabilities, featuring smart responses and automated customer support.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "WebSocket", "OpenAI"],
      category: "ai",
      status: "In Progress",
      duration: "2 months",
      team: "Solo",
      githubUrl: "https://github.com/username/ai-chat",
      liveUrl: null,
      featured: true,
      completion: "2024",
    },
    {
      id: 3,
      title: "Mobile Finance Tracker",
      description:
        "Cross-platform mobile application for personal finance management with data visualization and budget planning features.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Chart.js"],
      category: "mobile",
      status: "Completed",
      duration: "4 months",
      team: "2 members",
      githubUrl: "https://github.com/username/finance-app",
      liveUrl: "https://play.google.com/store/apps",
      featured: false,
      completion: "2023",
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for business intelligence with real-time data visualization and comprehensive reporting system.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "PostgreSQL", "Docker"],
      category: "web",
      status: "Completed",
      duration: "6 months",
      team: "5 members",
      githubUrl: "https://github.com/username/analytics",
      liveUrl: "https://analytics-demo.com",
      featured: false,
      completion: "2023",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing technical expertise and
            problem-solving capabilities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category.key
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image - Left Side */}
                <div className="lg:w-2/5 relative">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gray-900 text-white px-3 py-1 rounded-md text-xs font-medium flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Project Details - Right Side */}
                <div className="lg:w-3/5 p-8">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta Information */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            <Code className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
