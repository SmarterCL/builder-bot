import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-600">
              Aumenta tus ventas por WhatsApp
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Descubre cómo nuestra plataforma puede ayudarte a conectar con tus clientes y cerrar más ventas directamente desde WhatsApp.
            </p>
            <div className="w-full max-w-md space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
                <Input type="email" id="email" placeholder="tu@email.com" className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3">
                ¡Pruébalo una semana!
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/hero_whatsapp_promo.jpg" // Asumiendo que la imagen está en public/hero_whatsapp_promo.jpg
              alt="Promoción WhatsApp"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
