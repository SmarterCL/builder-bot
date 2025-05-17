"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mic, Paperclip, Camera } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
}

interface WhatsAppChatProps {
  phoneNumber: string
  customMessages?: Message[]
  isUser?: boolean
}

export default function WhatsAppChat({ phoneNumber, customMessages, isUser = false }: WhatsAppChatProps) {
  const [messages, setMessages] = useState<Message[]>(
    customMessages || [
      { id: 1, text: "¡Hola! Soy el asistente de SmarterBOT. ¿En qué puedo ayudarte hoy?", isUser: false },
    ],
  )
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (customMessages) {
      setMessages(customMessages)
    }
  }, [customMessages])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { id: Date.now(), text: inputValue, isUser: true }])
    setInputValue("")

    // Simulate bot response after a short delay
    if (!isUser) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "Gracias por tu mensaje. Estoy procesando tu solicitud con nuestra API builderbot.cloud. ¿Necesitas más información sobre nuestros servicios?",
            isUser: false,
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* WhatsApp header */}
      <div className="bg-green-600 text-white p-3 flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <div className="font-semibold">{isUser ? "Tú" : "SmarterBOT"}</div>
          <div className="text-xs">{isUser ? "Usuario" : "+" + phoneNumber}</div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-3 overflow-y-auto bg-[url('/whatsapp-chat-pattern.png')] bg-repeat">
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] p-2 rounded-lg ${
                message.isUser ? "bg-green-100 ml-auto rounded-tr-none" : "bg-white mr-auto rounded-tl-none"
              }`}
            >
              {message.text}
              <div className={`text-xs text-gray-500 text-right mt-1 ${message.isUser ? "" : "text-left"}`}>
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="bg-gray-200 p-2 flex items-center">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Camera className="h-5 w-5" />
        </Button>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje"
          className="flex-1 mx-2 bg-white rounded-full"
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button variant="ghost" size="icon" className="text-gray-600" onClick={handleSendMessage}>
          {inputValue ? <Send className="h-5 w-5 text-green-600" /> : <Mic className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  )
}
