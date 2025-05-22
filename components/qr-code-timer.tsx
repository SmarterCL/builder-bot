"use client"

import { useEffect, useRef, useState } from "react"

interface QRCodeTimerProps {
  initialMinutes: number
  initialSeconds: number
}

export default function QRCodeTimer({ initialMinutes, initialSeconds }: QRCodeTimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const size = 250

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [minutes, seconds])

  useEffect(() => {
    // This is a simplified QR code representation
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, size, size)

    // Draw a fake QR code pattern
    ctx.fillStyle = "black"

    // Draw position detection patterns (the three big squares in corners)
    // Top-left
    ctx.fillRect(10, 10, 30, 30)
    ctx.fillStyle = "white"
    ctx.fillRect(15, 15, 20, 20)
    ctx.fillStyle = "black"
    ctx.fillRect(20, 20, 10, 10)

    // Top-right
    ctx.fillStyle = "black"
    ctx.fillRect(size - 40, 10, 30, 30)
    ctx.fillStyle = "white"
    ctx.fillRect(size - 35, 15, 20, 20)
    ctx.fillStyle = "black"
    ctx.fillRect(size - 30, 20, 10, 10)

    // Bottom-left
    ctx.fillStyle = "black"
    ctx.fillRect(10, size - 40, 30, 30)
    ctx.fillStyle = "white"
    ctx.fillRect(15, size - 35, 20, 20)
    ctx.fillStyle = "black"
    ctx.fillRect(20, size - 30, 10, 10)

    // Draw some random dots to simulate QR code data
    for (let i = 0; i < 500; i++) {
      const x = Math.floor(Math.random() * (size - 20)) + 10
      const y = Math.floor(Math.random() * (size - 20)) + 10

      // Skip the position detection patterns
      if ((x < 50 && y < 50) || (x > size - 50 && y < 50) || (x < 50 && y > size - 50)) {
        continue
      }

      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, 5, 5)
      }
    }

    // Add SmarterBot logo in center
    ctx.fillStyle = "white"
    ctx.fillRect(size / 2 - 25, size / 2 - 25, 50, 50)
    ctx.fillStyle = "blue"
    ctx.font = "bold 20px Arial"
    ctx.textAlign = "center"
    ctx.fillText("SB", size / 2, size / 2 + 7)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="border-8 border-white shadow-xl rounded-lg mb-2">
        <canvas ref={canvasRef} width={size} height={size} className="rounded-lg" />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">QR dinámico</p>
        <p className="text-md font-medium">
          ⏱️ Tiempo restante del demo: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    </div>
  )
}
