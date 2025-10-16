"use client"

import { useEffect, useRef, useState } from 'react'

type CodeRainProps = {
  durationMs?: number
  onComplete?: () => void
}

export default function CodeRain({ durationMs = 2200, onComplete }: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789$#*+<>|/'
    const letters = katakana.split('')

    const fontSize = Math.max(14, Math.min(22, Math.floor(width / 80)))
    const columns = Math.floor(width / fontSize)
    const drops = new Array(columns).fill(0).map(() => Math.random() * (height / fontSize))

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.15)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        const hue = 270 + (i % 60)
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.85)`
        ctx.shadowColor = `hsla(${hue}, 90%, 60%, 0.8)`
        ctx.shadowBlur = 12
        ctx.fillText(text, x, y)
        ctx.shadowBlur = 0

        drops[i] = drops[i] + (reduce ? 0.8 : 1.6)
        if (y > height && Math.random() > 0.975) drops[i] = 0
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', onResize)
    draw()

    const t = setTimeout(() => {
      setVisible(false)
      if (onComplete) onComplete()
    }, durationMs)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(t)
      window.removeEventListener('resize', onResize)
    }
  }, [durationMs, onComplete])

  return (
    <div
      className={`fixed inset-0 z-30 pointer-events-none transition-opacity duration-600 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
