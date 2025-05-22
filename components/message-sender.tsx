"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function MessageSender() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber || !message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      })
      return
    }

    // Formatear número de teléfono (eliminar espacios, guiones, etc.)
    const formattedNumber = phoneNumber.replace(/\D/g, "")

    setIsLoading(true)

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formattedNumber,
          message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Mensaje enviado",
          description: "Tu mensaje ha sido enviado correctamente",
        })
        setResult(data.result)
      } else {
        toast({
          title: "Error",
          description: data.error || "Error al enviar el mensaje",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al enviar el mensaje",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Enviar Mensaje de WhatsApp</CardTitle>
        <CardDescription>Envía un mensaje de WhatsApp utilizando la API de BuilderBot</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Número de teléfono
            </label>
            <Input
              id="phoneNumber"
              placeholder="Ej: 56979540471 (sin + o espacios)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensaje
            </label>
            <Textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Mensaje"
            )}
          </Button>
        </form>

        {result && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md">
            <h4 className="font-medium text-sm">Respuesta:</h4>
            <pre className="text-xs overflow-auto mt-1">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
