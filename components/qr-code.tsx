"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  value: string
  size?: number
}

export default function QRCode({ value, size = 200 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // This is a simplified QR code representation
    // In a real implementation, you would use a library like qrcode.js
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

    // Add text label
    ctx.fillStyle = "black"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Escanea para WhatsApp", size / 2, size - 5)
  }, [value, size])

  return (
    <div className="border-8 border-white shadow-xl rounded-lg">
      <canvas ref={canvasRef} width={size} height={size} className="rounded-lg" />
    </div>
  )
}
