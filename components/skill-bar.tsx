"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  skill: string
  level: number
  color: string
}

export default function SkillBar({ skill, level, color }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level)
    }, 500)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-[#8B949E]">{level}%</span>
      </div>
      <div className="w-full bg-[#21262D] rounded-full h-2">
        <div
          className="skill-bar h-2 rounded-full"
          style={{
            width: `${animatedLevel}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  )
}
