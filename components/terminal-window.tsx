"use client"

import { useState, useEffect } from "react"

interface Command {
  command: string
  output: string
}

interface TerminalWindowProps {
  commands: Command[]
}

export default function TerminalWindow({ commands }: TerminalWindowProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [displayedCommands, setDisplayedCommands] = useState<Command[]>([])

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedCommands((prev) => [...prev, commands[currentCommandIndex]])
        setCurrentCommandIndex((prev) => prev + 1)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentCommandIndex, commands])

  return (
    <div className="code-block">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#21262D] border-b border-[#30363D]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#F85149]" />
            <div className="w-3 h-3 rounded-full bg-[#F2CC60]" />
            <div className="w-3 h-3 rounded-full bg-[#3FB950]" />
          </div>
          <span className="text-[#8B949E] text-sm ml-2">Terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-64 overflow-y-auto bg-[#0D1117] font-mono text-sm">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#3FB950]">$</span>
              <span className="text-[#F0F6FC]">{cmd.command}</span>
            </div>
            <div className="text-[#8B949E] ml-4">{cmd.output}</div>
          </div>
        ))}

        {currentCommandIndex < commands.length && (
          <div className="flex items-center gap-2">
            <span className="text-[#3FB950]">$</span>
            <span className="text-[#F0F6FC] typing-cursor"></span>
          </div>
        )}
      </div>
    </div>
  )
}
