"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-[#8B949E] hover:text-[#58A6FF]">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  )
}
