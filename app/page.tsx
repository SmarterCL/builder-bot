import DemoSection from "@/components/demo-section"

export default function Home() {
  // Aquí puedes cambiar la URL del código QR y el número de teléfono
  const qrCodeUrl = "https://wa.me/56979540471"
  const phoneNumber = "+56979540471"

  return (
    <main className="flex min-h-screen flex-col items-center">
      <DemoSection qrCodeUrl={qrCodeUrl} phoneNumber={phoneNumber} />
    </main>
  )
}
