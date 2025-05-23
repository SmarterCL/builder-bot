"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  value: string
  size?: number
}

export default function QRCode({ value, size = 200 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // In a real implementation, you would use a library like qrcode.js
    // This is a simplified representation for demonstration
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

    // Add URL text at bottom
    ctx.fillStyle = "black"
    ctx.font = "10px Arial"
    ctx.textAlign = "center"
    ctx.fillText(value.substring(0, 30), size / 2, size - 10)
  }, [value, size])

  return (
    <div className="border-8 border-white shadow-xl rounded-lg">
      <canvas ref={canvasRef} width={size} height={size} className="rounded-lg" />
    </div>
  )
}
