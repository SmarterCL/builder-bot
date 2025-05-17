"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import DeviceFrame from "@/components/device-frame"
import WhatsAppChat from "@/components/whatsapp-chat"
import QRCode from "@/components/qr-code"
import { motion } from "framer-motion"

interface DemoSectionProps {
  qrCodeUrl?: string
  phoneNumber?: string
}

export default function DemoSection({
  qrCodeUrl = "https://wa.me/56979540471",
  phoneNumber = "+56979540471",
}: DemoSectionProps) {
  const [messages1, setMessages1] = useState([
    { id: 1, text: "¡Hola! Soy el asistente de SmarterBOT. ¿En qué puedo ayudarte hoy?", isUser: false },
  ])

  const [messages2, setMessages2] = useState([
    { id: 1, text: "Hola, necesito información sobre sus servicios", isUser: true },
  ])

  // Simulate conversation
  useEffect(() => {
    const conversation = [
      { text: "Claro, ¿qué te gustaría saber específicamente?", isUser: false, delay: 2000 },
      { text: "¿Cómo funciona la integración con ChatGPT?", isUser: true, delay: 5000 },
      {
        text: "Nuestra integración permite conectar WhatsApp con ChatGPT para que puedas acceder a respuestas inteligentes directamente desde tu chat. ¿Te gustaría una demostración?",
        isUser: false,
        delay: 8000,
      },
      { text: "Sí, me encantaría ver cómo funciona", isUser: true, delay: 12000 },
    ]

    conversation.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.isUser) {
          setMessages2((prev) => [...prev, { id: Date.now(), text: msg.text, isUser: msg.isUser }])
        } else {
          setMessages1((prev) => [...prev, { id: Date.now(), text: msg.text, isUser: msg.isUser }])
        }
      }, msg.delay)
    })
  }, [])

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Demo en vivo</h2>
          <p className="mt-4 text-xl text-gray-600">
            Prueba SmarterOS en acción y descubre cómo puede transformar tu negocio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative">
            <DeviceFrame type="iphone">
              <WhatsAppChat phoneNumber={phoneNumber} customMessages={messages1} />
            </DeviceFrame>
          </div>

          {/* Rotating ChatGPT Logo in the middle */}
          <div className="relative mx-4 my-8 lg:my-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <svg width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.5047 5.19742 27.7511 5.49804 26.0429C5.55718 26.0832 5.66048 26.1425 5.73461 26.1839L13.699 30.7844C13.8975 30.8985 14.1233 30.9582 14.352 30.9571C14.5806 30.956 14.8057 30.8942 15.0026 30.7782L24.4946 25.1313V28.9979C24.4934 29.0177 24.4886 29.0374 24.4802 29.0556C24.4718 29.0738 24.46 29.0901 24.4453 29.1038L16.1346 34.2341C14.4248 35.3083 12.366 35.6068 10.4297 35.0805C8.49349 34.5542 6.84347 33.2442 5.89395 31.4731C6.02615 31.3458 6.20719 31.1718 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.3384 26.5856L15.1037 28.4804C15.0892 28.4903 15.0724 28.4968 15.0549 28.4998C15.0374 28.5027 15.0196 28.5021 15.0022 28.4979L6.69983 23.3642C4.99337 22.2875 3.79401 20.5533 3.31084 18.547C2.82767 16.5407 3.09433 14.424 4.05127 12.5908C4.13353 12.5908 4.21263 12.6194 4.29707 12.6479V13.6194ZM20.0941 19.9405L17.3446 18.3312L21.769 15.7095C21.7836 15.6996 21.8003 15.6931 21.8178 15.6901C21.8353 15.6872 21.8531 15.6878 21.8706 15.692L30.1743 20.8258C31.8807 21.9026 33.0795 23.6367 33.5626 25.6431C34.0456 27.6494 33.7789 29.7661 32.8219 31.5993C32.7699 31.5935 32.6753 31.5528 32.6159 31.5316L24.6516 26.9311C24.4531 26.817 24.2273 26.7573 23.9986 26.7584C23.7699 26.7595 23.5448 26.8213 23.348 26.9373L13.8559 32.5842V28.7176C13.8559 28.6979 13.8606 28.6783 13.8691 28.6602C13.8775 28.6421 13.8893 28.6259 13.9039 28.6122L22.2145 23.4819C23.0884 22.9642 23.7989 22.1975 24.2518 21.292C24.7046 20.3865 24.8853 19.3766 24.7729 18.3775C24.6605 17.3785 24.2598 16.4359 23.6201 15.6688C22.9803 14.9017 22.1318 14.3443 21.1857 14.0729C21.1857 14.0729 20.7922 19.1825 20.0941 19.9405ZM19.6799 22.7674V25.6719C19.6799 25.7273 19.6654 25.7824 19.6376 25.8305C19.6099 25.8787 19.5701 25.9183 19.5223 25.9451L12.8691 29.8059L9.46613 27.8186C9.44844 27.8099 9.43305 27.7969 9.42161 27.7809C9.41016 27.7648 9.40298 27.7461 9.40045 27.7267V18.4289C9.40082 18.2991 9.3407 18.1731 9.22574 18.0742C9.11077 17.9753 8.95508 17.9106 8.79224 17.8893C8.6294 17.868 8.46373 17.8913 8.31534 17.9561C8.16695 18.0208 8.04374 18.1239 7.96264 18.2527C7.64239 18.8586 7.50169 19.5441 7.55934 20.2276C7.617 20.9111 7.87057 21.5623 8.29177 22.0968L12.4773 25.0835L15.6201 27.1112C15.9237 27.3087 16.2682 27.4311 16.6266 27.4679C16.985 27.5047 17.3492 27.4551 17.6889 27.3228L24.5439 23.7469C24.5708 23.7331 24.6001 23.7253 24.6301 23.7239C24.6601 23.7225 24.6901 23.7275 24.7182 23.7387C24.7462 23.7499 24.7716 23.7671 24.7927 23.7891C24.8138 23.8111 24.8299 23.8374 24.8399 23.866C24.9338 24.0775 24.9855 24.3051 24.9929 24.5361C25.0004 24.7671 24.9635 24.9974 24.8842 25.2143C24.8049 25.4311 24.6845 25.6306 24.5295 25.8023C24.3746 25.9741 24.1878 26.1153 23.9795 26.2175L19.6799 28.6996V22.7674Z"
                  fill="url(#paint0_linear_87_8204)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_87_8204"
                    x1="20.5"
                    y1="0.5"
                    x2="20.5"
                    y2="40.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#74aa9c" />
                    <stop offset="1" stopColor="#10a37f" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full opacity-70"></div>
          </div>

          <div className="relative">
            <DeviceFrame type="android">
              <WhatsAppChat phoneNumber={phoneNumber} customMessages={messages2} isUser={true} />
            </DeviceFrame>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Escanea el código QR</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Escanea el código QR o haz clic en el botón para iniciar una conversación con nuestro bot de demostración.
            </p>
          </div>

          <div className="mb-8">
            <QRCode value={qrCodeUrl} size={200} />
          </div>

          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg">
            Iniciar Demo por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
