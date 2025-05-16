import type { ReactNode } from "react"

interface DeviceFrameProps {
  children: ReactNode
  type: "iphone" | "android"
}

export default function DeviceFrame({ children, type }: DeviceFrameProps) {
  return (
    <div className={`relative ${type === "iphone" ? "w-[280px] h-[580px]" : "w-[280px] h-[580px]"}`}>
      <div
        className={`
        absolute inset-0 
        ${
          type === "iphone"
            ? "rounded-[40px] border-[14px] border-black"
            : "rounded-[30px] border-[10px] border-gray-800"
        }
        overflow-hidden shadow-xl
      `}
      >
        {type === "iphone" && (
          <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-center">
            <div className="w-1/3 h-5 bg-black rounded-b-xl"></div>
          </div>
        )}
        <div className="h-full w-full overflow-hidden bg-white">{children}</div>
      </div>
    </div>
  )
}
