import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

/**
 * Procesa un mensaje entrante y genera una respuesta
 * @param text Texto del mensaje entrante
 * @returns Texto de respuesta
 */
export async function processMessage(text: string): Promise<string> {
  try {
    // Si tienes una API key de OpenAI configurada, puedes usar AI SDK para generar respuestas
    if (process.env.OPENAI_API_KEY) {
      const response = await generateText({
        model: openai("gpt-4o"),
        prompt: `El usuario te ha enviado este mensaje por WhatsApp: "${text}". 
                Responde de manera concisa y útil como un asistente de SmarterBot.`,
        maxTokens: 300,
      })

      return response.text
    }

    // Respuestas predefinidas si no hay API key de OpenAI
    if (text.toLowerCase().includes("hola")) {
      return "¡Hola! Soy el asistente de SmarterBot. ¿En qué puedo ayudarte hoy?"
    }

    if (text.toLowerCase().includes("precio") || text.toLowerCase().includes("costo")) {
      return "Ofrecemos varios planes según tus necesidades. Nuestro plan básico comienza en $19.99 al mes. ¿Te gustaría más información sobre nuestros planes?"
    }

    if (text.toLowerCase().includes("chatgpt") || text.toLowerCase().includes("gpt")) {
      return "SmarterBot integra WhatsApp con ChatGPT para ofrecerte respuestas inteligentes directamente en tu chat. ¿Te gustaría una demostración?"
    }

    // Respuesta por defecto
    return 'Gracias por tu mensaje. Un representante de SmarterBot se pondrá en contacto contigo pronto. Si tienes una consulta urgente, por favor escribe "ayuda".'
  } catch (error) {
    console.error("Error procesando mensaje:", error)
    return "Lo siento, estamos experimentando dificultades técnicas. Por favor, intenta nuevamente más tarde."
  }
}
