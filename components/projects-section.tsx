"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "web",
      github: "#",
      live: "#",
      image: "/place1.jpg?height=300&width=400&text=E-commerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "web",
      github: "#",
      live: "#",
      image: "/place2.jpg?height=300&width=400&text=Task+Manager",
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Cross-platform mobile app providing detailed weather forecasts with beautiful animations.",
      tech: ["React Native", "TypeScript", "Weather API", "Expo"],
      category: "mobile",
      github: "#",
      live: "#",
      image: "/place3.jpg?height=300&width=400&text=Weather+App",
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and monitoring capabilities.",
      tech: ["Node.js", "Fastify", "Redis", "Docker"],
      category: "api",
      github: "#",
      live: "#",
      image: "/place4.jpg?height=300&width=400&text=API+Gateway",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with real-time charts and customizable widgets.",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "web",
      github: "#",
      live: "#",
      image: "/place5.jpg?height=300&width=400&text=Dashboard",
    },
    {
      id: 6,
      title: "Open Source Library",
      description: "Popular React component library with 1000+ GitHub stars, used by developers worldwide.",
      tech: ["React", "TypeScript", "Storybook", "Jest"],
      category: "opensource",
      github: "#",
      live: "#",
      image: "/place6.jpg?height=300&width=400&text=Library",
    },
    {
      id: 7,
      title: "Calculator Mobile App",
      description: "Cross-platform calculator app built with Flutter, offering a smooth and intuitive user experience.",
      tech: ["Flutter", "Dart", "Swift", "Kotlin", "C"],
      category: "mobile",
      github: "https://github.com/nadikaprabhath/Flutter_Calculator.git",
      live: "#",
      image: "/calculator.png?height=300&width=400&text=calculator+App",
    },
  ]

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile" },
    { key: "api", label: "APIs" },
    { key: "opensource", label: "Open Source" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }

  const handleLiveClick = (liveUrl: string) => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer')
  }

  const handleMainGithubClick = () => {
    window.open('https://github.com/nadikaprabhath?tab=repositories', '_blank', 'noopener,noreferrer')
  }
 
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the developer community
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === category.key
                  ? "bg-[#58A6FF] text-white"
                  : "bg-[#21262D] text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#30363D]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-lg overflow-hidden group hover:border-[#58A6FF] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <Button 
                    size="sm" 
                    className="bg-[#58A6FF] hover:bg-[#4A90E2]" 
                    onClick={() => handleGithubClick(project.github)}>
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent" 
                        onClick={() => handleLiveClick(project.live)}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#F0F6FC]">{project.title}</h3>
                <p className="text-[#8B949E] text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-[#21262D] text-[#58A6FF] text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF] hover:text-white bg-transparent"
             onClick={handleMainGithubClick}
            >
            <Github className="mr-2" size={20}/>
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
