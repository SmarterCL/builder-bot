import { NextResponse } from "next/server"
import { sendWhatsAppMessage } from "@/lib/builderbot-service"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, message } = body

    if (!to || !message) {
      return NextResponse.json({ success: false, error: 'Se requieren los campos "to" y "message"' }, { status: 400 })
    }

    // Enviar mensaje usando el servicio de BuilderBot
    const result = await sendWhatsAppMessage(to, message)

    return NextResponse.json({
      success: true,
      result,
    })
  } catch (error) {
    console.error("Error enviando mensaje:", error)
    return NextResponse.json({ success: false, error: "Error al enviar el mensaje" }, { status: 500 })
  }
}
