"use client"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="code-block overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#21262D] border-b border-[#30363D]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#F85149]" />
            <div className="w-3 h-3 rounded-full bg-[#F2CC60]" />
            <div className="w-3 h-3 rounded-full bg-[#3FB950]" />
          </div>
          <span className="text-[#8B949E] text-sm ml-2">{language}</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code className="text-[#F0F6FC] font-mono whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  )
}
