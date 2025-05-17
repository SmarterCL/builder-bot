"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles } from "lucide-react"

export default function ChatGPTInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, soy ChatGPT integrado con SmarterBOT. ¿En qué puedo ayudarte hoy?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { id: Date.now(), text: inputValue, isUser: true }])
    setInputValue("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Gracias por tu consulta. Estoy utilizando la API de builderbot.cloud para procesar tu solicitud. ¿Hay algo específico que quieras saber sobre nuestra integración?",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* ChatGPT header */}
      <div className="bg-gray-800 p-3 flex items-center justify-between">
        <div className="font-semibold flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-green-400" />
          SmarterBOT GPT
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[90%] p-3 rounded-lg ${message.isUser ? "bg-blue-600 ml-auto" : "bg-gray-700 mr-auto"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="bg-gray-800 p-3">
        <div className="flex items-center bg-gray-700 rounded-lg p-1">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Mensaje a ChatGPT..."
            className="flex-1 bg-transparent border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Powered by builderbot.cloud API</div>
      </div>
    </div>
  )
}
