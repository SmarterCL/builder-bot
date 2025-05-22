import MessageSender from "@/components/message-sender"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Panel de Control SmarterBot</h1>

      <div className="flex flex-col items-center">
        <div className="mb-8 text-center max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">Webhook configurado</h2>
          <p className="text-gray-600 mb-4">Tu webhook está disponible en la siguiente URL:</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <code>{`${process.env.NEXT_PUBLIC_APP_URL || "https://tu-dominio.com"}/api/webhook`}</code>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Configura esta URL en el panel de BuilderBot para recibir mensajes de WhatsApp.
          </p>
        </div>

        <MessageSender />
      </div>
    </div>
  )
}
