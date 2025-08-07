import HeroSection from "@/components/hero";
import About from "@/components/about";
import EducationTimeline from "@/components/timeline";
import ProjectsShowcase from "@/components/project";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <EducationTimeline />
      <ProjectsShowcase />
    </>
  );
}
