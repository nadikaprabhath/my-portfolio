import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  category: string
  github: string
  live: string | null
  image: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card glass-effect rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <Button size="sm" className="bg-[#58A6FF] hover:bg-[#4A90E2]">
              <Github size={16} className="mr-1" />
              Code
            </Button>
            {project.live && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
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
        <p className="text-[#8B949E] text-sm mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-[#21262D] text-[#58A6FF] text-xs rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
