"use client"
import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    // Create animated gradient mesh
    const createGradientMesh = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.3,
        0,
        canvas.width * 0.7,
        canvas.height * 0.7,
        canvas.width,
      )
      gradient.addColorStop(0, "rgba(88, 166, 255, 0.1)")
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.05)")
      gradient.addColorStop(1, "rgba(13, 17, 23, 0)")
      return gradient
    }

    // Animated nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
    }> = []

    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 200, // Blue to purple range
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      ctx.fillStyle = createGradientMesh()
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, index) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${node.hue}, 70%, 60%, ${node.opacity})`
        ctx.fill()

        // Draw connections
        nodes.slice(index + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `hsla(${(node.hue + otherNode.hue) / 2}, 70%, 60%, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />
}
