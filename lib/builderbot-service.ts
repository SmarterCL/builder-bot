import axios from "axios"

// API Key de BuilderBot
const API_KEY = process.env.BUILDERBOT_API_KEY || "bbc-93a8a7c8-f475-46e7-a58d-3da1f1a01858"
const API_URL = "https://api.builderbot.cloud"

/**
 * Envía un mensaje de WhatsApp utilizando la API de BuilderBot
 * @param to Número de teléfono del destinatario (formato: 56979540471)
 * @param text Texto del mensaje a enviar
 * @returns Respuesta de la API
 */
export async function sendWhatsAppMessage(to: string, text: string) {
  try {
    const response = await axios.post(
      `${API_URL}/whatsapp/send`,
      {
        to,
        text,
        type: "text",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    )

    console.log("Mensaje enviado:", response.data)
    return response.data
  } catch (error) {
    console.error("Error enviando mensaje:", error)
    throw error
  }
}

/**
 * Envía una imagen por WhatsApp
 * @param to Número de teléfono del destinatario
 * @param imageUrl URL de la imagen a enviar
 * @param caption Texto opcional que acompaña la imagen
 * @returns Respuesta de la API
 */
export async function sendWhatsAppImage(to: string, imageUrl: string, caption?: string) {
  try {
    const response = await axios.post(
      `${API_URL}/whatsapp/send`,
      {
        to,
        type: "image",
        image: {
          url: imageUrl,
        },
        caption,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    )

    console.log("Imagen enviada:", response.data)
    return response.data
  } catch (error) {
    console.error("Error enviando imagen:", error)
    throw error
  }
}

/**
 * Obtiene el estado de un mensaje enviado
 * @param messageId ID del mensaje
 * @returns Estado del mensaje
 */
export async function getMessageStatus(messageId: string) {
  try {
    const response = await axios.get(`${API_URL}/whatsapp/message/${messageId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    return response.data
  } catch (error) {
    console.error("Error obteniendo estado del mensaje:", error)
    throw error
  }
}
