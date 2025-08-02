"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Database, Smartphone, Cloud, Zap, Globe } from "lucide-react"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "Next.js", level: 90, color: "#000000" },
        { name: "TypeScript", level: 88, color: "#3178C6" },
        { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
        { name: "Vue.js", level: 93, color: "#4FC08D" },
        { name: "Nuxt.js", level: 90, color: "#077752ff" },
        { name: "Angular", level: 80, color: "#DD0031" },
        { name: "Handlebars.js", level: 75, color: "#fffb00ff" },
      ],
    },
    backend: {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "PostgreSQL", level: 88, color: "#336791" },
        { name: "MongoDB", level: 82, color: "#47A248" },
        { name: "GraphQL", level: 78, color: "#E10098" },
        { name: "Redis", level: 75, color: "#d15047ff" },
        { name: "Ruby", level: 85, color: "#f11c0cff" },
        { name: "Java", level: 95, color: "#cf2550ff" },
      ],
    },
    mobile: {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native", level: 85, color: "#61DAFB" },
        { name: "Flutter", level: 80, color: "#02569B" },
        { name: "iOS", level: 75, color: "#007AFF" },
        { name: "Android", level: 78, color: "#3DDC84" },
        { name: "Expo", level: 88, color: "#000020" },
        { name: "Firebase", level: 82, color: "#FFCA28" },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 85, color: "#FF9900" },
        { name: "Docker", level: 88, color: "#2496ED" },
        { name: "Kubernetes", level: 75, color: "#326CE5" },
        { name: "Vercel", level: 92, color: "#000000" },
        { name: "GitHub Actions", level: 80, color: "#2088FF" },
        { name: "Terraform", level: 70, color: "#623CE4" },
      ],
    },
  }

  return (
    <section ref={sectionRef} id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#161B22] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#58A6FF] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262D]/80 backdrop-blur-sm rounded-full border border-[#58A6FF]/30 mb-6">
            <Zap className="w-4 h-4 text-[#58A6FF]" />
            <span className="text-sm text-[#8B949E]">Technical Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#A855F7] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <p className="text-xl text-[#8B949E] max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital
            experiences
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-[#58A6FF] to-[#A855F7] text-white shadow-2xl shadow-[#58A6FF]/25"
                  : "bg-[#21262D]/80 backdrop-blur-sm text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#30363D]/80 border border-[#30363D]"
              }`}
            >
              <div
                className={`${activeCategory === key ? "text-white" : "text-[#58A6FF]"} transition-colors duration-300`}
              >
                {category.icon}
              </div>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div className="space-y-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transform transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-[#F0F6FC]">{skill.name}</span>
                  <span className="text-sm text-[#8B949E] font-mono">{skill.level}%</span>
                </div>

                <div className="relative h-3 bg-[#21262D] rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}40`,
                    }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full opacity-50 animate-pulse"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Circular progress rings */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                  const radius = 35 - index * 4
                  const circumference = 2 * Math.PI * radius
                  const strokeDasharray = circumference
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference

                  return (
                    <circle
                      key={skill.name}
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                      className="transition-all duration-1000 ease-out opacity-80"
                      style={{
                        filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  )
                })}
              </svg>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#58A6FF] to-[#A855F7] rounded-full flex items-center justify-center text-white shadow-2xl">
                  {skillCategories[activeCategory as keyof typeof skillCategories].icon}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: "Years Experience", value: "5+", icon: <Globe className="w-6 h-6" /> },
            { label: "Projects Completed", value: "100+", icon: <Code className="w-6 h-6" /> },
            { label: "Technologies", value: "25+", icon: <Zap className="w-6 h-6" /> },
            { label: "Happy Clients", value: "50+", icon: <Database className="w-6 h-6" /> },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-[#21262D]/50 backdrop-blur-sm rounded-2xl border border-[#30363D] hover:border-[#58A6FF]/50 transition-all duration-300 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <div className="text-[#58A6FF] mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#F0F6FC] mb-2">{stat.value}</div>
              <div className="text-sm text-[#8B949E]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
