"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#30363D]/50 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#58A6FF] to-[#A855F7] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              {"<np/>"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === item.href.slice(1) ? "text-[#58A6FF]" : "text-[#8B949E] hover:text-[#58A6FF]"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#58A6FF] rounded-full animate-pulse" />
                  )}
                  <div className="absolute inset-0 bg-[#58A6FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 text-[#8B949E] hover:text-[#58A6FF] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#8B949E] hover:text-[#58A6FF] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1117]/98 backdrop-blur-xl border-b border-[#30363D]/50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-[#58A6FF] bg-[#58A6FF]/10"
                    : "text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#30363D]/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
