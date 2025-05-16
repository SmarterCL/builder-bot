import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-2 w-fit">builderbot.cloud</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Potencia tu negocio con IA conversacional
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Integra WhatsApp y ChatGPT en tu plataforma con nuestra API. Conecta con tus clientes de manera
              inteligente y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <span className="mr-2">Probar IA</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 5a3 3 0 0 0-3 3v1h6V8a3 3 0 0 0-3-3Z" />
                  <path d="M5 5a3 3 0 0 0-3 3v1h6V8a3 3 0 0 0-3-3Z" />
                  <path d="M17.8 15.817a7 7 0 1 0-11.6 0" />
                  <path d="m12 13-3 9 3-2 3 2-3-9Z" />
                </svg>
              </Button>
              <Button variant="outline">Contactar</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[600px]">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img
                  src="/ai-smartphone-interface.png"
                  alt="Smartphone con interfaz de IA"
                  className="object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
