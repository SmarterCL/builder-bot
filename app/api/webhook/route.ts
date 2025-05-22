import { NextResponse } from "next/server"
import { processMessage } from "@/lib/message-processor"
import { sendWhatsAppMessage } from "@/lib/builderbot-service"

export async function POST(request: Request) {
  try {
    // Obtener el cuerpo de la solicitud
    const body = await request.json()

    console.log("Webhook recibido:", JSON.stringify(body, null, 2))

    // Verificar si es un mensaje de WhatsApp
    if (body.type === "message" && body.message) {
      const { from, text, messageId } = body.message

      // Procesar el mensaje y obtener una respuesta
      const responseText = await processMessage(text)

      // Enviar la respuesta a través de WhatsApp
      await sendWhatsAppMessage(from, responseText)

      return NextResponse.json({
        success: true,
        message: "Mensaje procesado correctamente",
      })
    }

    // Si es otro tipo de evento (como confirmación de entrega)
    return NextResponse.json({
      success: true,
      message: "Evento recibido",
    })
  } catch (error) {
    console.error("Error en webhook:", error)
    return NextResponse.json({ success: false, error: "Error procesando el webhook" }, { status: 500 })
  }
}

// Opcional: Método GET para verificación del webhook
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const verifyToken = searchParams.get("hub.verify_token")
  const challenge = searchParams.get("hub.challenge")

  // Token de verificación (deberías configurar esto en tu panel de BuilderBot)
  const VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN || "smarterbot_verify_token"

  if (verifyToken === VERIFY_TOKEN) {
    return new Response(challenge)
  }

  return new Response("Verificación fallida", { status: 403 })
}
