"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  size: number
  speed: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const PARTICLE_COUNT = Math.min(220, Math.floor((width * height) / 18000))

    function init() {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.6 + 0.4, // depth
        size: Math.random() * 1.4 + 0.4,
        speed: Math.random() * 0.5 + 0.15,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // subtle vignette
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)/1.1)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.4)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      for (const p of particlesRef.current) {
        const parallaxX = (width / 2 - mouse.x) * 0.0006 * p.z
        const parallaxY = (height / 2 - mouse.y) * 0.0006 * p.z
        const px = p.x + parallaxX * width
        const py = p.y + parallaxY * height

        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 6)
        glow.addColorStop(0, 'rgba(139,92,246,0.9)')
        glow.addColorStop(0.4, 'rgba(6,182,212,0.7)')
        glow.addColorStop(1, 'rgba(0,0,0,0)')

        ctx.beginPath()
        ctx.fillStyle = glow
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fill()

        // motion
        p.y += p.speed * p.z
        if (p.y > height + 10) {
          p.y = -10
          p.x = Math.random() * width
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    const mouse = { x: width / 2, y: height / 2 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    init()
    draw()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-0 opacity-60"
      aria-hidden
    />
  )
}
