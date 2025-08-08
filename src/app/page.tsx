"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/hero";
import About from "@/components/about";
import EducationTimeline from "@/components/timeline";
import ProjectsShowcase from "@/components/project";
import ContactComponent from "@/components/contact";
import Navbar from "@/components/navbar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="scroll-smooth">
        <section id="Home">
          <HeroSection />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Education">
          <EducationTimeline />
        </section>
        <section id="Projects">
          <ProjectsShowcase />
        </section>
        <section id="Contact">
          <ContactComponent />
        </section>
      </main>
    </>
  );
}
