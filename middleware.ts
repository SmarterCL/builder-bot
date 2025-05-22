import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Ejemplo de middleware para proteger rutas o validar solicitudes
  // Puedes personalizar esto según tus necesidades

  // Verificar si la solicitud es para el webhook
  if (request.nextUrl.pathname === "/api/webhook") {
    // Aquí podrías implementar validación adicional si es necesario
    return NextResponse.next()
  }

  // Para otras rutas de API, podrías verificar autenticación
  if (request.nextUrl.pathname.startsWith("/api/")) {
    // Ejemplo: verificar token de API
    const apiKey = request.headers.get("x-api-key")

    // Si necesitas autenticación para algunas rutas
    // if (!apiKey || apiKey !== process.env.INTERNAL_API_KEY) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    // }
  }

  return NextResponse.next()
}

export const config = {
  // Especifica las rutas que deben pasar por el middleware
  matcher: ["/api/:path*"],
}
