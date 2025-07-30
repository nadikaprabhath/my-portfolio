"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowDown, Code, Zap } from "lucide-react"
import TypingAnimation from "./typing-animation"
import ParticleSystem from "./particle-system"
import AnimatedBackground from "./animated-background"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Nadika_Prabhath_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      <ParticleSystem />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-64 h-64 border border-[#58A6FF]/20 rounded-full animate-spin-slow"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-[#58A6FF]/10 to-[#A855F7]/10 rounded-lg rotate-45 animate-float"
          style={{
            right: `${mousePosition.x * -0.01}px`,
            top: `${mousePosition.y * 0.01 + 100}px`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated profile image */}
          <div className="relative mb-8 group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#58A6FF] shadow-2xl relative w-[180px] h-[180px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#58A6FF] to-[#A855F7] animate-pulse opacity-20" />
              <img
                src="/profile.JPG"
                alt="Nadika Prabhath - Full Stack Developer and Software Engineer"
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                crossOrigin="anonymous"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#58A6FF] to-[#A855F7] rounded-full blur-xl opacity-30 animate-pulse" />
          </div>

          {/* Animated greeting */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262D]/80 backdrop-blur-sm rounded-full border border-[#58A6FF]/30 mb-4">
              <div className="w-2 h-2 bg-[#3FB950] rounded-full animate-pulse" />
              <span className="text-sm text-[#8B949E]">Available for new opportunities</span>
            </div>
          </div>

          {/* Main heading with SEO optimized content */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-[#8B949E] text-lg sm:text-xl font-normal mb-2 animate-fade-in-up">
              Hello, I'm
            </span>
            <span className="block bg-gradient-to-r from-[#58A6FF] via-[#A855F7] to-[#58A6FF] bg-clip-text text-transparent animate-gradient-x bg-300% animate-fade-in-up animation-delay-200">
              Nadika Prabhath
            </span>
          </h1>

          {/* Dynamic role with enhanced animation */}
          <div className="text-2xl sm:text-4xl text-[#8B949E] mb-8 h-16 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <Code className="w-8 h-8 text-[#58A6FF] animate-pulse" />
              <TypingAnimation
                texts={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "React Developer",
                  "Node.js Expert",
                  "Web Developer",
                  "Software Architect",
                ]}
                className="font-mono"
              />
              <Zap className="w-8 h-8 text-[#A855F7] animate-bounce" />
            </div>
          </div>

          {/* Enhanced description with SEO keywords */}
          <p className="text-lg sm:text-xl text-[#8B949E] max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            Professional Full Stack Developer from Matara, Sri Lanka, specializing in React, Next.js, and Node.js. I
            transform complex business challenges into elegant digital solutions using cutting-edge web technologies.
            Expert in JavaScript, TypeScript, and modern software architecture. Let's build innovative web applications
            together.
          </p>

          {/* Advanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="group bg-gradient-to-r from-[#58A6FF] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#58A6FF] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[#58A6FF]/25 transition-all duration-300 transform hover:scale-105 relative"
            >
              <Mail className="mr-3 group-hover:animate-bounce" size={24} />
              Let's Connect
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="group border-2 border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF] hover:text-white px-10 py-4 text-lg font-semibold rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={24} />
              Download Resume
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-12 animate-fade-in-up animation-delay-800">
            {[
              { icon: Github, href: "https://github.com/nadikaprabhath", label: "GitHub - Nadika Prabhath" },
              { icon: Linkedin, href: "https://linkedin.com/in/nadikaprabhath", label: "LinkedIn - Nadika Prabhath" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-[#21262D]/50 backdrop-blur-sm rounded-xl border border-[#30363D] hover:border-[#58A6FF] transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                aria-label={social.label}
              >
                <social.icon
                  size={28}
                  className="text-[#8B949E] group-hover:text-[#58A6FF] transition-colors duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#58A6FF]/10 to-[#A855F7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-[#58A6FF] mx-auto" />
            <p className="text-sm text-[#8B949E] mt-2">Scroll to explore my work</p>
          </div>
        </div>
      </div>
    </section>
  )
}
