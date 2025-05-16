import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Phone, CreditCard } from "lucide-react"
import QRCode from "@/components/qr-code"
import DeviceFrame from "@/components/device-frame"
import WhatsAppChat from "@/components/whatsapp-chat"
import ChatGPTInterface from "@/components/chatgpt-interface"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Interactúa con IA en tus plataformas favoritas
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conecta con tus clientes a través de WhatsApp o integra ChatGPT en tu plataforma con nuestra API.
            </p>
          </div>

          <Tabs defaultValue="whatsapp" className="mt-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="whatsapp" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-500" />
                  <span>WhatsApp</span>
                </TabsTrigger>
                <TabsTrigger value="chatgpt" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>ChatGPT</span>
                </TabsTrigger>
                <TabsTrigger value="pagar" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>PAGAR</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8">
              <TabsContent value="whatsapp" className="w-full flex justify-center">
                <DeviceFrame type="iphone">
                  <WhatsAppChat phoneNumber="+56979540471" />
                </DeviceFrame>
              </TabsContent>

              <TabsContent value="chatgpt" className="w-full flex justify-center">
                <DeviceFrame type="android">
                  <ChatGPTInterface />
                </DeviceFrame>
              </TabsContent>

              <TabsContent value="pagar" className="w-full flex justify-center">
                <Card className="p-6 w-full max-w-md">
                  <h3 className="text-2xl font-bold mb-4">SMARTERBOT Premium</h3>
                  <p className="mb-6">Obtén acceso a ambas plataformas con tu número de teléfono</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Suscribirse Ahora</Button>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Prueba SMARTERBOT Ahora</h2>
              <p className="text-gray-500 mb-8">
                Escanea el código QR con tu WhatsApp para comenzar a chatear con nuestra IA. Experimenta la potencia de
                WhatsApp y ChatGPT en una sola plataforma.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span>Chatea vía WhatsApp al +56979540471</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-700 rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span>Accede a la potencia de ChatGPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span>Todo desde tu dispositivo móvil</span>
                </div>
              </div>
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Comenzar Demo</Button>
            </div>
            <div className="flex justify-center">
              <QRCode value="https://wa.me/56979540471" size={250} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
