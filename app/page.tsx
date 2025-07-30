import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import CodePlaygroundSection from "@/components/code-playground-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F6FC] relative overflow-x-hidden">
      <Navigation />
      <ScrollProgress />
      <FloatingElements />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CodePlaygroundSection />
        <ContactSection />
      </main>
    </div>
  )
}
